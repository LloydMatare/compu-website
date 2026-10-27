import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'IT Consulting',
  description:
    'Strategic IT consulting services in Zimbabwe. Technology strategy, digital transformation, process optimisation and IT audits from Compulink Systems.',
}

import React from 'react'
import { ChartColumn, Lightbulb, Target } from 'lucide-react'
import GsapReveal from '@/components/ui/gsap-reveal'
import LinkButton from '@/components/link-button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import Hero from '../../_components/hero'
import ServiceTop from '../../_components/serviceTop'

function Consulting() {
  const consultingServices = [
    {
      icon: Target,
      title: 'IT Strategy',
      description: 'Strategic technology planning and roadmap development',
      features: ['Digital Transformation', 'Technology Assessment', 'Roadmap Planning'],
    },
    {
      icon: ChartColumn,
      title: 'Process Optimisation',
      description: 'Streamline operations with technology-driven solutions',
      features: ['Workflow Analysis', 'Automation Strategies', 'Efficiency Improvement'],
    },
    {
      icon: Lightbulb,
      title: 'Innovation Advisory',
      description: 'Leverage emerging technologies for competitive advantage',
      features: ['AI Integration', 'Cloud Strategy', 'Digital Innovation'],
    },
  ]

  const approach = [
    {
      step: '01',
      title: 'Discovery',
      description: 'Understand your business needs, constraints and growth targets.',
    },
    {
      step: '02',
      title: 'Analysis',
      description: 'Assess the current technology landscape, gaps and risks.',
    },
    {
      step: '03',
      title: 'Strategy',
      description: 'Develop a tailored roadmap with clear sequencing and costs.',
    },
    {
      step: '04',
      title: 'Implementation',
      description: 'Execute, measure and optimise the solutions we recommend.',
    },
  ]

  return (
    <div className="min-h-screen">
      <Hero
        backImage="comp.jpg"
        image=""
        title="IT Consulting"
        subtitle="Strategic technology guidance for business growth"
        description="Practical, evidence-led advisory from engineers who also build and run the platforms they recommend."
        primaryButtonText="Schedule Consultation"
        primaryButtonLink="/contact"
        secondaryButtonText="See Our Work"
        secondaryButtonLink="/portfolio"
        showStats={false}
      />

      <section className="relative overflow-hidden border-b border-border/60 bg-background py-16 lg:py-24">
        <div className="pointer-events-none absolute inset-0 grid-fade opacity-40" aria-hidden="true" />

        <div className="container relative mx-auto px-4">
          <GsapReveal className="mx-auto mb-14 max-w-4xl">
            <ServiceTop
              image="web.webp"
              animation="innovation"
              title="Expert IT Consulting Services"
              description="Strategic technology advisory services that help your business make informed decisions, optimise processes and drive digital transformation."
              description2="Our consultants work closely with you to understand your business objectives and develop technology strategies that align with your goals and drive measurable results."
            />
          </GsapReveal>

          <GsapReveal className="mx-auto mb-12 max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-widest text-brand">
              Advisory Services
            </p>
            <h2 className="mt-3 font-display text-2xl font-bold md:text-4xl">
              Consultancy that ends in <span className="text-gradient-brand">outcomes</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">
              Strategy, process and innovation advisory delivered by people who have run
              infrastructure in production for three decades.
            </p>
          </GsapReveal>

          <GsapReveal
            childrenSelector="[data-consulting-card]"
            className="grid grid-cols-1 gap-6 md:grid-cols-3"
          >
            {consultingServices.map((service) => (
              <div key={service.title} data-consulting-card>
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
              Our Consulting Approach
            </p>
            <h2 className="mt-3 font-display text-2xl font-bold md:text-4xl">
              A disciplined <span className="text-gradient-brand">four-step</span> method
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">
              Every engagement follows the same rhythm, so you always know what happens next and
              what you receive.
            </p>
          </GsapReveal>

          <GsapReveal
            childrenSelector="[data-step]"
            className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
          >
            {approach.map((item) => (
              <div
                key={item.step}
                data-step
                className="relative overflow-hidden rounded-2xl border border-border/60 bg-card/50 p-6 transition-all duration-500 ease-out-expo hover:-translate-y-1 hover:border-brand/40"
              >
                <span className="absolute -right-2 -top-4 font-display text-6xl font-bold text-brand/10" aria-hidden="true">
                  {item.step}
                </span>
                <p className="font-display text-sm font-semibold uppercase tracking-widest text-brand">
                  Step {item.step}
                </p>
                <h3 className="mt-3 font-display text-lg font-bold text-foreground">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </GsapReveal>
        </div>
      </section>

      <section className="relative overflow-hidden bg-background py-16 lg:py-24">
        <div className="pointer-events-none absolute inset-0 grid-fade opacity-40" aria-hidden="true" />
        <div className="container relative mx-auto px-4">
          <GsapReveal className="mx-auto max-w-3xl rounded-3xl border border-border/60 bg-card/50 p-8 text-center shadow-[0_0_80px_-40px_var(--glow)] backdrop-blur-xl md:p-12">
            <p className="text-xs font-semibold uppercase tracking-widest text-brand">
              Next Step
            </p>
            <h2 className="mt-3 font-display text-2xl font-bold md:text-4xl">
              Transform your business with <span className="text-gradient-brand">expert guidance</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">
              Partner with our experienced consultants to develop technology strategies that drive
              growth and innovation.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <LinkButton
                link="/booking-meeting"
                className="rounded-full px-8 font-semibold shadow-[0_0_40px_-12px_var(--glow)]"
              >
                Schedule Consultation
              </LinkButton>
              <LinkButton
                link="/contact"
                variant="outline"
                className="rounded-full border-border/70 bg-card/50 px-8 font-semibold backdrop-blur-sm hover:border-brand/40"
              >
                Talk to Our Team
              </LinkButton>
            </div>
          </GsapReveal>
        </div>
      </section>
    </div>
  )
}

export default Consulting
