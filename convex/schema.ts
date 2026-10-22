import { defineSchema, defineTable } from 'convex/server'
import { v } from 'convex/values'

const imageRef = v.union(v.string(), v.null())

export default defineSchema({
  // ---------------------------------------------------------------------
  // Identity — Clerk is the source of truth for sign-in; this table maps
  // a Clerk identity to an application role.
  // ---------------------------------------------------------------------
  users: defineTable({
    clerkUserId: v.string(),
    email: v.string(),
    name: v.optional(v.string()),
    avatarUrl: v.optional(v.string()),
    role: v.union(v.literal('admin'), v.literal('editor')),
  })
    .index('by_clerkUserId', ['clerkUserId'])
    .index('by_email', ['email']),

  // ---------------------------------------------------------------------
  // Site chrome / marketing copy
  // ---------------------------------------------------------------------
  siteSettings: defineTable({
    key: v.string(),
    value: v.any(),
  }).index('by_key', ['key']),

  navLinks: defineTable({
    name: v.string(),
    href: v.string(),
    order: v.number(),
    parentId: v.optional(v.id('navLinks')),
  })
    .index('by_order', ['order'])
    .index('by_parentId', ['parentId']),

  // ---------------------------------------------------------------------
  // Services
  // ---------------------------------------------------------------------
  services: defineTable({
    slug: v.string(),
    title: v.string(),
    shortDescription: v.string(),
    fullDescription: v.string(),
    icon: v.optional(v.string()),
    image: imageRef,
    features: v.array(v.string()),
    href: v.optional(v.string()),
    order: v.number(),
    published: v.boolean(),
  })
    .index('by_slug', ['slug'])
    .index('by_order', ['order']),

  pricingPlans: defineTable({
    tier: v.string(),
    name: v.string(),
    description: v.optional(v.string()),
    price: v.optional(v.number()),
    period: v.optional(v.string()),
    features: v.array(v.string()),
    order: v.number(),
    highlighted: v.boolean(),
  })
    .index('by_tier', ['tier'])
    .index('by_order', ['order']),

  // ---------------------------------------------------------------------
  // Catalog
  // ---------------------------------------------------------------------
  products: defineTable({
    slug: v.string(),
    title: v.string(),
    brand: v.optional(v.string()),
    sku: v.optional(v.string()),
    category: v.string(),
    categoryLabel: v.string(),
    shortDescription: v.optional(v.string()),
    description: v.optional(v.string()),
    price: v.number(),
    compareAtPrice: v.optional(v.number()),
    inStock: v.boolean(),
    imageUrl: v.string(),
    gallery: v.array(v.string()),
    features: v.array(v.string()),
    specs: v.array(v.object({ label: v.string(), value: v.string() })),
    published: v.boolean(),
  })
    .index('by_slug', ['slug'])
    .index('by_category', ['category'])
    .index('by_published', ['published']),

  // ---------------------------------------------------------------------
  // Events / Gallery
  // ---------------------------------------------------------------------
  events: defineTable({
    title: v.string(),
    description: v.string(),
    venue: v.string(),
    date: v.string(),
    time: v.optional(v.string()),
    category: v.optional(v.string()),
    imageUrl: imageRef,
    link: v.optional(v.union(v.string(), v.null())),
    published: v.boolean(),
  })
    .index('by_date', ['date'])
    .index('by_published', ['published']),

  galleryItems: defineTable({
    projectName: v.string(),
    description: v.string(),
    company: v.string(),
    title: v.optional(v.string()),
    images: v.array(v.string()),
    category: v.optional(v.string()),
    order: v.number(),
    published: v.boolean(),
  })
    .index('by_order', ['order'])
    .index('by_published', ['published']),

  galleryVideos: defineTable({
    title: v.string(),
    description: v.string(),
    videoUrl: v.string(),
    poster: imageRef,
    category: v.optional(v.string()),
    order: v.number(),
    published: v.boolean(),
  })
    .index('by_order', ['order'])
    .index('by_published', ['published']),

  // ---------------------------------------------------------------------
  // Blog
  // ---------------------------------------------------------------------
  posts: defineTable({
    slug: v.string(),
    title: v.string(),
    excerpt: v.optional(v.string()),
    content: v.string(),
    coverImage: imageRef,
    category: v.string(),
    readTime: v.optional(v.string()),
    author: v.optional(v.string()),
    published: v.boolean(),
    featured: v.boolean(),
    likes: v.number(),
    views: v.number(),
  })
    .index('by_slug', ['slug'])
    .index('by_published', ['published'])
    .index('by_category', ['category']),

  comments: defineTable({
    postId: v.id('posts'),
    author: v.string(),
    email: v.optional(v.string()),
    text: v.string(),
    approved: v.boolean(),
  })
    .index('by_postId', ['postId'])
    .index('by_approved', ['approved']),

  // ---------------------------------------------------------------------
  // Careers
  // ---------------------------------------------------------------------
  vacancies: defineTable({
    slug: v.string(),
    position: v.string(),
    status: v.string(),
    duration: v.optional(v.string()),
    description: v.string(),
    qualification: v.optional(v.string()),
    category: v.optional(v.string()),
    imageUrl: imageRef,
    published: v.boolean(),
  })
    .index('by_slug', ['slug'])
    .index('by_published', ['published']),

  jobApplications: defineTable({
    vacancyId: v.optional(v.id('vacancies')),
    position: v.string(),
    name: v.string(),
    email: v.string(),
    phone: v.optional(v.string()),
    coverLetter: v.optional(v.string()),
    cvStorageId: v.optional(v.string()),
    cvFileName: v.optional(v.string()),
    status: v.union(v.literal('new'), v.literal('reviewing'), v.literal('rejected')),
  })
    .index('by_vacancyId', ['vacancyId'])
    .index('by_status', ['status']),

  // ---------------------------------------------------------------------
  // Social proof
  // ---------------------------------------------------------------------
  testimonials: defineTable({
    quote: v.string(),
    name: v.string(),
    role: v.optional(v.string()),
    company: v.optional(v.string()),
    rating: v.optional(v.number()),
    order: v.number(),
    published: v.boolean(),
  })
    .index('by_order', ['order'])
    .index('by_published', ['published']),

  partners: defineTable({
    name: v.string(),
    logo: v.string(),
    link: v.optional(v.string()),
    order: v.number(),
    published: v.boolean(),
  })
    .index('by_order', ['order']),

  clients: defineTable({
    name: v.string(),
    logo: v.string(),
    industry: v.optional(v.string()),
    order: v.number(),
    published: v.boolean(),
  })
    .index('by_order', ['order']),

  projects: defineTable({
    name: v.string(),
    description: v.string(),
    link: v.optional(v.string()),
    image: v.string(),
    technologies: v.array(v.string()),
    category: v.string(),
    order: v.number(),
    published: v.boolean(),
  })
    .index('by_category', ['category'])
    .index('by_order', ['order']),

  // ---------------------------------------------------------------------
  // Inbox / lead capture
  // ---------------------------------------------------------------------
  contactMessages: defineTable({
    name: v.string(),
    email: v.string(),
    phone: v.optional(v.string()),
    subject: v.optional(v.string()),
    message: v.string(),
    read: v.boolean(),
  })
    .index('by_read', ['read']),

  supportTickets: defineTable({
    name: v.string(),
    email: v.string(),
    phone: v.optional(v.string()),
    category: v.string(),
    priority: v.string(),
    targetGroup: v.optional(v.string()),
    subject: v.optional(v.string()),
    description: v.string(),
    attachmentStorageId: v.optional(v.string()),
    attachmentName: v.optional(v.string()),
    status: v.union(v.literal('open'), v.literal('in_progress'), v.literal('resolved')),
  })
    .index('by_status', ['status']),

  newsletterSubscribers: defineTable({
    email: v.string(),
    subscribedAt: v.number(),
  }).index('by_email', ['email']),

  // ---------------------------------------------------------------------
  // Media library (Convex file storage references)
  // ---------------------------------------------------------------------
  media: defineTable({
    storageId: v.string(),
    filename: v.string(),
    contentType: v.string(),
    size: v.number(),
    width: v.optional(v.number()),
    height: v.optional(v.number()),
    alt: v.optional(v.string()),
    folder: v.optional(v.string()),
  })
    .index('by_folder', ['folder']),

  // ---------------------------------------------------------------------
  // Audit trail for dashboard mutations
  // ---------------------------------------------------------------------
  activityLog: defineTable({
    actor: v.optional(v.string()),
    action: v.string(),
    entity: v.string(),
    entityId: v.optional(v.string()),
    at: v.number(),
  })
    .index('by_at', ['at']),
})
