import Image from 'next/image'
import React from 'react'
import { ArrowRight, Factory, HeartPulse, Landmark, Sprout } from 'lucide-react'
import LinkButton from '@/components/link-button'

export const PROJECT_ICONS = {
  health: HeartPulse,
  agriculture: Sprout,
  factory: Factory,
  government: Landmark,
} as const

export type ProjectIconKey = keyof typeof PROJECT_ICONS

export interface ProjectCardProps {
  name: string
  description: string
  link: string
  /** Optional image path inside /public/images. */
  image?: string
  /** Icon shown when no image is available. */
  icon?: ProjectIconKey
  technologies?: string[]
  category?: string
}

function Projects({
  name,
  description,
  link,
  image,
  icon,
  technologies = [],
  category,
}: ProjectCardProps) {
  const Icon = icon ? PROJECT_ICONS[icon] : null

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border/60 bg-card/50 transition-all duration-500 ease-out-expo hover:-translate-y-1 hover:border-brand/40 hover:shadow-[0_0_40px_-12px_var(--glow)]">
      <div className="relative aspect-[16/9] w-full overflow-hidden border-b border-border/60 bg-surface/40">
        {image ? (
          <Image
            src={image}
            alt={name}
            fill
            className="object-contain p-6 transition-transform duration-700 ease-out-expo group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-[radial-gradient(circle_at_50%_20%,var(--brand-muted),transparent_65%)]">
            {Icon ? (
              <Icon className="h-10 w-10 text-brand" aria-hidden="true" />
            ) : null}
          </div>
        )}

        {category ? (
          <span className="absolute left-4 top-4 rounded-full border border-brand/30 bg-background/80 px-3 py-1 text-xs font-medium text-brand backdrop-blur">
            {category}
          </span>
        ) : null}
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-lg font-bold text-foreground">{name}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{description}</p>

        {technologies.length > 0 ? (
          <ul className="mt-4 flex flex-wrap gap-2">
            {technologies.map((technology) => (
              <li
                key={technology}
                className="rounded-full border border-border/60 bg-background/50 px-2.5 py-1 text-xs text-muted-foreground"
              >
                {technology}
              </li>
            ))}
          </ul>
        ) : null}

        <LinkButton
          link={link}
          variant="ghost"
          className="mt-5 w-fit gap-1 px-0 text-sm font-semibold text-brand hover:bg-transparent hover:text-brand/80"
        >
          Read more
          <ArrowRight
            className="h-4 w-4 transition-transform duration-300 ease-out-expo group-hover:translate-x-1"
            aria-hidden="true"
          />
        </LinkButton>
      </div>
    </article>
  )
}

export default Projects
