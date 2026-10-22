'use client'

import * as React from 'react'
import { Bell, LogOut, Search } from 'lucide-react'
import { useClerk } from '@clerk/nextjs'
import { UserButton } from '@clerk/nextjs'
import { SidebarInset, SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar'
import { Separator } from '@/components/ui/separator'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { AppSidebar } from './app-sidebar'

export function DashboardShell({ children }: { children: React.ReactNode }) {
  const { signOut } = useClerk()

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset className="min-h-svh bg-background">
        <header className="sticky top-0 z-20 flex h-16 shrink-0 items-center gap-3 border-b border-border/60 bg-background/80 px-4 backdrop-blur-md md:px-6">
          <SidebarTrigger className="-ml-1" />
          <Separator orientation="vertical" className="mr-2 h-4" />

          <div className="relative hidden max-w-sm flex-1 md:block">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input placeholder="Search dashboard..." className="h-9 pl-9" />
          </div>

          <div className="ml-auto flex items-center gap-2">
            <Button variant="ghost" size="icon" aria-label="Notifications">
              <Bell className="h-4 w-4" />
            </Button>
            <UserButton afterSignOutUrl="/" />
            <Button
              variant="ghost"
              size="icon"
              aria-label="Sign out"
              onClick={() => void signOut({ redirectUrl: '/' })}
            >
              <LogOut className="h-4 w-4" />
            </Button>
          </div>
        </header>

        <div className="flex-1 p-4 md:p-6 lg:p-8">{children}</div>
      </SidebarInset>
    </SidebarProvider>
  )
}

export default DashboardShell
