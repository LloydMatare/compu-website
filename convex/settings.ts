import { v } from 'convex/values'
import { mutation, query } from './_generated/server'
import { logActivity, requireActor } from './lib/auth'

const MAX_LIMIT = 100

// -------------------------------------------------------------- settings

export const getSetting = query({
  args: { key: v.string() },
  handler: async (ctx, args) => {
    const doc = await ctx.db
      .query('siteSettings')
      .withIndex('by_key', (q) => q.eq('key', args.key))
      .unique()
    return doc?.value ?? null
  },
})

export const listSettings = query({
  args: { limit: v.optional(v.number()) },
  handler: async (ctx, args) => {
    const limit = Math.min(args.limit ?? MAX_LIMIT, MAX_LIMIT)
    return await ctx.db.query('siteSettings').take(limit)
  },
})

export const setSetting = mutation({
  args: { key: v.string(), value: v.any() },
  handler: async (ctx, args) => {
    const actor = await requireActor(ctx)
    const existing = await ctx.db
      .query('siteSettings')
      .withIndex('by_key', (q) => q.eq('key', args.key))
      .unique()

    if (existing) {
      await ctx.db.patch(existing._id, { value: args.value })
      await logActivity(ctx, actor, 'updated', 'siteSettings', existing._id)
      return existing._id
    }

    const id = await ctx.db.insert('siteSettings', { key: args.key, value: args.value })
    await logActivity(ctx, actor, 'created', 'siteSettings', id)
    return id
  },
})

export const removeSetting = mutation({
  args: { id: v.id('siteSettings') },
  handler: async (ctx, args) => {
    const actor = await requireActor(ctx)
    await ctx.db.delete(args.id)
    await logActivity(ctx, actor, 'deleted', 'siteSettings', args.id)
    return args.id
  },
})

// ------------------------------------------------------------- nav links

export const listNavLinks = query({
  args: { limit: v.optional(v.number()) },
  handler: async (ctx, args) => {
    const limit = Math.min(args.limit ?? MAX_LIMIT, MAX_LIMIT)
    return await ctx.db
      .query('navLinks')
      .withIndex('by_order', (q) => q)
      .order('asc')
      .take(limit)
  },
})

const navLinkFields = {
  name: v.optional(v.string()),
  href: v.optional(v.string()),
  order: v.optional(v.number()),
  parentId: v.optional(v.id('navLinks')),
}

export const createNavLink = mutation({
  args: navLinkFields,
  handler: async (ctx, args) => {
    const actor = await requireActor(ctx)
    const id = await ctx.db.insert('navLinks', {
      name: args.name ?? 'Link',
      href: args.href ?? '/',
      order: args.order ?? 0,
      parentId: args.parentId,
    })
    await logActivity(ctx, actor, 'created', 'navLink', id)
    return id
  },
})

export const updateNavLink = mutation({
  args: { id: v.id('navLinks'), ...navLinkFields },
  handler: async (ctx, args) => {
    const actor = await requireActor(ctx)
    const { id, ...fields } = args
    const patch: Record<string, unknown> = {}
    for (const [key, value] of Object.entries(fields)) {
      if (value !== undefined) patch[key] = value
    }
    await ctx.db.patch(id, patch)
    await logActivity(ctx, actor, 'updated', 'navLink', id)
    return id
  },
})

export const removeNavLink = mutation({
  args: { id: v.id('navLinks') },
  handler: async (ctx, args) => {
    const actor = await requireActor(ctx)
    await ctx.db.delete(args.id)
    await logActivity(ctx, actor, 'deleted', 'navLink', args.id)
    return args.id
  },
})
