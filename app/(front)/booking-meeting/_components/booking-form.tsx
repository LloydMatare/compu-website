'use client'

import { useState } from 'react'
import { toast } from 'sonner'
import { CalendarCheck, LoaderCircle } from 'lucide-react'
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

const categories = [
  'Banking & Finance',
  'Insurance',
  'Government',
  'Healthcare',
  'Education',
  'Manufacturing',
  'Retail & E-commerce',
  'NGO',
  'Other',
]

const platforms = ['Zoom', 'Google Meet', 'Microsoft Teams', 'On-site visit', 'Phone call']

export function BookingForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setIsSubmitting(true)

    // No booking endpoint exists yet — acknowledge the request and flag the gap.
    window.setTimeout(() => {
      setIsSubmitting(false)
      toast.success('Meeting request received', {
        description:
          'We will confirm your slot by email shortly. A Convex mutation is still required to persist bookings.',
      })
      event.currentTarget.reset()
    }, 700)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="booking-name">Name *</Label>
          <Input id="booking-name" name="name" placeholder="Your full name" required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="booking-email">Email *</Label>
          <Input id="booking-email" name="email" type="email" placeholder="you@company.com" required />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="booking-category">Business category *</Label>
          <Select name="category" required>
            <SelectTrigger id="booking-category" className="w-full">
              <SelectValue placeholder="Select a category" />
            </SelectTrigger>
            <SelectContent>
              {categories.map((category) => (
                <SelectItem key={category} value={category}>
                  {category}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <Label htmlFor="booking-platform">Meeting platform *</Label>
          <Select name="platform" required>
            <SelectTrigger id="booking-platform" className="w-full">
              <SelectValue placeholder="Where should we meet?" />
            </SelectTrigger>
            <SelectContent>
              {platforms.map((platform) => (
                <SelectItem key={platform} value={platform}>
                  {platform}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="booking-date">Preferred date</Label>
          <Input id="booking-date" name="date" type="date" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="booking-time">Preferred time</Label>
          <Input id="booking-time" name="time" type="time" />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="booking-notes">What should we cover?</Label>
        <Textarea
          id="booking-notes"
          name="notes"
          rows={4}
          placeholder="Current environment, goals, timelines — anything that helps us prepare."
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
            Booking…
          </>
        ) : (
          <>
            <CalendarCheck className="mr-2 h-4 w-4" aria-hidden="true" />
            Book Now
          </>
        )}
      </Button>
    </form>
  )
}

export default BookingForm
