import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Book a Meeting',
  description:
    'Schedule a meeting with Compulink Systems. Book a consultation for IT solutions and services.',
}

import React from 'react'
import { Clock, Mail, MapPin, PhoneCall } from 'lucide-react'
import GsapReveal from '@/components/ui/gsap-reveal'
import LinkButton from '@/components/link-button'
import Hero from '../_components/hero'
import { BookingForm } from './_components/booking-form'
import { CONTACT } from '@/lib/constants/site'

const expectations = [
  {
    icon: Clock,
    title: '45-minute session',
    description: 'A focused conversation about your environment, constraints and outcomes.',
  },
  {
    icon: PhoneCall,
    title: 'Right expertise',
    description: 'You speak to a consultant who works with organisations like yours.',
  },
  {
    icon: MapPin,
    title: 'Remote or on-site',
    description: 'Meet over video, by phone, or let us come to your premises in Harare.',
  },
]

function BookMeeting() {
  return (
    <div className="min-h-screen">
      <Hero
        backImage="hardware.jpg"
        image=""
        title="Book a Meeting"
        subtitle="A short conversation, a clear next step"
        description="Tell us what you are working on and we will bring the right people to the call — no obligation, no sales script."
        primaryButtonText="Request a Slot"
        primaryButtonLink="#booking-form"
        secondaryButtonText="Our Services"
        secondaryButtonLink="/services"
        showStats={false}
      />

      <section className="relative overflow-hidden border-b border-border/60 bg-background py-16 lg:py-24">
        <div className="pointer-events-none absolute inset-0 grid-fade opacity-40" aria-hidden="true" />

        <div className="container relative mx-auto px-4">
          <GsapReveal
            childrenSelector="[data-expectation]"
            className="mb-14 grid grid-cols-1 gap-6 md:grid-cols-3"
          >
            {expectations.map((expectation) => (
              <div
                key={expectation.title}
                data-expectation
                className="rounded-2xl border border-border/60 bg-card/50 p-6 transition-all duration-500 ease-out-expo hover:-translate-y-1 hover:border-brand/40 hover:shadow-[0_0_50px_-30px_var(--glow)]"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-brand/20 bg-brand/10 text-brand">
                  <expectation.icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <h3 className="mt-5 font-display text-lg font-bold text-foreground">
                  {expectation.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {expectation.description}
                </p>
              </div>
            ))}
          </GsapReveal>

          <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
            <GsapReveal distance={48}>
              <div
                id="booking-form"
                className="scroll-mt-28 rounded-3xl border border-border/60 bg-card/60 p-6 shadow-[0_0_80px_-40px_var(--glow)] backdrop-blur-xl md:p-10"
              >
                <p className="text-xs font-semibold uppercase tracking-widest text-brand">
                  Book a Meeting
                </p>
                <h2 className="mt-3 font-display text-2xl font-bold md:text-3xl">
                  Reserve your <span className="text-gradient-brand">consultation</span>
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  Complete the form and our team will confirm a time that suits you.
                </p>

                <div className="mt-8">
                  <BookingForm />
                </div>
              </div>
            </GsapReveal>

            <GsapReveal distance={48} delay={0.1}>
              <div className="rounded-3xl border border-border/60 bg-surface/40 p-6 backdrop-blur-xl md:p-8">
                <p className="text-xs font-semibold uppercase tracking-widest text-brand">
                  Other ways to reach us
                </p>
                <h2 className="mt-3 font-display text-xl font-bold md:text-2xl">
                  We are only a message away
                </h2>

                <ul className="mt-8 space-y-4">
                  <li className="flex items-start gap-4 rounded-xl border border-border/60 bg-card/40 px-4 py-4">
                    <PhoneCall className="mt-0.5 h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
                    <span>
                      <span className="block text-xs uppercase tracking-widest text-muted-foreground">
                        Harare
                      </span>
                      <a
                        href={`tel:${CONTACT.phone}`}
                        className="font-display text-base font-bold text-foreground transition-colors hover:text-brand focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
                      >
                        {CONTACT.phone}
                      </a>
                    </span>
                  </li>
                  <li className="flex items-start gap-4 rounded-xl border border-border/60 bg-card/40 px-4 py-4">
                    <PhoneCall className="mt-0.5 h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
                    <span>
                      <span className="block text-xs uppercase tracking-widest text-muted-foreground">
                        Bulawayo
                      </span>
                      <a
                        href={`tel:${CONTACT.bulawayoPhone}`}
                        className="font-display text-base font-bold text-foreground transition-colors hover:text-brand focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
                      >
                        {CONTACT.bulawayoPhone}
                      </a>
                    </span>
                  </li>
                  <li className="flex items-start gap-4 rounded-xl border border-border/60 bg-card/40 px-4 py-4">
                    <Mail className="mt-0.5 h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
                    <span>
                      <span className="block text-xs uppercase tracking-widest text-muted-foreground">
                        Email
                      </span>
                      <a
                        href={`mailto:${CONTACT.email}?subject=Meeting%20request`}
                        className="font-display text-base font-bold text-foreground transition-colors hover:text-brand focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
                      >
                        {CONTACT.email}
                      </a>
                    </span>
                  </li>
                  <li className="flex items-start gap-4 rounded-xl border border-border/60 bg-card/40 px-4 py-4">
                    <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
                    <span>
                      <span className="block text-xs uppercase tracking-widest text-muted-foreground">
                        Offices
                      </span>
                      <span className="block text-sm text-foreground">
                        {CONTACT.harareAddress} &amp; {CONTACT.bulawayoAddress}
                      </span>
                    </span>
                  </li>
                </ul>

                <div className="mt-8 border-t border-border/60 pt-6">
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    Looking for support rather than a consultation? Our support desk is available
                    around the clock.
                  </p>
                  <div className="mt-4 flex flex-col gap-3 sm:flex-row">
                    <LinkButton
                      link="/ticket"
                      className="rounded-full px-6 font-semibold shadow-[0_0_40px_-12px_var(--glow)]"
                    >
                      Raise a Support Ticket
                    </LinkButton>
                    <LinkButton
                      link="/contact"
                      variant="outline"
                      className="rounded-full border-border/70 bg-card/50 px-6 font-semibold hover:border-brand/40"
                    >
                      Contact Page
                    </LinkButton>
                  </div>
                </div>
              </div>
            </GsapReveal>
          </div>
        </div>
      </section>
    </div>
  )
}

export default BookMeeting
