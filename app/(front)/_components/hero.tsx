import { Badge } from '@/components/ui/badge'
import { ChevronRight, ArrowRight, Sparkles } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import LinkButton from '@/components/link-button'

interface HeroProps {
  backImage?: string
  image?: string
  title?: string
  subtitle?: string
  description?: string
  primaryButtonText?: string
  primaryButtonLink?: string
  secondaryButtonText?: string
  secondaryButtonLink?: string
  showStats?: boolean
  showBadge?: boolean
  badgeText?: string
  overlayIntensity?: 'light' | 'medium' | 'dark'
  textAlign?: 'left' | 'center'
  height?: 'small' | 'medium' | 'large' | 'full'
}

const heroStats = [
  { value: '30+', label: 'Years Experience' },
  { value: '500+', label: 'Projects Completed' },
  { value: '99%', label: 'Client Satisfaction' },
  { value: '24/7', label: 'Support Available' },
]

const trustedIndustries = [
  'CABS',
  'Old Mutual',
  'Government',
  'Healthcare',
  'Education',
  'Finance',
]

function Hero({
  backImage,
  image,
  title = 'Building digital products & brands',
  subtitle = 'Innovation & Excellence',
  description = 'Here at Compulink we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.',
  primaryButtonText = 'Get Started',
  primaryButtonLink = '/portfolio',
  secondaryButtonText = 'Speak to Sales',
  secondaryButtonLink = '/contact',
  showStats = true,
  showBadge = true,
  badgeText = 'Leading IT Solutions Provider in Zimbabwe',
  overlayIntensity = 'medium',
  textAlign = 'left',
  height = 'large',
}: HeroProps) {
  const heightClasses = {
    small: 'h-[420px] md:h-[460px]',
    medium: 'h-[520px] md:h-[560px]',
    large: 'h-[600px] md:h-[660px] lg:h-[720px]',
    full: 'min-h-screen',
  }

  // Theme-aware scrims: `background` is the page canvas, so the hero stays
  // readable in both the dark (default) and light themes.
  const sideOverlayClasses = {
    light: 'from-background/70 via-background/50 to-background/25',
    medium: 'from-background/90 via-background/70 to-background/40',
    dark: 'from-background via-background/85 to-background/55',
  }

  const centerOverlayClasses = {
    light: 'from-background/75 via-background/55 to-background/30',
    medium: 'from-background/95 via-background/80 to-background/45',
    dark: 'from-background via-background/95 to-background/70',
  }

  const textAlignClasses = {
    left: 'text-left items-start',
    center: 'text-center items-center mx-auto',
  }

  const overlay =
    textAlign === 'center'
      ? centerOverlayClasses[overlayIntensity]
      : sideOverlayClasses[overlayIntensity]

  const titleWords = title.split(' ')

  return (
    <section
      className={`relative w-full overflow-hidden ${heightClasses[height]}`}
      aria-label={title}
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src={`/images/${backImage ?? 'class1.jpg'}`}
          alt=""
          fill
          className="object-cover object-center"
          priority
          quality={90}
        />
        <div className={`absolute inset-0 bg-gradient-to-r ${overlay}`} />
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-background/40" />
        <div className="pointer-events-none absolute inset-0 grid-fade opacity-40" />
        <div className="pointer-events-none absolute -top-32 left-1/4 h-80 w-80 rounded-full bg-primary/20 blur-3xl animate-pulse-glow" />
      </div>

      {/* Content */}
      <div className="relative flex h-full w-full">
        <div className="container mx-auto px-4">
          <div
            className={`grid h-full items-center gap-10 pt-24 pb-16 md:pt-28 lg:grid-cols-12 lg:gap-8 lg:pb-0 ${textAlignClasses[textAlign]}`}
          >
            <div
              className={`space-y-6 lg:col-span-7 ${textAlign === 'center' ? 'mx-auto max-w-4xl' : ''}`}
            >
              {showBadge && (
                <Badge
                  variant="outline"
                  className="h-auto gap-2 rounded-full border-brand/30 bg-brand/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-brand backdrop-blur-sm"
                >
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-brand" />
                  </span>
                  {badgeText}
                </Badge>
              )}

              {subtitle && (
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand md:text-sm">
                  {subtitle}
                </p>
              )}

              <h1 className="font-display text-3xl font-bold leading-[1.1] tracking-tight text-foreground md:text-4xl lg:text-6xl">
                {titleWords.map((word, index) => {
                  const isAccent =
                    word.toLowerCase().includes('compulink') || index === titleWords.length - 1

                  return (
                    <span
                      key={`${word}-${index}`}
                      className={isAccent ? 'text-gradient-brand' : undefined}
                    >
                      {word}
                      {index < titleWords.length - 1 ? ' ' : ''}
                    </span>
                  )
                })}
              </h1>

              {description && (
                <p
                  className={`max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base ${
                    textAlign === 'center' ? 'mx-auto max-w-3xl' : ''
                  }`}
                >
                  {description}
                </p>
              )}

              {(primaryButtonText || secondaryButtonText) && (
                <div
                  className={`flex flex-col gap-3 pt-2 sm:flex-row ${
                    textAlign === 'center' ? 'justify-center' : ''
                  }`}
                >
                  {primaryButtonText && primaryButtonLink && (
                    <LinkButton
                      link={primaryButtonLink}
                      size="lg"
                      className="h-11 rounded-full px-6 text-sm font-semibold shadow-[0_0_40px_-12px_var(--glow)]"
                    >
                      {primaryButtonText}
                      <ChevronRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover/button:translate-x-1" />
                    </LinkButton>
                  )}
                  {secondaryButtonText && secondaryButtonLink && (
                    <LinkButton
                      link={secondaryButtonLink}
                      variant="outline"
                      size="lg"
                      className="h-11 rounded-full border-border/70 bg-card/50 px-6 text-sm font-semibold backdrop-blur-sm hover:border-brand/40"
                    >
                      {secondaryButtonText}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </LinkButton>
                  )}
                </div>
              )}

              {showStats && (
                <div
                  className={`grid max-w-2xl grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border/60 bg-border/60 sm:grid-cols-4 ${
                    textAlign === 'center' ? 'mx-auto' : ''
                  }`}
                >
                  {heroStats.map((stat) => (
                    <div key={stat.label} className="bg-card/70 px-4 py-5 backdrop-blur-sm">
                      <p className="font-display text-2xl font-bold text-gradient-brand md:text-3xl">
                        {stat.value}
                      </p>
                      <p className="mt-1 text-xs text-muted-foreground">{stat.label}</p>
                    </div>
                  ))}
                </div>
              )}

              {textAlign === 'center' && (
                <div className="w-full max-w-3xl border-t border-border/60 pt-6">
                  <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                    Trusted by industry leaders
                  </p>
                  <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
                    {trustedIndustries.map((industry) => (
                      <span
                        key={industry}
                        className="inline-flex items-center gap-1.5 text-xs text-muted-foreground transition-colors hover:text-foreground"
                      >
                        <Sparkles className="h-3 w-3 text-brand" />
                        {industry}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {image && (
              <div className="hidden lg:col-span-5 lg:flex lg:items-center lg:justify-center">
                <div className="relative h-52 w-full md:h-96 xl:h-[480px]">
                  <Image
                    src={image}
                    alt="Compulink solution illustration"
                    fill
                    className="object-contain drop-shadow-2xl"
                    priority
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Scroll indicator (full height only) */}
      {height === 'full' && (
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <div className="flex h-10 w-6 animate-bounce justify-center rounded-full border-2 border-border/70">
            <div className="mt-2 h-3 w-1 rounded-full bg-brand" />
          </div>
        </div>
      )}

      </section>
  )
}

export default Hero
