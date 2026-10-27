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
  { name: 'position', label: 'Position', type: 'text', required: true },
  { name: 'slug', label: 'Slug', type: 'text', required: true },
  { name: 'status', label: 'Status', type: 'text', placeholder: 'Short term contract' },
  { name: 'duration', label: 'Duration', type: 'text', placeholder: '3 Months' },
  { name: 'category', label: 'Category', type: 'text' },
  { name: 'imageUrl', label: 'Image URL', type: 'text' },
  { name: 'description', label: 'Description', type: 'textarea', rows: 5 },
  { name: 'qualification', label: 'Qualification', type: 'textarea', rows: 4 },
  { name: 'published', label: 'Published', type: 'boolean' },
]

export default function VacanciesPage() {
  const vacancies = useQuery(api.vacancies.list, { publishedOnly: false })
  const create = useMutation(api.vacancies.create)
  const update = useMutation(api.vacancies.update)
  const remove = useMutation(api.vacancies.remove)

  const [open, setOpen] = useState(false)
  const [editingId, setEditingId] = useState<Id<'vacancies'> | null>(null)
  const editing = vacancies?.find((vacancy) => vacancy._id === editingId)

  async function onSubmit(values: Record<string, unknown>) {
    try {
      if (editingId) {
        await update({
          id: editingId,
          position: values.position as string | undefined,
          slug: values.slug as string | undefined,
          status: values.status as string | undefined,
          duration: values.duration as string | undefined,
          category: values.category as string | undefined,
          imageUrl: (values.imageUrl as string) || null,
          description: values.description as string | undefined,
          qualification: values.qualification as string | undefined,
          published: values.published as boolean | undefined,
        })
        toast.success('Vacancy updated')
      } else {
        await create({
          position: String(values.position),
          slug: String(values.slug),
          status: values.status as string | undefined,
          duration: values.duration as string | undefined,
          category: values.category as string | undefined,
          imageUrl: (values.imageUrl as string) || null,
          description: values.description as string | undefined,
          qualification: values.qualification as string | undefined,
          published: values.published !== false,
        })
        toast.success('Vacancy created')
      }
    } catch {
      toast.error('Something went wrong')
      throw new Error('Failed to save vacancy')
    }
  }

  return (
    <>
      <ResourcePage
        title="Vacancies"
        description="Manage job openings and applications."
        rows={vacancies}
        search={(vacancy) => vacancy.position}
        onCreate={() => {
          setEditingId(null)
          setOpen(true)
        }}
        onEdit={(vacancy) => {
          setEditingId(vacancy._id)
          setOpen(true)
        }}
        onDelete={async (vacancy) => {
          await remove({ id: vacancy._id })
          toast.success('Vacancy deleted')
        }}
        columns={[
          { key: 'position', header: 'Position', render: (vacancy) => <span className="font-medium">{vacancy.position}</span> },
          { key: 'status', header: 'Status', render: (vacancy) => vacancy.status || '—' },
          { key: 'duration', header: 'Duration', render: (vacancy) => vacancy.duration || '—' },
          { key: 'published', header: 'Published', render: (vacancy) => <StatusBadge published={vacancy.published} /> },
        ]}
      />

      <ResourceForm
        open={open}
        onOpenChange={(next) => {
          setOpen(next)
          if (!next) setEditingId(null)
        }}
        title={editingId ? 'Edit vacancy' : 'New vacancy'}
        description="Add or update a job opening."
        fields={fields}
        initialValues={editing ?? { published: true }}
        onSubmit={onSubmit}
      />
    </>
  )
}
