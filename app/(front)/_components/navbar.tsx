'use client'

import { useCallback, useEffect, useState, useSyncExternalStore } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useTheme } from 'next-themes'
import {
  ArrowRight,
  ArrowUpRight,
  LayoutDashboard,
  Mail,
  Menu,
  Moon,
  Phone,
  Sun,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'
import { MobileNavSheet } from './mobileNavSheet'
import { NAV_LINKS, type NavLink } from '@/lib/Navigation'
import { CONTACT, SITE_NAME } from '@/lib/constants/site'
import { cn } from '@/lib/utils'

const socialLinks = [
  {
    name: 'Facebook',
    href: 'https://www.facebook.com/search/top/?q=compulink%20holdings',
    path: 'M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14C17.17 2.1 16.03 2 14.8 2 12.1 2 10.2 3.66 10.2 6.7v2.8H7v4h3.2V22h3.8v-8.5Z',
  },
  {
    name: 'X',
    href: 'https://x.com/compulinkzw',
    path: 'M17.53 3h3.02l-6.6 7.54L21.75 21h-6.06l-4.75-6.21L5.5 21H2.47l7.06-8.07L2.25 3h6.21l4.29 5.67L17.53 3Zm-1.06 16.2h1.67L7.6 4.7H5.8l10.67 14.5Z',
  },
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/compulink_zw/',
    path: 'M12 2c2.72 0 3.06.01 4.12.06 1.07.05 1.8.22 2.43.46.66.26 1.22.6 1.77 1.16.56.55.9 1.11 1.16 1.77.24.63.41 1.36.46 2.43C21.99 8.94 22 9.28 22 12s-.01 3.06-.06 4.12c-.05 1.07-.22 1.8-.46 2.43a4.9 4.9 0 0 1-1.16 1.77 4.9 4.9 0 0 1-1.77 1.16c-.63.24-1.36.41-2.43.46-1.06.05-1.4.06-4.12.06s-3.06-.01-4.12-.06c-1.07-.05-1.8-.22-2.43-.46a4.9 4.9 0 0 1-1.77-1.16 4.9 4.9 0 0 1-.16-1.77C2.01 15.06 2 14.72 2 12s.01-3.06.06-4.12c.05-1.07.22-1.8.46-2.43a4.9 4.9 0 0 1 1.16-1.77A4.9 4.9 0 0 1 5.45 2.52c.63-.24 1.36-.41 2.43-.46C8.94 2.01 9.28 2 12 2Zm0 3.8a6.2 6.2 0 1 0 0 12.4 6.2 6.2 0 0 0 0-12.4Zm0 2.2a4 4 0 1 1 0 8 4 4 0 0 1 0-8Zm6.4-2.6a1.44 1.44 0 1 1-2.88 0 1.44 1.44 0 0 1 2.88 0Z',
  },
]

type NavEntry = NavLink & { external?: boolean }

const CONTACT_PHONE = '+263 242 494 407'

const serviceDescriptions: Record<string, string> = {
  'Cloud Computing': 'Tier 3 data centre, migration and managed cloud',
  Networking: 'Design, build and maintain network infrastructure',
  'Software Development': 'Custom apps, AI and workflow automation',
  'Cyber Security': 'Assessment, monitoring and threat response',
  'Hardware Solutions': 'Certified hardware supply, imaging and maintenance',
  'IT Consulting': 'Strategy, roadmaps and technology advisory',
  'Technical Support': 'Monitoring, maintenance and SLA-backed support',
}

const navItems: NavEntry[] = [
  ...NAV_LINKS.filter((link) => link.name !== 'Home' && link.name !== 'Contact').map(
    (link) => ({ ...link })
  ),
  { name: 'Shop', href: 'https://compulink.odoo.com/shop', external: true },
  { name: 'Dashboard', href: '/dashboard' },
]

const emptySubscribe = () => () => {}

/** `true` once the component has hydrated on the client. */
function useIsHydrated() {
  return useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  )
}

function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme()
  const hydrated = useIsHydrated()

  const isDark = hydrated && resolvedTheme === 'dark'

  return (
    <Button
      variant="ghost"
      size="icon"
      aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      className="rounded-full text-muted-foreground transition-colors hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring"
    >
      {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
    </Button>
  )
}

