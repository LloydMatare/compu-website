import { fetchQuery } from 'convex/nextjs'
import { api } from '@/convex/_generated/api'

export type SiteEvent = Awaited<ReturnType<typeof fetchQuery<typeof api.events.list>>>[number] & {
  id: string
}

export default async function getEvents(): Promise<SiteEvent[]> {
  const events = await fetchQuery(api.events.list, { publishedOnly: true })
  return events.map((event) => ({ ...event, id: event._id }))
}
