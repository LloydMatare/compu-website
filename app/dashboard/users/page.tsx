'use client'

import { useMutation, useQuery } from 'convex/react'
import { api } from '@/convex/_generated/api'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { toast } from 'sonner'

export default function UsersPage() {
  const users = useQuery(api.users.list, {})
  const setRole = useMutation(api.users.setRole)
  const me = useQuery(api.users.me)

  return (
    <Card className="border-border/60 bg-card/40">
      <CardHeader>
        <CardTitle>Users</CardTitle>
      </CardHeader>
      <CardContent className="space-y-2">
        {users?.map((user) => (
          <div key={user._id} className="flex items-center justify-between rounded-lg border border-border/60 p-3">
            <div>
              <p className="font-medium">{user.email}</p>
              <p className="text-sm text-muted-foreground">{user.name || '—'}</p>
            </div>
            <div className="flex items-center gap-2">
              <Badge variant={user.role === 'admin' ? 'default' : 'secondary'}>{user.role}</Badge>
              {me?.clerkUserId !== user.clerkUserId && (
                <>
                  <Button size="sm" variant="outline" onClick={() => setRole({ id: user._id, role: 'admin' }).then(() => toast.success('Role updated'))}>
                    Make Admin
                  </Button>
                  <Button size="sm" variant="outline" onClick={() => setRole({ id: user._id, role: 'editor' }).then(() => toast.success('Role updated'))}>
                    Make Editor
                  </Button>
                </>
              )}
            </div>
          </div>
        ))}
        {users?.length === 0 && <p className="text-sm text-muted-foreground text-center py-8">No users</p>}
      </CardContent>
    </Card>
  )
}
