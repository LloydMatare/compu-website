'use client'

import { useMemo, useState } from 'react'
import Image from 'next/image'
import { useQuery } from 'convex/react'
import { api } from '@/convex/_generated/api'
import { Dialog, DialogContent } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Skeleton } from '@/components/ui/skeleton'
import { X } from 'lucide-react'
import { cn } from '@/lib/utils'

export function PhotoGallery() {
  const items = useQuery(api.gallery.listItems, {})
  const [selectedId, setSelectedId] = useState<string | null>(null)
  const [category, setCategory] = useState('All')

  const categories = useMemo(
    () => ['All', ...new Set((items ?? []).map((item) => item.category ?? 'General'))],
    [items]
  )

  const filtered = useMemo(
    () =>
      (items ?? []).filter(
        (item) => category === 'All' || (item.category ?? 'General') === category
      ),
    [items, category]
  )

  const selected = (items ?? []).find((item) => item._id === selectedId) ?? null

  if (items === undefined) {
    return (
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }).map((_, index) => (
          <Skeleton key={index} className="aspect-square rounded-2xl" />
        ))}
      </div>
    )
  }

  return (
    <div className="mt-8">
      <div className="mb-8 flex flex-wrap justify-center gap-2">
        {categories.map((item) => (
          <button
            key={item}
            type="button"
            onClick={() => setCategory(item)}
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

      {filtered.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-border/60 py-20 text-center text-muted-foreground">
          No gallery items yet.
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((item) => (
            <button
              key={item._id}
              type="button"
              onClick={() => setSelectedId(item._id)}
              className="group relative aspect-square overflow-hidden rounded-2xl border border-border/60 bg-muted text-left"
            >
              {item.images[0] ? (
                <Image
                  src={item.images[0] ?? ''}
                  alt={item.title ?? 'Gallery item'}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              ) : null}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="absolute inset-x-0 bottom-0 translate-y-2 p-6 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                <p className="text-xs font-medium uppercase tracking-widest text-brand">
                  {item.category ?? 'General'}
                </p>
                <h3 className="mt-1 text-lg font-semibold text-white">{item.title}</h3>
                <p className="mt-1 line-clamp-2 text-sm text-white/70">{item.description}</p>
              </div>
              <span className="absolute right-4 top-4 rounded-full bg-brand px-3 py-1 text-xs font-medium text-brand-foreground">
                {item.category ?? 'General'}
              </span>
            </button>
          ))}
        </div>
      )}

      <Dialog open={!!selected} onOpenChange={() => setSelectedId(null)}>
        <DialogContent className="max-w-5xl overflow-hidden border-border/60 bg-card p-0">
          {selected ? (
            <div className="grid lg:grid-cols-2">
              <div className="relative aspect-square bg-muted lg:aspect-auto">
                {selected.images[0] ? (
                  <Image
                    src={selected.images[0] ?? ''}
                    alt={selected.title ?? 'Gallery item'}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                ) : null}
              </div>
              <div className="flex flex-col justify-center p-8">
                <span className="mb-4 w-fit rounded-full bg-brand/10 px-3 py-1 text-xs font-medium text-brand">
                  {selected.category}
                </span>
                <h2 className="text-2xl font-bold">{selected.title}</h2>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  {selected.description}
                </p>
                {selected.company ? (
                  <p className="mt-4 text-xs text-muted-foreground">
                    Delivered by <span className="text-foreground">{selected.company}</span>
                  </p>
                ) : null}
                <Button
                  variant="outline"
                  className="mt-6 w-fit"
                  onClick={() => setSelectedId(null)}
                >
                  <X className="mr-2 h-4 w-4" />
                  Close
                </Button>
              </div>
            </div>
          ) : null}
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default PhotoGallery
