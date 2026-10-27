import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Learn about Compulink Systems - a leading IT company in Zimbabwe with over 30 years of experience providing top-notch technology solutions.',
}

import React from 'react'
import Image from 'next/image'
import AnimatedMedia from '@/components/ui/animated-media'
import {
  Award,
  CircleCheck,
  Cpu,
  Handshake,
  Lightbulb,
  Network,
  Rocket,
  ShieldCheck,
  Wrench,
} from 'lucide-react'
import GsapReveal from '@/components/ui/gsap-reveal'
import LinkButton from '@/components/link-button'
import Hero from '../_components/hero'
import { CONTACT } from '@/lib/constants/site'

const stats = [
  { value: '30+', label: 'Years of Experience' },
  { value: '500+', label: 'Projects Delivered' },
  { value: '100+', label: 'Clients Served' },
  { value: '24/7', label: 'Support Coverage' },
]

const capabilities = [
  {
    icon: Network,
    title: 'Networking & Infrastructure',
    description:
      'Structured cabling, LAN and WAN design, wireless and site-to-site connectivity engineered for uptime.',
  },
  {
    icon: ShieldCheck,
    title: 'Cyber Security',
    description:
      'Assessment, hardening, monitoring and user awareness that fit the way your organisation actually operates.',
  },
  {
    icon: Cpu,
    title: 'Hardware & Systems',
    description:
      'Servers, storage, workstations and peripherals — specified, supplied, racked and supported.',
  },
  {
    icon: Rocket,
    title: 'Software Engineering',
    description:
      'Web, mobile and enterprise applications built around your processes rather than a template.',
  },
  {
    icon: Wrench,
    title: 'Technical Support',
    description:
      'A responsive helpdesk, maintenance and managed services that keep your estate healthy.',
  },
  {
    icon: Handshake,
    title: 'Consulting & Advisory',
    description:
      'Roadmaps, budgets and vendor decisions made with an independent, pragmatic view.',
  },
]

const values = [
  {
    icon: Award,
    title: 'Excellence',
    description: 'Work that survives the handover — properly scoped, properly delivered, properly documented.',
  },
  {
    icon: Lightbulb,
    title: 'Innovation',
    description: 'Curiosity about new technology, paired with the judgement to deploy it only where it pays.',
  },
  {
    icon: CircleCheck,
    title: 'Integrity',
    description: 'Straight answers on price, capability and risk — before a contract is signed.',
  },
  {
    icon: ShieldCheck,
    title: 'Sustainability',
    description: 'Solutions that keep running, keep clients in control and avoid costly rework.',
  },
]

const process = [
  {
    step: '01',
    title: 'Discover',
    description:
      'We listen, audit the current environment and agree the outcome you actually need — in plain language.',
  },
  {
    step: '02',
    title: 'Design',
    description:
      'A practical architecture and a transparent quotation, with the trade-offs spelled out before you commit.',
  },
  {
    step: '03',
    title: 'Deliver',
    description:
      'Deployment, migration and training handled by engineers who have done it before, without disrupting business.',
  },
  {
    step: '04',
    title: 'Support',
    description:
      'Monitoring, maintenance and a support bench that stays accountable long after go-live.',
  },
]

