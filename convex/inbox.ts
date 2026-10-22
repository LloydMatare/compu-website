import { v } from 'convex/values'
import { mutation, query } from './_generated/server'
import { logActivity, requireActor } from './lib/auth'

const MAX_LIMIT = 200

// --------------------------------------------------------- contact inbox

export const listMessages = query({
  args: { limit: v.optional(v.number()) },
  handler: async (ctx, args) => {
    const limit = Math.min(args.limit ?? MAX_LIMIT, MAX_LIMIT)
    return await ctx.db.query('contactMessages').order('desc').take(limit)
  },
})

/** Public — a visitor sends a message through the contact form. */
export const submitMessage = mutation({
  args: {
    name: v.string(),
    email: v.string(),
    message: v.string(),
    phone: v.optional(v.string()),
    subject: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    const id = await ctx.db.insert('contactMessages', {
      name: args.name,
      email: args.email,
      phone: args.phone,
      subject: args.subject,
      message: args.message,
      read: false,
    })
    return id
  },
})

export const setMessageRead = mutation({
  args: { id: v.id('contactMessages'), read: v.boolean() },
  handler: async (ctx, args) => {
    const actor = await requireActor(ctx)
    await ctx.db.patch(args.id, { read: args.read })
    await logActivity(ctx, actor, args.read ? 'read' : 'unread', 'contactMessage', args.id)
    return args.id
  },
})

export const removeMessage = mutation({
  args: { id: v.id('contactMessages') },
  handler: async (ctx, args) => {
    const actor = await requireActor(ctx)
    await ctx.db.delete(args.id)
    await logActivity(ctx, actor, 'deleted', 'contactMessage', args.id)
    return args.id
  },
})

// --------------------------------------------------------- support tickets

export const listTickets = query({
  args: {
    limit: v.optional(v.number()),
    status: v.optional(
      v.union(v.literal('open'), v.literal('in_progress'), v.literal('resolved'))
    ),
  },
  handler: async (ctx, args) => {
    const limit = Math.min(args.limit ?? MAX_LIMIT, MAX_LIMIT)
    return await ctx.db
      .query('supportTickets')
      .withIndex('by_status', (q) => (args.status ? q.eq('status', args.status) : q))
      .order('desc')
      .take(limit)
  },
})

/** Public — a customer raises a support ticket. */
export const submitTicket = mutation({
  args: {
    name: v.string(),
    email: v.string(),
    category: v.string(),
    priority: v.string(),
    description: v.string(),
    phone: v.optional(v.string()),
    targetGroup: v.optional(v.string()),
    subject: v.optional(v.string()),
    attachmentStorageId: v.optional(v.string()),
    attachmentName: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    const id = await ctx.db.insert('supportTickets', {
      name: args.name,
      email: args.email,
      phone: args.phone,
      category: args.category,
      priority: args.priority,
      targetGroup: args.targetGroup,
      subject: args.subject,
      description: args.description,
      attachmentStorageId: args.attachmentStorageId,
      attachmentName: args.attachmentName,
      status: 'open',
    })
    return id
  },
})

export const setTicketStatus = mutation({
  args: {
    id: v.id('supportTickets'),
    status: v.union(v.literal('open'), v.literal('in_progress'), v.literal('resolved')),
  },
  handler: async (ctx, args) => {
    const actor = await requireActor(ctx)
    await ctx.db.patch(args.id, { status: args.status })
    await logActivity(ctx, actor, `status:${args.status}`, 'supportTicket', args.id)
    return args.id
  },
})

export const removeTicket = mutation({
  args: { id: v.id('supportTickets') },
  handler: async (ctx, args) => {
    const actor = await requireActor(ctx)
    await ctx.db.delete(args.id)
    await logActivity(ctx, actor, 'deleted', 'supportTicket', args.id)
    return args.id
  },
})

// ------------------------------------------------------------- newsletter

export const listSubscribers = query({
  args: { limit: v.optional(v.number()) },
  handler: async (ctx, args) => {
    const limit = Math.min(args.limit ?? MAX_LIMIT, MAX_LIMIT)
    return await ctx.db.query('newsletterSubscribers').order('desc').take(limit)
  },
})

/** Public — newsletter sign-up. Idempotent on email. */
export const subscribe = mutation({
  args: { email: v.string() },
  handler: async (ctx, args) => {
    const email = args.email.trim().toLowerCase()
    if (!email) throw new Error('Email is required')

    const existing = await ctx.db
      .query('newsletterSubscribers')
      .withIndex('by_email', (q) => q.eq('email', email))
      .unique()

    if (existing) return existing._id

    return await ctx.db.insert('newsletterSubscribers', {
      email,
      subscribedAt: Date.now(),
    })
  },
})

export const unsubscribe = mutation({
  args: { email: v.string() },
  handler: async (ctx, args) => {
    const email = args.email.trim().toLowerCase()
    const existing = await ctx.db
      .query('newsletterSubscribers')
      .withIndex('by_email', (q) => q.eq('email', email))
      .unique()

    if (existing) await ctx.db.delete(existing._id)
    return true
  },
})

export const removeSubscriber = mutation({
  args: { id: v.id('newsletterSubscribers') },
  handler: async (ctx, args) => {
    const actor = await requireActor(ctx)
    await ctx.db.delete(args.id)
    await logActivity(ctx, actor, 'deleted', 'newsletterSubscriber', args.id)
    return args.id
  },
})
