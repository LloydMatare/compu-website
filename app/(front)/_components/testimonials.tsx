'use client'

import React from 'react'
import Link from 'next/link'
import Testimonies from './testimonies'
import GsapReveal from '@/components/ui/gsap-reveal'
import LinkButton from '@/components/link-button'
import { ArrowRight } from 'lucide-react'

function Testimonials() {
  return (
    <section className="relative overflow-hidden border-y border-border/60">
      <div
        className="absolute inset-0 bg-[url('/images/support.webp')] bg-cover bg-center bg-fixed"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-gradient-to-l from-background/95 via-background/85 to-background/60 backdrop-blur-sm"
        aria-hidden="true"
      />
      <div className="pointer-events-none absolute inset-0 grid-fade opacity-40" aria-hidden="true" />

      <div className="container relative mx-auto px-4 py-16 lg:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <GsapReveal>
            <Testimonies />
          </GsapReveal>

          <GsapReveal delay={0.1}>
            <p className="text-xs font-semibold uppercase tracking-widest text-brand">
              Testimonials
            </p>
            <h2 className="mt-3 font-display text-2xl font-bold leading-tight md:text-4xl">
              What Our <span className="text-gradient-brand">Clients Say</span>
            </h2>
            <div className="mt-5 h-px w-16 bg-gradient-to-r from-brand to-transparent" aria-hidden="true" />

            <div className="mt-6 space-y-4">
              <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
                Working with Compulink has been a game-changer for our business. Their deep
                expertise in hardware, software, and networking solutions ensured that we received
                a comprehensive and tailored approach to our tech needs.
              </p>
              <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
                From upgrading our infrastructure to optimizing our software stack and
                streamlining our network, their team demonstrated exceptional knowledge and
                support at every step.
              </p>
              <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
                Their commitment to excellence and innovation has significantly enhanced our
                operational efficiency and performance. I highly recommend{' '}
                <Link
                  href="https://compulink.co.zw/"
                  className="font-medium text-brand underline-offset-4 transition-colors hover:text-brand/80 focus-visible:ring-2 focus-visible:ring-ring"
                >
                  Compulink
                </Link>{' '}
                to anyone seeking reliable and cutting-edge tech solutions.
              </p>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <LinkButton
                link="/blog"
                name="Read More"
                className="rounded-full px-6 font-semibold shadow-[0_0_40px_-12px_var(--glow)]"
              />
              <LinkButton
                link="/portfolio"
                variant="outline"
                className="rounded-full border-border/70 bg-card/50 px-6 font-semibold backdrop-blur-sm hover:border-brand/40"
              >
                View All
                <ArrowRight className="ml-2 h-4 w-4" />
              </LinkButton>
            </div>
          </GsapReveal>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
