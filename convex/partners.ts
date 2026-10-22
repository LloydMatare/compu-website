import { v } from 'convex/values'
import { mutation, query } from './_generated/server'
import { logActivity, requireActor } from './lib/auth'

const MAX_LIMIT = 100

// --------------------------------------------------------------- partners

export const listPartners = query({
  args: { limit: v.optional(v.number()) },
  handler: async (ctx, args) => {
    const limit = Math.min(args.limit ?? MAX_LIMIT, MAX_LIMIT)
    return await ctx.db
      .query('partners')
      .withIndex('by_order', (q) => q)
      .order('asc')
      .take(limit)
  },
})

export const listAllPartners = query({
  args: { limit: v.optional(v.number()) },
  handler: async (ctx, args) => {
    const limit = Math.min(args.limit ?? MAX_LIMIT, MAX_LIMIT)
    return await ctx.db.query('partners').order('asc').take(limit)
  },
})

const partnerFields = {
  name: v.optional(v.string()),
  logo: v.optional(v.string()),
  link: v.optional(v.string()),
  order: v.optional(v.number()),
  published: v.optional(v.boolean()),
}

export const createPartner = mutation({
  args: partnerFields,
  handler: async (ctx, args) => {
    const actor = await requireActor(ctx)
    const id = await ctx.db.insert('partners', {
      name: args.name ?? 'Partner',
      logo: args.logo ?? '/images/logo.png',
      link: args.link,
      order: args.order ?? 0,
      published: args.published ?? true,
    })
    await logActivity(ctx, actor, 'created', 'partner', id)
    return id
  },
})

export const updatePartner = mutation({
  args: { id: v.id('partners'), ...partnerFields },
  handler: async (ctx, args) => {
    const actor = await requireActor(ctx)
    const { id, ...fields } = args
    const patch: Record<string, unknown> = {}
    for (const [key, value] of Object.entries(fields)) {
      if (value !== undefined) patch[key] = value
    }
    await ctx.db.patch(id, patch)
    await logActivity(ctx, actor, 'updated', 'partner', id)
    return id
  },
})

export const removePartner = mutation({
  args: { id: v.id('partners') },
  handler: async (ctx, args) => {
    const actor = await requireActor(ctx)
    await ctx.db.delete(args.id)
    await logActivity(ctx, actor, 'deleted', 'partner', args.id)
    return args.id
  },
})

// ---------------------------------------------------------------- clients

export const listClients = query({
  args: { limit: v.optional(v.number()) },
  handler: async (ctx, args) => {
    const limit = Math.min(args.limit ?? MAX_LIMIT, MAX_LIMIT)
    return await ctx.db
      .query('clients')
      .withIndex('by_order', (q) => q)
      .order('asc')
      .take(limit)
  },
})

export const listAllClients = query({
  args: { limit: v.optional(v.number()) },
  handler: async (ctx, args) => {
    const limit = Math.min(args.limit ?? MAX_LIMIT, MAX_LIMIT)
    return await ctx.db.query('clients').order('asc').take(limit)
  },
})

const clientFields = {
  name: v.optional(v.string()),
  logo: v.optional(v.string()),
  industry: v.optional(v.string()),
  order: v.optional(v.number()),
  published: v.optional(v.boolean()),
}

export const createClient = mutation({
  args: clientFields,
  handler: async (ctx, args) => {
    const actor = await requireActor(ctx)
    const id = await ctx.db.insert('clients', {
      name: args.name ?? 'Client',
      logo: args.logo ?? '/images/logo.png',
      industry: args.industry,
      order: args.order ?? 0,
      published: args.published ?? true,
    })
    await logActivity(ctx, actor, 'created', 'client', id)
    return id
  },
})

export const updateClient = mutation({
  args: { id: v.id('clients'), ...clientFields },
  handler: async (ctx, args) => {
    const actor = await requireActor(ctx)
    const { id, ...fields } = args
    const patch: Record<string, unknown> = {}
    for (const [key, value] of Object.entries(fields)) {
      if (value !== undefined) patch[key] = value
    }
    await ctx.db.patch(id, patch)
    await logActivity(ctx, actor, 'updated', 'client', id)
    return id
  },
})

export const removeClient = mutation({
  args: { id: v.id('clients') },
  handler: async (ctx, args) => {
    const actor = await requireActor(ctx)
    await ctx.db.delete(args.id)
    await logActivity(ctx, actor, 'deleted', 'client', args.id)
    return args.id
  },
})

// --------------------------------------------------------------- projects

export const listProjects = query({
  args: {
    limit: v.optional(v.number()),
    category: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    const limit = Math.min(args.limit ?? MAX_LIMIT, MAX_LIMIT)
    const projects = await ctx.db
      .query('projects')
      .withIndex('by_order', (q) => q)
      .order('asc')
      .take(limit)

    if (args.category && args.category !== 'all') {
      return projects.filter((project) => project.category === args.category)
    }

    return projects
  },
})

export const listAllProjects = query({
  args: { limit: v.optional(v.number()) },
  handler: async (ctx, args) => {
    const limit = Math.min(args.limit ?? MAX_LIMIT, MAX_LIMIT)
    return await ctx.db.query('projects').order('asc').take(limit)
  },
})

const projectFields = {
  name: v.optional(v.string()),
  description: v.optional(v.string()),
  link: v.optional(v.string()),
  image: v.optional(v.string()),
  technologies: v.optional(v.array(v.string())),
  category: v.optional(v.string()),
  order: v.optional(v.number()),
  published: v.optional(v.boolean()),
}

export const createProject = mutation({
  args: projectFields,
  handler: async (ctx, args) => {
    const actor = await requireActor(ctx)
    const id = await ctx.db.insert('projects', {
      name: args.name ?? 'Untitled project',
      description: args.description ?? '',
      link: args.link,
      image: args.image ?? '/images/logo.png',
      technologies: args.technologies ?? [],
      category: args.category ?? 'software',
      order: args.order ?? 0,
      published: args.published ?? true,
    })
    await logActivity(ctx, actor, 'created', 'project', id)
    return id
  },
})

export const updateProject = mutation({
  args: { id: v.id('projects'), ...projectFields },
  handler: async (ctx, args) => {
    const actor = await requireActor(ctx)
    const { id, ...fields } = args
    const patch: Record<string, unknown> = {}
    for (const [key, value] of Object.entries(fields)) {
      if (value !== undefined) patch[key] = value
    }
    await ctx.db.patch(id, patch)
    await logActivity(ctx, actor, 'updated', 'project', id)
    return id
  },
})

export const removeProject = mutation({
  args: { id: v.id('projects') },
  handler: async (ctx, args) => {
    const actor = await requireActor(ctx)
    await ctx.db.delete(args.id)
    await logActivity(ctx, actor, 'deleted', 'project', args.id)
    return args.id
  },
})
