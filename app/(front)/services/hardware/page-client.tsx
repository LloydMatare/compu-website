'use client'

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import {
  Camera,
  Cog,
  Cpu,
  HardDrive,
  Laptop,
  Monitor,
  Network,
  Printer,
  Server,
  Smartphone,
} from 'lucide-react'
import GsapReveal from '@/components/ui/gsap-reveal'
import LinkButton from '@/components/link-button'

const hardwareCategories = [
  {
    icon: Server,
    title: 'Servers & Storage',
    description: 'Enterprise servers, NAS, SAN, and storage solutions',
    features: ['Rack Servers', 'Tower Servers', 'Storage Arrays', 'Backup Systems'],
  },
  {
    icon: Laptop,
    title: 'Workstations & PCs',
    description: 'High-performance computers for professionals and businesses',
    features: ['Desktop Computers', 'All-in-One PCs', 'Thin Clients', 'Gaming Rigs'],
  },
  {
    icon: HardDrive,
    title: 'Storage Solutions',
    description: 'Internal and external storage devices for all needs',
    features: ['SSD/HDD', 'External Drives', 'RAID Systems', 'Cloud Storage'],
  },
  {
    icon: Monitor,
    title: 'Displays & Monitors',
    description: 'Professional displays for various applications',
    features: ['4K Monitors', 'UltraWide Screens', 'Digital Signage', 'Video Walls'],
  },
  {
    icon: Printer,
    title: 'Printing Solutions',
    description: 'Network printers and multifunction devices',
    features: ['Laser Printers', 'Inkjet Printers', 'Multifunction', 'Plotters'],
  },
  {
    icon: Network,
    title: 'Networking Equipment',
    description: 'Routers, switches, and wireless infrastructure',
    features: ['Enterprise Routers', 'Switches', 'Access Points', 'Firewalls'],
  },
  {
    icon: Smartphone,
    title: 'Mobile Devices',
    description: 'Smartphones, tablets, and mobile accessories',
    features: ['Business Phones', 'Tablets', 'Mobile Accessories', 'Rugged Devices'],
  },
  {
    icon: Cpu,
    title: 'Components & Upgrades',
    description: 'Internal components and upgrade solutions',
    features: ['Processors', 'Memory', 'Graphics Cards', 'Motherboards'],
  },
  {
    icon: Camera,
    title: 'Peripherals & Accessories',
    description: 'Essential accessories for complete setups',
    features: ['Keyboards & Mice', 'Webcams', 'Headsets', 'Docking Stations'],
  },
]

const brands = [
  'Dell',
  'HP',
  'Lenovo',
  'Cisco',
  'IBM',
  'Apple',
  'Samsung',
  'Epson',
  'Canon',
  'APC',
  'Intel',
  'AMD',
]

const hardwareServices = [
  {
    icon: Cpu,
    title: 'Procurement & Sourcing',
    description:
      'Source the right hardware from trusted manufacturers at competitive prices',
  },
  {
    icon: Server,
    title: 'Installation & Setup',
    description: 'Professional installation and configuration of all hardware components',
  },
  {
    icon: Cog,
    title: 'Maintenance & Support',
    description: 'Ongoing maintenance, repairs, and technical support for your hardware',
  },
]

