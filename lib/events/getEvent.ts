// lib/events/getEvent.ts
import { fetchQuery } from 'convex/nextjs'
import { api } from '@/convex/_generated/api'
import type { SiteEvent } from './getEvents'

export default async function getEvent(id: string): Promise<SiteEvent | null> {
  try {
    // Convex's `get` expects an Id<'events'>, not a raw string.
    // Cast is fine here — Convex will reject malformed IDs and we catch below.
    const event = await fetchQuery(api.events.get, {
      id: id as SiteEvent['_id'],
    })
    if (!event) return null
    return { ...event, id: event._id }
  } catch {
    return null
  }
}