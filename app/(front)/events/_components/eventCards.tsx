import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight, Calendar, Clock, MapPin } from 'lucide-react'
import getEvents from '@/lib/events/getEvents'
import { Badge } from '@/components/ui/badge'

async function EventCards() {
  const events = await getEvents()

  if (events.length === 0) {
    return (
      <div className="col-span-full rounded-2xl border border-dashed border-border/60 py-20 text-center">
        <h3 className="text-lg font-semibold">No events available</h3>
        <p className="mt-2 text-sm text-muted-foreground">
          There are currently no upcoming events. Check back soon for updates.
        </p>
      </div>
    )
  }

  return (
    <>
      {events.map((event) => (
        <article
          key={event.id}
          className="group flex flex-col overflow-hidden rounded-2xl border border-border/60 bg-card/50 transition-all hover:-translate-y-1 hover:border-brand/40"
        >
          <div className="relative aspect-video overflow-hidden bg-muted">
            {event.imageUrl ? (
              <Image
                src={event.imageUrl}
                height={280}
                width={400}
                alt={event.title}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            ) : null}
            <Badge className="absolute left-4 top-4 bg-brand text-brand-foreground">
              {event.category || 'Event'}
            </Badge>
          </div>

          <div className="flex flex-1 flex-col p-6">
            <Link href={`events/${event.id}`} className="mb-3 text-lg font-semibold leading-snug transition-colors group-hover:text-brand">
              {event.title}
            </Link>
            <p className="mb-5 line-clamp-3 flex-1 text-sm leading-relaxed text-muted-foreground">
              {event.description}
            </p>

            <div className="mb-5 space-y-2 text-sm text-muted-foreground">
              {event.venue ? (
                <p className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-brand" />
                  {event.venue}
                </p>
              ) : null}
              {event.date ? (
                <p className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-brand" />
                  {event.date}
                </p>
              ) : null}
              {event.time ? (
                <p className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-brand" />
                  {event.time}
                </p>
              ) : null}
            </div>

            <div className="border-t border-border/50 pt-4">
              {event.link ? (
                <Link
                  href={event.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-brand"
                >
                  View details
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              ) : (
                <span className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground">
                  View details
                  <ArrowUpRight className="h-4 w-4" />
                </span>
              )}
            </div>
          </div>
        </article>
      ))}
    </>
  )
}

export default EventCards
