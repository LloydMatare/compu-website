import { v } from 'convex/values'
import { mutation, query } from './_generated/server'
import { logActivity, requireActor, requireAdmin } from './lib/auth'

const MAX_LIMIT = 200

export const listByPost = query({
  args: { postId: v.id('posts'), limit: v.optional(v.number()) },
  handler: async (ctx, args) => {
    const limit = Math.min(args.limit ?? MAX_LIMIT, MAX_LIMIT)
    return await ctx.db
      .query('comments')
      .withIndex('by_postId', (q) => q.eq('postId', args.postId))
      .take(limit)
  },
})

export const listAll = query({
  args: { limit: v.optional(v.number()), approvedOnly: v.optional(v.boolean()) },
  handler: async (ctx, args) => {
    const limit = Math.min(args.limit ?? MAX_LIMIT, MAX_LIMIT)
    const comments = await ctx.db
      .query('comments')
      .withIndex('by_approved', (q) =>
        args.approvedOnly === false ? q : q.eq('approved', true)
      )
      .order('desc')
      .take(limit)

    if (args.approvedOnly === false) {
      const pending = await ctx.db
        .query('comments')
        .withIndex('by_approved', (q) => q.eq('approved', false))
        .order('desc')
        .take(limit)
      return [...comments, ...pending]
    }

    return comments
  },
})

/** Public — anyone can leave a comment. */
export const submit = mutation({
  args: {
    postId: v.id('posts'),
    author: v.string(),
    text: v.string(),
    email: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    const post = await ctx.db.get(args.postId)
    if (!post) throw new Error('Post not found')

    const id = await ctx.db.insert('comments', {
      postId: args.postId,
      author: args.author,
      email: args.email,
      text: args.text,
      approved: false,
    })
    return id
  },
})

export const setApproved = mutation({
  args: { id: v.id('comments'), approved: v.boolean() },
  handler: async (ctx, args) => {
    const actor = await requireAdmin(ctx)
    await ctx.db.patch(args.id, { approved: args.approved })
    await logActivity(ctx, actor, args.approved ? 'approved' : 'unapproved', 'comment', args.id)
    return args.id
  },
})

export const remove = mutation({
  args: { id: v.id('comments') },
  handler: async (ctx, args) => {
    const actor = await requireActor(ctx)
    await ctx.db.delete(args.id)
    await logActivity(ctx, actor, 'deleted', 'comment', args.id)
    return args.id
  },
})
