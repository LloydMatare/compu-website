import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Software Development',
  description:
    'Custom software development services in Zimbabwe. Web and mobile apps, enterprise software, AI solutions, chatbots and API integration from Compulink Systems.',
}

import React, { Suspense } from 'react'
import { Database, Globe, Smartphone } from 'lucide-react'
import GsapReveal from '@/components/ui/gsap-reveal'
import LinkButton from '@/components/link-button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import Hero from '../../_components/hero'
import ServiceTop from '../../_components/serviceTop'
import { SoftwareTabs } from './_components/softwareTabs'
import GitHubProjects from './_components/github-projects'

function Software() {
  const softwareServices = [
    {
      icon: Globe,
      title: 'Web Development',
      description: 'Modern web applications and platforms',
      features: ['React/Next.js', 'Responsive Design', 'Progressive Web Apps'],
    },
    {
      icon: Smartphone,
      title: 'Mobile Apps',
      description: 'Native and cross-platform mobile solutions',
      features: ['iOS & Android', 'React Native', 'Flutter'],
    },
    {
      icon: Database,
      title: 'Enterprise Software',
      description: 'Custom business applications and systems',
      features: ['CRM/ERP Systems', 'Workflow Automation', 'Integration APIs'],
    },
  ]

  const stack = [
    'React/Next.js',
    'Node.js',
    'Python',
    'Java',
    'AWS',
    'Docker',
    'MongoDB',
    'PostgreSQL',
  ]

  return (
    <div className="min-h-screen">
      <Hero
        backImage="web5.jpg"
        image=""
        title="Software Development"
        subtitle="Custom solutions for digital transformation"
        description="We design, build and operate web, mobile and enterprise software — plus the AI, data and integration layers that make it work."
        primaryButtonText="Start Your Project"
        primaryButtonLink="/contact?type=project"
        secondaryButtonText="View Portfolio"
        secondaryButtonLink="/portfolio"
        showStats={false}
      />

      <section className="relative overflow-hidden border-b border-border/60 bg-background py-16 lg:py-24">
        <div className="pointer-events-none absolute inset-0 grid-fade opacity-40" aria-hidden="true" />

        <div className="container relative mx-auto px-4">
          <GsapReveal className="mx-auto mb-14 max-w-4xl">
            <ServiceTop
              image="web5.jpg"
              title="Innovative Software Solutions"
              description="We offer comprehensive software development services including AI solutions, data science, API integration, web and mobile applications, chatbots and pipeline development."
              description2="Our custom software solutions automate organisational tasks, improve reporting capabilities and enhance overall business efficiency through digital transformation."
            />
          </GsapReveal>

          <GsapReveal className="mx-auto mb-12 max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-widest text-brand">
              Software Services
            </p>
            <h2 className="mt-3 font-display text-2xl font-bold md:text-4xl">
              Products that carry <span className="text-gradient-brand">real workloads</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">
              From a first MVP to an enterprise platform, we build software that integrates cleanly
              with the systems you already run.
            </p>
          </GsapReveal>

          <GsapReveal
            childrenSelector="[data-software-card]"
            className="grid grid-cols-1 gap-6 md:grid-cols-3"
          >
            {softwareServices.map((service) => (
              <div key={service.title} data-software-card>
                <Card className="h-full gap-0 rounded-2xl border border-border/60 bg-card/50 transition-all duration-500 ease-out-expo hover:-translate-y-1 hover:border-brand/40 hover:shadow-[0_0_40px_-12px_var(--glow)]">
                  <CardHeader>
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-brand/20 bg-brand/10 text-brand">
                      <service.icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <CardTitle className="mt-4 font-display text-lg font-bold text-foreground">
                      {service.title}
                    </CardTitle>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {service.description}
                    </p>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2.5">
                      {service.features.map((feature) => (
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
                  </CardContent>
                </Card>
              </div>
            ))}
          </GsapReveal>
        </div>
      </section>

      <section className="relative overflow-hidden border-b border-border/60 bg-surface/30 py-16 lg:py-24">
        <div className="container relative mx-auto px-4">
          <GsapReveal className="mx-auto mb-12 max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-widest text-brand">
              Our Technology Stack
            </p>
            <h2 className="mt-3 font-display text-2xl font-bold md:text-4xl">
              Built on <span className="text-gradient-brand">proven</span> technology
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">
              A modern, maintainable stack — so the code we hand over keeps getting better.
            </p>
          </GsapReveal>

          <GsapReveal
            childrenSelector="[data-tech]"
            className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border/60 bg-border/60 md:grid-cols-4"
          >
            {stack.map((tech) => (
              <div
                key={tech}
                data-tech
                className="bg-card/70 px-4 py-6 text-center font-display text-sm font-semibold text-muted-foreground backdrop-blur-sm transition-colors duration-300 hover:text-foreground md:text-base"
              >
                {tech}
              </div>
            ))}
          </GsapReveal>
        </div>
      </section>

      <section className="relative overflow-hidden border-b border-border/60 bg-background py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <GsapReveal className="mx-auto max-w-5xl">
            <ServiceTop
              image="ai.jpg"
              animation="ai"
              title="Intelligence built into your software"
              description="Bring AI, data science and automation into the tools your team already uses."
              description2="From conversational assistants to reporting and integration pipelines, we design AI features around practical business needs."
            />
          </GsapReveal>
        </div>
      </section>

      <section className="relative overflow-hidden border-b border-border/60 bg-background py-16 lg:py-24">
        <div className="pointer-events-none absolute inset-0 grid-fade opacity-40" aria-hidden="true" />
        <div className="container relative mx-auto px-4">
          <GsapReveal className="mx-auto mb-10 max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-widest text-brand">
              Packages &amp; Projects
            </p>
            <h2 className="mt-3 font-display text-2xl font-bold md:text-4xl">
              Transparent <span className="text-gradient-brand">pricing</span> for every build
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">
              Start from a packaged tier, or talk to us about a fully customised build.
            </p>
          </GsapReveal>

          <SoftwareTabs
            projects={
              <Suspense
                fallback={
                  <p role="status" className="py-8 text-sm text-muted-foreground">
                    Loading GitHub projects…
                  </p>
                }
              >
                <GitHubProjects />
              </Suspense>
            }
          />
        </div>
      </section>

      <section className="relative overflow-hidden bg-background py-16 lg:py-24">
        <div className="pointer-events-none absolute inset-0 grid-fade opacity-40" aria-hidden="true" />
        <div className="container relative mx-auto px-4">
          <GsapReveal className="mx-auto max-w-3xl rounded-3xl border border-border/60 bg-card/50 p-8 text-center shadow-[0_0_80px_-40px_var(--glow)] backdrop-blur-xl md:p-12">
            <p className="text-xs font-semibold uppercase tracking-widest text-brand">
              Get Started
            </p>
            <h2 className="mt-3 font-display text-2xl font-bold md:text-4xl">
              Bring your software ideas <span className="text-gradient-brand">to life</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">
              Let&apos;s collaborate to create software solutions that drive your business forward
              and deliver exceptional user experiences.
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
                View Portfolio
              </LinkButton>
            </div>
          </GsapReveal>
        </div>
      </section>
    </div>
  )
}

export default Software
