'use client'

import { useState } from 'react'
import { useMutation } from 'convex/react'
import { api } from '@/convex/_generated/api'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { toast } from 'sonner'

interface EventModalProps {
  eventTitle?: string
  triggerLabel?: string
}

export function EventModal({ eventTitle = 'this event', triggerLabel = 'Register' }: EventModalProps) {
  const submitMessage = useMutation(api.inbox.submitMessage)
  const [open, setOpen] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', phone: '', notes: '' })

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSubmitting(true)
    try {
      await submitMessage({
        name: form.name,
        email: form.email,
        phone: form.phone || undefined,
        subject: `Event registration: ${eventTitle}`,
        message: form.notes || `I would like to register for ${eventTitle}.`,
      })
      toast.success('Registration received', {
        description: 'We will confirm your seat shortly.',
      })
      setOpen(false)
      setForm({ name: '', email: '', phone: '', notes: '' })
    } catch {
      toast.error('Could not complete registration. Please try again.')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline">{triggerLabel}</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[460px]">
        <DialogHeader>
          <DialogTitle>Register for a seat</DialogTitle>
          <DialogDescription>
            Register for {eventTitle} and we will send you the joining details.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={onSubmit} className="grid gap-4 py-4">
          <div className="grid gap-2">
            <Label htmlFor="event-name">Name</Label>
            <Input
              id="event-name"
              value={form.name}
              onChange={(event) => setForm({ ...form, name: event.target.value })}
              required
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="event-email">Email</Label>
            <Input
              id="event-email"
              type="email"
              value={form.email}
              onChange={(event) => setForm({ ...form, email: event.target.value })}
              required
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="event-phone">Phone</Label>
            <Input
              id="event-phone"
              value={form.phone}
              onChange={(event) => setForm({ ...form, phone: event.target.value })}
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="event-notes">Notes</Label>
            <Textarea
              id="event-notes"
              rows={3}
              value={form.notes}
              onChange={(event) => setForm({ ...form, notes: event.target.value })}
            />
          </div>
          <DialogFooter>
            <Button type="submit" disabled={submitting}>
              {submitting ? 'Registering...' : 'Register'}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}

export default EventModal
