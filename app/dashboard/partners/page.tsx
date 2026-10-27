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

const partnerFields: FieldDef[] = [
  { name: 'name', label: 'Name', type: 'text', required: true },
  { name: 'logo', label: 'Logo URL', type: 'text' },
  { name: 'link', label: 'Website URL', type: 'text' },
  { name: 'order', label: 'Order', type: 'number' },
  { name: 'published', label: 'Published', type: 'boolean' },
]

const clientFields: FieldDef[] = [
  { name: 'name', label: 'Name', type: 'text', required: true },
  { name: 'logo', label: 'Logo URL', type: 'text' },
  { name: 'link', label: 'Website URL', type: 'text' },
  { name: 'order', label: 'Order', type: 'number' },
  { name: 'published', label: 'Published', type: 'boolean' },
]

const projectFields: FieldDef[] = [
  { name: 'name', label: 'Name', type: 'text', required: true },
  { name: 'description', label: 'Description', type: 'textarea', rows: 4 },
  { name: 'category', label: 'Category', type: 'text' },
  { name: 'image', label: 'Image URL', type: 'text' },
  { name: 'link', label: 'Project URL', type: 'text' },
  { name: 'technologies', label: 'Technologies (one per line)', type: 'list', rows: 3 },
  { name: 'order', label: 'Order', type: 'number' },
  { name: 'published', label: 'Published', type: 'boolean' },
]

function PartnersTab() {
  const partners = useQuery(api.partners.listAllPartners, {})
  const create = useMutation(api.partners.createPartner)
  const update = useMutation(api.partners.updatePartner)
  const remove = useMutation(api.partners.removePartner)

  const [open, setOpen] = useState(false)
  const [editingId, setEditingId] = useState<Id<'partners'> | null>(null)
  const editing = partners?.find((partner) => partner._id === editingId)

  async function onSubmit(values: Record<string, unknown>) {
    try {
      if (editingId) {
        await update({ id: editingId, ...values } as any)
        toast.success('Partner updated')
      } else {
        await create({ ...values } as any)
        toast.success('Partner created')
      }
    } catch {
      toast.error('Something went wrong')
      throw new Error('Failed to save partner')
    }
  }

  return (
    <>
      <ResourcePage
        title="Partners"
        description="Manage partners and sponsors."
        rows={partners}
        search={(partner) => partner.name}
        onCreate={() => { setEditingId(null); setOpen(true) }}
        onEdit={(partner) => { setEditingId(partner._id); setOpen(true) }}
        onDelete={async (partner) => { await remove({ id: partner._id }); toast.success('Partner deleted') }}
        columns={[
          { key: 'name', header: 'Name', render: (partner) => <span className="font-medium">{partner.name}</span> },
          { key: 'published', header: 'Status', render: (partner) => <StatusBadge published={partner.published} /> },
        ]}
      />
      <ResourceForm open={open} onOpenChange={(next) => { setOpen(next); if (!next) setEditingId(null) }} title={editingId ? 'Edit partner' : 'New partner'} description="Add or update a partner." fields={partnerFields} initialValues={editing ?? { published: true, order: 0 }} onSubmit={onSubmit} />
    </>
  )
}

function ClientsTab() {
  const clients = useQuery(api.partners.listAllClients, {})
  const create = useMutation(api.partners.createClient)
  const update = useMutation(api.partners.updateClient)
  const remove = useMutation(api.partners.removeClient)

  const [open, setOpen] = useState(false)
  const [editingId, setEditingId] = useState<Id<'clients'> | null>(null)
  const editing = clients?.find((client) => client._id === editingId)

  async function onSubmit(values: Record<string, unknown>) {
    try {
      if (editingId) {
        await update({ id: editingId, ...values } as any)
        toast.success('Client updated')
      } else {
        await create({ ...values } as any)
        toast.success('Client created')
      }
    } catch {
      toast.error('Something went wrong')
      throw new Error('Failed to save client')
    }
  }

  return (
    <>
      <ResourcePage
        title="Clients"
        description="Manage clients."
        rows={clients}
        search={(client) => client.name}
        onCreate={() => { setEditingId(null); setOpen(true) }}
        onEdit={(client) => { setEditingId(client._id); setOpen(true) }}
        onDelete={async (client) => { await remove({ id: client._id }); toast.success('Client deleted') }}
        columns={[
          { key: 'name', header: 'Name', render: (client) => <span className="font-medium">{client.name}</span> },
          { key: 'published', header: 'Status', render: (client) => <StatusBadge published={client.published} /> },
        ]}
      />
      <ResourceForm open={open} onOpenChange={(next) => { setOpen(next); if (!next) setEditingId(null) }} title={editingId ? 'Edit client' : 'New client'} description="Add or update a client." fields={clientFields} initialValues={editing ?? { published: true, order: 0 }} onSubmit={onSubmit} />
    </>
  )
}

function ProjectsTab() {
  const projects = useQuery(api.partners.listAllProjects, {})
  const create = useMutation(api.partners.createProject)
  const update = useMutation(api.partners.updateProject)
  const remove = useMutation(api.partners.removeProject)

  const [open, setOpen] = useState(false)
  const [editingId, setEditingId] = useState<Id<'projects'> | null>(null)
  const editing = projects?.find((project) => project._id === editingId)

  async function onSubmit(values: Record<string, unknown>) {
    try {
      const technologies =
        typeof values.technologies === 'string'
          ? values.technologies.split('\n').map((v) => v.trim()).filter(Boolean)
          : Array.isArray(values.technologies)
            ? values.technologies
            : []

      if (editingId) {
        await update({ id: editingId, technologies, ...Object.fromEntries(Object.entries(values).filter(([k]) => k !== 'technologies')) } as any)
        toast.success('Project updated')
      } else {
        await create({ technologies, ...Object.fromEntries(Object.entries(values).filter(([k]) => k !== 'technologies')) } as any)
        toast.success('Project created')
      }
    } catch {
      toast.error('Something went wrong')
      throw new Error('Failed to save project')
    }
  }

  return (
    <>
      <ResourcePage
        title="Projects"
        description="Manage portfolio projects."
        rows={projects}
        search={(project) => project.name}
        onCreate={() => { setEditingId(null); setOpen(true) }}
        onEdit={(project) => { setEditingId(project._id); setOpen(true) }}
        onDelete={async (project) => { await remove({ id: project._id }); toast.success('Project deleted') }}
        columns={[
          { key: 'name', header: 'Name', render: (project) => <span className="font-medium">{project.name}</span> },
          { key: 'category', header: 'Category', render: (project) => project.category || '—' },
          { key: 'published', header: 'Status', render: (project) => <StatusBadge published={project.published} /> },
        ]}
      />
      <ResourceForm open={open} onOpenChange={(next) => { setOpen(next); if (!next) setEditingId(null) }} title={editingId ? 'Edit project' : 'New project'} description="Add or update a portfolio project." fields={projectFields} initialValues={editing ?? { published: true, order: 0, technologies: [] }} onSubmit={onSubmit} />
    </>
  )
}

export default function PartnersPage() {
  return (
    <Tabs defaultValue="partners" className="space-y-6">
      <TabsList>
        <TabsTrigger value="partners">Partners</TabsTrigger>
        <TabsTrigger value="clients">Clients</TabsTrigger>
        <TabsTrigger value="projects">Projects</TabsTrigger>
      </TabsList>
      <TabsContent value="partners"><PartnersTab /></TabsContent>
      <TabsContent value="clients"><ClientsTab /></TabsContent>
      <TabsContent value="projects"><ProjectsTab /></TabsContent>
    </Tabs>
  )
}
