import { v } from 'convex/values'
import { internalMutation, mutation } from './_generated/server'
import type { MutationCtx } from './_generated/server'
import { logActivity, resolveActor } from './lib/auth'
import * as data from './seedData'

function slugify(value: string) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')
}

async function clearTable(
  ctx: MutationCtx,
  table:
    | 'services'
    | 'pricingPlans'
    | 'products'
    | 'events'
    | 'galleryItems'
    | 'galleryVideos'
    | 'posts'
    | 'comments'
    | 'vacancies'
    | 'testimonials'
    | 'partners'
    | 'clients'
    | 'projects'
    | 'siteSettings'
) {
  const rows = await ctx.db.query(table).take(1000)
  for (const row of rows) {
    await ctx.db.delete(row._id)
  }
}

async function seedServices(ctx: MutationCtx) {
  const serviceHrefById: Record<string, string> = {
    cloud: '/services/cloud-computing',
    networking: '/services/networks',
    software: '/services/software',
    security: '/services/cyber-security',
    hardware: '/services/hardware',
    consulting: '/services/consulting',
  }

  let order = 0
  for (const service of data.mainServices) {
    await ctx.db.insert('services', {
      slug: service.id,
      title: service.title,
      shortDescription: service.description,
      fullDescription: service.fullDescription,
      icon: service.icon,
      image: null,
      features: service.features,
      href: serviceHrefById[service.id] ?? '/services',
      order: order++,
      published: true,
    })
  }

  for (const service of data.additionalServices) {
    const slug = slugify(service.title)
    await ctx.db.insert('services', {
      slug,
      title: service.title,
      shortDescription: service.description,
      fullDescription: service.description,
      icon: service.icon,
      image: null,
      features: [],
      href: service.link,
      order: order++,
      published: true,
    })
  }
}

async function seedPricing(ctx: MutationCtx) {
  const tiers = [
    { tier: 'basic', name: 'Basic', plans: data.basic },
    { tier: 'gold', name: 'Gold', plans: data.gold },
    { tier: 'premium', name: 'Premium', plans: data.premium },
    { tier: 'custom', name: 'Custom', plans: data.custom },
    { tier: 'email-silver', name: 'Email Silver', plans: data.EmailSilver },
    { tier: 'email-gold', name: 'Email Gold', plans: data.EmailGold },
    { tier: 'email-premium', name: 'Email Premium', plans: data.EmailPremium },
  ]

  let order = 0
  for (const group of tiers) {
    for (const plan of group.plans) {
      await ctx.db.insert('pricingPlans', {
        tier: group.tier,
        name: group.name,
        description: plan.title,
        features: [plan.title],
        order: order++,
        highlighted: group.tier === 'gold' || group.tier === 'email-gold',
      })
    }
  }
}

async function seedProducts(ctx: MutationCtx) {
  for (const product of data.products) {
    await ctx.db.insert('products', {
      slug: product.slug,
      title: product.title,
      brand: product.brand,
      sku: product.sku,
      category: product.category,
      categoryLabel: product.categoryLabel,
      shortDescription: product.shortDescription,
      description: product.description,
      price: product.price,
      compareAtPrice: product.compareAtPrice,
      inStock: product.inStock,
      imageUrl: product.imageUrl,
      gallery: product.gallery,
      features: product.features,
      specs: product.specs,
      published: product.published,
    })
  }
}

async function seedSocial(ctx: MutationCtx) {
  const partnerLogos = [
    '/images/cabs.png',
    '/images/oldMutual.jpeg',
    '/images/uz.png',
    '/images/govt.png',
    '/images/pare.png',
    '/images/potraz.png',
    '/images/econet.png',
    '/images/coinswap.jpeg',
  ]

  for (const [index, logo] of partnerLogos.entries()) {
    await ctx.db.insert('partners', {
      name: `Partner ${index + 1}`,
      logo,
      order: index,
      published: true,
    })
  }

  for (const [index, client] of data.clients.entries()) {
    await ctx.db.insert('clients', {
      name: client.name,
      logo: client.logo,
      order: index,
      published: true,
    })
  }

  for (const [index, project] of [
    ...data.networkingProjects.map((item) => ({ ...item, category: item.category })),
    ...data.softwareProjects.map((item) => ({ ...item, category: item.category })),
  ].entries()) {
    await ctx.db.insert('projects', {
      name: project.name,
      description: project.description,
      link: project.link,
      image: project.image,
      technologies: project.technologies,
      category: project.category,
      order: index,
      published: true,
    })
  }

  for (const [index, testimony] of data.testimonies.entries()) {
    await ctx.db.insert('testimonials', {
      quote: testimony.quote,
      name: testimony.name,
      role: testimony.role,
      company: testimony.company,
      rating: 5,
      order: index,
      published: true,
    })
  }
}

async function seedBlog(ctx: MutationCtx) {
  for (const post of data.mockPosts) {
    await ctx.db.insert('posts', {
      slug: post.slug,
      title: post.title,
      excerpt: post.excerpt,
      content: post.content,
      coverImage: post.coverImage,
      category: post.category,
      readTime: post.readTime,
      author: post.author,
      published: post.published,
      featured: post.featured,
      likes: post.likes,
      views: post.views,
    })
  }
}

