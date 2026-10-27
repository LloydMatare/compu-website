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
  { name: 'description', label: 'Description', type: 'textarea', rows: 4 },
  { name: 'venue', label: 'Venue', type: 'text' },
  { name: 'date', label: 'Date', type: 'text', placeholder: '2024-05-22' },
  { name: 'time', label: 'Time', type: 'text', placeholder: '10:00' },
  { name: 'category', label: 'Category', type: 'text' },
  { name: 'imageUrl', label: 'Image URL', type: 'text' },
  { name: 'link', label: 'External Link', type: 'text' },
  { name: 'published', label: 'Published', type: 'boolean' },
]

export default function EventsPage() {
  const events = useQuery(api.events.listAll, {})
  const create = useMutation(api.events.create)
  const update = useMutation(api.events.update)
  const remove = useMutation(api.events.remove)

  const [open, setOpen] = useState(false)
  const [editingId, setEditingId] = useState<Id<'events'> | null>(null)
  const editing = events?.find((event) => event._id === editingId)

  async function onSubmit(values: Record<string, unknown>) {
    try {
      if (editingId) {
        await update({
          id: editingId,
          title: values.title as string | undefined,
          description: values.description as string | undefined,
          venue: values.venue as string | undefined,
          date: values.date as string | undefined,
          time: values.time as string | undefined,
          category: values.category as string | undefined,
          imageUrl: (values.imageUrl as string) || null,
          link: (values.link as string) || null,
          published: values.published as boolean | undefined,
        })
        toast.success('Event updated')
      } else {
        await create({
          title: String(values.title),
          description: values.description as string | undefined,
          venue: values.venue as string | undefined,
          date: values.date as string | undefined,
          time: values.time as string | undefined,
          category: values.category as string | undefined,
          imageUrl: (values.imageUrl as string) || null,
          link: (values.link as string) || null,
          published: values.published !== false,
        })
        toast.success('Event created')
      }
    } catch {
      toast.error('Something went wrong')
      throw new Error('Failed to save event')
    }
  }

  return (
    <>
      <ResourcePage
        title="Events"
        description="Manage events, workshops and gatherings."
        rows={events}
        search={(event) => event.title}
        onCreate={() => {
          setEditingId(null)
          setOpen(true)
        }}
        onEdit={(event) => {
          setEditingId(event._id)
          setOpen(true)
        }}
        onDelete={async (event) => {
          await remove({ id: event._id })
          toast.success('Event deleted')
        }}
        columns={[
          { key: 'title', header: 'Title', render: (event) => <span className="font-medium">{event.title}</span> },
          { key: 'date', header: 'Date', render: (event) => event.date || '—' },
          { key: 'venue', header: 'Venue', render: (event) => event.venue || '—' },
          { key: 'status', header: 'Status', render: (event) => <StatusBadge published={event.published} /> },
        ]}
      />

      <ResourceForm
        open={open}
        onOpenChange={(next) => {
          setOpen(next)
          if (!next) setEditingId(null)
        }}
        title={editingId ? 'Edit event' : 'New event'}
        description="Add or update an event."
        fields={fields}
        initialValues={editing ?? { published: true }}
        onSubmit={onSubmit}
      />
    </>
  )
}
