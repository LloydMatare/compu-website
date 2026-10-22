import { v } from 'convex/values'
import { mutation, query } from './_generated/server'
import { logActivity, requireActor } from './lib/auth'

const MAX_LIMIT = 200

export const list = query({
  args: {
    category: v.optional(v.string()),
    search: v.optional(v.string()),
    limit: v.optional(v.number()),
    publishedOnly: v.optional(v.boolean()),
  },
  handler: async (ctx, args) => {
    const limit = Math.min(args.limit ?? MAX_LIMIT, MAX_LIMIT)

    let products = await ctx.db
      .query('products')
      .withIndex('by_published', (q) =>
        args.publishedOnly === false
          ? q
          : q.eq('published', true)
      )
      .take(limit)

    if (args.category && args.category !== 'all') {
      products = products.filter((product) => product.category === args.category)
    }

    if (args.search) {
      const needle = args.search.toLowerCase()
      products = products.filter((product) =>
        [product.title, product.brand, product.sku, product.shortDescription]
          .filter(Boolean)
          .some((field) => field!.toLowerCase().includes(needle))
      )
    }

    return products
  },
})

export const getBySlug = query({
  args: { slug: v.string() },
  handler: async (ctx, args) => {
    const product = await ctx.db
      .query('products')
      .withIndex('by_slug', (q) => q.eq('slug', args.slug))
      .unique()
    return product ?? null
  },
})

export const categories = query({
  handler: async (ctx) => {
    const products = await ctx.db
      .query('products')
      .withIndex('by_published', (q) => q.eq('published', true))
      .take(MAX_LIMIT)

    const counts = new Map<string, { value: string; label: string; count: number }>()
    for (const product of products) {
      const current = counts.get(product.category)
      counts.set(product.category, {
        value: product.category,
        label: product.categoryLabel,
        count: (current?.count ?? 0) + 1,
      })
    }

    return [...counts.values()].sort((a, b) => a.label.localeCompare(b.label))
  },
})

const productFields = {
  slug: v.optional(v.string()),
  title: v.optional(v.string()),
  brand: v.optional(v.string()),
  sku: v.optional(v.string()),
  category: v.optional(v.string()),
  categoryLabel: v.optional(v.string()),
  shortDescription: v.optional(v.string()),
  description: v.optional(v.string()),
  price: v.optional(v.number()),
  compareAtPrice: v.optional(v.number()),
  inStock: v.optional(v.boolean()),
  imageUrl: v.optional(v.string()),
  gallery: v.optional(v.array(v.string())),
  features: v.optional(v.array(v.string())),
  specs: v.optional(v.array(v.object({ label: v.string(), value: v.string() }))),
  published: v.optional(v.boolean()),
}

export const create = mutation({
  args: productFields,
  handler: async (ctx, args) => {
    const actor = await requireActor(ctx)

    const title = args.title ?? 'Untitled product'
    const slug =
      args.slug ??
      `${title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')}-${Date.now().toString(36)}`

    const id = await ctx.db.insert('products', {
      slug,
      title,
      brand: args.brand,
      sku: args.sku,
      category: args.category ?? 'accessories',
      categoryLabel: args.categoryLabel ?? 'Accessories',
      shortDescription: args.shortDescription,
      description: args.description,
      price: args.price ?? 0,
      compareAtPrice: args.compareAtPrice,
      inStock: args.inStock ?? true,
      imageUrl: args.imageUrl ?? '/images/computer.jpg',
      gallery: args.gallery ?? [],
      features: args.features ?? [],
      specs: args.specs ?? [],
      published: args.published ?? true,
    })

    await logActivity(ctx, actor, 'created', 'product', id)
    return id
  },
})

export const update = mutation({
  args: {
    id: v.id('products'),
    ...productFields,
  },
  handler: async (ctx, args) => {
    const actor = await requireActor(ctx)
    const { id, ...fields } = args

    const existing = await ctx.db.get(id)
    if (!existing) throw new Error('Product not found')

    const patch: Record<string, unknown> = {}
    for (const [key, value] of Object.entries(fields)) {
      if (value !== undefined) patch[key] = value
    }

    await ctx.db.patch(id, patch)
    await logActivity(ctx, actor, 'updated', 'product', id)
    return id
  },
})

export const remove = mutation({
  args: { id: v.id('products') },
  handler: async (ctx, args) => {
    const actor = await requireActor(ctx)
    await ctx.db.delete(args.id)
    await logActivity(ctx, actor, 'deleted', 'product', args.id)
    return args.id
  },
})
