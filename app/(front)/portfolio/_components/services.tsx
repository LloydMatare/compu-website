import Image from 'next/image'
import React from 'react'
import { CircleCheck } from 'lucide-react'
import GsapReveal from '@/components/ui/gsap-reveal'
import LinkButton from '@/components/link-button'

const features = [
  'Innovative Software Development & AI Solutions',
  'Advanced Hardware Infrastructure Setup',
  'Comprehensive Network Architecture & Security',
  'Enterprise Cyber Security Frameworks',
  'Cloud Migration & Optimisation',
  'Digital Transformation Consulting',
  'IT Support & Managed Services',
  'Custom Business Process Automation',
]

function Services() {
  return (
    <section className="relative overflow-hidden border-b border-border/60 bg-surface/30 py-16 lg:py-24">
      <div className="pointer-events-none absolute inset-0 grid-fade opacity-40" aria-hidden="true" />

      <div className="container relative mx-auto px-4">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <GsapReveal distance={48} className="relative order-2 lg:order-1">
            <div className="relative overflow-hidden rounded-3xl border border-border/60 bg-card/40 shadow-[0_0_60px_-24px_var(--glow)]">
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src="/images/compulink.gif"
                  alt="Compulink services"
                  fill
                  sizes="(max-width: 768px) 100vw, 400px"
                  className="object-cover"
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-background/10 to-transparent" />
              </div>
            </div>

            <div className="absolute -bottom-6 -left-4 rounded-2xl border border-border/60 bg-card/80 px-6 py-5 shadow-lg backdrop-blur-xl md:-left-6">
              <p className="font-display text-3xl font-bold text-gradient-brand">30+</p>
              <p className="mt-1 text-xs font-medium uppercase tracking-widest text-muted-foreground">
                Years in IT
              </p>
            </div>
          </GsapReveal>

          <GsapReveal distance={48} delay={0.1} className="order-1 lg:order-2">
            <p className="text-xs font-semibold uppercase tracking-widest text-brand">
              Welcome to Compulink Systems
            </p>
            <h2 className="mt-3 font-display text-2xl font-bold leading-tight md:text-4xl">
              Three decades of <span className="text-gradient-brand">digital excellence</span> &amp;
              innovation
            </h2>
            <div className="mt-5 h-px w-16 bg-gradient-to-r from-brand to-transparent" aria-hidden="true" />

            <p className="mt-5 text-sm leading-relaxed text-muted-foreground md:text-base">
              For over 30 years, Compulink Systems has been delivering cutting-edge IT solutions to
              institutions across various sectors. Our comprehensive service portfolio spans
              networking, cyber security, software development and hardware solutions, making us
              your trusted partner in digital transformation.
            </p>

            <ul className="mt-8 grid grid-cols-1 gap-3">
              {features.map((feature) => (
                <li
                  key={feature}
                  className="flex items-center gap-3 rounded-xl border border-border/60 bg-card/40 px-4 py-3 transition-all duration-300 ease-out-expo hover:-translate-y-0.5 hover:border-brand/40"
                >
                  <CircleCheck className="h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
                  <span className="text-sm font-medium text-foreground">{feature}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <LinkButton
                link="/about"
                name="Our Story"
                className="rounded-full px-6 font-semibold shadow-[0_0_40px_-12px_var(--glow)]"
              />
              <LinkButton
                link="/contact"
                variant="outline"
                className="rounded-full border-border/70 bg-card/50 px-6 font-semibold hover:border-brand/40"
              >
                Download Capability Statement
              </LinkButton>
            </div>
          </GsapReveal>
        </div>
      </div>
    </section>
  )
}

export default Services
