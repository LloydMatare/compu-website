import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Cloud Computing Services',
  description:
    'Scalable, secure cloud computing solutions in Zimbabwe. Cloud migration, private cloud, hybrid cloud and disaster recovery from Compulink Systems.',
}

import React from 'react'
import { Cloud, Database, Server, Shield, Zap } from 'lucide-react'
import GsapReveal from '@/components/ui/gsap-reveal'
import LinkButton from '@/components/link-button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import Hero from '../../_components/hero'
import ServiceTop from '../../_components/serviceTop'

function CloudComputing() {
  const cloudServices = [
    {
      icon: Cloud,
      title: 'Cloud Migration',
      description: 'Seamless transition to cloud infrastructure with minimal downtime',
      features: ['Assessment & Planning', 'Data Migration', 'Application Modernization'],
    },
    {
      icon: Server,
      title: 'Private Cloud',
      description: 'Dedicated cloud infrastructure for enhanced security and control',
      features: ['Tier 3 Data Centre', 'Dedicated Resources', 'Custom Configuration'],
    },
    {
      icon: Database,
      title: 'Cloud Storage',
      description: 'Scalable and secure data storage solutions',
      features: ['Auto-scaling', 'Data Redundancy', 'Backup & Recovery'],
    },
  ]

  const benefits = [
    {
      icon: Zap,
      title: '99.9% Uptime',
      description: 'Guaranteed reliability for your business operations',
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Multi-layered security protocols and compliance',
    },
    {
      icon: Cloud,
      title: 'Scalable Solutions',
      description: 'Grow your infrastructure as your business expands',
    },
    {
      icon: Database,
      title: 'Cost Efficient',
      description: 'Reduce capital expenditure with flexible pricing',
    },
  ]

  return (
    <div className="min-h-screen">
      <Hero
        backImage="net.jpg"
        image=""
        title="Cloud Computing Solutions"
        subtitle="Scalable, secure and reliable cloud infrastructure"
        description="Host your workloads on our Tier 3 Data Centre, private cloud platform with redundant connectivity and 24/7 monitoring."
        primaryButtonText="Get Free Consultation"
        primaryButtonLink="/contact"
        secondaryButtonText="View Case Studies"
        secondaryButtonLink="/portfolio"
        showStats={false}
      />

      <section className="relative overflow-hidden border-b border-border/60 bg-background py-16 lg:py-24">
        <div className="pointer-events-none absolute inset-0 grid-fade opacity-40" aria-hidden="true" />

        <div className="container relative mx-auto px-4">
          <GsapReveal className="mx-auto mb-14 max-w-4xl">
            <ServiceTop
              image="host.webp"
              title="Cloud Computing Services"
              description="Transform your business with our comprehensive cloud computing solutions. Leverage our Tier 3 Data Centre infrastructure to centralise data capture, storage and interpretation processes."
              description2="Reduce operational costs while generating richer, more precise data-led insights that drive performance and business growth."
            />
          </GsapReveal>

          <GsapReveal className="mx-auto mb-12 max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-widest text-brand">
              Capabilities
            </p>
            <h2 className="mt-3 font-display text-2xl font-bold md:text-4xl">
              Cloud services built for <span className="text-gradient-brand">real workloads</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">
              Whether you are moving your first workload or re-architecting a mature estate, our
              engineers design, migrate and operate cloud platforms that stay available.
            </p>
          </GsapReveal>

          <GsapReveal
            childrenSelector="[data-cloud-card]"
            className="grid grid-cols-1 gap-6 md:grid-cols-3"
          >
            {cloudServices.map((service) => (
              <div key={service.title} data-cloud-card>
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
                        <li key={feature} className="flex items-center gap-2.5 text-sm text-foreground/90">
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
              Why Compulink
            </p>
            <h2 className="mt-3 font-display text-2xl font-bold md:text-4xl">
              Why choose our <span className="text-gradient-brand">cloud solutions</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">
              A local team, a Tier 3 facility and carrier-grade connectivity working together to
              keep your data reachable, protected and fast.
            </p>
          </GsapReveal>

          <GsapReveal
            childrenSelector="[data-benefit]"
            className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
          >
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                data-benefit
                className="rounded-2xl border border-border/60 bg-card/50 p-6 text-center transition-all duration-500 ease-out-expo hover:-translate-y-1 hover:border-brand/40"
              >
                <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-brand/20 bg-brand/10 text-brand">
                  <benefit.icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <h3 className="mt-5 font-display text-base font-bold text-foreground">
                  {benefit.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {benefit.description}
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
              Get Started
            </p>
            <h2 className="mt-3 font-display text-2xl font-bold md:text-4xl">
              Ready to move to the <span className="text-gradient-brand">cloud</span>?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">
              Let our experts guide you through a seamless cloud migration journey tailored to your
              business needs.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <LinkButton
                link="/contact?service=cloud-migration"
                className="rounded-full px-8 font-semibold shadow-[0_0_40px_-12px_var(--glow)]"
              >
                Get Free Consultation
              </LinkButton>
              <LinkButton
                link="/portfolio"
                variant="outline"
                className="rounded-full border-border/70 bg-card/50 px-8 font-semibold backdrop-blur-sm hover:border-brand/40"
              >
                View Case Studies
              </LinkButton>
            </div>
          </GsapReveal>
        </div>
      </section>
    </div>
  )
}

export default CloudComputing
