'use client'

import { useEffect, useMemo, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useMutation, useQuery } from 'convex/react'
import { api } from '@/convex/_generated/api'
import type { Id } from '@/convex/_generated/dataModel'
import { ArrowLeft, Calendar, Eye, Heart, MessageSquare, Send, Timer } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Separator } from '@/components/ui/separator'
import { Textarea } from '@/components/ui/textarea'
import { toast } from 'sonner'

interface PostArticleProps {
  slug: string
}

export function PostArticle({ slug }: PostArticleProps) {
  const post = useQuery(api.posts.getBySlug, { slug })
  const comments = useQuery(
    api.comments.listByPost,
    post ? { postId: post._id } : 'skip'
  )
  const toggleLike = useMutation(api.posts.toggleLike)
  const incrementView = useMutation(api.posts.incrementView)
  const submitComment = useMutation(api.comments.submit)

  const [author, setAuthor] = useState('')
  const [email, setEmail] = useState('')
  const [text, setText] = useState('')
  const [submitting, setSubmitting] = useState(false)

  useEffect(() => {
    if (post?._id) void incrementView({ id: post._id })
  }, [post?._id, incrementView])

  const approvedComments = useMemo(
    () => (comments ?? []).filter((comment) => comment.approved),
    [comments]
  )

  if (post === undefined) {
    return (
      <div className="container mx-auto max-w-3xl px-4 py-24">
        <div className="h-8 w-2/3 animate-pulse rounded bg-muted" />
        <div className="mt-8 h-72 animate-pulse rounded-2xl bg-muted" />
      </div>
    )
  }

  if (post === null) {
    return (
      <div className="container mx-auto max-w-3xl px-4 py-24 text-center">
        <h1 className="text-2xl font-bold">Article not found</h1>
        <p className="mt-2 text-muted-foreground">
          The article you are looking for may have been removed.
        </p>
        <Button asChild className="mt-6">
          <Link href="/blog">Back to blog</Link>
        </Button>
      </div>
    )
  }

  async function onComment(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (!post) return
    if (!author.trim() || !text.trim()) return
    setSubmitting(true)
    try {
      await submitComment({
        postId: post._id,
        author: author.trim(),
        email: email.trim() || undefined,
        text: text.trim(),
      })
      toast.success('Comment submitted for moderation.')
      setAuthor('')
      setEmail('')
      setText('')
    } catch {
      toast.error('Could not submit your comment. Please try again.')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <article className="pb-24">
      <div className="container mx-auto max-w-3xl px-4 pt-12">
        <Link
          href="/blog"
          className="mb-8 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to blog
        </Link>

        <div className="mb-5 flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
          <Badge variant="outline">{post.category}</Badge>
          <span className="flex items-center gap-1.5">
            <Calendar className="h-3.5 w-3.5" />
            {new Date(post._creationTime).toLocaleDateString('en-GB', {
              day: 'numeric',
              month: 'long',
              year: 'numeric',
            })}
          </span>
          {post.readTime ? (
            <span className="flex items-center gap-1.5">
              <Timer className="h-3.5 w-3.5" />
              {post.readTime}
            </span>
          ) : null}
        </div>

        <h1 className="text-3xl font-bold leading-tight md:text-5xl">{post.title}</h1>
        <p className="mt-4 text-sm text-muted-foreground">
          By {post.author ?? 'Compulink Team'}
        </p>

        {post.coverImage ? (
          <div className="relative mt-8 aspect-video overflow-hidden rounded-2xl border border-border/60 bg-muted">
            <Image
              src={post.coverImage}
              alt={post.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 768px"
              priority
            />
          </div>
        ) : null}

        <div className="mt-10 space-y-5 text-base leading-relaxed text-foreground/90">
          {post.content
            .split(/\n{2,}/)
            .filter(Boolean)
            .map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
        </div>

        <div className="mt-10 flex items-center gap-6 border-y border-border/60 py-5 text-sm text-muted-foreground">
          <button
            type="button"
            onClick={() => void toggleLike({ id: post._id })}
            className="flex items-center gap-2 transition-colors hover:text-rose-400"
          >
            <Heart className="h-4 w-4" />
            {post.likes} likes
          </button>
          <span className="flex items-center gap-2">
            <Eye className="h-4 w-4" />
            {post.views} views
          </span>
          <span className="flex items-center gap-2">
            <MessageSquare className="h-4 w-4" />
            {approvedComments.length} comments
          </span>
        </div>

        <section className="mt-14">
          <h2 className="text-xl font-semibold">Comments</h2>
          {approvedComments.length === 0 ? (
            <p className="mt-3 text-sm text-muted-foreground">
              No comments yet. Be the first to share your thoughts.
            </p>
          ) : (
            <ul className="mt-6 space-y-4">
              {approvedComments.map((comment) => (
                <li
                  key={comment._id}
                  className="rounded-xl border border-border/60 bg-card/40 p-5"
                >
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium">{comment.author}</p>
                    <p className="text-xs text-muted-foreground">
                      {new Date(comment._creationTime).toLocaleDateString()}
                    </p>
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground">{comment.text}</p>
                </li>
              ))}
            </ul>
          )}

          <Separator className="my-8" />

          <form onSubmit={onComment} className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
              Leave a comment
            </h3>
            <div className="grid gap-3 sm:grid-cols-2">
              <Input
                value={author}
                onChange={(event) => setAuthor(event.target.value)}
                placeholder="Your name"
                required
              />
              <Input
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="Email (optional)"
              />
            </div>
            <Textarea
              value={text}
              onChange={(event) => setText(event.target.value)}
              placeholder="Share your thoughts..."
              rows={4}
              required
            />
            <Button type="submit" disabled={submitting} className="gap-2">
              <Send className="h-4 w-4" />
              {submitting ? 'Submitting...' : 'Post comment'}
            </Button>
            <p className="text-xs text-muted-foreground">
              Comments are reviewed before they appear publicly.
            </p>
          </form>
        </section>
      </div>
    </article>
  )
}
