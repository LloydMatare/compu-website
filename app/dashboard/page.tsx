'use client'

import { useEffect } from 'react'
import { useMutation, useQuery } from 'convex/react'
import { api } from '@/convex/_generated/api'
import { Activity, FileText, Inbox, Package, UsersRound } from 'lucide-react'
import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Skeleton } from '@/components/ui/skeleton'
import { Badge } from '@/components/ui/badge'

function StatCard({
  title,
  value,
  href,
  icon: Icon,
}: {
  title: string
  value: number | undefined
  href: string
  icon: React.ComponentType<{ className?: string }>
}) {
  return (
    <Card className="border-border/60 bg-card/40 transition-all hover:-translate-y-0.5 hover:border-brand/40">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">{title}</CardTitle>
        <Icon className="h-4 w-4 text-brand" />
      </CardHeader>
      <CardContent>
        {value === undefined ? (
          <Skeleton className="h-8 w-16" />
        ) : (
          <Link href={href} className="text-2xl font-bold">
            {value}
          </Link>
        )}
      </CardContent>
    </Card>
  )
}

export default function DashboardPage() {
  const ensure = useMutation(api.users.ensure)
  const me = useQuery(api.users.me)
  const stats = useQuery(api.dashboard.stats, me ? {} : 'skip')

  useEffect(() => {
    if (me === null) void ensure({})
  }, [me, ensure])

  return (
    <div className="space-y-8">
      <div>
        <h1 className="font-display text-2xl font-bold">Dashboard</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          Overview of your content, enquiries and activity.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        <StatCard title="Products" value={stats?.counts.products} href="/dashboard/products" icon={Package} />
        <StatCard title="Blog posts" value={stats?.counts.posts} href="/dashboard/posts" icon={FileText} />
        <StatCard title="Unread messages" value={stats?.counts.unreadMessages} href="/dashboard/inbox" icon={Inbox} />
        <StatCard title="Open tickets" value={stats?.counts.openTickets} href="/dashboard/inbox" icon={Inbox} />
        <StatCard title="Subscribers" value={stats?.counts.subscribers} href="/dashboard/inbox" icon={UsersRound} />
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <Card className="border-border/60 bg-card/40">
          <CardHeader>
            <CardTitle>Recent posts</CardTitle>
          </CardHeader>
          <CardContent>
            {stats?.recent.posts.length === 0 ? (
              <p className="text-sm text-muted-foreground">No posts yet.</p>
            ) : (
              <ul className="space-y-3">
                {stats?.recent.posts.map((post) => (
                  <li key={post.id} className="flex items-center justify-between gap-4">
                    <div className="min-w-0">
                      <p className="truncate text-sm font-medium">{post.title}</p>
                      <p className="text-xs text-muted-foreground">
                        {post.views} views • {post.likes} likes
                      </p>
                    </div>
                    <Badge variant={post.published ? 'default' : 'secondary'}>
                      {post.published ? 'Published' : 'Draft'}
                    </Badge>
                  </li>
                ))}
              </ul>
            )}
          </CardContent>
        </Card>

        <Card className="border-border/60 bg-card/40">
          <CardHeader>
            <CardTitle>Recent activity</CardTitle>
          </CardHeader>
          <CardContent>
            {stats?.recent.activity.length === 0 ? (
              <p className="text-sm text-muted-foreground">No activity yet.</p>
            ) : (
              <ul className="space-y-3">
                {stats?.recent.activity.map((entry) => (
                  <li key={entry.id} className="flex items-start gap-3">
                    <Activity className="mt-0.5 h-4 w-4 text-brand" />
                    <div>
                      <p className="text-sm">
                        <span className="font-medium">{entry.actor ?? 'System'}</span>{' '}
                        {entry.action} {entry.entity}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {new Date(entry.at).toLocaleString()}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

