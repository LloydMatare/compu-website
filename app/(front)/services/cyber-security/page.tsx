import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Cyber Security Services',
  description:
    'Protect your business with advanced cyber security from Compulink Systems. Threat detection, vulnerability assessment, compliance and incident response in Zimbabwe.',
}

import React from 'react'
import { Eye, Lock, Shield } from 'lucide-react'
import GsapReveal from '@/components/ui/gsap-reveal'
import LinkButton from '@/components/link-button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import Hero from '../../_components/hero'
import ServiceTop from '../../_components/serviceTop'

function CyberSecurity() {
  const securityServices = [
    {
      icon: Shield,
      title: 'Threat Protection',
      description: 'Advanced threat detection and prevention systems',
      features: ['Real-time Monitoring', 'Malware Protection', 'Intrusion Detection'],
    },
    {
      icon: Lock,
      title: 'Data Encryption',
      description: 'End-to-end encryption for sensitive data protection',
      features: ['SSL/TLS Certificates', 'Database Encryption', 'File-level Security'],
    },
    {
      icon: Eye,
      title: 'Security Monitoring',
      description: '24/7 security operations centre monitoring',
      features: ['SIEM Solutions', 'Log Analysis', 'Incident Response'],
    },
  ]

  const standards = [
    { name: 'GDPR', detail: 'Data Protection' },
    { name: 'ISO 27001', detail: 'Security Management' },
    { name: 'PCI DSS', detail: 'Payment Security' },
    { name: 'HIPAA', detail: 'Healthcare Data' },
  ]

  return (
    <div className="min-h-screen">
      <Hero
        backImage="cyber2.jpg"
        image=""
        title="Cyber Security Solutions"
        subtitle="Protect your business from modern cyber threats"
        description="Cyber security solutions that stop attacks before they become downtime, data theft, reputational damage or compliance fines."
        primaryButtonText="Security Assessment"
        primaryButtonLink="/contact"
        secondaryButtonText="Emergency Support"
        secondaryButtonLink="/ticket"
        showStats={false}
      />

      <section className="relative overflow-hidden border-b border-border/60 bg-background py-16 lg:py-24">
        <div className="pointer-events-none absolute inset-0 grid-fade opacity-40" aria-hidden="true" />

        <div className="container relative mx-auto px-4">
          <GsapReveal className="mx-auto mb-14 max-w-4xl">
            <ServiceTop
              image="cyber.webp"
              animation="cybersecurity"
              title="Advanced Cyber Security"
              description="Comprehensive security solutions that protect organisations against cyber attacks, preventing application downtime, theft of sensitive data and reputational damage."
              description2="With over 30 years of experience helping thousands of businesses withstand cyber threats and protect valuable data, we are confident in our ability to enhance your network security posture."
            />
          </GsapReveal>

          <GsapReveal className="mx-auto mb-12 max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-widest text-brand">
              Security Services
            </p>
            <h2 className="mt-3 font-display text-2xl font-bold md:text-4xl">
              Defence in <span className="text-gradient-brand">depth</span>, monitored around the clock
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">
              Layered controls across endpoint, network, identity and data — with humans watching
              the signals around the clock.
            </p>
          </GsapReveal>

          <GsapReveal
            childrenSelector="[data-security-card]"
            className="grid grid-cols-1 gap-6 md:grid-cols-3"
          >
            {securityServices.map((service) => (
              <div key={service.title} data-security-card>
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
              Compliance
            </p>
            <h2 className="mt-3 font-display text-2xl font-bold md:text-4xl">
              Security compliance <span className="text-gradient-brand">&amp; standards</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">
              Controls mapped to the frameworks your regulators, auditors and customers expect.
            </p>
          </GsapReveal>

          <GsapReveal
            childrenSelector="[data-standard]"
            className="grid grid-cols-2 gap-6 lg:grid-cols-4"
          >
            {standards.map((standard) => (
              <div
                key={standard.name}
                data-standard
                className="rounded-2xl border border-border/60 bg-card/50 p-6 text-center transition-all duration-500 ease-out-expo hover:-translate-y-1 hover:border-brand/40"
              >
                <p className="font-display text-lg font-bold text-gradient-brand">{standard.name}</p>
                <p className="mt-1 text-sm text-muted-foreground">{standard.detail}</p>
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
              Act Now
            </p>
            <h2 className="mt-3 font-display text-2xl font-bold md:text-4xl">
              Secure your <span className="text-gradient-brand">digital assets</span> today
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">
              Don&apos;t wait for a security breach to take action. Protect your business with our
              comprehensive cyber security solutions.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <LinkButton
                link="/contact?service=security-assessment"
                className="rounded-full px-8 font-semibold shadow-[0_0_40px_-12px_var(--glow)]"
              >
                Security Assessment
              </LinkButton>
              <LinkButton
                link="/ticket"
                variant="outline"
                className="rounded-full border-border/70 bg-card/50 px-8 font-semibold backdrop-blur-sm hover:border-brand/40"
              >
                Emergency Support
              </LinkButton>
            </div>
          </GsapReveal>
        </div>
      </section>
    </div>
  )
}

export default CyberSecurity
