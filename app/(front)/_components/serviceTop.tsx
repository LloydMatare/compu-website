import Image from 'next/image'
import React from 'react'

export interface ServiceTopProps {
  title: string
  description?: string
  description2?: string
  image: string
}

function ServiceTop({ title, description, description2, image }: ServiceTopProps) {
  return (
    <section className="relative overflow-hidden rounded-3xl border border-border/60 bg-card/40 shadow-[0_0_60px_-30px_var(--glow)]">
      <div className="grid items-stretch md:grid-cols-5">
        <div className="relative aspect-[16/10] w-full overflow-hidden md:col-span-2 md:aspect-auto md:min-h-[280px]">
          <Image
            src={`/images/${image}`}
            alt={title}
            fill
            className="object-cover"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/60 to-transparent md:bg-gradient-to-r md:from-background/70 md:to-transparent" />
        </div>

        <div className="md:col-span-3 p-6 md:p-8 lg:p-10">
          <h2 className="font-display text-xl font-bold text-foreground md:text-2xl">{title}</h2>
          <div className="mt-4 h-px w-16 bg-gradient-to-r from-brand to-transparent" aria-hidden="true" />
          {description && (
            <p className="mt-5 text-sm leading-relaxed text-muted-foreground md:text-base">
              {description}
            </p>
          )}
          {description2 && (
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-base">
              {description2}
            </p>
          )}
        </div>
      </div>
    </section>
  )
}

export default ServiceTop
