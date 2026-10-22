import type { Metadata } from 'next'
import { auth } from '@clerk/nextjs/server'
import { redirect } from 'next/navigation'
import { DashboardShell } from '@/components/dashboard/dashboard-shell'

export const metadata: Metadata = {
  title: {
    default: 'Dashboard',
    template: '%s · Compulink Dashboard',
  },
  description: 'Manage Compulink products, services, content and enquiries.',
}

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const { userId } = await auth()
  if (!userId) redirect('/sign-in')

  return <DashboardShell>{children}</DashboardShell>
}
