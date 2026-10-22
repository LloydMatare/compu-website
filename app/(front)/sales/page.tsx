import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Sales',
  description:
    'Discover Compulink sales solutions — strategic, product-led selling for every region, product and customer. Talk to our sales team about hardware, software, cloud, security and networking.',
}

import React from 'react'
import { ChartColumn, CircleCheck, Globe, Package, Target } from 'lucide-react'
import GsapReveal from '@/components/ui/gsap-reveal'
import LinkButton from '@/components/link-button'
import Hero from '../_components/hero'
import { EnquiryForm } from './_components/enquiry-form'
import { CONTACT } from '@/lib/constants/site'

const pillars = [
  {
    icon: Target,
    title: 'Solution-Led Selling',
    description:
      'We start with your business outcomes, then map the right mix of hardware, software, connectivity and managed services to get you there.',
  },
  {
    icon: Globe,
    title: 'Regional Reach',
    description:
      'Serving Harare and Bulawayo with on-site delivery, remote support and reseller channels that cover the wider region.',
  },
  {
    icon: Package,
    title: 'Product Portfolio',
    description:
      'Servers, workstations, networking gear, storage and peripherals from the brands your engineers already trust.',
  },
  {
    icon: ChartColumn,
    title: 'Lifecycle Value',
    description:
      'Procurement, deployment, support and refresh handled as one continuous relationship instead of one-off transactions.',
  },
]

const buyingOptions = [
  {
    title: 'Enterprise Hardware',
    description: 'Servers, storage, workstations and networking equipment with warranty and supply.',
    link: '/services/hardware',
  },
  {
    title: 'Cloud & Hosting',
    description: 'Migration, optimisation and managed cloud services for regulated workloads.',
    link: '/services/cloud-computing',
  },
  {
    title: 'Custom Software',
    description: 'Web, mobile and enterprise systems built around your operating model.',
    link: '/services/software',
  },
  {
    title: 'Cyber Security',
    description: 'Assessment, hardening, monitoring and awareness for growing organisations.',
    link: '/services/cyber-security',
  },
  {
    title: 'Networking',
    description: 'Structured cabling, LAN/WAN design, wireless and site-to-site connectivity.',
    link: '/services/networks',
  },
  {
    title: 'Managed IT',
    description: 'Monitoring, maintenance and a support desk that answers when it matters.',
    link: '/services/technical',
  },
]

