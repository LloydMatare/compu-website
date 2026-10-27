import GsapReveal from '@/components/ui/gsap-reveal'
import LinkButton from '@/components/link-button'
import { ArrowRight, ShieldCheck } from 'lucide-react'
import React from 'react'
import AnimatedMedia from '@/components/ui/animated-media'

function Promotion() {
  return (
    <section className="relative overflow-hidden border-t border-border/60">
      <div
        className="absolute inset-0 bg-[url('/images/banner.jpg')] bg-cover bg-center bg-fixed"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-background/55 backdrop-blur-sm"
        aria-hidden="true"
      />
      <div className="pointer-events-none absolute inset-0 grid-fade opacity-40" aria-hidden="true" />

      <div className="container relative mx-auto px-4 py-16 lg:py-24">
        <GsapReveal className="grid items-center gap-8 lg:grid-cols-2">
          <div className="max-w-3xl rounded-3xl border border-border/60 bg-card/40 p-7 shadow-[0_0_80px_-40px_var(--glow)] backdrop-blur-xl md:p-10 lg:p-12">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-brand/25 bg-brand/10 text-brand">
                <ShieldCheck className="h-5 w-5" aria-hidden="true" />
              </span>
              <p className="text-xs font-semibold uppercase tracking-widest text-brand">
                Compulink Promotion
              </p>
            </div>

            <h2 className="mt-6 font-display text-2xl font-bold leading-tight md:text-4xl">
              Check Out These Resources to Help You With{' '}
              <span className="text-gradient-brand">Security Solutions</span>
            </h2>

            <p className="mt-5 max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">
              Cyber security solutions are technological tools and services that help protect
              organizations against cyber attacks, which can result in application downtime, theft
              of sensitive data, damage to reputation, compliance fines, and other adverse
              consequences.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <LinkButton
                link="/contact"
                name="Get Started"
                className="rounded-full px-6 font-semibold shadow-[0_0_40px_-12px_var(--glow)]"
              />
              <LinkButton
                link="/services/cyber-security"
                variant="outline"
                className="rounded-full border-border/70 bg-card/50 px-6 font-semibold backdrop-blur-sm hover:border-brand/40"
              >
                Explore Security Services
                <ArrowRight className="ml-2 h-4 w-4" />
              </LinkButton>
            </div>
          </div>
          <AnimatedMedia
            media="cybersecurity"
            alt="Compulink cybersecurity solutions"
            className="shadow-[0_0_60px_-24px_var(--glow)]"
          />
        </GsapReveal>
      </div>
    </section>
  )
}

export default Promotion
