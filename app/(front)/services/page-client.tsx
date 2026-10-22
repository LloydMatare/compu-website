'use client'

import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import {
  ArrowRight,
  ChartColumn,
  CircleCheck,
  Cloud,
  Code,
  Database,
  Lock,
  Network,
  Server,
  Shield,
  Smartphone,
  Users,
} from 'lucide-react'
import GsapReveal from '@/components/ui/gsap-reveal'
import LinkButton from '@/components/link-button'
import Hero from '../_components/hero'
import Service from '../_components/service'

const mainServices = [
  {
    id: 'cloud',
    icon: Cloud,
    title: 'Cloud Computing',
    description: 'Secure, scalable cloud infrastructure and migration services',
    fullDescription:
      'Leverage our Tier 3 Data Centre infrastructure with private cloud platforms, ensuring 99.9% uptime and seamless scalability for your business growth.',
    features: [
      'Private Cloud Platform',
      'Hybrid Cloud Solutions',
      'Cloud Migration',
      'Disaster Recovery',
    ],
    image: '/images/cloud.webp',
    link: '/services/cloud-computing',
  },
  {
    id: 'networking',
    icon: Network,
    title: 'Networking',
    description: 'Enterprise-grade network infrastructure and security',
    fullDescription:
      'Comprehensive networking solutions including LAN/WAN setup, wireless networks, and network security with 24/7 monitoring and support.',
    features: [
      'Network Design & Implementation',
      'Wireless Solutions',
      'Network Security',
      '24/7 Monitoring',
    ],
    image: '/images/net.webp',
    link: '/services/networks',
  },
  {
    id: 'software',
    icon: Code,
    title: 'Software Development',
    description: 'Custom applications and digital solutions',
    fullDescription:
      'End-to-end software development services including web applications, mobile apps, AI solutions, and enterprise software tailored to your needs.',
    features: [
      'Web & Mobile Development',
      'AI & Data Science',
      'API Integration',
      'Custom Solutions',
    ],
    image: '/images/software.webp',
    link: '/services/software',
  },
  {
    id: 'cybersecurity',
    icon: Shield,
    title: 'Cyber Security',
    description: 'Comprehensive security and protection solutions',
    fullDescription:
      'Protect your business with advanced cybersecurity solutions including threat detection, vulnerability assessment, and security compliance.',
    features: [
      'Threat Detection',
      'Vulnerability Assessment',
      'Security Compliance',
      'Incident Response',
    ],
    image: '/images/cyber.webp',
    link: '/services/cyber-security',
  },
  {
    id: 'hardware',
    icon: Server,
    title: 'Hardware Solutions',
    description: 'Enterprise hardware and infrastructure setup',
    fullDescription:
      'Complete hardware solutions including server setup, storage solutions, and IT infrastructure implementation for optimal performance.',
    features: ['Server Setup', 'Storage Solutions', 'IT Infrastructure', 'Hardware Maintenance'],
    image: '/images/hardware.jpg',
    link: '/services/hardware',
  },
  {
    id: 'consulting',
    icon: Users,
    title: 'IT Consulting',
    description: 'Strategic technology advisory services',
    fullDescription:
      'Expert IT consulting to help you make informed technology decisions, optimize processes, and drive digital transformation.',
    features: [
      'Technology Strategy',
      'Digital Transformation',
      'Process Optimization',
      'IT Audits',
    ],
    image: '/images/connect.jpg',
    link: '/services/consulting',
  },
]

const additionalServices = [
  {
    icon: Smartphone,
    title: 'Mobile Solutions',
    description: 'iOS and Android app development',
    link: '/services/software',
  },
  {
    icon: Database,
    title: 'Data Analytics',
    description: 'Business intelligence and data insights',
    link: '/services/cloud-computing',
  },
  {
    icon: ChartColumn,
    title: 'Digital Marketing',
    description: 'Online presence and growth strategies',
    link: '/services/consulting',
  },
  {
    icon: Lock,
    title: 'Managed IT',
    description: '24/7 IT support and management',
    link: '/services/technical',
  },
]

const stats = [
  { value: '30+', label: 'Years Experience' },
  { value: '500+', label: 'Projects Completed' },
  { value: '99.9%', label: 'Uptime Guarantee' },
  { value: '24/7', label: 'Support Available' },
]

