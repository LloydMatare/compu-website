import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { CircleCheck } from 'lucide-react'
import React from 'react'
import { PriceModal } from './priceModal'

export interface PriceListItem {
  id: number
  title: string
}

export interface PriceCardProps {
  title: string
  subtitle: string
  price: string
  lists?: PriceListItem[]
}

function PriceCard({ title, subtitle, price, lists }: PriceCardProps) {
  return (
    <Card className="group flex h-full flex-col rounded-2xl border border-border/60 bg-card/50 backdrop-blur-xl transition-all duration-500 ease-out-expo hover:-translate-y-1 hover:border-brand/40 hover:shadow-[0_0_40px_-12px_var(--glow)]">
      <CardHeader>
        <CardTitle className="font-display text-base font-bold text-foreground">{title}</CardTitle>
        <p className="text-xs uppercase tracking-widest text-muted-foreground">{subtitle}</p>
      </CardHeader>

      <CardContent className="flex flex-1 flex-col">
        <p className="font-display text-3xl font-bold text-gradient-brand">
          {price === 'N/A' ? price : `$${price}`}
        </p>

        <Separator className="my-5" />

        <ul className="flex-grow space-y-2.5">
          {lists?.map((list) => (
            <li key={list.id} className="flex items-center gap-2.5 text-sm text-foreground/90">
              <CircleCheck className="h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
              {list.title}
            </li>
          ))}
        </ul>

        <div className="mt-6">
          <PriceModal title={title} />
        </div>
      </CardContent>
    </Card>
  )
}

export default PriceCard
