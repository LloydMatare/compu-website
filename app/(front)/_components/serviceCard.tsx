import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export interface ServiceCardProps {
  title: string
  image: string
  description?: string
  link: string
}

function ServiceCard({ title, image, description, link }: ServiceCardProps) {
  return (
    <Card className="group h-full gap-0 overflow-hidden border-border/60 bg-card/50 pt-0 transition-all duration-500 ease-out-expo hover:-translate-y-1 hover:border-brand/40 hover:shadow-[0_0_40px_-12px_var(--glow)]">
      <div className="relative aspect-[16/9] w-full overflow-hidden">
        <Image
          src={`/images/${image}`}
          alt={title}
          fill
          className="object-cover transition-transform duration-700 ease-out-expo group-hover:scale-105"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/70 to-transparent" />
      </div>

      <CardHeader className="pt-(--card-spacing)">
        <CardTitle className="font-display text-lg font-bold text-foreground">{title}</CardTitle>
      </CardHeader>

      <CardContent>
        {description && (
          <p className="text-sm leading-relaxed text-muted-foreground">{description}</p>
        )}
      </CardContent>

      <CardFooter className="border-border/60 bg-transparent">
        <Button
          asChild
          variant="ghost"
          className="w-fit gap-1 px-0 text-sm font-semibold text-brand hover:bg-transparent hover:text-brand/80"
        >
          <Link href={`/services/${link}`}>
            View details
            <ArrowRight className="h-4 w-4 transition-transform duration-300 ease-out-expo group-hover:translate-x-1" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  )
}

export default ServiceCard
