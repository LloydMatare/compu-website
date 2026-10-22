'use client'

import * as React from 'react'
import { Search, Pencil, Trash2, Plus, Inbox } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { Skeleton } from '@/components/ui/skeleton'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog'
import { Badge } from '@/components/ui/badge'

export interface Column<T> {
  key: string
  header: string
  render: (row: T) => React.ReactNode
  className?: string
}

export interface ResourcePageProps<T> {
  title: string
  description?: string
  rows: T[] | undefined
  columns: Column<T>[]
  search: (row: T) => string
  emptyMessage?: string
  createLabel?: string
  onCreate?: () => void
  onEdit?: (row: T) => void
  onDelete?: (row: T) => void
  headerExtra?: React.ReactNode
}

export function ResourcePage<T>({
  title,
  description,
  rows,
  columns,
  search,
  emptyMessage = 'Nothing here yet.',
  createLabel = 'New',
  onCreate,
  onEdit,
  onDelete,
  headerExtra,
}: ResourcePageProps<T>) {
  const [query, setQuery] = React.useState('')
  const [pendingDelete, setPendingDelete] = React.useState<T | null>(null)

  const filtered = React.useMemo(() => {
    const list = rows ?? []
    const needle = query.trim().toLowerCase()
    if (!needle) return list
    return list.filter((row) => search(row).toLowerCase().includes(needle))
  }, [rows, query, search])

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="font-display text-2xl font-bold">{title}</h1>
          {description ? (
            <p className="mt-1 text-sm text-muted-foreground">{description}</p>
          ) : null}
        </div>
        <div className="flex items-center gap-2">
          {headerExtra}
          {onCreate ? (
            <Button onClick={onCreate} className="gap-2">
              <Plus className="h-4 w-4" />
              {createLabel}
            </Button>
          ) : null}
        </div>
      </div>

      <div className="relative max-w-sm">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search..."
          className="pl-9"
        />
      </div>

      <div className="overflow-hidden rounded-2xl border border-border/60 bg-card/40">
        <Table>
          <TableHeader>
            <TableRow>
              {columns.map((column) => (
                <TableHead key={column.key} className={column.className}>
                  {column.header}
                </TableHead>
              ))}
              {onEdit || onDelete ? (
                <TableHead className="w-[120px] text-right">Actions</TableHead>
              ) : null}
            </TableRow>
          </TableHeader>
          <TableBody>
            {rows === undefined
              ? Array.from({ length: 5 }).map((_, index) => (
                  <TableRow key={index}>
                    <TableCell colSpan={columns.length + 1}>
                      <Skeleton className="h-5 w-full" />
                    </TableCell>
                  </TableRow>
                ))
              : filtered.length === 0
                ? (
                  <TableRow>
                    <TableCell colSpan={columns.length + 1} className="py-16 text-center">
                      <div className="flex flex-col items-center gap-3 text-muted-foreground">
                        <Inbox className="h-8 w-8" />
                        <p className="text-sm">{emptyMessage}</p>
                      </div>
                    </TableCell>
                  </TableRow>
                )
                : filtered.map((row, index) => (
                  <TableRow key={index}>
                    {columns.map((column) => (
                      <TableCell key={column.key} className={column.className}>
                        {column.render(row)}
                      </TableCell>
                    ))}
                    {onEdit || onDelete ? (
                      <TableCell className="text-right">
                        <div className="flex justify-end gap-1">
                          {onEdit ? (
                            <Button
                              variant="ghost"
                              size="icon"
                              aria-label="Edit"
                              onClick={() => onEdit(row)}
                            >
                              <Pencil className="h-4 w-4" />
                            </Button>
                          ) : null}
                          {onDelete ? (
                            <Button
                              variant="ghost"
                              size="icon"
                              aria-label="Delete"
                              className="text-destructive"
                              onClick={() => setPendingDelete(row)}
                            >
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          ) : null}
                        </div>
                      </TableCell>
                    ) : null}
                  </TableRow>
                ))}
          </TableBody>
        </Table>
      </div>

      <AlertDialog
        open={!!pendingDelete}
        onOpenChange={(open) => !open && setPendingDelete(null)}
      >
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Delete this item?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. The record will be permanently removed.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction
              className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
              onClick={async () => {
                if (pendingDelete && onDelete) await onDelete(pendingDelete)
                setPendingDelete(null)
              }}
            >
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  )
}

export function StatusBadge({
  published,
  publishedLabel = 'Published',
  draftLabel = 'Draft',
}: {
  published: boolean
  publishedLabel?: string
  draftLabel?: string
}) {
  return (
    <Badge variant={published ? 'default' : 'secondary'}>
      {published ? publishedLabel : draftLabel}
    </Badge>
  )
}

export default ResourcePage
