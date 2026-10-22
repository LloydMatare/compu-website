import LinkButton from '@/components/link-button'
import { ArrowRight } from 'lucide-react'
import React from 'react'

interface SmallCardProps {
  icon: React.ReactNode
  name: string
  link: string
  description: string
}

function SmallCard({ icon, name, link, description }: SmallCardProps) {
  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border/60 bg-card/50 p-6 transition-all duration-500 ease-out-expo hover:-translate-y-1 hover:border-brand/40 hover:shadow-[0_0_40px_-12px_var(--glow)]">
      <span
        className="flex h-12 w-12 items-center justify-center rounded-xl border border-brand/20 bg-brand/10 text-brand transition-transform duration-500 ease-out-expo group-hover:scale-105 [&_svg]:h-5 [&_svg]:w-5"
        aria-hidden="true"
      >
        {icon}
      </span>

      <h3 className="mt-5 font-display text-lg font-bold text-foreground">{name}</h3>
      <p className="mt-2 flex-grow text-sm leading-relaxed text-muted-foreground">{description}</p>

      <LinkButton
        link={`/services/${link}`}
        variant="ghost"
        className="mt-5 w-fit gap-1 px-0 text-sm font-semibold text-brand hover:bg-transparent hover:text-brand/80"
      >
        Learn more
        <ArrowRight className="h-4 w-4 transition-transform duration-300 ease-out-expo group-hover:translate-x-1" />
      </LinkButton>
    </article>
  )
}

export default SmallCard
