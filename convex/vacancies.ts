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
    const vacancies = await ctx.db
      .query('vacancies')
      .withIndex('by_published', (q) =>
        args.publishedOnly === false ? q : q.eq('published', true)
      )
      .take(limit)

    if (args.category && args.category !== 'all') {
      return vacancies.filter((vacancy) => vacancy.category === args.category)
    }

    return vacancies
  },
})

export const getBySlug = query({
  args: { slug: v.string() },
  handler: async (ctx, args) => {
    const vacancy = await ctx.db
      .query('vacancies')
      .withIndex('by_slug', (q) => q.eq('slug', args.slug))
      .unique()
    return vacancy ?? null
  },
})

const vacancyFields = {
  slug: v.optional(v.string()),
  position: v.optional(v.string()),
  status: v.optional(v.string()),
  duration: v.optional(v.string()),
  description: v.optional(v.string()),
  qualification: v.optional(v.string()),
  category: v.optional(v.string()),
  imageUrl: v.optional(v.union(v.string(), v.null())),
  published: v.optional(v.boolean()),
}

export const create = mutation({
  args: vacancyFields,
  handler: async (ctx, args) => {
    const actor = await requireActor(ctx)
    const position = args.position ?? 'Untitled role'
    const slug =
      args.slug ??
      `${position.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')}-${Date.now().toString(36)}`

    const id = await ctx.db.insert('vacancies', {
      slug,
      position,
      status: args.status ?? 'Open',
      duration: args.duration,
      description: args.description ?? '',
      qualification: args.qualification,
      category: args.category,
      imageUrl: args.imageUrl ?? null,
      published: args.published ?? true,
    })
    await logActivity(ctx, actor, 'created', 'vacancy', id)
    return id
  },
})

export const update = mutation({
  args: { id: v.id('vacancies'), ...vacancyFields },
  handler: async (ctx, args) => {
    const actor = await requireActor(ctx)
    const { id, ...fields } = args
    const patch: Record<string, unknown> = {}
    for (const [key, value] of Object.entries(fields)) {
      if (value !== undefined) patch[key] = value
    }
    await ctx.db.patch(id, patch)
    await logActivity(ctx, actor, 'updated', 'vacancy', id)
    return id
  },
})

export const remove = mutation({
  args: { id: v.id('vacancies') },
  handler: async (ctx, args) => {
    const actor = await requireActor(ctx)
    await ctx.db.delete(args.id)
    await logActivity(ctx, actor, 'deleted', 'vacancy', args.id)
    return args.id
  },
})

// --------------------------------------------------------- applications

export const listApplications = query({
  args: {
    limit: v.optional(v.number()),
    vacancyId: v.optional(v.id('vacancies')),
    status: v.optional(
      v.union(v.literal('new'), v.literal('reviewing'), v.literal('rejected'))
    ),
  },
  handler: async (ctx, args) => {
    const limit = Math.min(args.limit ?? MAX_LIMIT, MAX_LIMIT)
    const applications = await ctx.db
      .query('jobApplications')
      .withIndex('by_status', (q) =>
        args.status ? q.eq('status', args.status) : q
      )
      .order('desc')
      .take(limit)

    if (args.vacancyId) {
      return applications.filter((app) => app.vacancyId === args.vacancyId)
    }

    return applications
  },
})

/** Public — a candidate submits an application. */
export const apply = mutation({
  args: {
    vacancyId: v.optional(v.id('vacancies')),
    position: v.string(),
    name: v.string(),
    email: v.string(),
    phone: v.optional(v.string()),
    coverLetter: v.optional(v.string()),
    cvStorageId: v.optional(v.string()),
    cvFileName: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    const id = await ctx.db.insert('jobApplications', {
      vacancyId: args.vacancyId,
      position: args.position,
      name: args.name,
      email: args.email,
      phone: args.phone,
      coverLetter: args.coverLetter,
      cvStorageId: args.cvStorageId,
      cvFileName: args.cvFileName,
      status: 'new',
    })
    return id
  },
})

export const setApplicationStatus = mutation({
  args: {
    id: v.id('jobApplications'),
    status: v.union(v.literal('new'), v.literal('reviewing'), v.literal('rejected')),
  },
  handler: async (ctx, args) => {
    const actor = await requireActor(ctx)
    await ctx.db.patch(args.id, { status: args.status })
    await logActivity(ctx, actor, `status:${args.status}`, 'jobApplication', args.id)
    return args.id
  },
})

export const removeApplication = mutation({
  args: { id: v.id('jobApplications') },
  handler: async (ctx, args) => {
    const actor = await requireActor(ctx)
    await ctx.db.delete(args.id)
    await logActivity(ctx, actor, 'deleted', 'jobApplication', args.id)
    return args.id
  },
})
