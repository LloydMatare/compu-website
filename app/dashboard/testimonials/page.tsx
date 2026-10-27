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
  { name: 'name', label: 'Name', type: 'text', required: true },
  { name: 'quote', label: 'Quote', type: 'textarea', rows: 4, required: true },
  { name: 'role', label: 'Role', type: 'text' },
  { name: 'company', label: 'Company', type: 'text' },
  { name: 'rating', label: 'Rating', type: 'number' },
  { name: 'order', label: 'Order', type: 'number' },
  { name: 'published', label: 'Published', type: 'boolean' },
]

export default function TestimonialsPage() {
  const testimonials = useQuery(api.testimonials.listAllTestimonials, {})
  const create = useMutation(api.testimonials.createTestimonial)
  const update = useMutation(api.testimonials.updateTestimonial)
  const remove = useMutation(api.testimonials.removeTestimonial)

  const [open, setOpen] = useState(false)
  const [editingId, setEditingId] = useState<Id<'testimonials'> | null>(null)
  const editing = testimonials?.find((testimonial) => testimonial._id === editingId)

  async function onSubmit(values: Record<string, unknown>) {
    try {
      if (editingId) {
        await update({
          id: editingId,
          name: values.name as string | undefined,
          quote: values.quote as string | undefined,
          role: values.role as string | undefined,
          company: values.company as string | undefined,
          rating: typeof values.rating === 'number' ? values.rating : undefined,
          order: typeof values.order === 'number' ? values.order : undefined,
          published: values.published as boolean | undefined,
        })
        toast.success('Testimonial updated')
      } else {
        await create({
          name: String(values.name),
          quote: String(values.quote),
          role: values.role as string | undefined,
          company: values.company as string | undefined,
          rating: typeof values.rating === 'number' ? values.rating : undefined,
          order: typeof values.order === 'number' ? values.order : undefined,
          published: values.published !== false,
        })
        toast.success('Testimonial created')
      }
    } catch {
      toast.error('Something went wrong')
      throw new Error('Failed to save testimonial')
    }
  }

  return (
    <>
      <ResourcePage
        title="Testimonials"
        description="Manage client testimonials."
        rows={testimonials}
        search={(testimonial) => testimonial.name}
        onCreate={() => {
          setEditingId(null)
          setOpen(true)
        }}
        onEdit={(testimonial) => {
          setEditingId(testimonial._id)
          setOpen(true)
        }}
        onDelete={async (testimonial) => {
          await remove({ id: testimonial._id })
          toast.success('Testimonial deleted')
        }}
        columns={[
          { key: 'name', header: 'Name', render: (testimonial) => <span className="font-medium">{testimonial.name}</span> },
          { key: 'company', header: 'Company', render: (testimonial) => testimonial.company || '—' },
          { key: 'rating', header: 'Rating', render: (testimonial) => testimonial.rating ? `${testimonial.rating}/5` : '—' },
          { key: 'status', header: 'Status', render: (testimonial) => <StatusBadge published={testimonial.published} /> },
        ]}
      />

      <ResourceForm
        open={open}
        onOpenChange={(next) => {
          setOpen(next)
          if (!next) setEditingId(null)
        }}
        title={editingId ? 'Edit testimonial' : 'New testimonial'}
        description="Add or update a client testimonial."
        fields={fields}
        initialValues={editing ?? { published: true, rating: 5, order: 0 }}
        onSubmit={onSubmit}
      />
    </>
  )
}