async function seedEvents(ctx: MutationCtx) {
  const events = [
    {
      title: '2023 Cyber Security Summit',
      description:
        'Join industry leaders for a full day of keynotes, workshops and live demos covering ransomware resilience, zero-trust architecture and cloud security in Zimbabwe.',
      venue: 'Harare International Conference Centre',
      date: '2023-11-15',
      time: '08:30',
      category: 'Conference',
      imageUrl: '/images/2023 CYBER Summit Logo.png',
      link: null,
    },
    {
      title: 'Cloud Migration Masterclass',
      description:
        'A practical, hands-on session for IT teams planning their first production workload migration to the cloud.',
      venue: 'Compulink Head Office, Harare',
      date: '2024-02-08',
      time: '09:00',
      category: 'Workshop',
      imageUrl: '/images/cloud.webp',
      link: null,
    },
    {
      title: 'Compulink Technology Expo',
      description:
        'Explore our latest hardware, networking and software solutions with live demonstrations from partner vendors.',
      venue: 'Bulawayo Convention Centre',
      date: '2024-05-22',
      time: '10:00',
      category: 'Expo',
      imageUrl: '/images/class1.jpg',
      link: null,
    },
  ]

  for (const event of events) {
    await ctx.db.insert('events', {
      ...event,
      published: true,
    })
  }
}

async function seedGallery(ctx: MutationCtx) {
  for (const [index, image] of data.galleryImages.entries()) {
    await ctx.db.insert('galleryItems', {
      projectName: image.title,
      description: image.description,
      company: 'Compulink Systems',
      title: image.title,
      images: [image.src],
      category: image.category,
      order: index,
      published: true,
    })
  }

  for (const [index, video] of data.videos.entries()) {
    await ctx.db.insert('galleryVideos', {
      title: video.title,
      description: video.description,
      videoUrl: video.videoUrl,
      poster: null,
      category: video.category,
      order: index,
      published: true,
    })
  }
}

async function seedVacancies(ctx: MutationCtx) {
  for (const vacancy of data.vacancies) {
    await ctx.db.insert('vacancies', {
      slug: vacancy.slug,
      position: vacancy.position,
      status: vacancy.status,
      duration: vacancy.duration,
      description: vacancy.description,
      qualification: vacancy.qualification,
      category: vacancy.category,
      imageUrl: vacancy.imageUrl,
      published: true,
    })
  }
}

async function seedSettings(ctx: MutationCtx) {
  await ctx.db.insert('siteSettings', {
    key: 'hero',
    value: {
      ...data.heroCopy,
      stats: data.heroStats,
      industries: data.heroIndustries,
    },
  })

  await ctx.db.insert('siteSettings', {
    key: 'about',
    value: {
      features: data.features,
      stats: data.stats,
    },
  })

  await ctx.db.insert('siteSettings', {
    key: 'footer',
    value: {
      quickLinks: data.footerQuickLinks,
      services: data.footerServices,
      company: data.footerCompany,
      social: data.footerSocial,
    },
  })

  await ctx.db.insert('siteSettings', {
    key: 'ticket-options',
    value: {
      priorities: data.priorities,
      categories: data.categories,
      targetGroups: data.targetGroups,
    },
  })

  await ctx.db.insert('siteSettings', {
    key: 'brands',
    value: data.brands,
  })
}

async function runSeed(ctx: MutationCtx) {
  await Promise.all([
    clearTable(ctx, 'services'),
    clearTable(ctx, 'pricingPlans'),
    clearTable(ctx, 'products'),
    clearTable(ctx, 'events'),
    clearTable(ctx, 'galleryItems'),
    clearTable(ctx, 'galleryVideos'),
    clearTable(ctx, 'posts'),
    clearTable(ctx, 'comments'),
    clearTable(ctx, 'vacancies'),
    clearTable(ctx, 'testimonials'),
    clearTable(ctx, 'partners'),
    clearTable(ctx, 'clients'),
    clearTable(ctx, 'projects'),
    clearTable(ctx, 'siteSettings'),
  ])

  await seedServices(ctx)
  await seedPricing(ctx)
  await seedProducts(ctx)
  await seedSocial(ctx)
  await seedBlog(ctx)
  await seedEvents(ctx)
  await seedGallery(ctx)
  await seedVacancies(ctx)
  await seedSettings(ctx)
}

/** Run from the CLI: `npx convex run seed:run` */
export const run = mutation({
  args: {},
  handler: async (ctx) => {
    const actor = await resolveActor(ctx)
    await runSeed(ctx)
    await logActivity(ctx, actor, 'seeded', 'database')
    return { ok: true }
  },
})

/** Internal variant for scripts without a signed-in identity. */
export const runInternal = internalMutation({
  args: {},
  handler: async (ctx) => {
    await runSeed(ctx)
    return { ok: true }
  },
})

export const reset = mutation({
  args: {},
  handler: async (ctx) => {
    await runSeed(ctx)
    return { ok: true }
  },
})
