'use client'

import { useState } from 'react'
import { toast } from 'sonner'
import { LoaderCircle, Send } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

const interests = [
  'Hardware & Infrastructure',
  'Cloud Computing',
  'Software Development',
  'Cyber Security',
  'Networking',
  'Managed IT Services',
  'Other',
]

export function EnquiryForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setIsSubmitting(true)

    // No sales endpoint exists yet — capture the enquiry locally and flag the gap.
    window.setTimeout(() => {
      setIsSubmitting(false)
      toast.success('Enquiry received', {
        description:
          'Thanks — our sales team will respond within one business day. A Convex mutation is still required to persist submissions.',
      })
      event.currentTarget.reset()
    }, 700)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="sales-name">Full name *</Label>
          <Input id="sales-name" name="name" placeholder="Your full name" required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="sales-email">Work email *</Label>
          <Input
            id="sales-email"
            name="email"
            type="email"
            placeholder="you@company.com"
            required
          />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="sales-company">Company</Label>
          <Input id="sales-company" name="company" placeholder="Company name" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="sales-phone">Phone</Label>
          <Input id="sales-phone" name="phone" type="tel" placeholder="+263 …" />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="sales-interest">What are you interested in?</Label>
        <Select name="interest">
          <SelectTrigger id="sales-interest" className="w-full">
            <SelectValue placeholder="Select a solution" />
          </SelectTrigger>
          <SelectContent>
            {interests.map((interest) => (
              <SelectItem key={interest} value={interest}>
                {interest}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="sales-message">How can we help? *</Label>
        <Textarea
          id="sales-message"
          name="message"
          rows={5}
          placeholder="Tell us about your requirements, timelines and budget range."
          required
        />
      </div>

      <Button
        type="submit"
        size="lg"
        disabled={isSubmitting}
        className="w-full rounded-full font-semibold shadow-[0_0_40px_-12px_var(--glow)]"
      >
        {isSubmitting ? (
          <>
            <LoaderCircle className="mr-2 h-4 w-4 animate-spin" aria-hidden="true" />
            Sending…
          </>
        ) : (
          <>
            <Send className="mr-2 h-4 w-4" aria-hidden="true" />
            Send enquiry
          </>
        )}
      </Button>

      <p className="text-center text-xs text-muted-foreground">
        Prefer to talk? Call our sales line and we will pick up.
      </p>
    </form>
  )
}

export default EnquiryForm
