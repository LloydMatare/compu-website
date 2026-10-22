'use client'

import { NAV_LINKS } from '@/lib/Navigation'
import { Button } from '@/components/ui/button'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import { ArrowUpRight, LayoutDashboard, Mail, Menu, Phone } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { cn } from '@/lib/utils'
import { CONTACT, SITE_NAME } from '@/lib/constants/site'

const CONTACT_PHONE = '+263 242 494 407'

export interface MobileNavSheetProps {
  /** Controlled open state. When omitted the sheet manages its own state. */
  open?: boolean
  onOpenChange?: (open: boolean) => void
  /** Render the built-in trigger button. */
  showTrigger?: boolean
  /** Custom trigger element rendered in place of the built-in button. */
  trigger?: React.ReactNode
}

export function MobileNavSheet({
  open,
  onOpenChange,
  showTrigger = true,
  trigger,
}: MobileNavSheetProps) {
  const [internalOpen, setInternalOpen] = useState(false)
  const pathname = usePathname()

  const isControlled = open !== undefined
  const sheetOpen = isControlled ? open : internalOpen

  const handleOpenChange = (nextOpen: boolean) => {
    if (!isControlled) setInternalOpen(nextOpen)
    onOpenChange?.(nextOpen)
  }

  const close = () => handleOpenChange(false)

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href)

  return (
    <Sheet open={sheetOpen} onOpenChange={handleOpenChange}>
      {showTrigger &&
        (trigger ? (
          <SheetTrigger asChild>{trigger}</SheetTrigger>
        ) : (
          <SheetTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="rounded-full focus-visible:ring-2 focus-visible:ring-ring"
            >
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
        ))}

      <SheetContent
        side="left"
        className="w-[320px] border-border/60 bg-popover/95 backdrop-blur-xl sm:w-[400px]"
      >
        <SheetHeader className="border-b border-border/60 pb-5">
          <SheetTitle className="flex items-center gap-3 text-left">
            <Image
              src="/images/logo.png"
              alt={SITE_NAME}
              width={140}
              height={42}
              className="h-8 w-auto"
              priority
            />
          </SheetTitle>
          <SheetDescription className="text-xs text-muted-foreground">
            Navigate the Compulink site.
          </SheetDescription>
        </SheetHeader>

        <nav className="mt-6 flex-1 overflow-y-auto pb-6">
          <ul className="space-y-1">
            {NAV_LINKS.map((link) => {
              const active = isActive(link.href)

              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={close}
                    className={cn(
                      'flex items-center justify-between rounded-xl px-4 py-3 text-sm font-medium transition-colors focus-visible:ring-2 focus-visible:ring-ring',
                      active
                        ? 'bg-brand/10 text-brand'
                        : 'text-foreground hover:bg-muted hover:text-foreground'
                    )}
                  >
                    {link.name}
                    {active && (
                      <span className="h-1.5 w-1.5 rounded-full bg-brand" aria-hidden="true" />
                    )}
                  </Link>

                  {link.subLinks && (
                    <ul className="mt-1 space-y-1 border-l border-border/60 pl-4">
                      {link.subLinks.map((subLink) => (
                        <li key={subLink.href}>
                          <Link
                            href={subLink.href}
                            onClick={close}
                            className={cn(
                              'block rounded-lg px-3 py-2 text-sm transition-colors focus-visible:ring-2 focus-visible:ring-ring',
                              isActive(subLink.href)
                                ? 'text-brand'
                                : 'text-muted-foreground hover:text-foreground'
                            )}
                          >
                            {subLink.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              )
            })}

            <li>
              <Link
                href="https://compulink.odoo.com/shop"
                target="_blank"
                rel="noopener noreferrer"
                onClick={close}
                className="flex items-center justify-between rounded-xl px-4 py-3 text-sm font-medium text-foreground transition-colors hover:bg-muted focus-visible:ring-2 focus-visible:ring-ring"
              >
                Shop
                <ArrowUpRight className="h-3.5 w-3.5 text-muted-foreground" />
              </Link>
            </li>

            <li>
              <Link
                href="/dashboard"
                onClick={close}
                className="flex items-center justify-between rounded-xl px-4 py-3 text-sm font-medium text-foreground transition-colors hover:bg-muted focus-visible:ring-2 focus-visible:ring-ring"
              >
                <span className="flex items-center gap-2">
                  <LayoutDashboard className="h-4 w-4 text-brand" />
                  Dashboard
                </span>
              </Link>
            </li>
          </ul>

          <div className="mt-8 space-y-3 border-t border-border/60 pt-6">
            <Button asChild className="w-full rounded-full font-semibold">
              <Link href="/contact" onClick={close}>
                Contact Us
              </Link>
            </Button>

            <div className="space-y-2 text-xs text-muted-foreground">
              <a
                href={`tel:${CONTACT_PHONE.replace(/\s/g, '')}`}
                className="flex items-center gap-2 transition-colors hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring"
              >
                <Phone className="h-3.5 w-3.5 text-brand" />
                {CONTACT_PHONE}
              </a>
              <a
                href={`mailto:${CONTACT.email}`}
                className="flex items-center gap-2 transition-colors hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring"
              >
                <Mail className="h-3.5 w-3.5 text-brand" />
                {CONTACT.email}
              </a>
            </div>
          </div>
        </nav>
      </SheetContent>
    </Sheet>
  )
}

export default MobileNavSheet
