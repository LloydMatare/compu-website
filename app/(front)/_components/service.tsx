import React from 'react'
import Image from 'next/image'
import GsapReveal from '@/components/ui/gsap-reveal'
import LinkButton from '@/components/link-button'
import { ArrowRight, ChartArea, CloudDownload, Download, Lock, Network } from 'lucide-react'

export interface ServiceCardProps {
  /** Optional icon node rendered above the title. */
  icon?: React.ReactNode
  /** Card heading. */
  name?: string
  /** Alternative heading used by the technical service pages. */
  title?: string
  /** Optional artwork rendered above the title. */
  image?: string
  description?: string
  link: string
}

export function ServiceCard({
  icon,
  name,
  title,
  image,
  description,
  link,
}: ServiceCardProps) {
  const heading = name ?? title ?? ''

  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border/60 bg-card/50 p-6 transition-all duration-500 ease-out-expo hover:-translate-y-1 hover:border-brand/40 hover:shadow-[0_0_40px_-12px_var(--glow)]">
      {icon ? (
        <span
          className="flex h-12 w-12 items-center justify-center rounded-xl border border-brand/20 bg-brand/10 text-brand [&_svg]:h-5 [&_svg]:w-5"
          aria-hidden="true"
        >
          {icon}
        </span>
      ) : image ? (
        <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl border border-border/60">
          <Image
            src={`/images/${image}`}
            alt={heading}
            fill
            className="object-cover transition-transform duration-500 ease-out-expo group-hover:scale-105"
          />
        </div>
      ) : null}

      <h3 className="mt-5 font-display text-lg font-bold text-foreground">{heading}</h3>

      {description && (
        <p className="mt-2 flex-grow text-sm leading-relaxed text-muted-foreground">
          {description}
        </p>
      )}

      <LinkButton
        link={link}
        variant="ghost"
        className="mt-5 w-fit gap-1 px-0 text-sm font-semibold text-brand hover:bg-transparent hover:text-brand/80"
      >
        Explore
        <ArrowRight className="h-4 w-4 transition-transform duration-300 ease-out-expo group-hover:translate-x-1" />
      </LinkButton>
    </article>
  )
}

function Service() {
  const services = [
    {
      icon: <CloudDownload />,
      name: 'Cloud Computing',
      description:
        'Cloud technology centralizes data capture, storage, and interpretation processes while reducing costs and generating faster, more precise data-led insights to drive performance.',
      link: '/services/cloud-computing',
    },
    {
      icon: <Network />,
      name: 'Networking',
      description:
        'Comprehensive computer networking solutions that transport and exchange data efficiently, including design, construction, maintenance, and operation of network infrastructure.',
      link: '/services/networks',
    },
    {
      icon: <Download />,
      name: 'Software Development',
      description:
        'End-to-end solutions including AI, data science, API integration, web & mobile solutions, chatbots, and pipeline development for organizational automation and reporting.',
      link: '/services/software',
    },
    {
      icon: <Lock />,
      name: 'Cyber Security',
      description:
        'Advanced security solutions protecting organizations against cyber attacks, preventing downtime, data theft, reputation damage, and compliance fines.',
      link: '/services/cyber-security',
    },
    {
      icon: <ChartArea />,
      name: 'Sales Solutions',
      description:
        'Strategic sales solutions tailored to different regions, products, and target customers to drive business growth and market expansion.',
      link: '/sales',
    },
  ]

  return (
    <section className="relative overflow-hidden border-b border-border/60 bg-background py-16 lg:py-24">
      <div className="pointer-events-none absolute inset-0 grid-fade opacity-40" aria-hidden="true" />

      <div className="container relative mx-auto px-4">
        <GsapReveal className="mx-auto mb-14 max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-brand">
            Our Services
          </p>
          <h2 className="mt-3 font-display text-2xl font-bold md:text-4xl">
            Bringing Technology from the <span className="text-gradient-brand">Horizon</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">
            Delivering unmatched service is what we live for. We create a culture of care and
            service where our customer comes first, ensuring excellence in every solution.
          </p>
        </GsapReveal>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard
              key={service.name}
              icon={service.icon}
              name={service.name}
              description={service.description}
              link={service.link}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Service