function Navbar() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [mobileNav, setMobileNav] = useState({ open: false, path: pathname })
  const [lastPath, setLastPath] = useState(pathname)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24)
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // The drawer closes itself whenever the route changes.
  if (lastPath !== pathname) {
    setLastPath(pathname)
    setMobileNav({ open: false, path: pathname })
  }

  const mobileOpen = mobileNav.open && mobileNav.path === pathname

  const setMobileOpen = useCallback(
    (nextOpen: boolean) => setMobileNav({ open: nextOpen, path: pathname }),
    [pathname]
  )

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href)

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      {/* Utility bar */}
      <div
        className={cn(
          'overflow-hidden border-b border-border/40 bg-surface/60 backdrop-blur-xl transition-[max-height,opacity] duration-300 ease-out-expo',
          scrolled ? 'max-h-0 opacity-0' : 'max-h-12 opacity-100'
        )}
      >
        <div className="container mx-auto hidden h-10 items-center justify-between px-4 text-xs text-muted-foreground md:flex">
          <div className="flex items-center gap-6">
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

          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
                className="rounded-md p-1 text-muted-foreground transition-all hover:-translate-y-0.5 hover:text-brand focus-visible:ring-2 focus-visible:ring-ring"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-3.5 w-3.5">
                  <path d={social.path} />
                </svg>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav
        aria-label="Main navigation"
        className={cn(
          'border-b transition-all duration-300 ease-out-expo',
          scrolled
            ? 'border-border/60 bg-background/85 shadow-lg backdrop-blur-xl'
            : 'border-transparent bg-background/40 backdrop-blur-md'
        )}
      >
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between gap-4">
            {/* Logo */}
            <Link
              href="/"
              className="shrink-0 rounded-lg focus-visible:ring-2 focus-visible:ring-ring"
              aria-label={`${SITE_NAME} home`}
            >
              <Image
                src="/images/logo.png"
                alt={SITE_NAME}
                width={180}
                height={60}
                className="h-9 w-auto md:h-10"
                priority
              />
            </Link>

            {/* Desktop navigation */}
            <NavigationMenu
              className="hidden xl:flex"
              viewport={false}
              delayDuration={120}
              skipDelayDuration={300}
            >
              <NavigationMenuList>
                {navItems.map((item) =>
                  item.subLinks ? (
                    <NavigationMenuItem key={item.href}>
                      <NavigationMenuTrigger
                        className={cn(
                          'px-3 text-[13px] font-medium transition-colors hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring',
                          isActive(item.href) ? 'text-brand' : 'text-muted-foreground'
                        )}
                      >
                        {item.name}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <ul className="grid w-[540px] gap-1 p-3">
                          {item.subLinks.map((subLink) => (
                            <li key={subLink.href}>
                              <NavigationMenuLink asChild>
                                <Link
                                  href={subLink.href}
                                  className={cn(
                                    'flex-col items-start gap-0.5 rounded-xl px-3 py-2.5 transition-colors focus-visible:ring-2 focus-visible:ring-ring',
                                    isActive(subLink.href)
                                      ? 'bg-brand/10 text-brand'
                                      : 'text-muted-foreground hover:bg-muted hover:text-foreground'
                                  )}
                                >
                                  <span className="text-sm font-medium">{subLink.name}</span>
                                  <span className="text-xs text-muted-foreground/80">
                                    {serviceDescriptions[subLink.name] ?? `Compulink ${subLink.name}`}
                                  </span>
                                </Link>
                              </NavigationMenuLink>
                            </li>
                          ))}
                        </ul>
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                  ) : (
                    <NavigationMenuItem key={item.href}>
                      <NavigationMenuLink asChild>
                        <Link
                          href={item.href}
                          target={item.external ? '_blank' : undefined}
                          rel={item.external ? 'noopener noreferrer' : undefined}
                          className={cn(
                            navigationMenuTriggerStyle(),
                            'gap-1.5 px-3 text-[13px] font-medium transition-colors hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring',
                            isActive(item.href) ? 'text-brand' : 'text-muted-foreground'
                          )}
                        >
                          {item.name === 'Dashboard' && (
                            <LayoutDashboard className="h-3.5 w-3.5" aria-hidden="true" />
                          )}
                          {item.name}
                          {item.external && (
                            <ArrowUpRight className="h-3 w-3 opacity-70" aria-hidden="true" />
                          )}
                        </Link>
                      </NavigationMenuLink>
                    </NavigationMenuItem>
                  )
                )}
              </NavigationMenuList>
            </NavigationMenu>

            {/* Actions */}
            <div className="flex shrink-0 items-center gap-2">
              <ThemeToggle />

              <Button
                asChild
                className="hidden rounded-full px-4 text-sm font-semibold shadow-[0_0_40px_-12px_var(--glow)] sm:inline-flex"
              >
                <Link href="/contact">
                  Contact Us
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>

              <MobileNavSheet
                open={mobileOpen}
                onOpenChange={setMobileOpen}
                showTrigger={false}
              />

              <Button
                variant="outline"
                size="icon"
                onClick={() => setMobileOpen(true)}
                aria-label="Open navigation menu"
                className="rounded-full border-border/60 bg-card/50 xl:hidden"
              >
                <Menu className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
