import React from 'react'
import SmallCard from './smallCard'
import GsapReveal from '@/components/ui/gsap-reveal'
import LinkButton from '@/components/link-button'
import { Cloud, Code, Network, Shield } from 'lucide-react'

function Work() {
  const features = [
    {
      icon: <Shield className="h-5 w-5 text-brand" />,
      name: 'Cyber Security',
      description:
        'Ransomware Prevention Kit - Prevent, detect and restore with advanced security measures.',
      link: 'cyber-security',
    },
    {
      icon: <Network className="h-5 w-5 text-brand" />,
      name: 'Networking',
      description:
        'Computer networking enables employees to share ideas more easily and work more efficiently.',
      link: 'networks',
    },
    {
      icon: <Cloud className="h-5 w-5 text-brand" />,
      name: 'Cloud Computing',
      description:
        'Allows organizations to scale, maintain flexibility, and focus their efforts on business operations.',
      link: 'cloud-computing',
    },
    {
      icon: <Code className="h-5 w-5 text-brand" />,
      name: 'Software Development',
      description:
        'Offering custom software services and solutions tailored to every business scale.',
      link: 'software',
    },
  ]

  return (
    <section className="relative overflow-hidden border-y border-border/60">
      <div
        className="absolute inset-0 bg-[url('/images/banner.jpg')] bg-cover bg-center bg-fixed"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-background/60 backdrop-blur-sm"
        aria-hidden="true"
      />
      <div className="pointer-events-none absolute inset-0 grid-fade opacity-40" aria-hidden="true" />

      <div className="container relative mx-auto px-4 py-16 lg:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <GsapReveal>
            <p className="text-xs font-semibold uppercase tracking-widest text-brand">
              Why Choose Us
            </p>
            <h2 className="mt-3 font-display text-2xl font-bold leading-tight md:text-4xl">
              Technical Features From <span className="text-gradient-brand">COMPULINK</span>
            </h2>
            <p className="mt-5 max-w-lg text-sm leading-relaxed text-muted-foreground md:text-base">
              A world-class Information System Integration House, offering solid solutions backed
              by service excellence that exceeds customer expectations.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <LinkButton
                link="/about"
                name="Read More"
                className="rounded-full px-6 font-semibold shadow-[0_0_40px_-12px_var(--glow)]"
              />
              <LinkButton
                link="/contact"
                name="Contact Us"
                variant="outline"
                className="rounded-full border-border/70 bg-card/50 px-6 font-semibold backdrop-blur-sm hover:border-brand/40"
              />
            </div>
          </GsapReveal>

          <GsapReveal delay={0.12} childrenSelector="[data-work-card]">
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              {features.map((feature) => (
                <div key={feature.name} data-work-card>
                  <SmallCard
                    icon={feature.icon}
                    name={feature.name}
                    description={feature.description}
                    link={feature.link}
                  />
                </div>
              ))}
            </div>
          </GsapReveal>
        </div>
      </div>
    </section>
  )
}

export default Work
