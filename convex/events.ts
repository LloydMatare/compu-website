import { v } from 'convex/values'
import { mutation, query } from './_generated/server'
import { logActivity, requireActor } from './lib/auth'

const MAX_LIMIT = 100

export const list = query({
  args: {
    limit: v.optional(v.number()),
    publishedOnly: v.optional(v.boolean()),
  },
  handler: async (ctx, args) => {
    const limit = Math.min(args.limit ?? MAX_LIMIT, MAX_LIMIT)
    return await ctx.db
      .query('events')
      .withIndex('by_published', (q) =>
        args.publishedOnly === false ? q : q.eq('published', true)
      )
      .order('desc')
      .take(limit)
  },
})

export const listAll = query({
  args: { limit: v.optional(v.number()) },
  handler: async (ctx, args) => {
    const limit = Math.min(args.limit ?? MAX_LIMIT, MAX_LIMIT)
    return await ctx.db.query('events').order('desc').take(limit)
  },
})

export const get = query({
  args: { id: v.id('events') },
  handler: async (ctx, args) => await ctx.db.get(args.id),
})

const eventFields = {
  title: v.optional(v.string()),
  description: v.optional(v.string()),
  venue: v.optional(v.string()),
  date: v.optional(v.string()),
  time: v.optional(v.string()),
  category: v.optional(v.string()),
  imageUrl: v.optional(v.union(v.string(), v.null())),
  link: v.optional(v.union(v.string(), v.null())),
  published: v.optional(v.boolean()),
}

export const create = mutation({
  args: eventFields,
  handler: async (ctx, args) => {
    const actor = await requireActor(ctx)
    const id = await ctx.db.insert('events', {
      title: args.title ?? 'Untitled event',
      description: args.description ?? '',
      venue: args.venue ?? '',
      date: args.date ?? new Date().toISOString(),
      time: args.time,
      category: args.category,
      imageUrl: args.imageUrl ?? null,
      link: args.link ?? null,
      published: args.published ?? true,
    })
    await logActivity(ctx, actor, 'created', 'event', id)
    return id
  },
})

export const update = mutation({
  args: { id: v.id('events'), ...eventFields },
  handler: async (ctx, args) => {
    const actor = await requireActor(ctx)
    const { id, ...fields } = args
    const patch: Record<string, unknown> = {}
    for (const [key, value] of Object.entries(fields)) {
      if (value !== undefined) patch[key] = value
    }
    await ctx.db.patch(id, patch)
    await logActivity(ctx, actor, 'updated', 'event', id)
    return id
  },
})

export const remove = mutation({
  args: { id: v.id('events') },
  handler: async (ctx, args) => {
    const actor = await requireActor(ctx)
    await ctx.db.delete(args.id)
    await logActivity(ctx, actor, 'deleted', 'event', args.id)
    return args.id
  },
})
