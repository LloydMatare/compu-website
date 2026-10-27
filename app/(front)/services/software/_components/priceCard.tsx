import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { ArrowUpRight, CircleCheck } from 'lucide-react'
import React from 'react'
import LinkButton from '@/components/link-button'

export interface PriceListItem {
  id: number
  title: string
}

export interface PriceCardProps {
  title: string
  subtitle: string
  price: string
  lists?: PriceListItem[]
  featured?: boolean
  service?: string
}

function PriceCard({
  title,
  subtitle,
  price,
  lists,
  featured = false,
  service,
}: PriceCardProps) {
  const isCustom = price === 'N/A'
  return (
    <Card
      className={`group relative flex h-full flex-col overflow-hidden rounded-3xl border backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-brand/50 motion-reduce:transform-none ${
        featured
          ? 'border-brand/50 bg-gradient-to-b from-brand/10 via-card to-card shadow-[0_16px_60px_-28px_var(--glow)]'
          : 'border-border/60 bg-card/60'
      }`}
    >
      <div
        className={`absolute inset-x-0 top-0 h-1 ${featured ? 'bg-brand' : 'bg-gradient-to-r from-transparent via-border to-transparent'}`}
        aria-hidden="true"
      />
      <CardHeader>
        <div className="mb-3 flex min-h-6 items-center justify-between gap-2">
          <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
            Your next step
          </span>
          {featured && (
            <span className="rounded-full border border-brand/30 bg-brand/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-brand">
              Recommended
            </span>
          )}
        </div>
        <CardTitle className="font-display text-xl font-bold text-foreground">
          {title}
        </CardTitle>
        <p className="min-h-10 text-sm leading-relaxed text-muted-foreground">
          {subtitle}
        </p>
      </CardHeader>

      <CardContent className="flex flex-1 flex-col">
        <div className="min-h-20">
          <p className="text-xs font-medium text-muted-foreground">
            {isCustom ? 'Built around your requirements' : 'Package price'}
          </p>
          <p
            className={`mt-2 font-display font-bold tracking-tight ${isCustom ? 'text-2xl text-foreground' : 'text-4xl text-gradient-brand'}`}
          >
            {isCustom ? (
              'Let’s talk'
            ) : (
              <>
                <span className="mr-1 align-top text-xl text-muted-foreground">
                  $
                </span>
                {price}
              </>
            )}
          </p>
        </div>

        <Separator className="my-5" />

        <ul className="flex-grow space-y-2.5">
          {lists?.map((list) => (
            <li
              key={list.id}
              className="flex items-start gap-2.5 text-sm leading-relaxed text-foreground/90"
            >
              <CircleCheck
                className="mt-0.5 h-4 w-4 shrink-0 text-brand"
                aria-hidden="true"
              />
              {list.title}
            </li>
          ))}
        </ul>

        <div className="mt-8">
          <LinkButton
            link={`/contact?type=project&package=${encodeURIComponent(`${service ? `${service} — ` : ''}${title}`)}`}
            variant={featured ? 'default' : 'outline'}
            className={`h-11 w-full justify-between rounded-xl px-4 font-semibold ${featured ? 'bg-brand text-white hover:bg-brand/90' : 'border-border/70 bg-background/50 hover:border-brand/40'}`}
          >
            {isCustom ? 'Request a quote' : 'Enquire about this plan'}
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </LinkButton>
        </div>
      </CardContent>
    </Card>
  )
}

export default PriceCard
