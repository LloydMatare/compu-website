import { ConvexError } from 'convex/values'
import type { MutationCtx, QueryCtx } from '../_generated/server'
import { env } from '../_generated/server'

export type Role = 'admin' | 'editor'

export interface Actor {
  clerkUserId: string
  email: string
  name?: string
  avatarUrl?: string
  role: Role
}

const UNAUTHENTICATED = {
  code: 'UNAUTHENTICATED',
  message: 'Sign in required.',
}
const FORBIDDEN = {
  code: 'FORBIDDEN',
  message: 'Administrator access required.',
}

function adminEmails(): string[] {
  const raw = env.ADMIN_EMAILS ?? ''
  return raw
    .split(',')
    .map((value) => value.trim().toLowerCase())
    .filter(Boolean)
}

/**
 * Resolves the signed-in Clerk user to an application actor, without writing.
 *
 * The Clerk identity is always read from the verified token — never from a
 * client-supplied argument — so a caller cannot impersonate another user.
 * Returns null when the caller is anonymous or has not been provisioned yet.
 */
export async function resolveActor(
  ctx: QueryCtx | MutationCtx
): Promise<Actor | null> {
  const identity = await ctx.auth.getUserIdentity()
  if (!identity) return null

  const existing = await ctx.db
    .query('users')
    .withIndex('by_clerkUserId', (q) =>
      q.eq('clerkUserId', identity.tokenIdentifier)
    )
    .unique()

  if (!existing) return null

  return {
    clerkUserId: existing.clerkUserId,
    email: existing.email,
    name: existing.name ?? undefined,
    avatarUrl: existing.avatarUrl ?? undefined,
    role: existing.role,
  }
}

/**
 * Resolves the signed-in Clerk user, provisioning a `users` row on first sight.
 *
 * An email on the ADMIN_EMAILS allowlist becomes an `admin`, everyone else
 * becomes an `editor`. While the allowlist is unset and no user exists yet, the
 * first person to sign in becomes the administrator so the dashboard is usable.
 */
export async function ensureActor(ctx: MutationCtx): Promise<Actor> {
  const identity = await ctx.auth.getUserIdentity()
  if (!identity) throw new ConvexError(UNAUTHENTICATED)

  const clerkUserId = identity.tokenIdentifier
  const email = (identity.email ?? '').toLowerCase()
  const name = identity.name ?? undefined
  const avatarUrl = identity.pictureUrl ?? undefined

  const existing = await ctx.db
    .query('users')
    .withIndex('by_clerkUserId', (q) => q.eq('clerkUserId', clerkUserId))
    .unique()

  if (existing) {
    // Keep the mirrored profile in sync with Clerk.
    if (
      existing.email !== email ||
      existing.name !== name ||
      existing.avatarUrl !== avatarUrl
    ) {
      await ctx.db.patch(existing._id, { email, name, avatarUrl })
      return { clerkUserId, email, name, avatarUrl, role: existing.role }
    }
    return {
      clerkUserId: existing.clerkUserId,
      email: existing.email,
      name: existing.name ?? undefined,
      avatarUrl: existing.avatarUrl ?? undefined,
      role: existing.role,
    }
  }

  const allowlist = adminEmails()
  const anyUser = await ctx.db.query('users').take(1)
  const isBootstrap = allowlist.length === 0 && anyUser.length === 0
  const role: Role = allowlist.includes(email) || isBootstrap ? 'admin' : 'editor'

  await ctx.db.insert('users', {
    clerkUserId,
    email,
    name,
    avatarUrl,
    role,
  })

  return { clerkUserId, email, name, avatarUrl, role }
}

/** Requires any signed-in dashboard user (mutations). */
export async function requireActor(ctx: MutationCtx): Promise<Actor> {
  return await ensureActor(ctx)
}

/** Requires any signed-in dashboard user (queries, read-only). */
export async function requireQueryActor(ctx: QueryCtx): Promise<Actor> {
  const actor = await resolveActor(ctx)
  if (!actor) throw new ConvexError(UNAUTHENTICATED)
  return actor
}

/** Requires an `admin` role (mutations). Editors are rejected. */
export async function requireAdmin(ctx: MutationCtx): Promise<Actor> {
  const actor = await ensureActor(ctx)
  if (actor.role !== 'admin') throw new ConvexError(FORBIDDEN)
  return actor
}

/** Requires an `admin` role (queries, read-only). */
export async function requireQueryAdmin(ctx: QueryCtx): Promise<Actor> {
  const actor = await requireQueryActor(ctx)
  if (actor.role !== 'admin') throw new ConvexError(FORBIDDEN)
  return actor
}

/** Records a dashboard mutation for the activity feed. */
export async function logActivity(
  ctx: MutationCtx,
  actor: Actor | null,
  action: string,
  entity: string,
  entityId?: string
) {
  await ctx.db.insert('activityLog', {
    actor: actor?.email,
    action,
    entity,
    entityId,
    at: Date.now(),
  })
}
