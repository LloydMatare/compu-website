'use client'

import * as React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  Briefcase,
  CalendarDays,
  FolderKanban,
  Handshake,
  Images,
  Inbox,
  LayoutDashboard,
  Newspaper,
  Package,
  Quote,
  Settings,
  Wrench,
} from 'lucide-react'
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from '@/components/ui/sidebar'
import { cn } from '@/lib/utils'

export const DASHBOARD_NAV = [
  { title: 'Overview', href: '/dashboard', icon: LayoutDashboard },
  { title: 'Products', href: '/dashboard/products', icon: Package },
  { title: 'Services', href: '/dashboard/services', icon: Wrench },
  { title: 'Blog posts', href: '/dashboard/posts', icon: Newspaper },
  { title: 'Events', href: '/dashboard/events', icon: CalendarDays },
  { title: 'Gallery', href: '/dashboard/gallery', icon: Images },
  { title: 'Vacancies', href: '/dashboard/vacancies', icon: Briefcase },
  { title: 'Testimonials', href: '/dashboard/testimonials', icon: Quote },
  { title: 'Partners', href: '/dashboard/partners', icon: Handshake },
  { title: 'Projects', href: '/dashboard/projects', icon: FolderKanban },
  { title: 'Inbox', href: '/dashboard/inbox', icon: Inbox },
  { title: 'Settings', href: '/dashboard/settings', icon: Settings },
] as const

export function AppSidebar() {
  const pathname = usePathname()

  return (
    <Sidebar collapsible="icon">
      <SidebarHeader>
        <Link href="/dashboard" className="flex items-center gap-2 px-2 py-1.5">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand text-sm font-bold text-brand-foreground">
            C
          </span>
          <span className="font-display text-base font-semibold tracking-tight group-data-[collapsible=icon]:hidden">
            Compulink
          </span>
        </Link>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Content</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {DASHBOARD_NAV.map((item) => {
                const active =
                  item.href === '/dashboard'
                    ? pathname === '/dashboard'
                    : pathname.startsWith(item.href)
                return (
                  <SidebarMenuItem key={item.href}>
                    <SidebarMenuButton
                      asChild
                      isActive={active}
                      tooltip={item.title}
                    >
                      <Link href={item.href}>
                        <item.icon />
                        <span>{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                )
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter>
        <Link
          href="/"
          className={cn(
            'flex items-center gap-2 rounded-lg px-2 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground',
            'group-data-[collapsible=icon]:justify-center',
          )}
        >
          <LayoutDashboard className="h-4 w-4" />
          <span className="group-data-[collapsible=icon]:hidden">View live site</span>
        </Link>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}

export default AppSidebar
