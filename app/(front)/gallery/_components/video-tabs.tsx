'use client'

import { useMemo, useState } from 'react'
import { useQuery } from 'convex/react'
import { api } from '@/convex/_generated/api'
import VideoCard from './video-card'
import { Skeleton } from '@/components/ui/skeleton'
import { cn } from '@/lib/utils'

function VideoTab() {
  const videos = useQuery(api.gallery.listVideos, {})
  const [activeId, setActiveId] = useState<string | null>(null)
  const [category, setCategory] = useState('All')

  const categories = useMemo(
    () => ['All', ...new Set((videos ?? []).map((video) => video.category ?? 'General'))],
    [videos]
  )

  const filtered = useMemo(
    () =>
      (videos ?? []).filter(
        (video) => category === 'All' || (video.category ?? 'General') === category
      ),
    [videos, category]
  )

  const selected = filtered.find((video) => video._id === activeId) ?? filtered[0]

  if (videos === undefined) {
    return <Skeleton className="aspect-video w-full rounded-2xl" />
  }

  if (videos.length === 0) {
    return (
      <div className="rounded-2xl border border-dashed border-border/60 py-20 text-center text-muted-foreground">
        No videos published yet.
      </div>
    )
  }

  return (
    <div className="space-y-8">
      <div className="flex flex-wrap justify-center gap-2">
        {categories.map((item) => (
          <button
            key={item}
            type="button"
            onClick={() => {
              setCategory(item)
              setActiveId(null)
            }}
            className={cn(
              'rounded-full border px-4 py-1.5 text-xs font-medium transition-colors',
              category === item
                ? 'border-brand bg-brand/10 text-brand'
                : 'border-border/60 text-muted-foreground hover:border-brand/40 hover:text-foreground'
            )}
          >
            {item}
          </button>
        ))}
      </div>

      {filtered.length > 1 ? (
        <div className="flex flex-wrap justify-center gap-2">
          {filtered.map((video) => (
            <button
              key={video._id}
              type="button"
              onClick={() => setActiveId(video._id)}
              className={cn(
                'rounded-full border px-4 py-1.5 text-xs font-medium transition-colors',
                selected?._id === video._id
                  ? 'border-brand bg-brand text-brand-foreground'
                  : 'border-border/60 text-muted-foreground hover:border-brand/40 hover:text-foreground'
              )}
            >
              {video.title}
            </button>
          ))}
        </div>
      ) : null}

      {selected ? (
        <VideoCard
          video={selected.videoUrl}
          title={selected.title}
          desc={selected.description}
          category={selected.category}
          poster={selected.poster ?? undefined}
        />
      ) : null}
    </div>
  )
}

export default VideoTab
