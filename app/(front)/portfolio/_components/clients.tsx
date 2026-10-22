import Image from 'next/image'
import React from 'react'
import GsapReveal from '@/components/ui/gsap-reveal'

const clients = [
  { name: 'CABS', logo: '/images/cabs.png' },
  { name: 'Old Mutual', logo: '/images/oldMutual.jpeg' },
  { name: 'University of Zimbabwe', logo: '/images/uz.png' },
  { name: 'Government', logo: '/images/govt.png' },
  { name: 'Healthcare', logo: '/images/pare.png' },
  { name: 'Potraz', logo: '/images/potraz.png' },
  { name: 'Econet', logo: '/images/econet.png' },
]

function Clients() {
  return (
    <section className="relative overflow-hidden border-b border-border/60 bg-background py-16 lg:py-20">
      <div className="pointer-events-none absolute inset-0 grid-fade opacity-40" aria-hidden="true" />

      <div className="container relative mx-auto px-4">
        <GsapReveal className="mx-auto mb-12 max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-brand">Our Clients</p>
          <h2 className="mt-3 font-display text-2xl font-bold md:text-4xl">
            Trusted by <span className="text-gradient-brand">industry leaders</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">
            We&apos;re proud to partner with leading organisations across banking, insurance,
            government, healthcare and education.
          </p>
        </GsapReveal>

        <GsapReveal
          childrenSelector="[data-client]"
          className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-7"
        >
          {clients.map((client) => (
            <div
              key={client.name}
              data-client
              className="flex items-center justify-center rounded-2xl border border-border/60 bg-card/40 p-5 transition-all duration-500 ease-out-expo hover:-translate-y-1 hover:border-brand/40"
            >
              <div className="relative h-14 w-full">
                <Image
                  src={client.logo}
                  alt={`${client.name} logo`}
                  fill
                  className="object-contain opacity-80 transition-opacity duration-300 hover:opacity-100"
                />
              </div>
            </div>
          ))}
        </GsapReveal>
      </div>
    </section>
  )
}

export default Clients