function About() {
  return (
    <div className="min-h-screen">
      <Hero
        backImage="banner.jpg"
        image=""
        title="About Compulink"
        subtitle="Engineering the systems Zimbabwe runs on"
        description="For more than three decades we have designed, supplied and supported the technology that keeps banks, insurers, ministries, universities and hospitals moving."
        primaryButtonText="Explore Our Services"
        primaryButtonLink="/services"
        secondaryButtonText="Book a Meeting"
        secondaryButtonLink="/booking-meeting"
        showStats={false}
        badgeText="30+ Years of IT Excellence in Zimbabwe"
      />

      <section className="relative overflow-hidden border-b border-border/60 bg-surface/30 py-16 lg:py-24">
        <div className="pointer-events-none absolute inset-0 grid-fade opacity-40" aria-hidden="true" />

        <div className="container relative mx-auto px-4">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <GsapReveal distance={48}>
              <p className="text-xs font-semibold uppercase tracking-widest text-brand">
                Who We Are
              </p>
              <h2 className="mt-3 font-display text-2xl font-bold leading-tight md:text-4xl">
                A technology partner built on <span className="text-gradient-brand">delivery</span>
              </h2>
              <div className="mt-5 h-px w-16 bg-gradient-to-r from-brand to-transparent" aria-hidden="true" />

              <p className="mt-5 text-sm leading-relaxed text-muted-foreground md:text-base">
                Compulink Systems is a Zimbabwean IT company supplying high-standard products and
                services to institutions across the public and private sectors. Our teams work
                across networking, cyber security, software development, hardware and technical
                support — which means one partner can carry a project from first sketch to
                long-term run.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground md:text-base">
                We have grown alongside our clients: from core network and hardware supply into
                cloud, custom software and managed services, without losing the hands-on,
                engineering-led culture that clients rely on.
              </p>

              <div className="mt-8 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border/60 bg-border/60 sm:grid-cols-4">
                {stats.map((stat) => (
                  <div key={stat.label} className="bg-card/70 px-4 py-5 backdrop-blur-sm">
                    <p className="font-display text-2xl font-bold text-gradient-brand md:text-3xl">
                      {stat.value}
                    </p>
                    <p className="mt-1 text-xs text-muted-foreground">{stat.label}</p>
                  </div>
                ))}
              </div>
            </GsapReveal>

            <GsapReveal distance={48} delay={0.1} className="relative">
              <div className="relative overflow-hidden rounded-3xl border border-border/60 bg-card/40 shadow-[0_0_60px_-24px_var(--glow)]">
                <div className="relative aspect-[4/3] w-full">
                  <AnimatedMedia
                    media="company"
                    alt="Compulink Systems — evolving with technology"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 600px"
                    className="absolute inset-0 h-full rounded-none border-0"
                  />
                </div>
              </div>
            </GsapReveal>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden border-b border-border/60 bg-background py-16 lg:py-24">
        <div className="pointer-events-none absolute inset-0 grid-fade opacity-40" aria-hidden="true" />

        <div className="container relative mx-auto px-4">
          <GsapReveal className="mx-auto mb-12 max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-widest text-brand">
              What We Do
            </p>
            <h2 className="mt-3 font-display text-2xl font-bold md:text-4xl">
              Capabilities that <span className="text-gradient-brand">cover the stack</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">
              One accountable partner for strategy, infrastructure, software and the support that
              keeps it all running.
            </p>
          </GsapReveal>

          <GsapReveal
            childrenSelector="[data-capability]"
            className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
          >
            {capabilities.map((capability) => (
              <div
                key={capability.title}
                data-capability
                className="group rounded-2xl border border-border/60 bg-card/50 p-6 transition-all duration-500 ease-out-expo hover:-translate-y-1 hover:border-brand/40 hover:shadow-[0_0_50px_-30px_var(--glow)]"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-brand/20 bg-brand/10 text-brand transition-colors duration-300 group-hover:bg-brand/20">
                  <capability.icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <h3 className="mt-5 font-display text-lg font-bold text-foreground">
                  {capability.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {capability.description}
                </p>
              </div>
            ))}
          </GsapReveal>
        </div>
      </section>

      <section className="relative overflow-hidden border-b border-border/60 bg-surface/30 py-16 lg:py-24">
        <div className="pointer-events-none absolute inset-0 grid-fade opacity-40" aria-hidden="true" />

        <div className="container relative mx-auto px-4">
          <GsapReveal className="mx-auto mb-12 max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-widest text-brand">
              How We Work
            </p>
            <h2 className="mt-3 font-display text-2xl font-bold md:text-4xl">
              A process you can <span className="text-gradient-brand">follow</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">
              No black boxes. Four stages, each with a clear output and a decision point you control.
            </p>
          </GsapReveal>

          <GsapReveal
            childrenSelector="[data-step]"
            className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4"
          >
            {process.map((item) => (
              <div
                key={item.step}
                data-step
                className="relative overflow-hidden rounded-2xl border border-border/60 bg-card/50 p-6 transition-all duration-500 ease-out-expo hover:-translate-y-1 hover:border-brand/40"
              >
                <span className="font-display text-4xl font-bold text-brand/25">{item.step}</span>
                <h3 className="mt-3 font-display text-lg font-bold text-foreground">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </GsapReveal>
        </div>
      </section>

      <section className="relative overflow-hidden border-b border-border/60 bg-background py-16 lg:py-24">
        <div className="pointer-events-none absolute inset-0 grid-fade opacity-40" aria-hidden="true" />

        <div className="container relative mx-auto px-4">
          <GsapReveal className="mx-auto mb-12 max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-widest text-brand">
              Our Values
            </p>
            <h2 className="mt-3 font-display text-2xl font-bold md:text-4xl">
              The standards we <span className="text-gradient-brand">work to</span>
            </h2>
          </GsapReveal>

          <GsapReveal
            childrenSelector="[data-value]"
            className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4"
          >
            {values.map((value) => (
              <div
                key={value.title}
                data-value
                className="rounded-2xl border border-border/60 bg-card/50 p-6 transition-all duration-500 ease-out-expo hover:-translate-y-1 hover:border-brand/40"
              >
                <value.icon className="h-6 w-6 text-brand" aria-hidden="true" />
                <h3 className="mt-4 font-display text-lg font-bold text-foreground">
                  {value.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {value.description}
                </p>
              </div>
            ))}
          </GsapReveal>
        </div>
      </section>

      <section className="relative overflow-hidden bg-background py-16 lg:py-24">
        <div className="pointer-events-none absolute inset-0 grid-fade opacity-40" aria-hidden="true" />

        <div className="container relative mx-auto px-4">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
            <GsapReveal distance={48}>
              <p className="text-xs font-semibold uppercase tracking-widest text-brand">
                Get In Touch
              </p>
              <h2 className="mt-3 font-display text-2xl font-bold md:text-4xl">
                Let&apos;s talk about <span className="text-gradient-brand">your roadmap</span>
              </h2>
              <p className="mt-5 text-sm leading-relaxed text-muted-foreground md:text-base">
                Whether you need a single server, a full network refresh or a custom platform, we
                will scope it honestly and support it properly.
              </p>

              <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-border/60 bg-card/50 p-5">
                  <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                    Harare
                  </p>
                  <a
                    href={`tel:${CONTACT.phone}`}
                    className="mt-2 block font-display text-lg font-bold text-foreground transition-colors hover:text-brand focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
                  >
                    {CONTACT.phone}
                  </a>
                  <p className="mt-1 text-sm text-muted-foreground">{CONTACT.harareAddress}</p>
                </div>
                <div className="rounded-2xl border border-border/60 bg-card/50 p-5">
                  <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                    Bulawayo
                  </p>
                  <a
                    href={`tel:${CONTACT.bulawayoPhone}`}
                    className="mt-2 block font-display text-lg font-bold text-foreground transition-colors hover:text-brand focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
                  >
                    {CONTACT.bulawayoPhone}
                  </a>
                  <p className="mt-1 text-sm text-muted-foreground">{CONTACT.bulawayoAddress}</p>
                </div>
                <div className="rounded-2xl border border-border/60 bg-card/50 p-5 sm:col-span-2">
                  <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                    Email
                  </p>
                  <a
                    href={`mailto:${CONTACT.email}`}
                    className="mt-2 block font-display text-lg font-bold text-foreground transition-colors hover:text-brand focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
                  >
                    {CONTACT.email}
                  </a>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Support requests: {CONTACT.supportEmail}
                  </p>
                </div>
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <LinkButton
                  link="/contact"
                  className="rounded-full px-8 font-semibold shadow-[0_0_40px_-12px_var(--glow)]"
                >
                  Contact Us
                </LinkButton>
                <LinkButton
                  link="/portfolio"
                  variant="outline"
                  className="rounded-full border-border/70 bg-card/50 px-8 font-semibold hover:border-brand/40"
                >
                  See Our Work
                </LinkButton>
              </div>
            </GsapReveal>

            <GsapReveal distance={48} delay={0.1}>
              <div className="relative overflow-hidden rounded-3xl border border-border/60 bg-card/40 shadow-[0_0_60px_-24px_var(--glow)]">
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src="/images/connect.jpg"
                    alt="Compulink Systems delivering IT solutions in Zimbabwe"
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent" />
                </div>

                <div className="p-6 md:p-8">
                  <h3 className="font-display text-xl font-bold text-foreground">
                    Building a brighter future with technology
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    Every institution we work with deserves infrastructure that is resilient,
                    understood and supported by people who answer the phone.
                  </p>
                </div>
              </div>
            </GsapReveal>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
