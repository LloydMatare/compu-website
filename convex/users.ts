import { v } from 'convex/values'
import { mutation, query } from './_generated/server'
import { ensureActor, requireAdmin, requireQueryAdmin, resolveActor } from './lib/auth'

/** Read-only: the current actor, or null when not provisioned yet. */
export const me = query({
  handler: async (ctx) => await resolveActor(ctx),
})

/** Provisions the signed-in user on first dashboard visit. */
export const ensure = mutation({
  handler: async (ctx) => await ensureActor(ctx),
})

export const list = query({
  args: { limit: v.optional(v.number()) },
  handler: async (ctx, args) => {
    await requireQueryAdmin(ctx)
    const limit = Math.min(args.limit ?? 100, 100)
    return await ctx.db.query('users').take(limit)
  },
})

export const setRole = mutation({
  args: {
    id: v.id('users'),
    role: v.union(v.literal('admin'), v.literal('editor')),
  },
  handler: async (ctx, args) => {
    const actor = await requireAdmin(ctx)
    const target = await ctx.db.get(args.id)
    if (!target) throw new Error('User not found.')
    if (target.clerkUserId === actor.clerkUserId) {
      throw new Error('You cannot change your own role.')
    }
    await ctx.db.patch(args.id, { role: args.role })
    return args.id
  },
})
