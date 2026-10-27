'use client'

import { useMutation, useQuery } from 'convex/react'
import { api } from '@/convex/_generated/api'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { toast } from 'sonner'
import { Mail, MailOpen, Trash2 } from 'lucide-react'

function MessagesTab() {
  const messages = useQuery(api.inbox.listMessages, {})
  const setRead = useMutation(api.inbox.setMessageRead)
  const remove = useMutation(api.inbox.removeMessage)

  return (
    <Card className="border-border/60 bg-card/40">
      <CardHeader>
        <CardTitle>Contact Messages</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        {messages?.map((message) => (
          <div key={message._id} className="rounded-lg border border-border/60 p-4 space-y-2">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">{message.name}</p>
                <p className="text-sm text-muted-foreground">{message.email}</p>
              </div>
              <div className="flex items-center gap-2">
                <Badge variant={message.read ? 'secondary' : 'default'}>{message.read ? 'Read' : 'Unread'}</Badge>
                {!message.read && (
                  <Button size="sm" variant="outline" onClick={() => setRead({ id: message._id, read: true }).then(() => toast.success('Marked as read'))}>
                    <MailOpen className="h-4 w-4 mr-1" /> Mark read
                  </Button>
                )}
                <Button size="sm" variant="ghost" className="text-destructive" onClick={() => remove({ id: message._id }).then(() => toast.success('Deleted'))}>
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            </div>
            {message.subject && <p className="text-sm font-medium">{message.subject}</p>}
            <p className="text-sm text-muted-foreground whitespace-pre-wrap">{message.message}</p>
            <p className="text-xs text-muted-foreground">{new Date(message._creationTime).toLocaleString()}</p>
          </div>
        ))}
        {messages?.length === 0 && <p className="text-sm text-muted-foreground text-center py-8">No messages</p>}
      </CardContent>
    </Card>
  )
}

function TicketsTab() {
  const tickets = useQuery(api.inbox.listTickets, {})
  const setStatus = useMutation(api.inbox.setTicketStatus)
  const remove = useMutation(api.inbox.removeTicket)

  return (
    <Card className="border-border/60 bg-card/40">
      <CardHeader>
        <CardTitle>Support Tickets</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        {tickets?.map((ticket) => (
          <div key={ticket._id} className="rounded-lg border border-border/60 p-4 space-y-2">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">{ticket.name}</p>
                <p className="text-sm text-muted-foreground">{ticket.email}</p>
              </div>
              <div className="flex items-center gap-2">
                <Badge variant={ticket.status === 'resolved' ? 'secondary' : ticket.status === 'in_progress' ? 'default' : 'outline'}>{ticket.status}</Badge>
                <Button size="sm" variant="outline" onClick={() => setStatus({ id: ticket._id, status: 'in_progress' }).then(() => toast.success('Updated'))}>In Progress</Button>
                <Button size="sm" variant="outline" onClick={() => setStatus({ id: ticket._id, status: 'resolved' }).then(() => toast.success('Resolved'))}>Resolve</Button>
                <Button size="sm" variant="ghost" className="text-destructive" onClick={() => remove({ id: ticket._id }).then(() => toast.success('Deleted'))}>
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            </div>
            <p className="text-sm font-medium">{ticket.subject || ticket.category}</p>
            <p className="text-sm text-muted-foreground whitespace-pre-wrap">{ticket.description}</p>
            <p className="text-xs text-muted-foreground">Priority: {ticket.priority} | {new Date(ticket._creationTime).toLocaleString()}</p>
          </div>
        ))}
        {tickets?.length === 0 && <p className="text-sm text-muted-foreground text-center py-8">No tickets</p>}
      </CardContent>
    </Card>
  )
}

function SubscribersTab() {
  const subscribers = useQuery(api.inbox.listSubscribers, {})
  const remove = useMutation(api.inbox.removeSubscriber)

  return (
    <Card className="border-border/60 bg-card/40">
      <CardHeader>
        <CardTitle>Newsletter Subscribers</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          {subscribers?.map((subscriber) => (
            <div key={subscriber._id} className="flex items-center justify-between rounded-lg border border-border/60 p-3">
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-brand" />
                <div>
                  <p className="text-sm font-medium">{subscriber.email}</p>
                  <p className="text-xs text-muted-foreground">Subscribed {new Date(subscriber.subscribedAt).toLocaleString()}</p>
                </div>
              </div>
              <Button size="sm" variant="ghost" className="text-destructive" onClick={() => remove({ id: subscriber._id }).then(() => toast.success('Removed'))}>
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>
          ))}
          {subscribers?.length === 0 && <p className="text-sm text-muted-foreground text-center py-8">No subscribers</p>}
        </div>
      </CardContent>
    </Card>
  )
}

export default function InboxPage() {
  return (
    <Tabs defaultValue="messages" className="space-y-6">
      <TabsList>
        <TabsTrigger value="messages">Messages</TabsTrigger>
        <TabsTrigger value="tickets">Tickets</TabsTrigger>
        <TabsTrigger value="subscribers">Subscribers</TabsTrigger>
      </TabsList>
      <TabsContent value="messages"><MessagesTab /></TabsContent>
      <TabsContent value="tickets"><TicketsTab /></TabsContent>
      <TabsContent value="subscribers"><SubscribersTab /></TabsContent>
    </Tabs>
  )
}
