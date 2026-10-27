import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Networking Services',
  description:
    'Enterprise-grade networking solutions in Zimbabwe. Wireless networks, structured cabling, network infrastructure and network security from Compulink Systems.',
}

import React from 'react'
import { Server, Shield, Wifi } from 'lucide-react'
import GsapReveal from '@/components/ui/gsap-reveal'
import LinkButton from '@/components/link-button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import Hero from '../../_components/hero'
import ServiceTop from '../../_components/serviceTop'

function Networks() {
  const networkServices = [
    {
      icon: Wifi,
      title: 'Wireless Networks',
      description: 'High-performance wireless infrastructure',
      features: ['Wi-Fi 6/6E', 'Mesh Networks', 'Guest Access'],
    },
    {
      icon: Server,
      title: 'Network Infrastructure',
      description: 'Robust wired network solutions',
      features: ['Structured Cabling', 'Switching', 'Routing'],
    },
    {
      icon: Shield,
      title: 'Network Security',
      description: 'Comprehensive network protection',
      features: ['Firewalls', 'VPN', 'Access Control'],
    },
  ]

  const metrics = [
    { value: '99.99%', label: 'Network Uptime' },
    { value: '24/7', label: 'Monitoring & Support' },
    { value: '1Gbps+', label: 'Connection Speed' },
    { value: 'Low ms', label: 'Latency' },
  ]

  return (
    <div className="min-h-screen">
      <Hero
        backImage="net.jpg"
        image=""
        title="Network Solutions"
        subtitle="Enterprise-grade networking for seamless connectivity"
        description="Design, deployment and management of the networks that keep your people, sites and systems talking to each other."
        primaryButtonText="Network Assessment"
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
              image="net.webp"
              animation="networking"
              title="Advanced Network Solutions"
              description="Comprehensive networking services that ensure reliable, secure and high-performance connectivity for your organisation."
              description2="From network design and implementation to ongoing management and security, we provide end-to-end solutions that keep your business connected and protected."
            />
          </GsapReveal>

          <GsapReveal className="mx-auto mb-12 max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-widest text-brand">
              Network Services
            </p>
            <h2 className="mt-3 font-display text-2xl font-bold md:text-4xl">
              Connectivity your teams can <span className="text-gradient-brand">rely on</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">
              Wired and wireless estates engineered, cabled, commissioned and supported by the
              same team.
            </p>
          </GsapReveal>

          <GsapReveal
            childrenSelector="[data-network-card]"
            className="grid grid-cols-1 gap-6 md:grid-cols-3"
          >
            {networkServices.map((service) => (
              <div key={service.title} data-network-card>
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
              Performance
            </p>
            <h2 className="mt-3 font-display text-2xl font-bold md:text-4xl">
              Network performance <span className="text-gradient-brand">metrics</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">
              Service levels we hold ourselves to — and monitor continuously across managed
              networks.
            </p>
          </GsapReveal>

          <GsapReveal
            childrenSelector="[data-metric]"
            className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border/60 bg-border/60 lg:grid-cols-4"
          >
            {metrics.map((metric) => (
              <div key={metric.label} data-metric className="bg-card/70 px-4 py-8 text-center backdrop-blur-sm">
                <p className="font-display text-2xl font-bold text-gradient-brand md:text-3xl">
                  {metric.value}
                </p>
                <p className="mt-1 text-sm text-muted-foreground">{metric.label}</p>
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
              Optimise your <span className="text-gradient-brand">network infrastructure</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">
              Ensure your network can handle today&apos;s demands and tomorrow&apos;s growth with our
              expert solutions.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <LinkButton
                link="/contact?service=network-assessment"
                className="rounded-full px-8 font-semibold shadow-[0_0_40px_-12px_var(--glow)]"
              >
                Network Assessment
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

export default Networks
