'use client'

import { useEffect, useRef } from 'react'
import { Badge } from '@/components/ui/badge'
import { ChevronRight, ArrowRight, Sparkles, Zap } from 'lucide-react'
import Image from 'next/image'
import LinkButton from '@/components/link-button'
import { gsap } from 'gsap'

interface HeroCyberpunkProps {
  backImage?: string
  primaryButtonText?: string
  primaryButtonLink?: string
  secondaryButtonText?: string
  secondaryButtonLink?: string
}

const heroStats = [
  { value: '30+', label: 'Years Experience' },
  { value: '500+', label: 'Projects' },
  { value: '99%', label: 'Success Rate' },
  { value: '24/7', label: 'Neural Support' },
]

export function HeroCyberpunk({
  backImage,
  primaryButtonText = 'INITIATE PROTOCOL',
  primaryButtonLink = '/services',
  secondaryButtonText = 'ESTABLISH CONNECTION',
  secondaryButtonLink = '/contact',
}: HeroCyberpunkProps) {
  const titleRef = useRef<HTMLHeadingElement>(null)
  const subtitleRef = useRef<HTMLParagraphElement>(null)
  const statsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(titleRef.current?.children || [], {
        y: 100,
        opacity: 0,
        stagger: 0.05,
        duration: 1,
        ease: 'power4.out',
      })
      gsap.from(subtitleRef.current, {
        x: -50,
        opacity: 0,
        duration: 0.8,
        delay: 0.3,
        ease: 'power3.out',
      })
      gsap.from(statsRef.current?.children || [], {
        scale: 0.8,
        opacity: 0,
        stagger: 0.1,
        duration: 0.6,
        delay: 0.8,
        ease: 'back.out(1.7)',
      })
    })
    return () => ctx.revert()
  }, [])

  return (
    <section className="relative min-h-screen w-full overflow-hidden flex items-center">
      <div className="absolute inset-0">
        <Image
          src={`/images/${backImage ?? 'web3.webp'}`}
          alt=""
          fill
          className="object-cover object-center opacity-40"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/80" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
        <div className="scanlines absolute inset-0" />
      </div>

      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent neon-glow" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent neon-glow" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl space-y-8">
          <Badge
            variant="outline"
            className="h-auto gap-2 rounded-none border-cyan-400/60 bg-cyan-400/10 px-4 py-1.5 text-xs font-mono uppercase tracking-[0.3em] text-cyan-400 holographic-border"
          >
            <Zap className="h-3 w-3 neon-glow" />
            SYSTEM.ONLINE // COMPULINK.NET
          </Badge>

          <p ref={subtitleRef} className="text-xs font-mono uppercase tracking-[0.5em] text-purple-400">
            [NEURAL_NETWORK_ACTIVE]
          </p>

          <h1 ref={titleRef} className="font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.9] tracking-tighter">
            <span className="block text-foreground">DIGITAL</span>
            <span className="block holographic-text">INFRASTRUCTURE</span>
            <span className="block text-foreground">PROTOCOL</span>
          </h1>

          <p className="max-w-2xl text-lg text-muted-foreground font-mono">
            &gt; Compulink Systems: Deploying quantum-grade IT solutions across Zimbabwe&apos;s digital frontier...
            <span className="animate-pulse">_</span>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <LinkButton
              link={primaryButtonLink}
              size="lg"
              className="h-12 rounded-none px-8 text-sm font-mono font-bold bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-400 hover:to-purple-400 border-0 shadow-[0_0_40px_rgba(6,182,212,0.4)] glitch-hover"
            >
              {primaryButtonText}
              <ChevronRight className="ml-2 h-4 w-4" />
            </LinkButton>
            <LinkButton
              link={secondaryButtonLink}
              variant="outline"
              size="lg"
              className="h-12 rounded-none px-8 text-sm font-mono font-bold border-cyan-400/60 text-cyan-400 hover:bg-cyan-400/10 holographic-border glitch-hover"
            >
              {secondaryButtonText}
              <ArrowRight className="ml-2 h-4 w-4" />
            </LinkButton>
          </div>

          <div ref={statsRef} className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8 max-w-3xl">
            {heroStats.map((stat, i) => (
              <div key={stat.label} className="cyberpunk-card p-4 text-center glitch-hover">
                <p className="font-display text-3xl font-bold holographic-text">{stat.value}</p>
                <p className="mt-1 text-xs font-mono text-muted-foreground uppercase tracking-wider">{stat.label}</p>
                <div className="mt-2 h-px w-full bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute right-10 bottom-10 hidden lg:block">
        <div className="flex flex-col gap-2 font-mono text-xs text-cyan-400/60">
          <div>&gt; LAT: -17.8252</div>
          <div>&gt; LNG: 31.0335</div>
          <div>&gt; NODE: HARARE.ZW</div>
        </div>
      </div>
    </section>
  )
}
