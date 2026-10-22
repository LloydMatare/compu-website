import { v } from 'convex/values'
import { mutation, query } from './_generated/server'
import { logActivity, requireActor } from './lib/auth'

const MAX_LIMIT = 100

// ---------------------------------------------------------- testimonials

export const listTestimonials = query({
  args: { limit: v.optional(v.number()) },
  handler: async (ctx, args) => {
    const limit = Math.min(args.limit ?? MAX_LIMIT, MAX_LIMIT)
    return await ctx.db
      .query('testimonials')
      .withIndex('by_published', (q) => q.eq('published', true))
      .order('asc')
      .take(limit)
  },
})

export const listAllTestimonials = query({
  args: { limit: v.optional(v.number()) },
  handler: async (ctx, args) => {
    const limit = Math.min(args.limit ?? MAX_LIMIT, MAX_LIMIT)
    return await ctx.db.query('testimonials').order('asc').take(limit)
  },
})

const testimonialFields = {
  quote: v.optional(v.string()),
  name: v.optional(v.string()),
  role: v.optional(v.string()),
  company: v.optional(v.string()),
  rating: v.optional(v.number()),
  order: v.optional(v.number()),
  published: v.optional(v.boolean()),
}

export const createTestimonial = mutation({
  args: testimonialFields,
  handler: async (ctx, args) => {
    const actor = await requireActor(ctx)
    const id = await ctx.db.insert('testimonials', {
      quote: args.quote ?? '',
      name: args.name ?? 'Anonymous',
      role: args.role,
      company: args.company,
      rating: args.rating ?? 5,
      order: args.order ?? 0,
      published: args.published ?? true,
    })
    await logActivity(ctx, actor, 'created', 'testimonial', id)
    return id
  },
})

export const updateTestimonial = mutation({
  args: { id: v.id('testimonials'), ...testimonialFields },
  handler: async (ctx, args) => {
    const actor = await requireActor(ctx)
    const { id, ...fields } = args
    const patch: Record<string, unknown> = {}
    for (const [key, value] of Object.entries(fields)) {
      if (value !== undefined) patch[key] = value
    }
    await ctx.db.patch(id, patch)
    await logActivity(ctx, actor, 'updated', 'testimonial', id)
    return id
  },
})

export const removeTestimonial = mutation({
  args: { id: v.id('testimonials') },
  handler: async (ctx, args) => {
    const actor = await requireActor(ctx)
    await ctx.db.delete(args.id)
    await logActivity(ctx, actor, 'deleted', 'testimonial', args.id)
    return args.id
  },
})
