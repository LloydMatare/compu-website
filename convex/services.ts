import { v } from 'convex/values'
import { mutation, query } from './_generated/server'
import { logActivity, requireActor } from './lib/auth'

const MAX_LIMIT = 100

// -------------------------------------------------------------- services

export const listServices = query({
  args: { limit: v.optional(v.number()) },
  handler: async (ctx, args) => {
    const limit = Math.min(args.limit ?? MAX_LIMIT, MAX_LIMIT)
    return await ctx.db
      .query('services')
      .withIndex('by_order', (q) => q)
      .order('asc')
      .take(limit)
  },
})

const serviceFields = {
  slug: v.optional(v.string()),
  title: v.optional(v.string()),
  shortDescription: v.optional(v.string()),
  fullDescription: v.optional(v.string()),
  icon: v.optional(v.string()),
  image: v.optional(v.union(v.string(), v.null())),
  features: v.optional(v.array(v.string())),
  href: v.optional(v.string()),
  order: v.optional(v.number()),
  published: v.optional(v.boolean()),
}

export const createService = mutation({
  args: serviceFields,
  handler: async (ctx, args) => {
    const actor = await requireActor(ctx)
    const title = args.title ?? 'Untitled service'
    const id = await ctx.db.insert('services', {
      slug: args.slug ?? title.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
      title,
      shortDescription: args.shortDescription ?? '',
      fullDescription: args.fullDescription ?? '',
      icon: args.icon,
      image: args.image ?? null,
      features: args.features ?? [],
      href: args.href,
      order: args.order ?? 0,
      published: args.published ?? true,
    })
    await logActivity(ctx, actor, 'created', 'service', id)
    return id
  },
})

export const updateService = mutation({
  args: { id: v.id('services'), ...serviceFields },
  handler: async (ctx, args) => {
    const actor = await requireActor(ctx)
    const { id, ...fields } = args
    const patch: Record<string, unknown> = {}
    for (const [key, value] of Object.entries(fields)) {
      if (value !== undefined) patch[key] = value
    }
    await ctx.db.patch(id, patch)
    await logActivity(ctx, actor, 'updated', 'service', id)
    return id
  },
})

export const removeService = mutation({
  args: { id: v.id('services') },
  handler: async (ctx, args) => {
    const actor = await requireActor(ctx)
    await ctx.db.delete(args.id)
    await logActivity(ctx, actor, 'deleted', 'service', args.id)
    return args.id
  },
})

// --------------------------------------------------------- pricing plans

export const listPlans = query({
  args: { limit: v.optional(v.number()) },
  handler: async (ctx, args) => {
    const limit = Math.min(args.limit ?? MAX_LIMIT, MAX_LIMIT)
    return await ctx.db
      .query('pricingPlans')
      .withIndex('by_order', (q) => q)
      .order('asc')
      .take(limit)
  },
})

const planFields = {
  tier: v.optional(v.string()),
  name: v.optional(v.string()),
  description: v.optional(v.string()),
  price: v.optional(v.number()),
  period: v.optional(v.string()),
  features: v.optional(v.array(v.string())),
  order: v.optional(v.number()),
  highlighted: v.optional(v.boolean()),
}

export const createPlan = mutation({
  args: planFields,
  handler: async (ctx, args) => {
    const actor = await requireActor(ctx)
    const id = await ctx.db.insert('pricingPlans', {
      tier: args.tier ?? 'standard',
      name: args.name ?? 'Untitled plan',
      description: args.description,
      price: args.price,
      period: args.period,
      features: args.features ?? [],
      order: args.order ?? 0,
      highlighted: args.highlighted ?? false,
    })
    await logActivity(ctx, actor, 'created', 'pricingPlan', id)
    return id
  },
})

export const updatePlan = mutation({
  args: { id: v.id('pricingPlans'), ...planFields },
  handler: async (ctx, args) => {
    const actor = await requireActor(ctx)
    const { id, ...fields } = args
    const patch: Record<string, unknown> = {}
    for (const [key, value] of Object.entries(fields)) {
      if (value !== undefined) patch[key] = value
    }
    await ctx.db.patch(id, patch)
    await logActivity(ctx, actor, 'updated', 'pricingPlan', id)
    return id
  },
})

export const removePlan = mutation({
  args: { id: v.id('pricingPlans') },
  handler: async (ctx, args) => {
    const actor = await requireActor(ctx)
    await ctx.db.delete(args.id)
    await logActivity(ctx, actor, 'deleted', 'pricingPlan', args.id)
    return args.id
  },
})
