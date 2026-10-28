// app/events/[id]/page.tsx
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import {
  ArrowLeft,
  ArrowUpRight,
  Calendar,
  Clock,
  MapPin,
  Share2,
} from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import GsapReveal from '@/components/ui/gsap-reveal'
import getEvent from '@/lib/events/getEvent'
import getEvents from '@/lib/events/getEvents'

type Params = Promise<{ id: string }>

export async function generateMetadata({
  params,
}: {
  params: Params
}): Promise<Metadata> {
  const { id } = await params
  const event = await getEvent(id).catch(() => null)

  if (!event) {
    return { title: 'Event not found' }
  }

  return {
    title: event.title,
    description: event.description?.slice(0, 160) ?? 'Event details',
    openGraph: event.imageUrl
      ? { images: [{ url: event.imageUrl }] }
      : undefined,
  }
}

export default async function EventDetailPage({
  params,
}: {
  params: Params
}) {
  const { id } = await params
  const [event, allEvents] = await Promise.all([
    getEvent(id).catch(() => null),
    getEvents().catch(() => []),
  ])

  if (!event) notFound()

  const relatedEvents = allEvents.filter((e) => e.id !== event.id).slice(0, 3)

  const isRegistrationOpen = !!event.link && event.published === true

  return (
    <div className="pb-16">
      {/* Hero / Header */}
      <section className="relative">
        <div className="relative h-[45vh] min-h-[320px] w-full overflow-hidden bg-muted md:h-[55vh]">
          {event.imageUrl ? (
            <Image
              src={event.imageUrl}
              alt={event.title}
              fill
              priority
              className="object-cover"
            />
          ) : (
            <div className="h-full w-full bg-gradient-to-br from-brand/30 via-brand/10 to-background" />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />

          <div className="container absolute inset-x-0 bottom-0 mx-auto px-4 pb-8">
            <Link
              href="/events"
              className="mb-4 inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-brand"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to events
            </Link>

            <Badge className="mb-3 bg-brand text-brand-foreground">
              {event.category || 'Event'}
            </Badge>
            <h1 className="max-w-3xl text-3xl font-bold leading-tight md:text-5xl">
              {event.title}
            </h1>
          </div>
        </div>
      </section>

      {/* Content + Sidebar */}
      <section className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">
          {/* Main content */}
          <div className="lg:col-span-2">
            <GsapReveal>
              <div className="prose prose-sm md:prose-base dark:prose-invert max-w-none">
                <h2 className="text-xl font-semibold md:text-2xl">
                  About this event
                </h2>
                <p className="mt-4 whitespace-pre-line text-muted-foreground">
                  {event.description ||
                    'More details about this event will be shared soon.'}
                </p>
              </div>
            </GsapReveal>
          </div>

          {/* Sidebar - details + registration */}
          <aside className="lg:col-span-1">
            <div className="sticky top-24 space-y-4">
              <div className="rounded-2xl border border-border/60 bg-card/50 p-6">
                <h2 className="mb-4 text-lg font-semibold">Event details</h2>
                <ul className="space-y-4 text-sm">
                  {event.date ? (
                    <li className="flex items-start gap-3">
                      <Calendar className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                      <div>
                        <p className="font-medium">Date</p>
                        <p className="text-muted-foreground">{event.date}</p>
                      </div>
                    </li>
                  ) : null}
                  {event.time ? (
                    <li className="flex items-start gap-3">
                      <Clock className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                      <div>
                        <p className="font-medium">Time</p>
                        <p className="text-muted-foreground">{event.time}</p>
                      </div>
                    </li>
                  ) : null}
                  {event.venue ? (
                    <li className="flex items-start gap-3">
                      <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                      <div>
                        <p className="font-medium">Venue</p>
                        <p className="text-muted-foreground">{event.venue}</p>
                      </div>
                    </li>
                  ) : null}
                </ul>
              </div>

              {/* Registration card */}
              <div className="rounded-2xl border border-brand/30 bg-brand/5 p-6">
                <h2 className="text-lg font-semibold">
                  {isRegistrationOpen
                    ? 'Reserve your spot'
                    : 'Registration closed'}
                </h2>
                <p className="mt-2 text-sm text-muted-foreground">
                  {isRegistrationOpen
                    ? 'Secure your place at this event before seats run out.'
                    : 'Registration for this event is currently closed. Stay tuned for the next one.'}
                </p>

                {isRegistrationOpen ? (
                  <Button
                    asChild
                    className="mt-5 w-full bg-brand text-brand-foreground hover:bg-brand/90"
                  >
                    <Link
                      href={event.link!}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Register now
                      <ArrowUpRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                ) : (
                  <Button disabled className="mt-5 w-full">
                    Registration unavailable
                  </Button>
                )}
              </div>

              <button
                type="button"
                className="flex w-full items-center justify-center gap-2 rounded-xl border border-border/60 py-3 text-sm font-medium text-muted-foreground transition-colors hover:border-brand/40 hover:text-brand"
              >
                <Share2 className="h-4 w-4" />
                Share this event
              </button>
            </div>
          </aside>
        </div>

        {/* Related events */}
        {relatedEvents.length > 0 && (
          <GsapReveal className="mt-20">
            <h2 className="mb-8 text-2xl font-bold">Other events</h2>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {relatedEvents.map((e) => (
                <Link
                  key={e.id}
                  href={`/events/${e.id}`}
                  className="group overflow-hidden rounded-2xl border border-border/60 bg-card/50 transition-all hover:-translate-y-1 hover:border-brand/40"
                >
                  <div className="relative aspect-video overflow-hidden bg-muted">
                    {e.imageUrl ? (
                      <Image
                        src={e.imageUrl}
                        alt={e.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    ) : null}
                  </div>
                  <div className="p-4">
                    <p className="line-clamp-2 font-semibold group-hover:text-brand">
                      {e.title}
                    </p>
                    {e.date ? (
                      <p className="mt-2 flex items-center gap-1.5 text-xs text-muted-foreground">
                        <Calendar className="h-3.5 w-3.5 text-brand" />
                        {e.date}
                      </p>
                    ) : null}
                  </div>
                </Link>
              ))}
            </div>
          </GsapReveal>
        )}
      </section>
    </div>
  )
}