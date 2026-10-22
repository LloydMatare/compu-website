'use client'

import * as React from 'react'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Switch } from '@/components/ui/switch'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Button } from '@/components/ui/button'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from '@/components/ui/sheet'
import { Loader2 } from 'lucide-react'

export type FieldType =
  | 'text'
  | 'textarea'
  | 'number'
  | 'boolean'
  | 'select'
  | 'list'
  | 'image'

export interface FieldOption {
  value: string
  label: string
}

export interface FieldDef {
  name: string
  label: string
  type: FieldType
  placeholder?: string
  options?: FieldOption[]
  required?: boolean
  help?: string
  rows?: number
  colSpan?: 1 | 2
}

export type FormValues = Record<string, unknown>

function toListValue(value: unknown): string {
  if (Array.isArray(value)) return value.join('\n')
  if (value === undefined || value === null) return ''
  return String(value)
}

export interface ResourceFormProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  title: string
  description?: string
  fields: FieldDef[]
  initialValues?: FormValues
  onSubmit: (values: FormValues) => Promise<void> | void
}

export function ResourceForm({
  open,
  onOpenChange,
  title,
  description,
  fields,
  initialValues,
  onSubmit,
}: ResourceFormProps) {
  const [values, setValues] = React.useState<FormValues>(initialValues ?? {})
  const [submitting, setSubmitting] = React.useState(false)

  React.useEffect(() => {
    if (open) setValues(initialValues ?? {})
  }, [open, initialValues])

  function setValue(name: string, value: unknown) {
    setValues((prev) => ({ ...prev, [name]: value }))
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSubmitting(true)
    try {
      await onSubmit(values)
      onOpenChange(false)
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent className="w-full overflow-y-auto sm:max-w-xl">
        <SheetHeader>
          <SheetTitle>{title}</SheetTitle>
          {description ? <SheetDescription>{description}</SheetDescription> : null}
        </SheetHeader>

        <form onSubmit={handleSubmit} className="mt-6 space-y-5">
          {fields.map((field) => {
            const value = values[field.name]

            if (field.type === 'boolean') {
              return (
                <div
                  key={field.name}
                  className="flex items-center justify-between rounded-lg border border-border/60 bg-background/40 p-4"
                >
                  <div>
                    <Label htmlFor={field.name}>{field.label}</Label>
                    {field.help ? (
                      <p className="mt-1 text-xs text-muted-foreground">{field.help}</p>
                    ) : null}
                  </div>
                  <Switch
                    id={field.name}
                    checked={Boolean(value)}
                    onCheckedChange={(checked) => setValue(field.name, checked)}
                  />
                </div>
              )
            }

            return (
              <div
                key={field.name}
                className={field.colSpan === 2 ? 'grid gap-2 sm:col-span-2' : 'grid gap-2'}
              >
                <Label htmlFor={field.name}>
                  {field.label}
                  {field.required ? <span className="text-destructive">*</span> : null}
                </Label>

                {field.type === 'textarea' ? (
                  <Textarea
                    id={field.name}
                    rows={field.rows ?? 4}
                    required={field.required}
                    placeholder={field.placeholder}
                    value={String(value ?? '')}
                    onChange={(event) => setValue(field.name, event.target.value)}
                  />
                ) : field.type === 'select' ? (
                  <Select
                    value={String(value ?? '')}
                    onValueChange={(next) => setValue(field.name, next)}
                  >
                    <SelectTrigger id={field.name}>
                      <SelectValue placeholder={field.placeholder ?? 'Select...'} />
                    </SelectTrigger>
                    <SelectContent>
                      {(field.options ?? []).map((option) => (
                        <SelectItem key={option.value} value={option.value}>
                          {option.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                ) : field.type === 'list' ? (
                  <Textarea
                    id={field.name}
                    rows={field.rows ?? 3}
                    placeholder={field.placeholder ?? 'One entry per line'}
                    value={toListValue(value)}
                    onChange={(event) => setValue(field.name, event.target.value)}
                  />
                ) : field.type === 'number' ? (
                  <Input
                    id={field.name}
                    type="number"
                    required={field.required}
                    placeholder={field.placeholder}
                    value={value === undefined || value === null ? '' : String(value)}
                    onChange={(event) =>
                      setValue(
                        field.name,
                        event.target.value === '' ? undefined : Number(event.target.value)
                      )
                    }
                  />
                ) : (
                  <Input
                    id={field.name}
                    required={field.required}
                    placeholder={field.placeholder}
                    value={String(value ?? '')}
                    onChange={(event) => setValue(field.name, event.target.value)}
                  />
                )}

                {field.help ? (
                  <p className="text-xs text-muted-foreground">{field.help}</p>
                ) : null}
              </div>
            )
          })}

          <SheetFooter className="gap-2">
            <Button type="submit" disabled={submitting}>
              {submitting ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
              Save
            </Button>
            <Button type="button" variant="outline" onClick={() => onOpenChange(false)}>
              Cancel
            </Button>
          </SheetFooter>
        </form>
      </SheetContent>
    </Sheet>
  )
}

export default ResourceForm
