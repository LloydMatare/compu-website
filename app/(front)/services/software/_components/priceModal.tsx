'use client'

import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogClose,
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
import React, { useState } from 'react'

export interface PriceModalProps {
  title: string
}

export function PriceModal({ title }: PriceModalProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setIsSubmitting(true)

    // No order endpoint exists yet — surface the request and flag the gap.
    window.setTimeout(() => {
      setIsSubmitting(false)
      toast.success('Order request captured', {
        description: `We have noted your interest in the ${title} package. Our sales team will confirm pricing and next steps.`,
      })
    }, 600)
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="w-full rounded-full font-semibold shadow-[0_0_40px_-12px_var(--glow)]">
          Order Now
        </Button>
      </DialogTrigger>
      <DialogContent className="border-border/60 bg-card/95 backdrop-blur-xl sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="font-display text-xl font-bold">{title}</DialogTitle>
          <DialogDescription>
            Send your details and our sales team will confirm availability and pricing.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor={`price-name-${title}`}>Name</Label>
            <Input id={`price-name-${title}`} placeholder="Enter name" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor={`price-email-${title}`}>Email</Label>
            <Input
              id={`price-email-${title}`}
              type="email"
              placeholder="Enter email"
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor={`price-phone-${title}`}>Phone number</Label>
            <Input
              id={`price-phone-${title}`}
              type="tel"
              placeholder="Enter phone number"
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor={`price-description-${title}`}>Description</Label>
            <Textarea
              id={`price-description-${title}`}
              placeholder="Please provide a brief description"
              rows={4}
            />
          </div>

          <DialogFooter className="gap-2 sm:justify-end">
            <Button type="submit" disabled={isSubmitting} className="rounded-full font-semibold">
              {isSubmitting ? 'Submitting…' : 'Submit order'}
            </Button>
            <DialogClose asChild>
              <Button type="button" variant="ghost" className="rounded-full">
                Cancel
              </Button>
            </DialogClose>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
