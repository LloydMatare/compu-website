import { v } from 'convex/values'
import { mutation, query } from './_generated/server'
import { logActivity, requireActor } from './lib/auth'

const MAX_LIMIT = 100

export const list = query({
  args: {
    limit: v.optional(v.number()),
    category: v.optional(v.string()),
    publishedOnly: v.optional(v.boolean()),
  },
  handler: async (ctx, args) => {
    const limit = Math.min(args.limit ?? MAX_LIMIT, MAX_LIMIT)
    const posts = await ctx.db
      .query('posts')
      .withIndex('by_published', (q) =>
        args.publishedOnly === false ? q : q.eq('published', true)
      )
      .order('desc')
      .take(limit)

    if (args.category && args.category !== 'all') {
      return posts.filter((post) => post.category === args.category)
    }

    return posts
  },
})

export const getBySlug = query({
  args: { slug: v.string() },
  handler: async (ctx, args) => {
    const post = await ctx.db
      .query('posts')
      .withIndex('by_slug', (q) => q.eq('slug', args.slug))
      .unique()
    return post ?? null
  },
})

export const categories = query({
  handler: async (ctx) => {
    const posts = await ctx.db
      .query('posts')
      .withIndex('by_published', (q) => q.eq('published', true))
      .take(MAX_LIMIT)
    return [...new Set(posts.map((post) => post.category))].sort()
  },
})

export const incrementView = mutation({
  args: { id: v.id('posts') },
  handler: async (ctx, args) => {
    const post = await ctx.db.get(args.id)
    if (!post) return null
    await ctx.db.patch(args.id, { views: post.views + 1 })
    return args.id
  },
})

export const toggleLike = mutation({
  args: { id: v.id('posts') },
  handler: async (ctx, args) => {
    const post = await ctx.db.get(args.id)
    if (!post) return null
    await ctx.db.patch(args.id, { likes: post.likes + 1 })
    return args.id
  },
})

const postFields = {
  slug: v.optional(v.string()),
  title: v.optional(v.string()),
  excerpt: v.optional(v.string()),
  content: v.optional(v.string()),
  coverImage: v.optional(v.union(v.string(), v.null())),
  category: v.optional(v.string()),
  readTime: v.optional(v.string()),
  author: v.optional(v.string()),
  published: v.optional(v.boolean()),
  featured: v.optional(v.boolean()),
}

export const create = mutation({
  args: postFields,
  handler: async (ctx, args) => {
    const actor = await requireActor(ctx)
    const title = args.title ?? 'Untitled post'
    const slug =
      args.slug ??
      `${title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')}-${Date.now().toString(36)}`

    const id = await ctx.db.insert('posts', {
      slug,
      title,
      excerpt: args.excerpt,
      content: args.content ?? '',
      coverImage: args.coverImage ?? null,
      category: args.category ?? 'Insights',
      readTime: args.readTime ?? '5 min read',
      author: args.author ?? actor.email,
      published: args.published ?? false,
      featured: args.featured ?? false,
      likes: 0,
      views: 0,
    })
    await logActivity(ctx, actor, 'created', 'post', id)
    return id
  },
})

export const update = mutation({
  args: { id: v.id('posts'), ...postFields },
  handler: async (ctx, args) => {
    const actor = await requireActor(ctx)
    const { id, ...fields } = args
    const patch: Record<string, unknown> = {}
    for (const [key, value] of Object.entries(fields)) {
      if (value !== undefined) patch[key] = value
    }
    await ctx.db.patch(id, patch)
    await logActivity(ctx, actor, 'updated', 'post', id)
    return id
  },
})

export const remove = mutation({
  args: { id: v.id('posts') },
  handler: async (ctx, args) => {
    const actor = await requireActor(ctx)

    const comments = await ctx.db
      .query('comments')
      .withIndex('by_postId', (q) => q.eq('postId', args.id))
      .take(500)
    for (const comment of comments) {
      await ctx.db.delete(comment._id)
    }

    await ctx.db.delete(args.id)
    await logActivity(ctx, actor, 'deleted', 'post', args.id)
    return args.id
  },
})
