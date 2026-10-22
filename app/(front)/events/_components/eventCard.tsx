import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight, Calendar, Clock, MapPin } from 'lucide-react'
import getEvents from '@/lib/events/getEvents'
import { Badge } from '@/components/ui/badge'
import { EventModal } from './eventModal'

async function EventCard() {
  const events = await getEvents()
  const event = events[0]

  if (!event) {
    return (
      <div className="container mx-auto px-4 py-16">
        <div className="rounded-3xl border border-dashed border-border/60 py-20 text-center">
          <h2 className="text-lg font-semibold md:text-2xl">No featured event available</h2>
          <p className="mx-auto mt-3 max-w-md text-sm text-muted-foreground">
            We are currently planning our next event. Stay tuned for announcements and updates.
          </p>
        </div>
      </div>
    )
  }

  return (
    <section className="container mx-auto px-4 py-16">
      <div className="mb-10 text-center">
        <Badge className="mb-4 bg-brand/10 text-brand">Featured event</Badge>
        <h2 className="text-2xl font-bold md:text-4xl">Upcoming events</h2>
        <p className="mx-auto mt-3 max-w-2xl text-sm text-muted-foreground md:text-base">
          Do not miss out on our latest gatherings, workshops and experiences.
        </p>
      </div>

      <article className="overflow-hidden rounded-3xl border border-border/60 bg-card/50">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="relative min-h-[320px] bg-muted lg:min-h-[500px]">
            {event.imageUrl ? (
              <Image
                src={event.imageUrl}
                fill
                alt={event.title}
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            ) : (
              <Image
                src="/images/event.png"
                fill
                alt={event.title}
                className="object-contain p-10"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            )}
            <div className="absolute inset-x-6 bottom-6 rounded-2xl border border-border/60 bg-background/80 p-5 backdrop-blur">
              <p className="text-xs uppercase tracking-widest text-brand">Featured</p>
              <h3 className="mt-1 text-xl font-semibold md:text-2xl">{event.title}</h3>
            </div>
          </div>

          <div className="flex flex-col justify-center p-8 lg:p-12">
            <h2 className="text-2xl font-bold leading-tight md:text-3xl">{event.title}</h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground md:text-base">
              {event.description}
            </p>

            <dl className="mt-8 grid gap-4 rounded-2xl border border-border/60 bg-background/40 p-6 sm:grid-cols-3">
              <div>
                <dt className="mb-1 flex items-center gap-2 text-xs uppercase tracking-widest text-muted-foreground">
                  <MapPin className="h-3.5 w-3.5 text-brand" />
                  Venue
                </dt>
                <dd className="text-sm">{event.venue ?? 'To be announced'}</dd>
              </div>
              <div>
                <dt className="mb-1 flex items-center gap-2 text-xs uppercase tracking-widest text-muted-foreground">
                  <Calendar className="h-3.5 w-3.5 text-brand" />
                  Date
                </dt>
                <dd className="text-sm">{event.date ?? 'To be announced'}</dd>
              </div>
              <div>
                <dt className="mb-1 flex items-center gap-2 text-xs uppercase tracking-widest text-muted-foreground">
                  <Clock className="h-3.5 w-3.5 text-brand" />
                  Time
                </dt>
                <dd className="text-sm">{event.time ?? 'To be announced'}</dd>
              </div>
            </dl>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <EventModal eventTitle={event.title} />
              {event.link ? (
                <Link
                  href={event.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg border border-border/60 px-4 py-2 text-sm font-medium transition-colors hover:border-brand/50 hover:text-brand"
                >
                  View full details
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              ) : null}
            </div>
          </div>
        </div>
      </article>
    </section>
  )
}

export default EventCard
