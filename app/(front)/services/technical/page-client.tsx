'use client'

import Image from 'next/image'
import React from 'react'
import { Clock, Headphones, Monitor, Server, Users, Wrench } from 'lucide-react'
import GsapReveal from '@/components/ui/gsap-reveal'
import LinkButton from '@/components/link-button'
import { CONTACT } from '@/lib/constants/site'
import Hero from '../../_components/hero'
import { ServiceCard } from '../../_components/service'

const supportServices = [
  {
    icon: Headphones,
    title: 'Help Desk Support',
    description: '24/7 technical assistance for your users and staff',
  },
  {
    icon: Clock,
    title: 'Quick Response',
    description: 'Rapid incident response and problem resolution',
  },
  {
    icon: Users,
    title: 'User Training',
    description: 'Comprehensive training for your team on new systems',
  },
  {
    icon: Wrench,
    title: 'Hardware Maintenance',
    description: 'Regular maintenance and repair of IT equipment',
  },
  {
    icon: Monitor,
    title: 'Software Support',
    description: 'Installation, configuration and troubleshooting',
  },
  {
    icon: Server,
    title: 'System Monitoring',
    description: 'Proactive monitoring and preventive maintenance',
  },
]

function Technical() {
  return (
    <div>
      <Hero
        backImage="support.webp"
        image=""
        title="Technical Support"
        subtitle="24/7 IT support for uninterrupted business operations"
        description="ICT support technicians diagnose and resolve technical problems so your people, systems and services keep working."
        primaryButtonText="Get Support Plan"
        primaryButtonLink="/contact?service=support-contract"
        secondaryButtonText="Raise a Support Ticket"
        secondaryButtonLink="/ticket"
        showStats={false}
      />

      <section className="relative overflow-hidden border-b border-border/60 bg-background py-16 lg:py-24">
        <div className="pointer-events-none absolute inset-0 grid-fade opacity-40" aria-hidden="true" />

        <div className="container relative mx-auto px-4">
          <GsapReveal className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-brand">
                Service Overview
              </p>
              <h2 className="mt-3 font-display text-2xl font-bold leading-tight md:text-4xl">
                Technical <span className="text-gradient-brand">Support</span> Services
              </h2>
              <div className="mt-5 h-px w-16 bg-gradient-to-r from-brand to-transparent" aria-hidden="true" />

              <p className="mt-5 text-sm leading-relaxed text-muted-foreground md:text-base">
                ICT support technicians provide technical support and assistance for users of
                computer infrastructure and web technologies. They undertake diagnosis and
                resolution of technical problems to ensure smooth business operations.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground md:text-base">
                Our support team answers queries via telephone, email, chat or instant message,
                identifies technical problems and solutions, compiles reports and works with
                colleagues to rectify common issues across various industries.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <LinkButton
                  link="/contact?service=support-contract"
                  className="rounded-full px-6 font-semibold shadow-[0_0_40px_-12px_var(--glow)]"
                >
                  Get Support Plan
                </LinkButton>
                <LinkButton
                  link={`tel:${CONTACT.phone.replace(/\s/g, '')}`}
                  variant="outline"
                  className="rounded-full border-border/70 bg-card/50 px-6 font-semibold backdrop-blur-sm hover:border-brand/40"
                >
                  Emergency Support: {CONTACT.phone}
                </LinkButton>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-3xl border border-border/60 bg-card/40 shadow-[0_0_60px_-30px_var(--glow)]">
              <div className="relative aspect-[16/10] w-full">
                <Image
                  src="/images/support.webp"
                  alt="Compulink Systems technical support engineers"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/70 to-transparent" />
              </div>
            </div>
          </GsapReveal>
        </div>
      </section>

      {/* Support services grid */}
      <section className="relative overflow-hidden border-b border-border/60 bg-surface/30 py-16 lg:py-24">
        <div className="container relative mx-auto px-4">
          <GsapReveal className="mx-auto mb-12 max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-widest text-brand">
              Support Services
            </p>
            <h2 className="mt-3 font-display text-2xl font-bold md:text-4xl">
              Our <span className="text-gradient-brand">support services</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">
              Comprehensive technical support solutions to keep your business running smoothly.
            </p>
          </GsapReveal>

          <GsapReveal
            childrenSelector="[data-support-card]"
            className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
          >
            {supportServices.map((service) => (
              <div
                key={service.title}
                data-support-card
                className="group rounded-2xl border border-border/60 bg-card/50 p-6 transition-all duration-500 ease-out-expo hover:-translate-y-1 hover:border-brand/40 hover:shadow-[0_0_40px_-12px_var(--glow)]"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-brand/20 bg-brand/10 text-brand transition-transform duration-500 ease-out-expo group-hover:scale-105">
                  <service.icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <h3 className="mt-5 font-display text-lg font-bold text-foreground">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
              </div>
            ))}
          </GsapReveal>
        </div>
      </section>

      {/* Case study */}
      <section className="relative overflow-hidden border-b border-border/60 bg-background py-16 lg:py-24">
        <div className="pointer-events-none absolute inset-0 grid-fade opacity-40" aria-hidden="true" />
        <div className="container relative mx-auto px-4">
          <GsapReveal className="mx-auto mb-12 max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-widest text-brand">
              Case Study
            </p>
            <h2 className="mt-3 font-display text-2xl font-bold md:text-4xl">
              Work we are <span className="text-gradient-brand">proud of</span>
            </h2>
          </GsapReveal>

          <GsapReveal className="mx-auto max-w-4xl">
            <ServiceCard
              image="oldMutual.jpeg"
              title="Old Mutual Database Backup Solution"
              link="/portfolio"
              description="Implemented a comprehensive database backup and recovery solution for Old Mutual, ensuring business continuity and data protection. The solution includes automated backups, off-site storage and rapid recovery capabilities to minimise downtime and data loss."
            />
          </GsapReveal>
        </div>
      </section>

      {/* Emergency CTA */}
      <section className="relative overflow-hidden bg-background py-16 lg:py-24">
        <div className="pointer-events-none absolute inset-0 grid-fade opacity-40" aria-hidden="true" />
        <div className="container relative mx-auto px-4">
          <GsapReveal className="mx-auto max-w-3xl rounded-3xl border border-border/60 bg-card/50 p-8 text-center shadow-[0_0_80px_-40px_var(--glow)] backdrop-blur-xl md:p-12">
            <p className="text-xs font-semibold uppercase tracking-widest text-brand">
              Always On
            </p>
            <h2 className="mt-3 font-display text-2xl font-bold md:text-4xl">
              24/7 emergency support <span className="text-gradient-brand">available</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">
              Our technical support team is available around the clock to resolve critical issues
              and keep your business operational.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <LinkButton
                link={`tel:${CONTACT.phone.replace(/\s/g, '')}`}
                className="rounded-full px-8 font-semibold shadow-[0_0_40px_-12px_var(--glow)]"
              >
                Call Emergency Support
              </LinkButton>
              <LinkButton
                link="/ticket"
                variant="outline"
                className="rounded-full border-border/70 bg-card/50 px-8 font-semibold backdrop-blur-sm hover:border-brand/40"
              >
                Submit Emergency Ticket
              </LinkButton>
            </div>
          </GsapReveal>
        </div>
      </section>
    </div>
  )
}

export default Technical
