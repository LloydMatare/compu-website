import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { HolographicCard } from '@/components/effects/holographic-card'

export interface ServiceCardProps {
  title: string
  image: string
  description?: string
  link: string
}

function ServiceCard({ title, image, description, link }: ServiceCardProps) {
  return (
    <HolographicCard className="group h-full gap-0 overflow-hidden rounded-xl">
      <Card className="h-full gap-0 overflow-hidden border-0 bg-transparent pt-0">
        <div className="relative aspect-[16/9] w-full overflow-hidden">
          <Image
            src={`/images/${image}`}
            alt={title}
            fill
            className="object-cover transition-transform duration-700 ease-out-expo group-hover:scale-110"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />
          <div className="absolute top-2 right-2 h-2 w-2 rounded-full bg-cyan-400 neon-glow" />
        </div>

        <CardHeader className="pt-(--card-spacing)">
          <CardTitle className="font-display text-lg font-bold holographic-text">{title}</CardTitle>
        </CardHeader>

        <CardContent>
          {description && (
            <p className="text-sm leading-relaxed text-muted-foreground">{description}</p>
          )}
        </CardContent>

        <CardFooter className="border-t border-cyan-400/20 bg-transparent">
          <Button
            asChild
            variant="ghost"
            className="w-fit gap-1 px-0 text-sm font-mono font-semibold text-cyan-400 hover:bg-transparent hover:text-cyan-300 glitch-hover"
          >
            <Link href={`/services/${link}`}>
              [EXECUTE]
              <ArrowRight className="h-4 w-4 transition-transform duration-300 ease-out-expo group-hover:translate-x-1" />
            </Link>
          </Button>
        </CardFooter>
      </Card>
    </HolographicCard>
  )
}

export default ServiceCard
