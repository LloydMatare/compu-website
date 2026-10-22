import { v } from 'convex/values'
import { mutation, query } from './_generated/server'
import { logActivity, requireActor } from './lib/auth'

const MAX_LIMIT = 100

// ---------------------------------------------------------------- items

export const listItems = query({
  args: { limit: v.optional(v.number()) },
  handler: async (ctx, args) => {
    const limit = Math.min(args.limit ?? MAX_LIMIT, MAX_LIMIT)
    return await ctx.db
      .query('galleryItems')
      .withIndex('by_published', (q) => q.eq('published', true))
      .order('asc')
      .take(limit)
  },
})

export const listAllItems = query({
  args: { limit: v.optional(v.number()) },
  handler: async (ctx, args) => {
    const limit = Math.min(args.limit ?? MAX_LIMIT, MAX_LIMIT)
    return await ctx.db.query('galleryItems').order('asc').take(limit)
  },
})

const itemFields = {
  projectName: v.optional(v.string()),
  description: v.optional(v.string()),
  company: v.optional(v.string()),
  title: v.optional(v.string()),
  images: v.optional(v.array(v.string())),
  category: v.optional(v.string()),
  order: v.optional(v.number()),
  published: v.optional(v.boolean()),
}

export const createItem = mutation({
  args: itemFields,
  handler: async (ctx, args) => {
    const actor = await requireActor(ctx)
    const id = await ctx.db.insert('galleryItems', {
      projectName: args.projectName ?? 'Untitled project',
      description: args.description ?? '',
      company: args.company ?? '',
      title: args.title,
      images: args.images ?? [],
      category: args.category,
      order: args.order ?? 0,
      published: args.published ?? true,
    })
    await logActivity(ctx, actor, 'created', 'galleryItem', id)
    return id
  },
})

export const updateItem = mutation({
  args: { id: v.id('galleryItems'), ...itemFields },
  handler: async (ctx, args) => {
    const actor = await requireActor(ctx)
    const { id, ...fields } = args
    const patch: Record<string, unknown> = {}
    for (const [key, value] of Object.entries(fields)) {
      if (value !== undefined) patch[key] = value
    }
    await ctx.db.patch(id, patch)
    await logActivity(ctx, actor, 'updated', 'galleryItem', id)
    return id
  },
})

export const removeItem = mutation({
  args: { id: v.id('galleryItems') },
  handler: async (ctx, args) => {
    const actor = await requireActor(ctx)
    await ctx.db.delete(args.id)
    await logActivity(ctx, actor, 'deleted', 'galleryItem', args.id)
    return args.id
  },
})

// --------------------------------------------------------------- videos

export const listVideos = query({
  args: { limit: v.optional(v.number()) },
  handler: async (ctx, args) => {
    const limit = Math.min(args.limit ?? MAX_LIMIT, MAX_LIMIT)
    return await ctx.db
      .query('galleryVideos')
      .withIndex('by_published', (q) => q.eq('published', true))
      .order('asc')
      .take(limit)
  },
})

export const listAllVideos = query({
  args: { limit: v.optional(v.number()) },
  handler: async (ctx, args) => {
    const limit = Math.min(args.limit ?? MAX_LIMIT, MAX_LIMIT)
    return await ctx.db.query('galleryVideos').order('asc').take(limit)
  },
})

const videoFields = {
  title: v.optional(v.string()),
  description: v.optional(v.string()),
  videoUrl: v.optional(v.string()),
  poster: v.optional(v.union(v.string(), v.null())),
  category: v.optional(v.string()),
  order: v.optional(v.number()),
  published: v.optional(v.boolean()),
}

export const createVideo = mutation({
  args: videoFields,
  handler: async (ctx, args) => {
    const actor = await requireActor(ctx)
    const id = await ctx.db.insert('galleryVideos', {
      title: args.title ?? 'Untitled video',
      description: args.description ?? '',
      videoUrl: args.videoUrl ?? '',
      poster: args.poster ?? null,
      category: args.category,
      order: args.order ?? 0,
      published: args.published ?? true,
    })
    await logActivity(ctx, actor, 'created', 'galleryVideo', id)
    return id
  },
})

export const updateVideo = mutation({
  args: { id: v.id('galleryVideos'), ...videoFields },
  handler: async (ctx, args) => {
    const actor = await requireActor(ctx)
    const { id, ...fields } = args
    const patch: Record<string, unknown> = {}
    for (const [key, value] of Object.entries(fields)) {
      if (value !== undefined) patch[key] = value
    }
    await ctx.db.patch(id, patch)
    await logActivity(ctx, actor, 'updated', 'galleryVideo', id)
    return id
  },
})

export const removeVideo = mutation({
  args: { id: v.id('galleryVideos') },
  handler: async (ctx, args) => {
    const actor = await requireActor(ctx)
    await ctx.db.delete(args.id)
    await logActivity(ctx, actor, 'deleted', 'galleryVideo', args.id)
    return args.id
  },
})
