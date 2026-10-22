import type { Metadata } from 'next'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, CircleCheck, Globe } from 'lucide-react'
import GsapReveal from '@/components/ui/gsap-reveal'
import LinkButton from '@/components/link-button'
import Hero from "@/app/(front)/_components/hero"

interface TechnicalDetailPageProps {
  params: Promise<{ id: string }>
}

function toTitle(value: string) {
  return value
    .split(/[-_]/)
    .filter(Boolean)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
}

export async function generateMetadata({
  params,
}: TechnicalDetailPageProps): Promise<Metadata> {
  const { id } = await params
  const title = toTitle(id)

  return {
    title: title || 'Support Engagement',
    description: `${title} — managed IT and technical support delivered by Compulink Systems.`,
  }
}

async function TechnicalPage({ params }: TechnicalDetailPageProps) {
  const { id } = await params
  const title = toTitle(id)

  return (
    <div className="min-h-screen">
      <Hero
        backImage="support.webp"
        image=""
        title={title || 'Support Engagement'}
        subtitle="Managed IT & technical support"
        description="Proactive monitoring, fast response and maintenance that keeps your estate productive."
        primaryButtonText="Request Support"
        primaryButtonLink="/contact?type=support"
        secondaryButtonText="All Services"
        secondaryButtonLink="/services"
        showStats={false}
      />

      <section className="relative overflow-hidden bg-background py-16 lg:py-24">
        <div className="pointer-events-none absolute inset-0 grid-fade opacity-40" aria-hidden="true" />

        <div className="container relative mx-auto px-4">
          <GsapReveal className="mb-10">
            <Link
              href="/services/technical"
              className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/40 px-4 py-2 text-sm text-muted-foreground transition-all duration-300 ease-out-expo hover:-translate-y-0.5 hover:border-brand/40 hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
            >
              <ArrowLeft className="h-4 w-4" aria-hidden="true" />
              Back to technical support
            </Link>
          </GsapReveal>

          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
            <GsapReveal distance={48} className="relative">
              <div className="relative overflow-hidden rounded-3xl border border-border/60 bg-card/40 shadow-[0_0_60px_-24px_var(--glow)]">
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src="/images/oldMutual.jpeg"
                    alt={`${title} support engagement`}
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-background/10 to-transparent" />
                </div>
              </div>
            </GsapReveal>

            <GsapReveal distance={48} delay={0.1}>
              <p className="text-xs font-semibold uppercase tracking-widest text-brand">
                Engagement Overview
              </p>
              <h2 className="mt-3 font-display text-2xl font-bold md:text-4xl">
                {title} <span className="text-gradient-brand">under watch</span>
              </h2>
              <div className="mt-5 h-px w-16 bg-gradient-to-r from-brand to-transparent" aria-hidden="true" />

              <p className="mt-5 text-sm leading-relaxed text-muted-foreground md:text-base">
                Our support model is built around prevention: monitored systems, scheduled
                maintenance and a helpdesk that escalates properly. You get a named engineer
                relationship and reporting that shows what we actually fixed.
              </p>

              <ul className="mt-8 space-y-3">
                {[
                  'Proactive monitoring and health checks',
                  'Scheduled patching, backups and maintenance windows',
                  'Priority response for critical incidents',
                  'Asset, licence and warranty tracking',
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 rounded-xl border border-border/60 bg-card/40 px-4 py-3"
                  >
                    <CircleCheck className="h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
                    <span className="text-sm text-foreground">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex items-center gap-2 text-sm text-muted-foreground">
                <Globe className="h-4 w-4 text-brand" aria-hidden="true" />
                <Link
                  href="/portfolio"
                  className="transition-colors hover:text-brand focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
                >
                  View related client work
                </Link>
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <LinkButton
                  link="/contact?type=support"
                  className="rounded-full px-6 font-semibold shadow-[0_0_40px_-12px_var(--glow)]"
                >
                  Talk to Support
                </LinkButton>
                <LinkButton
                  link="/ticket"
                  variant="outline"
                  className="rounded-full border-border/70 bg-card/50 px-6 font-semibold hover:border-brand/40"
                >
                  Raise a Ticket
                </LinkButton>
              </div>
            </GsapReveal>
          </div>
        </div>
      </section>
    </div>
  )
}

export default TechnicalPage
