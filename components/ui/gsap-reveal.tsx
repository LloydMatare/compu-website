'use client'

import React, { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { cn } from '@/lib/utils'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

export interface GsapRevealProps {
  children: React.ReactNode
  className?: string
  /** Seconds. */
  duration?: number
  /** Travel distance in pixels. */
  distance?: number
  /** Seconds between each child element when staggering. */
  stagger?: number
  /** Seconds to wait before starting. */
  delay?: number
  /** Animates direct children instead of the wrapper itself. */
  childrenSelector?: string
}

export default function GsapReveal({
  children,
  className,
  duration = 0.9,
  distance = 40,
  stagger = 0.08,
  delay = 0,
  childrenSelector,
}: GsapRevealProps) {
  const scope = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    const element = scope.current
    if (!element) return

    const targets = childrenSelector
      ? element.querySelectorAll<HTMLElement>(childrenSelector)
      : [element]

    if (targets.length === 0) return

    const context = gsap.context(() => {
      gsap.fromTo(
        targets,
        { y: distance, autoAlpha: 0 },
        {
          y: 0,
          autoAlpha: 1,
          duration,
          delay,
          ease: 'power3.out',
          stagger: targets.length > 1 ? stagger : 0,
          scrollTrigger: {
            trigger: element,
            start: 'top 85%',
            once: true,
          },
        }
      )
    }, element)

    return () => context.revert()
  }, [childrenSelector, delay, distance, duration, stagger])

  return (
    <div ref={scope} className={cn(className)}>
      {children}
    </div>
  )
}
