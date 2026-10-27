'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export default function ProjectsPage() {
  return (
    <Card className="border-border/60 bg-card/40">
      <CardHeader>
        <CardTitle>Projects</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">Manage content from this section.</p>
      </CardContent>
    </Card>
  )
}
