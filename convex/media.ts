import { v } from 'convex/values'
import { action, mutation, query } from './_generated/server'
import { logActivity, requireActor } from './lib/auth'

const MAX_LIMIT = 200

export const list = query({
  args: {
    limit: v.optional(v.number()),
    folder: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    const limit = Math.min(args.limit ?? MAX_LIMIT, MAX_LIMIT)
    const media = await ctx.db
      .query('media')
      .withIndex('by_folder', (q) => (args.folder ? q.eq('folder', args.folder) : q))
      .order('desc')
      .take(limit)

    return await Promise.all(
      media.map(async (item) => ({
        ...item,
        url: await ctx.storage.getUrl(item.storageId),
      }))
    )
  },
})

/**
 * Issues a one-time upload URL for the Convex file store. The client POSTs the
 * file bytes directly to Convex, then calls `register` with the storage id.
 */
export const generateUploadUrl = action({
  args: {},
  handler: async (ctx) => {
    const identity = await ctx.auth.getUserIdentity()
    if (!identity) throw new Error('Sign in required')

    return await ctx.storage.generateUploadUrl()
  },
})

export const register = mutation({
  args: {
    storageId: v.string(),
    filename: v.string(),
    contentType: v.string(),
    size: v.number(),
    width: v.optional(v.number()),
    height: v.optional(v.number()),
    alt: v.optional(v.string()),
    folder: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    const actor = await requireActor(ctx)
    const id = await ctx.db.insert('media', {
      storageId: args.storageId,
      filename: args.filename,
      contentType: args.contentType,
      size: args.size,
      width: args.width,
      height: args.height,
      alt: args.alt,
      folder: args.folder,
    })
    await logActivity(ctx, actor, 'uploaded', 'media', id)
    return id
  },
})

export const update = mutation({
  args: {
    id: v.id('media'),
    alt: v.optional(v.string()),
    folder: v.optional(v.string()),
    filename: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    const actor = await requireActor(ctx)
    const { id, ...fields } = args
    const patch: Record<string, unknown> = {}
    for (const [key, value] of Object.entries(fields)) {
      if (value !== undefined) patch[key] = value
    }
    await ctx.db.patch(id, patch)
    await logActivity(ctx, actor, 'updated', 'media', id)
    return id
  },
})

export const remove = mutation({
  args: { id: v.id('media') },
  handler: async (ctx, args) => {
    const actor = await requireActor(ctx)
    const item = await ctx.db.get(args.id)
    if (item) {
      await ctx.db.delete(args.id)
      await ctx.storage.delete(item.storageId)
    }
    await logActivity(ctx, actor, 'deleted', 'media', args.id)
    return args.id
  },
})
