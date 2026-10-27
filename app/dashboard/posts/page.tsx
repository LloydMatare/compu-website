'use client'

import { useState } from 'react'
import { useMutation, useQuery } from 'convex/react'
import { api } from '@/convex/_generated/api'
import type { Id } from '@/convex/_generated/dataModel'
import { ResourcePage } from '@/components/dashboard/resource-page'
import { ResourceForm, type FieldDef } from '@/components/dashboard/resource-form'
import { StatusBadge } from '@/components/dashboard/resource-page'
import { toast } from 'sonner'

const fields: FieldDef[] = [
  { name: 'title', label: 'Title', type: 'text', required: true },
  { name: 'slug', label: 'Slug', type: 'text', required: true },
  { name: 'category', label: 'Category', type: 'text', required: true },
  { name: 'excerpt', label: 'Excerpt', type: 'textarea', rows: 3 },
  { name: 'content', label: 'Content', type: 'textarea', rows: 10, colSpan: 2 },
  { name: 'coverImage', label: 'Cover image URL', type: 'text' },
  { name: 'readTime', label: 'Read time', type: 'text', placeholder: '5 min read' },
  { name: 'author', label: 'Author', type: 'text' },
  { name: 'published', label: 'Published', type: 'boolean' },
  { name: 'featured', label: 'Featured', type: 'boolean' },
]

export default function PostsPage() {
  const posts = useQuery(api.posts.list, { publishedOnly: false })
  const create = useMutation(api.posts.create)
  const update = useMutation(api.posts.update)
  const remove = useMutation(api.posts.remove)

  const [open, setOpen] = useState(false)
  const [editingId, setEditingId] = useState<Id<'posts'> | null>(null)
  const editing = posts?.find((post) => post._id === editingId)

  async function onSubmit(values: Record<string, unknown>) {
    try {
      if (editingId) {
        await update({ id: editingId, ...values } as any)
        toast.success('Post updated')
      } else {
        await create({
          slug: String(values.slug),
          title: String(values.title),
          excerpt: values.excerpt as string | undefined,
          content: String(values.content ?? ''),
          coverImage: (values.coverImage as string) || null,
          category: String(values.category),
          readTime: values.readTime as string | undefined,
          author: values.author as string | undefined,
          published: Boolean(values.published),
          featured: Boolean(values.featured),
        })
        toast.success('Post created')
      }
    } catch (error) {
      toast.error('Something went wrong')
      throw error
    }
  }

  return (
    <>
      <ResourcePage
        title="Blog posts"
        description="Manage articles and insights."
        rows={posts}
        search={(post) => post.title}
        onCreate={() => {
          setEditingId(null)
          setOpen(true)
        }}
        onEdit={(post) => {
          setEditingId(post._id)
          setOpen(true)
        }}
        onDelete={async (post) => {
          await remove({ id: post._id })
          toast.success('Post deleted')
        }}
        columns={[
          {
            key: 'title',
            header: 'Title',
            render: (post) => <span className="font-medium">{post.title}</span>,
          },
          { key: 'category', header: 'Category', render: (post) => post.category },
          {
            key: 'status',
            header: 'Status',
            render: (post) => <StatusBadge published={post.published} />,
          },
          {
            key: 'views',
            header: 'Views',
            render: (post) => post.views,
          },
        ]}
      />

      <ResourceForm
        open={open}
        onOpenChange={(next) => {
          setOpen(next)
          if (!next) setEditingId(null)
        }}
        title={editingId ? 'Edit post' : 'New post'}
        description="Create or update a blog article."
        fields={fields}
        initialValues={editing ?? { published: true, featured: false, likes: 0, views: 0 }}
        onSubmit={onSubmit}
      />
    </>
  )
}
