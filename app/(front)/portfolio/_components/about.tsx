import Image from 'next/image'
import React from 'react'
import { Award, Code, Network, Server, Target, Workflow } from 'lucide-react'
import GsapReveal from '@/components/ui/gsap-reveal'
import LinkButton from '@/components/link-button'

const features = [
  { icon: Code, label: 'Innovative Software Development' },
  { icon: Workflow, label: 'Software & System Integration' },
  { icon: Network, label: 'Network Infrastructure' },
  { icon: Server, label: 'Server Setup & Configuration' },
  { icon: Award, label: '30 Years of IT Excellence' },
  { icon: Target, label: 'Industry-Leading Expertise' },
]

function About() {
  return (
    <section className="relative overflow-hidden border-b border-border/60 bg-background py-16 lg:py-24">
      <div className="pointer-events-none absolute inset-0 grid-fade opacity-40" aria-hidden="true" />

      <div className="container relative mx-auto px-4">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <GsapReveal distance={48} className="relative">
            <div className="relative overflow-hidden rounded-3xl border border-border/60 bg-card/40 shadow-[0_0_60px_-24px_var(--glow)]">
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src="/images/ab.gif"
                  alt="Compulink Systems — 30 years of IT excellence"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-background/10 to-transparent" />
              </div>
            </div>

            <div className="absolute -bottom-6 -right-4 rounded-2xl border border-border/60 bg-card/80 px-6 py-5 shadow-lg backdrop-blur-xl md:-right-6">
              <p className="font-display text-3xl font-bold text-gradient-brand">30+</p>
              <p className="mt-1 text-xs font-medium uppercase tracking-widest text-muted-foreground">
                Years Experience
              </p>
            </div>
          </GsapReveal>

          <GsapReveal distance={48} delay={0.1}>
            <p className="text-xs font-semibold uppercase tracking-widest text-brand">Our Story</p>
            <h2 className="mt-3 font-display text-2xl font-bold leading-tight md:text-4xl">
              Who are <span className="text-gradient-brand">we?</span>
            </h2>
            <div className="mt-5 h-px w-16 bg-gradient-to-r from-brand to-transparent" aria-hidden="true" />

            <p className="mt-5 text-sm leading-relaxed text-muted-foreground md:text-base">
              For three decades, Compulink Systems has been at the forefront of delivering
              high-standard products and services to various institutions. Our expertise spans
              networking services, cyber security, software solutions and hardware supply, making
              us a trusted partner in digital transformation across multiple industries.
            </p>

            <ul className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {features.map((feature) => (
                <li
                  key={feature.label}
                  className="flex items-center gap-3 rounded-xl border border-border/60 bg-card/40 px-4 py-3 transition-all duration-300 ease-out-expo hover:-translate-y-0.5 hover:border-brand/40"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-brand/10 text-brand">
                    <feature.icon className="h-4 w-4" aria-hidden="true" />
                  </span>
                  <span className="text-sm font-medium text-foreground">{feature.label}</span>
                </li>
              ))}
            </ul>

            <blockquote className="mt-8 border-l-2 border-brand/60 pl-5">
              <p className="font-display text-base font-medium italic leading-relaxed text-foreground/90 md:text-lg">
                Building a brighter future with technology, ensuring every entity is polished with
                innovation.
              </p>
            </blockquote>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <LinkButton
                link="/portfolio"
                name="Our Portfolio"
                className="rounded-full px-6 font-semibold shadow-[0_0_40px_-12px_var(--glow)]"
              />
              <LinkButton
                link="/contact"
                variant="outline"
                className="rounded-full border-border/70 bg-card/50 px-6 font-semibold hover:border-brand/40"
              >
                Talk to Our Team
              </LinkButton>
            </div>
          </GsapReveal>
        </div>
      </div>
    </section>
  )
}

export default About
