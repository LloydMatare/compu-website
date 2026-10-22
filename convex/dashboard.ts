import { query } from './_generated/server'
import { requireQueryActor } from './lib/auth'

export const stats = query({
  handler: async (ctx) => {
    await requireQueryActor(ctx)

    const [
      products,
      posts,
      events,
      vacancies,
      testimonials,
      services,
      partners,
      clients,
      projects,
      messages,
      tickets,
      subscribers,
      comments,
      media,
    ] = await Promise.all([
      ctx.db.query('products').take(500),
      ctx.db.query('posts').take(500),
      ctx.db.query('events').take(500),
      ctx.db.query('vacancies').take(500),
      ctx.db.query('testimonials').take(500),
      ctx.db.query('services').take(500),
      ctx.db.query('partners').take(500),
      ctx.db.query('clients').take(500),
      ctx.db.query('projects').take(500),
      ctx.db.query('contactMessages').take(500),
      ctx.db.query('supportTickets').take(500),
      ctx.db.query('newsletterSubscribers').take(500),
      ctx.db.query('comments').take(500),
      ctx.db.query('media').take(500),
    ])

    const activity = await ctx.db
      .query('activityLog')
      .withIndex('by_at')
      .order('desc')
      .take(12)

    const now = Date.now()
    const day = 24 * 60 * 60 * 1000

    return {
      counts: {
        products: products.length,
        posts: posts.length,
        publishedPosts: posts.filter((post) => post.published).length,
        events: events.length,
        vacancies: vacancies.length,
        testimonials: testimonials.length,
        services: services.length,
        partners: partners.length,
        clients: clients.length,
        projects: projects.length,
        messages: messages.length,
        unreadMessages: messages.filter((message) => !message.read).length,
        tickets: tickets.length,
        openTickets: tickets.filter((ticket) => ticket.status !== 'resolved').length,
        subscribers: subscribers.length,
        pendingComments: comments.filter((comment) => !comment.approved).length,
        media: media.length,
      },
      totals: {
        views: posts.reduce((sum, post) => sum + post.views, 0),
        likes: posts.reduce((sum, post) => sum + post.likes, 0),
      },
      recent: {
        posts: posts
          .slice()
          .sort((a, b) => b._creationTime - a._creationTime)
          .slice(0, 5)
          .map((post) => ({
            id: post._id,
            title: post.title,
            published: post.published,
            views: post.views,
            likes: post.likes,
          })),
        tickets: tickets
          .slice()
          .sort((a, b) => b._creationTime - a._creationTime)
          .slice(0, 5)
          .map((ticket) => ({
            id: ticket._id,
            subject: ticket.subject ?? ticket.category,
            name: ticket.name,
            priority: ticket.priority,
            status: ticket.status,
          })),
        activity: activity.map((entry) => ({
          id: entry._id,
          actor: entry.actor,
          action: entry.action,
          entity: entry.entity,
          entityId: entry.entityId,
          at: entry.at,
        })),
      },
      growth: {
        subscribersLast30Days: subscribers.filter(
          (subscriber) => now - subscriber.subscribedAt < day * 30
        ).length,
        messagesLast7Days: messages.filter(
          (message) => now - message._creationTime < day * 7
        ).length,
      },
    }
  },
})