function Services() {
  const [selectedService, setSelectedService] = useState(mainServices[0])
  const SelectedIcon = selectedService.icon

  return (
    <div>
      <Hero
        backImage="software.webp"
        image=""
        title="Comprehensive IT Solutions"
        subtitle="Technology that scales with your business"
        description="Offering a variety of services, Managed Services are provided by Compulink Systems through a Tier 3 Data Centre offering cloud services. The Data Centre hosts services on a secure Private Cloud Platform leveraging on leading ISPs to ensure availability at all times."
        primaryButtonText="Talk to an Advisor"
        primaryButtonLink="/contact"
        secondaryButtonText="Explore Our Work"
        secondaryButtonLink="/portfolio"
        showStats={false}
      />

      {/* Core services with interactive selector */}
      <section className="relative overflow-hidden border-b border-border/60 bg-background py-16 lg:py-24">
        <div className="pointer-events-none absolute inset-0 grid-fade opacity-40" aria-hidden="true" />

        <div className="container relative mx-auto px-4">
          <GsapReveal className="mx-auto mb-12 max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-widest text-brand">
              Our Core Services
            </p>
            <h2 className="mt-3 font-display text-2xl font-bold md:text-4xl">
              Everything your IT <span className="text-gradient-brand">needs, in one place</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">
              Explore our comprehensive range of IT services designed to meet your business needs —
              from private cloud and networking to custom software and hardware supply.
            </p>
          </GsapReveal>

          <div
            className="flex flex-wrap justify-center gap-3"
            role="group"
            aria-label="Select a core service"
          >
            {mainServices.map((service) => {
              const Icon = service.icon
              const isActive = selectedService.id === service.id

              return (
                <button
                  key={service.id}
                  type="button"
                  onClick={() => setSelectedService(service)}
                  aria-pressed={isActive}
                  className={`flex items-center gap-3 rounded-xl border px-4 py-3 text-left transition-all duration-300 ease-out-expo focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none ${
                    isActive
                      ? 'border-brand/50 bg-brand/10 shadow-[0_0_40px_-12px_var(--glow)]'
                      : 'border-border/60 bg-card/40 hover:-translate-y-0.5 hover:border-brand/30'
                  }`}
                >
                  <span
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg transition-colors ${
                      isActive ? 'bg-brand/15 text-brand' : 'bg-muted text-muted-foreground'
                    }`}
                  >
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <span
                    className={`font-display text-sm font-semibold ${
                      isActive ? 'text-foreground' : 'text-muted-foreground'
                    }`}
                  >
                    {service.title}
                  </span>
                </button>
              )
            })}
          </div>

          <div
            key={selectedService.id}
            className="mt-10 grid items-center gap-10 rounded-3xl border border-border/60 bg-card/50 p-6 shadow-[0_0_60px_-40px_var(--glow)] backdrop-blur-xl md:p-10 lg:grid-cols-2"
          >
            <div>
              <div className="flex items-center gap-3">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-brand/20 bg-brand/10 text-brand">
                  <SelectedIcon className="h-6 w-6" aria-hidden="true" />
                </span>
                <h3 className="font-display text-xl font-bold md:text-2xl">
                  {selectedService.title}
                </h3>
              </div>

              <p className="mt-5 text-sm leading-relaxed text-muted-foreground md:text-base">
                {selectedService.fullDescription}
              </p>

              <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {selectedService.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-2.5 rounded-xl border border-border/60 bg-background/40 px-3.5 py-2.5 text-sm text-foreground/90"
                  >
                    <CircleCheck className="h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <LinkButton
                  link={selectedService.link}
                  className="rounded-full px-6 font-semibold shadow-[0_0_40px_-12px_var(--glow)]"
                >
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </LinkButton>
                <LinkButton
                  link="/contact?service=quote"
                  variant="outline"
                  className="rounded-full border-border/70 bg-card/50 px-6 font-semibold backdrop-blur-sm hover:border-brand/40"
                >
                  Get a Quote
                </LinkButton>
              </div>
            </div>

            <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl border border-border/60">
              <Image
                src={selectedService.image}
                alt={`${selectedService.title} solutions from Compulink Systems`}
                fill
                className="object-cover"
              />
              <div
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/60 to-transparent"
                aria-hidden="true"
              />
            </div>
          </div>
        </div>
      </section>

      {/* All services grid */}
      <section className="relative overflow-hidden border-b border-border/60 bg-surface/30 py-16 lg:py-24">
        <div className="container relative mx-auto px-4">
          <GsapReveal className="mx-auto mb-12 max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-widest text-brand">
              Full Service Portfolio
            </p>
            <h2 className="mt-3 font-display text-2xl font-bold md:text-4xl">
              All <span className="text-gradient-brand">services</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">
              Quick access to every specialised service we deliver across infrastructure, software
              and support.
            </p>
          </GsapReveal>

          <GsapReveal childrenSelector="[data-service-card]" className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {mainServices.map((service) => {
              const Icon = service.icon

              return (
                <div key={service.id} data-service-card>
                  <Link
                    href={service.link}
                    className="group flex h-full flex-col rounded-2xl border border-border/60 bg-card/50 p-6 transition-all duration-500 ease-out-expo hover:-translate-y-1 hover:border-brand/40 hover:shadow-[0_0_40px_-12px_var(--glow)] focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
                  >
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-brand/20 bg-brand/10 text-brand">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <h3 className="mt-5 font-display text-lg font-bold text-foreground">
                      {service.title}
                    </h3>
                    <p className="mt-2 flex-grow text-sm leading-relaxed text-muted-foreground">
                      {service.description}
                    </p>
                    <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-brand">
                      View service details
                      <ArrowRight
                        className="h-4 w-4 transition-transform duration-300 ease-out-expo group-hover:translate-x-1"
                        aria-hidden="true"
                      />
                    </span>
                  </Link>
                </div>
              )
            })}
          </GsapReveal>
        </div>
      </section>

      {/* Specialized services */}
      <section className="relative overflow-hidden border-b border-border/60 bg-background py-16 lg:py-24">
        <div className="container relative mx-auto px-4">
          <GsapReveal className="mx-auto mb-12 max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-widest text-brand">
              Specialised Services
            </p>
            <h2 className="mt-3 font-display text-2xl font-bold md:text-4xl">
              Built to <span className="text-gradient-brand">complement</span> your stack
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">
              Additional services to complement your technology stack and unlock new revenue
              streams.
            </p>
          </GsapReveal>

          <GsapReveal
            childrenSelector="[data-extra-card]"
            className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
          >
            {additionalServices.map((service) => {
              const Icon = service.icon

              return (
                <div key={service.title} data-extra-card>
                  <Link
                    href={service.link}
                    className="group flex h-full flex-col rounded-2xl border border-border/60 bg-card/50 p-6 transition-all duration-500 ease-out-expo hover:-translate-y-1 hover:border-brand/40 focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
                  >
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-brand/20 bg-brand/10 text-brand">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <h3 className="mt-5 font-display text-base font-bold text-foreground">
                      {service.title}
                    </h3>
                    <p className="mt-2 flex-grow text-sm leading-relaxed text-muted-foreground">
                      {service.description}
                    </p>
                    <span className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-brand">
                      Explore service
                      <ArrowRight
                        className="h-4 w-4 transition-transform duration-300 ease-out-expo group-hover:translate-x-1"
                        aria-hidden="true"
                      />
                    </span>
                  </Link>
                </div>
              )
            })}
          </GsapReveal>
        </div>
      </section>

      {/* Stats */}
      <section className="relative overflow-hidden border-b border-border/60 bg-card/40 py-12 lg:py-16">
        <div className="container relative mx-auto px-4">
          <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border/60 bg-border/60 md:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="bg-card/70 px-4 py-6 text-center backdrop-blur-sm">
                <p className="font-display text-2xl font-bold text-gradient-brand md:text-4xl">
                  {stat.value}
                </p>
                <p className="mt-1 text-xs text-muted-foreground md:text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-background py-16 lg:py-24">
        <div className="pointer-events-none absolute inset-0 grid-fade opacity-40" aria-hidden="true" />
        <div className="container relative mx-auto px-4">
          <GsapReveal className="mx-auto max-w-3xl rounded-3xl border border-border/60 bg-card/50 p-8 text-center shadow-[0_0_80px_-40px_var(--glow)] backdrop-blur-xl md:p-12">
            <p className="text-xs font-semibold uppercase tracking-widest text-brand">
              Get Started
            </p>
            <h2 className="mt-3 font-display text-2xl font-bold md:text-4xl">
              Ready to <span className="text-gradient-brand">transform</span> your business?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">
              Let&apos;s discuss how our IT solutions can drive your business forward. Schedule a free
              consultation with our experts.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <LinkButton
                link="/contact?type=project"
                className="rounded-full px-8 font-semibold shadow-[0_0_40px_-12px_var(--glow)]"
              >
                Start Your Project
              </LinkButton>
              <LinkButton
                link="/contact?type=sales"
                variant="outline"
                className="rounded-full border-border/70 bg-card/50 px-8 font-semibold backdrop-blur-sm hover:border-brand/40"
              >
                Contact Sales
              </LinkButton>
            </div>
          </GsapReveal>
        </div>
      </section>

      {/* Shared services section */}
      <Service />
    </div>
  )
}

export default Services
