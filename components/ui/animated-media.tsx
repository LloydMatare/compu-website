'use client'

import Image from 'next/image'
import { Pause, Play } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { animatedMedia, type AnimatedMediaName } from '@/lib/animated-media'
import { cn } from '@/lib/utils'

interface AnimatedMediaProps {
  media: AnimatedMediaName
  alt: string
  className?: string
  sizes?: string
}

export default function AnimatedMedia({
  media,
  alt,
  className,
  sizes = '(max-width: 768px) 100vw, 50vw',
}: AnimatedMediaProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const manualPlayback = useRef<boolean | null>(null)
  const [playing, setPlaying] = useState(false)
  const [failed, setFailed] = useState(false)
  const src = `/media/${animatedMedia[media]}.mp4`
  const poster = `/media/${animatedMedia[media]}-poster.webp`

  useEffect(() => {
    const container = containerRef.current
    const video = videoRef.current
    if (!container || !video) return

    const motionPreference = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    )
    const connection = (
      navigator as Navigator & { connection?: { saveData?: boolean } }
    ).connection
    let visible = false

    const syncPlayback = () => {
      const mayPlay =
        manualPlayback.current ??
        (!motionPreference.matches && !connection?.saveData)

      if (visible && !document.hidden && mayPlay) {
        if (video.getAttribute('src') !== src) video.src = src
        void video.play().catch(() => {})
      } else {
        video.pause()
      }
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        visible = entry.isIntersecting
        syncPlayback()
      },
      { threshold: 0.15 },
    )
    observer.observe(container)
    motionPreference.addEventListener('change', syncPlayback)
    document.addEventListener('visibilitychange', syncPlayback)

    return () => {
      observer.disconnect()
      motionPreference.removeEventListener('change', syncPlayback)
      document.removeEventListener('visibilitychange', syncPlayback)
      video.pause()
    }
  }, [src])

  function togglePlayback() {
    const video = videoRef.current
    if (!video) return

    manualPlayback.current = !playing
    if (playing) {
      video.pause()
    } else {
      if (video.getAttribute('src') !== src) video.src = src
      void video.play().catch(() => {})
    }
  }

  return (
    <div
      ref={containerRef}
      className={cn(
        'relative isolate aspect-video w-full overflow-hidden rounded-2xl border border-border/60 bg-slate-950',
        className,
      )}
    >
      <Image
        src={poster}
        alt={alt}
        fill
        sizes={sizes}
        className="object-contain"
      />
      <video
        ref={videoRef}
        muted
        loop
        playsInline
        preload="none"
        aria-hidden="true"
        className={cn(
          'absolute inset-0 h-full w-full object-contain',
          (!playing || failed) && 'opacity-0',
        )}
        onPlaying={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
        onError={() => setFailed(true)}
      />
      {!failed && (
        <button
          type="button"
          onClick={togglePlayback}
          aria-label={`${playing ? 'Pause' : 'Play'} animation: ${alt}`}
          className="absolute bottom-3 right-3 z-10 inline-flex min-h-11 items-center gap-2 rounded-full border border-white/25 bg-black/75 px-4 py-2 text-xs font-semibold text-white backdrop-blur-sm transition-colors hover:bg-black/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
        >
          {playing ? (
            <Pause className="h-3.5 w-3.5" aria-hidden="true" />
          ) : (
            <Play className="h-3.5 w-3.5" aria-hidden="true" />
          )}
          {playing ? 'Pause' : 'Play'}
        </button>
      )}
    </div>
  )
}
