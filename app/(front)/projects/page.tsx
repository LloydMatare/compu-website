import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Projects',
  description:
    "Explore Compulink's technology projects and successful implementations across finance, education, healthcare, government and commerce in Zimbabwe.",
}

import React from 'react'
import GsapReveal from '@/components/ui/gsap-reveal'
import LinkButton from '@/components/link-button'
import Hero from '../_components/hero'
import { ProjectsGrid } from './_components/projects-grid'

function Projects() {
  return (
    <div className="min-h-screen">
      <Hero
        backImage="host.webp"
        image=""
        title="Our Projects"
        subtitle="Systems we designed, built and still run"
        description="A cross-section of the platforms, networks and infrastructure we have delivered for clients across Southern Africa."
        primaryButtonText="Start a Project"
        primaryButtonLink="/contact?type=project"
        secondaryButtonText="Our Services"
        secondaryButtonLink="/services"
        showStats={false}
      />

      <section className="relative overflow-hidden bg-background py-16 lg:py-24">
        <div className="pointer-events-none absolute inset-0 grid-fade opacity-40" aria-hidden="true" />

        <div className="container relative mx-auto px-4">
          <GsapReveal className="mx-auto mb-12 max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-widest text-brand">
              Selected Work
            </p>
            <h2 className="mt-3 font-display text-2xl font-bold md:text-4xl">
              Projects that <span className="text-gradient-brand">made an impact</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">
              Filter by sector to see how we have solved the same problems for very different
              organisations.
            </p>
          </GsapReveal>

          <ProjectsGrid />

          <GsapReveal className="mx-auto mt-16 max-w-3xl rounded-3xl border border-border/60 bg-card/50 p-8 text-center shadow-[0_0_80px_-40px_var(--glow)] backdrop-blur-xl md:p-12">
            <p className="text-xs font-semibold uppercase tracking-widest text-brand">
              Your Turn
            </p>
            <h2 className="mt-3 font-display text-2xl font-bold md:text-4xl">
              Let&apos;s build the <span className="text-gradient-brand">next one</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">
              Tell us what you are solving and we will map the fastest route from brief to
              production.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <LinkButton
                link="/contact?type=project"
                className="rounded-full px-8 font-semibold shadow-[0_0_40px_-12px_var(--glow)]"
              >
                Start Your Project
              </LinkButton>
              <LinkButton
                link="/portfolio"
                variant="outline"
                className="rounded-full border-border/70 bg-card/50 px-8 font-semibold backdrop-blur-sm hover:border-brand/40"
              >
                Back to Portfolio
              </LinkButton>
            </div>
          </GsapReveal>
        </div>
      </section>
    </div>
  )
}

export default Projects
