'use client'

import { useState } from 'react'
import { useMutation, useQuery } from 'convex/react'
import { api } from '@/convex/_generated/api'
import type { Id } from '@/convex/_generated/dataModel'
import { ResourcePage } from '@/components/dashboard/resource-page'
import { ResourceForm, type FieldDef } from '@/components/dashboard/resource-form'
import { StatusBadge } from '@/components/dashboard/resource-page'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { toast } from 'sonner'

const itemFields: FieldDef[] = [
  { name: 'title', label: 'Title', type: 'text', required: true },
  { name: 'projectName', label: 'Project Name', type: 'text' },
  { name: 'description', label: 'Description', type: 'textarea', rows: 3 },
  { name: 'company', label: 'Company', type: 'text' },
  { name: 'category', label: 'Category', type: 'text' },
  { name: 'images', label: 'Images (one per line)', type: 'list', rows: 4 },
  { name: 'order', label: 'Order', type: 'number' },
  { name: 'published', label: 'Published', type: 'boolean' },
]

const videoFields: FieldDef[] = [
  { name: 'title', label: 'Title', type: 'text', required: true },
  { name: 'description', label: 'Description', type: 'textarea', rows: 3 },
  { name: 'videoUrl', label: 'Video URL', type: 'text', required: true },
  { name: 'poster', label: 'Poster URL', type: 'text' },
  { name: 'category', label: 'Category', type: 'text' },
  { name: 'order', label: 'Order', type: 'number' },
  { name: 'published', label: 'Published', type: 'boolean' },
]

function GalleryItemsTab() {
  const items = useQuery(api.gallery.listAllItems, {})
  const create = useMutation(api.gallery.createItem)
  const update = useMutation(api.gallery.updateItem)
  const remove = useMutation(api.gallery.removeItem)

  const [open, setOpen] = useState(false)
  const [editingId, setEditingId] = useState<Id<'galleryItems'> | null>(null)
  const editing = items?.find((item) => item._id === editingId)

  async function onSubmit(values: Record<string, unknown>) {
    try {
      const images =
        typeof values.images === 'string'
          ? values.images.split('\n').map((v) => v.trim()).filter(Boolean)
          : Array.isArray(values.images)
            ? values.images
            : []

      if (editingId) {
        await update({
          id: editingId,
          title: values.title as string | undefined,
          projectName: values.projectName as string | undefined,
          description: values.description as string | undefined,
          company: values.company as string | undefined,
          category: values.category as string | undefined,
          images,
          order: typeof values.order === 'number' ? values.order : undefined,
          published: values.published as boolean | undefined,
        })
        toast.success('Gallery item updated')
      } else {
        await create({
          title: String(values.title),
          projectName: values.projectName as string | undefined,
          description: values.description as string | undefined,
          company: values.company as string | undefined,
          category: values.category as string | undefined,
          images,
          order: typeof values.order === 'number' ? values.order : undefined,
          published: values.published !== false,
        })
        toast.success('Gallery item created')
      }
    } catch {
      toast.error('Something went wrong')
      throw new Error('Failed to save gallery item')
    }
  }

  return (
    <>
      <ResourcePage
        title="Photo Gallery"
        description="Manage gallery items."
        rows={items}
        search={(item) => item.title ?? ''}
        onCreate={() => {
          setEditingId(null)
          setOpen(true)
        }}
        onEdit={(item) => {
          setEditingId(item._id)
          setOpen(true)
        }}
        onDelete={async (item) => {
          await remove({ id: item._id })
          toast.success('Gallery item deleted')
        }}
        columns={[
          { key: 'title', header: 'Title', render: (item) => <span className="font-medium">{item.title}</span> },
          { key: 'category', header: 'Category', render: (item) => item.category || '—' },
          { key: 'status', header: 'Status', render: (item) => <StatusBadge published={item.published} /> },
        ]}
      />

      <ResourceForm
        open={open}
        onOpenChange={(next) => {
          setOpen(next)
          if (!next) setEditingId(null)
        }}
        title={editingId ? 'Edit gallery item' : 'New gallery item'}
        description="Add or update a gallery item."
        fields={itemFields}
        initialValues={editing ?? { published: true, images: [], order: 0 }}
        onSubmit={onSubmit}
      />
    </>
  )
}

function GalleryVideosTab() {
  const videos = useQuery(api.gallery.listAllVideos, {})
  const create = useMutation(api.gallery.createVideo)
  const update = useMutation(api.gallery.updateVideo)
  const remove = useMutation(api.gallery.removeVideo)

  const [open, setOpen] = useState(false)
  const [editingId, setEditingId] = useState<Id<'galleryVideos'> | null>(null)
  const editing = videos?.find((video) => video._id === editingId)

  async function onSubmit(values: Record<string, unknown>) {
    try {
      if (editingId) {
        await update({
          id: editingId,
          title: values.title as string | undefined,
          description: values.description as string | undefined,
          videoUrl: values.videoUrl as string | undefined,
          poster: (values.poster as string) || null,
          category: values.category as string | undefined,
          order: typeof values.order === 'number' ? values.order : undefined,
          published: values.published as boolean | undefined,
        })
        toast.success('Video updated')
      } else {
        await create({
          title: String(values.title),
          description: values.description as string | undefined,
          videoUrl: String(values.videoUrl) || '',
          poster: (values.poster as string) || null,
          category: values.category as string | undefined,
          order: typeof values.order === 'number' ? values.order : undefined,
          published: values.published !== false,
        })
        toast.success('Video created')
      }
    } catch {
      toast.error('Something went wrong')
      throw new Error('Failed to save video')
    }
  }

  return (
    <>
      <ResourcePage
        title="Videos"
        description="Manage gallery videos."
        rows={videos}
        search={(video) => video.title}
        onCreate={() => {
          setEditingId(null)
          setOpen(true)
        }}
        onEdit={(video) => {
          setEditingId(video._id)
          setOpen(true)
        }}
        onDelete={async (video) => {
          await remove({ id: video._id })
          toast.success('Video deleted')
        }}
        columns={[
          { key: 'title', header: 'Title', render: (video) => <span className="font-medium">{video.title}</span> },
          { key: 'category', header: 'Category', render: (video) => video.category || '—' },
          { key: 'status', header: 'Status', render: (video) => <StatusBadge published={video.published} /> },
        ]}
      />

      <ResourceForm
        open={open}
        onOpenChange={(next) => {
          setOpen(next)
          if (!next) setEditingId(null)
        }}
        title={editingId ? 'Edit video' : 'New video'}
        description="Add or update a gallery video."
        fields={videoFields}
        initialValues={editing ?? { published: true, order: 0 }}
        onSubmit={onSubmit}
      />
    </>
  )
}

export default function GalleryPage() {
  return (
    <Tabs defaultValue="items" className="space-y-6">
      <TabsList>
        <TabsTrigger value="items">Photo Gallery</TabsTrigger>
        <TabsTrigger value="videos">Videos</TabsTrigger>
      </TabsList>
      <TabsContent value="items">
        <GalleryItemsTab />
      </TabsContent>
      <TabsContent value="videos">
        <GalleryVideosTab />
      </TabsContent>
    </Tabs>
  )
}
