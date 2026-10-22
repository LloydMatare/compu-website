import type { Metadata } from 'next'
import EventCards from './_components/eventCards'
import EventCard from './_components/eventCard'
import Hero from '../_components/hero'
import GsapReveal from '@/components/ui/gsap-reveal'

export const metadata: Metadata = {
  title: 'Events',
  description:
    'Upcoming events, workshops, and gatherings from Compulink Systems. Stay connected with technology events in Zimbabwe.',
}

async function Events() {
  return (
    <div>
      <Hero backImage="class1.jpg" image="" />

      <EventCard />

      <section className="container mx-auto px-4 py-16">
        <GsapReveal className="mb-12 text-center">
          <h2 className="text-2xl font-bold md:text-4xl">All events</h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-muted-foreground md:text-base">
            Explore our complete calendar of upcoming events, workshops and gatherings.
          </p>
        </GsapReveal>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <EventCards />
        </div>
      </section>
    </div>
  )
}

export default Events
