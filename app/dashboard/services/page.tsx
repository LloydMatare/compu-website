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
  { name: 'shortDescription', label: 'Short description', type: 'textarea', rows: 2 },
  { name: 'fullDescription', label: 'Full description', type: 'textarea', rows: 6 },
  { name: 'icon', label: 'Icon name', type: 'text', placeholder: 'Cloud' },
  { name: 'href', label: 'Href', type: 'text', placeholder: '/services/cloud-computing' },
  { name: 'order', label: 'Order', type: 'number' },
  { name: 'features', label: 'Features (one per line)', type: 'list', rows: 4 },
  { name: 'published', label: 'Published', type: 'boolean' },
]

export default function ServicesPage() {
  const services = useQuery(api.services.listServices, {})
  const create = useMutation(api.services.createService)
  const update = useMutation(api.services.updateService)
  const remove = useMutation(api.services.removeService)

  const [open, setOpen] = useState(false)
  const [editingId, setEditingId] = useState<Id<'services'> | null>(null)
  const editing = services?.find((service) => service._id === editingId)

  async function onSubmit(values: Record<string, unknown>) {
    try {
      const features =
        typeof values.features === 'string'
          ? values.features
              .split('\n')
              .map((value) => value.trim())
              .filter(Boolean)
          : Array.isArray(values.features)
            ? values.features
            : []

      if (editingId) {
        await update({
          id: editingId,
          title: values.title as string | undefined,
          slug: values.slug as string | undefined,
          shortDescription: values.shortDescription as string | undefined,
          fullDescription: values.fullDescription as string | undefined,
          icon: values.icon as string | undefined,
          image: (values.image as string) || null,
          href: values.href as string | undefined,
          features,
          order: typeof values.order === 'number' ? values.order : undefined,
          published: values.published as boolean | undefined,
        })
        toast.success('Service updated')
      } else {
        await create({
          title: String(values.title),
          slug: String(values.slug),
          shortDescription: values.shortDescription as string | undefined,
          fullDescription: values.fullDescription as string | undefined,
          icon: (values.icon as string) || undefined,
          href: values.href as string | undefined,
          features,
          order: typeof values.order === 'number' ? values.order : undefined,
          published: values.published !== false,
        })
        toast.success('Service created')
      }
    } catch {
      toast.error('Something went wrong')
      throw new Error('Failed to save service')
    }
  }

  return (
    <>
      <ResourcePage
        title="Services"
        description="Manage service offerings shown across the site."
        rows={services}
        search={(service) => service.title}
        onCreate={() => {
          setEditingId(null)
          setOpen(true)
        }}
        onEdit={(service) => {
          setEditingId(service._id)
          setOpen(true)
        }}
        onDelete={async (service) => {
          await remove({ id: service._id })
          toast.success('Service deleted')
        }}
        columns={[
          { key: 'title', header: 'Title', render: (service) => <span className="font-medium">{service.title}</span> },
          { key: 'slug', header: 'Slug', render: (service) => service.slug },
          { key: 'status', header: 'Status', render: (service) => <StatusBadge published={service.published} /> },
        ]}
      />

      <ResourceForm
        open={open}
        onOpenChange={(next) => {
          setOpen(next)
          if (!next) setEditingId(null)
        }}
        title={editingId ? 'Edit service' : 'New service'}
        description="Update service content and navigation."
        fields={fields}
        initialValues={editing ?? { published: true, order: 0, features: [] }}
        onSubmit={onSubmit}
      />
    </>
  )
}
