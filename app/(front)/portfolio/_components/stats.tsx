import React from 'react'
import GsapReveal from '@/components/ui/gsap-reveal'

const stats = [
  { number: '30+', label: 'Years Experience' },
  { number: '500+', label: 'Projects Completed' },
  { number: '100+', label: 'Happy Clients' },
  { number: '50+', label: 'Team Experts' },
  { number: '24/7', label: 'Support' },
  { number: '99%', label: 'Client Retention' },
]

function Stats() {
  return (
    <section className="relative overflow-hidden border-b border-border/60 bg-surface/40 py-12 lg:py-16">
      <div className="pointer-events-none absolute inset-0 grid-fade opacity-40" aria-hidden="true" />

      <div className="container relative mx-auto px-4">
        <GsapReveal
          childrenSelector="[data-stat]"
          className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border/60 bg-border/60 md:grid-cols-3 lg:grid-cols-6"
        >
          {stats.map((stat) => (
            <div key={stat.label} data-stat className="bg-card/70 px-4 py-6 text-center backdrop-blur-sm">
              <p className="font-display text-2xl font-bold text-gradient-brand md:text-3xl">
                {stat.number}
              </p>
              <p className="mt-1 text-xs text-muted-foreground md:text-sm">{stat.label}</p>
            </div>
          ))}
        </GsapReveal>
      </div>
    </section>
  )
}

export default Stats