function Hardware() {
  return (
    <div>
      <section className="relative overflow-hidden border-b border-border/60">
        <div className="absolute inset-0" aria-hidden="true">
          <Image
            src="/images/hardware.jpg"
            alt=""
            fill
            className="object-cover object-center"
            priority
            quality={90}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/45" />
          <div className="pointer-events-none absolute inset-0 grid-fade opacity-40" />
          <div className="pointer-events-none absolute -top-32 left-1/4 h-80 w-80 rounded-full bg-primary/20 blur-3xl animate-pulse-glow" />
        </div>

        <div className="container relative mx-auto px-4">
          <div className="grid items-center gap-10 py-16 md:py-20 lg:grid-cols-12 lg:py-24">
            <div className="space-y-6 lg:col-span-7">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">
                Reliable IT Infrastructure
              </p>
              <h1 className="font-display text-3xl font-bold leading-[1.1] tracking-tight text-foreground md:text-4xl lg:text-6xl">
                Hardware <span className="text-gradient-brand">Solutions</span>
              </h1>
              <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">
                Hardware refers to the external and internal devices and equipment that enable you
                to perform major functions such as input, output, storage, communication and
                processing. We provide comprehensive hardware solutions from leading manufacturers.
              </p>

              <div className="flex flex-col gap-3 pt-2 sm:flex-row">
                <LinkButton
                  link="/contact?service=hardware-consultation"
                  className="rounded-full px-6 font-semibold shadow-[0_0_40px_-12px_var(--glow)]"
                >
                  Get Hardware Consultation
                </LinkButton>
                <LinkButton
                  link="/contact?service=hardware-quote"
                  variant="outline"
                  className="rounded-full border-border/70 bg-card/50 px-6 font-semibold backdrop-blur-sm hover:border-brand/40"
                >
                  Request Quote
                </LinkButton>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative overflow-hidden rounded-3xl border border-border/60 bg-card/40 shadow-[0_0_60px_-30px_var(--glow)]">
                <div className="relative aspect-[16/9] w-full">
                  <Image
                    src="/images/hardware.jpeg"
                    alt="Enterprise hardware supplied by Compulink Systems"
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/70 to-transparent" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hardware categories */}
      <section className="relative overflow-hidden border-b border-border/60 bg-background py-16 lg:py-24">
        <div className="pointer-events-none absolute inset-0 grid-fade opacity-40" aria-hidden="true" />

        <div className="container relative mx-auto px-4">
          <GsapReveal className="mx-auto mb-12 max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-widest text-brand">
              Hardware Categories
            </p>
            <h2 className="mt-3 font-display text-2xl font-bold md:text-4xl">
              Every device your <span className="text-gradient-brand">business runs on</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">
              A comprehensive range of hardware solutions for every business need, sourced,
              deployed and supported by our engineers.
            </p>
          </GsapReveal>

          <GsapReveal
            childrenSelector="[data-hardware-card]"
            className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
          >
            {hardwareCategories.map((category) => (
              <div key={category.title} data-hardware-card>
                <article className="group flex h-full flex-col rounded-2xl border border-border/60 bg-card/50 p-6 transition-all duration-500 ease-out-expo hover:-translate-y-1 hover:border-brand/40 hover:shadow-[0_0_40px_-12px_var(--glow)]">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-brand/20 bg-brand/10 text-brand transition-transform duration-500 ease-out-expo group-hover:scale-105">
                    <category.icon className="h-5 w-5" aria-hidden="true" />
                  </span>

                  <h3 className="mt-5 font-display text-lg font-bold text-foreground">
                    {category.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {category.description}
                  </p>

                  <ul className="mt-5 flex-grow space-y-2">
                    {category.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-2.5 text-sm text-foreground/90"
                      >
                        <span
                          className="h-1.5 w-1.5 shrink-0 rounded-full bg-brand"
                          aria-hidden="true"
                        />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Link
                    href={`/contact?category=${category.title.toLowerCase().replace(/\s+/g, '-')}`}
                    className="mt-5 inline-flex items-center text-sm font-semibold text-brand transition-colors hover:text-brand/80 focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
                  >
                    Inquire About {category.title}
                  </Link>
                </article>
              </div>
            ))}
          </GsapReveal>
        </div>
      </section>

      {/* Trusted brands */}
      <section className="relative overflow-hidden border-b border-border/60 bg-surface/30 py-16 lg:py-20">
        <div className="container relative mx-auto px-4">
          <GsapReveal className="mx-auto mb-12 max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-widest text-brand">
              Trusted Hardware Partners
            </p>
            <h2 className="mt-3 font-display text-2xl font-bold md:text-4xl">
              Leading brands, <span className="text-gradient-brand">expertly supplied</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">
              We partner with leading hardware manufacturers to provide you with reliable,
              high-performance solutions.
            </p>
          </GsapReveal>

          <GsapReveal
            childrenSelector="[data-brand]"
            className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border/60 bg-border/60 md:grid-cols-4 lg:grid-cols-6"
          >
            {brands.map((brand) => (
              <div
                key={brand}
                data-brand
                className="bg-card/70 px-4 py-6 text-center font-display text-sm font-semibold text-muted-foreground backdrop-blur-sm transition-colors duration-300 hover:text-foreground md:text-base"
              >
                {brand}
              </div>
            ))}
          </GsapReveal>
        </div>
      </section>

      {/* Hardware services */}
      <section className="relative overflow-hidden border-b border-border/60 bg-background py-16 lg:py-24">
        <div className="pointer-events-none absolute inset-0 grid-fade opacity-40" aria-hidden="true" />
        <div className="container relative mx-auto px-4">
          <GsapReveal className="mx-auto mb-12 max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-widest text-brand">
              Hardware Services
            </p>
            <h2 className="mt-3 font-display text-2xl font-bold md:text-4xl">
              From procurement to <span className="text-gradient-brand">maintenance</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">
              End-to-end hardware solutions delivered by engineers who install, configure and
              maintain the kit they sell.
            </p>
          </GsapReveal>

          <GsapReveal
            childrenSelector="[data-hardware-service]"
            className="grid grid-cols-1 gap-6 md:grid-cols-3"
          >
            {hardwareServices.map((service) => (
              <div
                key={service.title}
                data-hardware-service
                className="rounded-2xl border border-border/60 bg-card/50 p-6 text-center transition-all duration-500 ease-out-expo hover:-translate-y-1 hover:border-brand/40"
              >
                <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-brand/20 bg-brand/10 text-brand">
                  <service.icon className="h-6 w-6" aria-hidden="true" />
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

      {/* CTA */}
      <section className="relative overflow-hidden bg-background py-16 lg:py-24">
        <div className="pointer-events-none absolute inset-0 grid-fade opacity-40" aria-hidden="true" />
        <div className="container relative mx-auto px-4">
          <GsapReveal className="mx-auto max-w-3xl rounded-3xl border border-border/60 bg-card/50 p-8 text-center shadow-[0_0_80px_-40px_var(--glow)] backdrop-blur-xl md:p-12">
            <p className="text-xs font-semibold uppercase tracking-widest text-brand">
              Get Started
            </p>
            <h2 className="mt-3 font-display text-2xl font-bold md:text-4xl">
              Ready to <span className="text-gradient-brand">upgrade</span> your hardware?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">
              Let our hardware specialists help you choose, procure and implement the right hardware
              solutions for your business needs.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <LinkButton
                link="/contact?service=hardware-assessment"
                className="rounded-full px-8 font-semibold shadow-[0_0_40px_-12px_var(--glow)]"
              >
                Free Hardware Assessment
              </LinkButton>
              <LinkButton
                link="/booking-meeting"
                variant="outline"
                className="rounded-full border-border/70 bg-card/50 px-8 font-semibold backdrop-blur-sm hover:border-brand/40"
              >
                Schedule Consultation
              </LinkButton>
            </div>
          </GsapReveal>
        </div>
      </section>
    </div>
  )
}

export default Hardware
