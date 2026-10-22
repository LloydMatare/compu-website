'use client'

import React, { useEffect, useState } from 'react'
import { motion } from 'motion/react'
import { Star, Quote } from 'lucide-react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from '@/components/ui/carousel'
import { testimonies } from '@/lib/constants/data'
import { cn } from '@/lib/utils'
import Autoplay from 'embla-carousel-autoplay'

export default function Testimonies() {
  const [api, setApi] = useState<CarouselApi | null>(null)
  const [selected, setSelected] = useState(0)

  useEffect(() => {
    if (!api) return

    const onSelect = () => setSelected(api.selectedScrollSnap())
    onSelect()
    api.on('reInit', onSelect)
    api.on('select', onSelect)

    return () => {
      api.off('reInit', onSelect)
      api.off('select', onSelect)
    }
  }, [api])

  return (
    <div className="w-full">
      <Carousel
        opts={{
          align: 'center',
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 5000,
          }),
        ]}
        setApi={setApi}
        className="w-full"
      >
        <CarouselContent>
          {testimonies.map((testimony, index) => (
            <CarouselItem key={testimony.id} className="basis-full">
              <div className="px-1 py-2">
                <motion.figure
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.5, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
                  className="flex h-full flex-col rounded-3xl border border-border/60 bg-card/60 p-7 shadow-[0_0_60px_-30px_var(--glow)] backdrop-blur-xl md:p-9"
                >
                  <Quote className="h-8 w-8 shrink-0 text-brand/60" aria-hidden="true" />

                  <blockquote className="mt-5 flex-grow">
                    <p className="font-display text-base leading-relaxed text-foreground/95 md:text-lg">
                      “{testimony.description}”
                    </p>
                  </blockquote>

                  <div className="mt-6 flex items-center gap-1" aria-label="Rated 5 out of 5">
                    {Array.from({ length: 5 }).map((_, star) => (
                      <Star key={star} className="h-4 w-4 fill-brand text-brand" aria-hidden="true" />
                    ))}
                  </div>

                  <figcaption className="mt-5 flex items-center gap-3 border-t border-border/60 pt-5">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-brand/25 bg-brand/10 font-display text-sm font-bold text-brand">
                      {testimony.name
                        .split(' ')
                        .map((part) => part.charAt(0))
                        .slice(0, 2)
                        .join('')}
                    </span>
                    <span className="min-w-0">
                      <cite className="block truncate text-sm font-semibold text-foreground">
                        {testimony.name}
                      </cite>
                      <span className="block truncate text-xs text-muted-foreground">
                        {testimony.type}
                      </span>
                    </span>
                  </figcaption>
                </motion.figure>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        <div className="mt-6 flex items-center justify-center gap-4">
          <CarouselPrevious className="static border-border/60 bg-card/60 text-foreground backdrop-blur-sm hover:border-brand/40" />

          <div className="flex items-center gap-2">
            {testimonies.map((testimony, index) => (
              <button
                key={testimony.id}
                type="button"
                onClick={() => api?.scrollTo(index)}
                aria-label={`Show testimonial from ${testimony.name}`}
                aria-current={selected === index}
                className={cn(
                  'h-2 rounded-full transition-all duration-300 ease-out-expo focus-visible:ring-2 focus-visible:ring-ring',
                  selected === index ? 'w-6 bg-brand' : 'w-2 bg-border hover:bg-muted-foreground/60'
                )}
              />
            ))}
          </div>

          <CarouselNext className="static border-border/60 bg-card/60 text-foreground backdrop-blur-sm hover:border-brand/40" />
        </div>
      </Carousel>
    </div>
  )
}
