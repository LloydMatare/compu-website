import type { Metadata } from 'next'
import { fetchQuery } from 'convex/nextjs'
import { api } from '@/convex/_generated/api'
import { PostArticle } from './post-article'

interface BlogPostPageProps {
  params: Promise<{ id: string }>
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { id } = await params
  const post = await fetchQuery(api.posts.getBySlug, { slug: id }).catch(() => null)

  if (!post) {
    return { title: 'Article Not Found' }
  }

  return {
    title: post.title,
    description: post.excerpt ?? post.content.slice(0, 160),
    openGraph: {
      title: post.title,
      description: post.excerpt ?? post.content.slice(0, 160),
      images: post.coverImage ? [post.coverImage] : undefined,
      type: 'article',
    },
  }
}

export default async function BlogSinglePost({ params }: BlogPostPageProps) {
  const { id } = await params
  return <PostArticle slug={id} />
}
