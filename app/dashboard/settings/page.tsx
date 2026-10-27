'use client'

import { useState } from 'react'
import { useMutation, useQuery } from 'convex/react'
import { api } from '@/convex/_generated/api'
import type { Id } from '@/convex/_generated/dataModel'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { ResourcePage } from '@/components/dashboard/resource-page'
import { ResourceForm, type FieldDef } from '@/components/dashboard/resource-form'
import { toast } from 'sonner'
import { Plus } from 'lucide-react'

const navFields: FieldDef[] = [
  { name: 'name', label: 'Name', type: 'text', required: true },
  { name: 'href', label: 'Href', type: 'text', required: true },
  { name: 'order', label: 'Order', type: 'number' },
]

function SettingsTab() {
  const settings = useQuery(api.settings.listSettings, {})
  const setSetting = useMutation(api.settings.setSetting)
  const removeSetting = useMutation(api.settings.removeSetting)
  const [key, setKey] = useState('')
  const [value, setValue] = useState('')

  async function addSetting() {
    try {
      if (!key) return
      await setSetting({ key, value: value as any })
      setKey('')
      setValue('')
      toast.success('Setting saved')
    } catch {
      toast.error('Failed to save setting')
    }
  }

  return (
    <div className="space-y-6">
      <Card className="border-border/60 bg-card/40">
        <CardHeader>
          <CardTitle>Add/Update Setting</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="key">Key</Label>
              <Input id="key" value={key} onChange={(e) => setKey(e.target.value)} placeholder="site_name" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="value">Value (JSON or text)</Label>
              <Input id="value" value={value} onChange={(e) => setValue(e.target.value)} placeholder='"Compu-Link"' />
            </div>
          </div>
          <Button onClick={addSetting}>
            <Plus className="h-4 w-4 mr-2" /> Save Setting
          </Button>
        </CardContent>
      </Card>

      <Card className="border-border/60 bg-card/40">
        <CardHeader>
          <CardTitle>Existing Settings</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          {settings?.map((setting) => (
            <div key={setting._id} className="flex items-center justify-between rounded-lg border border-border/60 p-3">
              <div>
                <p className="font-medium">{setting.key}</p>
                <p className="text-sm text-muted-foreground">{JSON.stringify(setting.value)}</p>
              </div>
              <Button size="sm" variant="ghost" className="text-destructive" onClick={() => removeSetting({ id: setting._id }).then(() => toast.success('Deleted'))}>
                Delete
              </Button>
            </div>
          ))}
          {settings?.length === 0 && <p className="text-sm text-muted-foreground text-center py-8">No settings</p>}
        </CardContent>
      </Card>
    </div>
  )
}

function NavLinksTab() {
  const navLinks = useQuery(api.settings.listNavLinks, {})
  const create = useMutation(api.settings.createNavLink)
  const update = useMutation(api.settings.updateNavLink)
  const remove = useMutation(api.settings.removeNavLink)

  const [open, setOpen] = useState(false)
  const [editingId, setEditingId] = useState<Id<'navLinks'> | null>(null)
  const editing = navLinks?.find((link) => link._id === editingId)

  async function onSubmit(values: Record<string, unknown>) {
    try {
      if (editingId) {
        await update({ id: editingId, ...values } as any)
        toast.success('Nav link updated')
      } else {
        await create({ ...values } as any)
        toast.success('Nav link created')
      }
    } catch {
      toast.error('Something went wrong')
      throw new Error('Failed to save nav link')
    }
  }

  return (
    <>
      <ResourcePage
        title="Navigation Links"
        description="Manage site navigation."
        rows={navLinks}
        search={(link) => link.name}
        onCreate={() => { setEditingId(null); setOpen(true) }}
        onEdit={(link) => { setEditingId(link._id); setOpen(true) }}
        onDelete={async (link) => { await remove({ id: link._id }); toast.success('Nav link deleted') }}
        columns={[
          { key: 'name', header: 'Name', render: (link) => <span className="font-medium">{link.name}</span> },
          { key: 'href', header: 'Href', render: (link) => link.href },
          { key: 'order', header: 'Order', render: (link) => link.order },
        ]}
      />
      <ResourceForm open={open} onOpenChange={(next) => { setOpen(next); if (!next) setEditingId(null) }} title={editingId ? 'Edit nav link' : 'New nav link'} description="Add or update navigation link." fields={navFields} initialValues={editing ?? { order: 0 }} onSubmit={onSubmit} />
    </>
  )
}

export default function SettingsPage() {
  return (
    <Tabs defaultValue="settings" className="space-y-6">
      <TabsList>
        <TabsTrigger value="settings">Site Settings</TabsTrigger>
        <TabsTrigger value="nav">Navigation</TabsTrigger>
      </TabsList>
      <TabsContent value="settings"><SettingsTab /></TabsContent>
      <TabsContent value="nav"><NavLinksTab /></TabsContent>
    </Tabs>
  )
}
