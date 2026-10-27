'use client'

import { useMemo, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useMutation, useQuery } from 'convex/react'
import { api } from '@/convex/_generated/api'
import type { Id } from '@/convex/_generated/dataModel'
import { ArrowUpRight, Calendar, Eye, Heart, Search, Timer } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { Skeleton } from '@/components/ui/skeleton'
import Hero from '../_components/hero'
import GsapReveal from '@/components/ui/gsap-reveal'
import { cn } from '@/lib/utils'
import AnimatedMedia from '@/components/ui/animated-media'

function formatDate(timestamp: number) {
  return new Date(timestamp).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  })
}

function PostCard({
  post,
  onLike,
}: {
  post: {
    _id: Id<'posts'>
    _creationTime: number
    title: string
    slug: string
    excerpt?: string
    content: string
    coverImage: string | null
    category: string
    readTime?: string
    author?: string
    likes: number
    views: number
  }
  onLike: (id: Id<'posts'>) => void
}) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border/60 bg-card/50 transition-all hover:-translate-y-1 hover:border-brand/40">
      <Link
        href={`/blog/${post.slug}`}
        className="relative block aspect-video overflow-hidden bg-muted"
      >
        {post.coverImage ? (
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        ) : null}
        <div className="absolute left-3 top-3">
          <Badge variant="secondary">{post.category}</Badge>
        </div>
      </Link>
      <div className="flex flex-1 flex-col p-6">
        <div className="mb-3 flex items-center gap-4 text-xs text-muted-foreground">
          <span className="flex items-center gap-1.5">
            <Calendar className="h-3.5 w-3.5" />
            {formatDate(post._creationTime)}
          </span>
          {post.readTime ? (
            <span className="flex items-center gap-1.5">
              <Timer className="h-3.5 w-3.5" />
              {post.readTime}
            </span>
          ) : null}
        </div>
        <h3 className="mb-3 text-lg font-semibold leading-snug transition-colors group-hover:text-brand">
          <Link href={`/blog/${post.slug}`}>{post.title}</Link>
        </h3>
        <p className="mb-5 line-clamp-3 flex-1 text-sm leading-relaxed text-muted-foreground">
          {post.excerpt ?? post.content}
        </p>
        <div className="flex items-center justify-between border-t border-border/50 pt-4">
          <div className="flex items-center gap-4 text-xs text-muted-foreground">
            <button
              type="button"
              onClick={() => onLike(post._id)}
              className="flex items-center gap-1.5 transition-colors hover:text-rose-400"
              aria-label="Like this post"
            >
              <Heart className="h-4 w-4" />
              {post.likes}
            </button>
            <span className="flex items-center gap-1.5">
              <Eye className="h-4 w-4" />
              {post.views}
            </span>
          </div>
          <Link
            href={`/blog/${post.slug}`}
            className="flex items-center gap-1 text-xs font-medium text-brand"
          >
            Read
            <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>
    </article>
  )
}

