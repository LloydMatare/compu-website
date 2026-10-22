'use client'

import { useState } from 'react'
import { useMutation } from 'convex/react'
import { api } from '@/convex/_generated/api'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Loader2 } from 'lucide-react'
import { toast } from 'sonner'

export function NewsletterForm() {
  const subscribe = useMutation(api.inbox.subscribe)
  const [email, setEmail] = useState('')
  const [pending, setPending] = useState(false)

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (!email.trim()) return
    setPending(true)
    try {
      await subscribe({ email })
      toast.success('You are subscribed. Watch your inbox for updates.')
      setEmail('')
    } catch {
      toast.error('Could not subscribe right now. Please try again.')
    } finally {
      setPending(false)
    }
  }

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-2 sm:flex-row">
      <Input
        type="email"
        required
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        placeholder="you@company.com"
        aria-label="Email address"
        className="bg-background/60"
      />
      <Button type="submit" disabled={pending} className="shrink-0">
        {pending ? <Loader2 className="h-4 w-4 animate-spin" /> : 'Subscribe'}
      </Button>
    </form>
  )
}

export default NewsletterForm