function Sales() {
  return (
    <div className="min-h-screen">
      <Hero
        backImage="host.webp"
        image=""
        title="Sales Solutions"
        subtitle="Product, service and partnership sales for modern organisations"
        description="Thirty years of selling technology that keeps working after the invoice — consultative selling, genuine stock and a support bench behind every deal."
        primaryButtonText="Talk to Sales"
        primaryButtonLink="#sales-enquiry"
        secondaryButtonText="Browse Services"
        secondaryButtonLink="/services"
        showStats={false}
      />

      <section className="relative overflow-hidden border-b border-border/60 bg-background py-16 lg:py-24">
        <div className="pointer-events-none absolute inset-0 grid-fade opacity-40" aria-hidden="true" />

        <div className="container relative mx-auto px-4">
          <GsapReveal className="mx-auto mb-12 max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-widest text-brand">Our Approach</p>
            <h2 className="mt-3 font-display text-2xl font-bold md:text-4xl">
              Sales built around <span className="text-gradient-brand">your outcomes</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">
              We combine deep product knowledge with honest scoping, so the solution you receive is
              the one that solves your problem — not the one that fits a price list.
            </p>
          </GsapReveal>

          <GsapReveal
            childrenSelector="[data-pillar]"
            className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4"
          >
            {pillars.map((pillar) => (
              <div
                key={pillar.title}
                data-pillar
                className="group rounded-2xl border border-border/60 bg-card/50 p-6 transition-all duration-500 ease-out-expo hover:-translate-y-1 hover:border-brand/40 hover:shadow-[0_0_50px_-30px_var(--glow)]"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-brand/20 bg-brand/10 text-brand transition-colors duration-300 group-hover:bg-brand/20">
                  <pillar.icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <h3 className="mt-5 font-display text-lg font-bold text-foreground">{pillar.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {pillar.description}
                </p>
              </div>
            ))}
          </GsapReveal>
        </div>
      </section>

      <section className="relative overflow-hidden border-b border-border/60 bg-surface/30 py-16 lg:py-24">
        <div className="pointer-events-none absolute inset-0 grid-fade opacity-40" aria-hidden="true" />

        <div className="container relative mx-auto px-4">
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
            <GsapReveal distance={48}>
              <p className="text-xs font-semibold uppercase tracking-widest text-brand">
                What You Can Buy
              </p>
              <h2 className="mt-3 font-display text-2xl font-bold md:text-4xl">
                Everything in <span className="text-gradient-brand">one partner</span>
              </h2>
              <div className="mt-5 h-px w-16 bg-gradient-to-r from-brand to-transparent" aria-hidden="true" />
              <p className="mt-5 text-sm leading-relaxed text-muted-foreground md:text-base">
                One supplier for hardware, software and the services that keep them performing —
                with a single point of accountability for the whole stack.
              </p>

              <ul className="mt-8 space-y-4">
                {buyingOptions.map((option) => (
                  <li key={option.title}>
                    <LinkButton
                      link={option.link}
                      variant="ghost"
                      className="w-full justify-between rounded-xl border border-border/60 bg-card/40 px-5 py-4 text-left transition-all duration-300 ease-out-expo hover:-translate-y-0.5 hover:border-brand/40 hover:bg-card/70"
                    >
                      <span>
                        <span className="block font-display text-base font-bold text-foreground">
                          {option.title}
                        </span>
                        <span className="mt-1 block text-sm text-muted-foreground">
                          {option.description}
                        </span>
                      </span>
                    </LinkButton>
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex flex-col gap-3 rounded-2xl border border-border/60 bg-card/50 p-6 backdrop-blur-xl sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-brand">
                    Sales line
                  </p>
                  <a
                    href={`tel:${CONTACT.phone}`}
                    className="mt-1 block font-display text-xl font-bold text-foreground transition-colors hover:text-brand focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
                  >
                    {CONTACT.phone}
                  </a>
                  <p className="mt-1 text-xs text-muted-foreground">{CONTACT.harareAddress}</p>
                </div>
                <LinkButton
                  href={`mailto:${CONTACT.email}?subject=Sales%20enquiry`}
                  variant="outline"
                  className="rounded-full border-border/70 bg-card/60 px-6 font-semibold hover:border-brand/40"
                >
                  Email Sales
                </LinkButton>
              </div>
            </GsapReveal>

            <GsapReveal distance={48} delay={0.1}>
              <div
                id="sales-enquiry"
                className="scroll-mt-28 rounded-3xl border border-border/60 bg-card/60 p-6 shadow-[0_0_80px_-40px_var(--glow)] backdrop-blur-xl md:p-10"
              >
                <p className="text-xs font-semibold uppercase tracking-widest text-brand">
                  Sales Enquiry
                </p>
                <h2 className="mt-3 font-display text-2xl font-bold md:text-3xl">
                  Request a <span className="text-gradient-brand">quotation</span>
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  Send us your requirements and a consultant will come back with a scoped proposal.
                </p>

                <div className="mt-8">
                  <EnquiryForm />
                </div>
              </div>
            </GsapReveal>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-background py-16 lg:py-20">
        <div className="container relative mx-auto px-4">
          <GsapReveal className="mx-auto max-w-3xl rounded-3xl border border-border/60 bg-card/50 p-8 text-center backdrop-blur-xl md:p-12">
            <CircleCheck className="mx-auto h-8 w-8 text-brand" aria-hidden="true" />
            <h2 className="mt-4 font-display text-2xl font-bold md:text-3xl">
              Ready to scope the <span className="text-gradient-brand">right solution</span>?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">
              Book a consultation and we will walk your current environment, risks and priorities
              with you.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <LinkButton
                link="/booking-meeting"
                className="rounded-full px-8 font-semibold shadow-[0_0_40px_-12px_var(--glow)]"
              >
                Book a Meeting
              </LinkButton>
              <LinkButton
                link="/services"
                variant="outline"
                className="rounded-full border-border/70 bg-card/50 px-8 font-semibold hover:border-brand/40"
              >
                Explore Services
              </LinkButton>
            </div>
          </GsapReveal>
        </div>
      </section>
    </div>
  )
}

export default Sales