export default function BlogPage() {
  const posts = useQuery(api.posts.list, { publishedOnly: true })
  const toggleLike = useMutation(api.posts.toggleLike)
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('All')

  const categories = useMemo(
    () => ['All', ...new Set((posts ?? []).map((post) => post.category))],
    [posts]
  )

  const filtered = useMemo(() => {
    const needle = search.trim().toLowerCase()
    return (posts ?? []).filter((post) => {
      const matchesCategory = category === 'All' || post.category === category
      const matchesSearch =
        !needle ||
        post.title.toLowerCase().includes(needle) ||
        (post.excerpt ?? post.content).toLowerCase().includes(needle)
      return matchesCategory && matchesSearch
    })
  }, [posts, search, category])

  const [featured, ...rest] = filtered

  return (
    <div>
      <Hero
        backImage="comm2.jpg"
        image=""
        title="Compulink Blog"
        subtitle="Insights, News, and Technology Updates"
      />

      <div className="container mx-auto px-4 py-16">
        <GsapReveal className="mb-12 grid items-center gap-6 overflow-hidden rounded-3xl border border-border/60 bg-card/50 p-5 md:grid-cols-2 md:p-8">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-brand">
              From Compulink
            </p>
            <h2 className="mt-3 font-display text-2xl font-bold md:text-3xl">
              Technology moves. <span className="text-gradient-brand">Stay informed.</span>
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Explore company news, practical guides and perspectives on the technology
              shaping your business.
            </p>
          </div>
          <AnimatedMedia media="news" alt="Compulink news and technology updates" />
        </GsapReveal>
        <GsapReveal className="mb-12 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-brand">
              Knowledge Hub
            </p>
            <h1 className="mt-3 text-3xl font-bold md:text-4xl">
              Latest <span className="text-gradient-brand">Insights</span>
            </h1>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">
              Stay updated with the latest technology trends, company news and industry insights
              from Compulink Systems.
            </p>
          </div>
          <div className="relative w-full max-w-sm">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Search articles..."
              className="pl-9"
            />
          </div>
        </GsapReveal>

        <div className="mb-10 flex flex-wrap gap-2">
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

        {posts === undefined ? (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 6 }).map((_, index) => (
              <Skeleton key={index} className="h-80 rounded-2xl" />
            ))}
          </div>
        ) : filtered.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-border/60 py-20 text-center">
            <p className="text-muted-foreground">No articles match your filters yet.</p>
          </div>
        ) : (
          <>
            {featured ? (
              <GsapReveal className="mb-16">
                <Link
                  href={`/blog/${featured.slug}`}
                  className="group grid overflow-hidden rounded-3xl border border-border/60 bg-card/50 lg:grid-cols-2"
                >
                  <div className="relative aspect-video overflow-hidden bg-muted lg:aspect-auto">
                    {featured.coverImage ? (
                      <Image
                        src={featured.coverImage}
                        alt={featured.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        priority
                      />
                    ) : null}
                    <Badge className="absolute left-4 top-4 bg-brand text-brand-foreground">
                      Featured
                    </Badge>
                  </div>
                  <div className="flex flex-col justify-between p-8 lg:p-10">
                    <div>
                      <div className="mb-4 flex flex-wrap items-center gap-4 text-xs text-muted-foreground">
                        <Badge variant="outline">{featured.category}</Badge>
                        <span className="flex items-center gap-1.5">
                          <Calendar className="h-3.5 w-3.5" />
                          {formatDate(featured._creationTime)}
                        </span>
                        {featured.readTime ? (
                          <span className="flex items-center gap-1.5">
                            <Timer className="h-3.5 w-3.5" />
                            {featured.readTime}
                          </span>
                        ) : null}
                      </div>
                      <h2 className="text-2xl font-bold leading-tight transition-colors group-hover:text-brand md:text-3xl">
                        {featured.title}
                      </h2>
                      <p className="mt-4 line-clamp-4 text-sm leading-relaxed text-muted-foreground md:text-base">
                        {featured.excerpt ?? featured.content}
                      </p>
                    </div>
                    <div className="mt-8 flex items-center justify-between border-t border-border/50 pt-5">
                      <div className="flex items-center gap-4 text-xs text-muted-foreground">
                        <span>{featured.author ?? 'Compulink Team'}</span>
                        <span className="flex items-center gap-1.5">
                          <Eye className="h-4 w-4" />
                          {featured.views}
                        </span>
                      </div>
                      <span className="flex items-center gap-1 text-sm font-medium text-brand">
                        Read article
                        <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </span>
                    </div>
                  </div>
                </Link>
              </GsapReveal>
            ) : null}

            <GsapReveal className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {rest.map((post) => (
                <div key={post._id}>
                  <PostCard post={post} onLike={(id) => void toggleLike({ id })} />
                </div>
              ))}
            </GsapReveal>
          </>
        )}
      </div>
    </div>
  )
}
