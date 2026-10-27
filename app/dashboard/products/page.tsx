'use client'

import { useState } from 'react'
import { useMutation, useQuery } from 'convex/react'
import { api } from '@/convex/_generated/api'
import type { Id } from '@/convex/_generated/dataModel'
import { ResourcePage } from '@/components/dashboard/resource-page'
import { ResourceForm, type FieldDef } from '@/components/dashboard/resource-form'
import { toast } from 'sonner'

const fields: FieldDef[] = [
  { name: 'title', label: 'Title', type: 'text', required: true },
  { name: 'slug', label: 'Slug', type: 'text', required: true },
  { name: 'brand', label: 'Brand', type: 'text' },
  { name: 'sku', label: 'SKU', type: 'text' },
  { name: 'category', label: 'Category', type: 'text', required: true },
  { name: 'categoryLabel', label: 'Category label', type: 'text', required: true },
  { name: 'shortDescription', label: 'Short description', type: 'textarea', rows: 2 },
  { name: 'description', label: 'Description', type: 'textarea', rows: 6 },
  { name: 'price', label: 'Price', type: 'number', required: true },
  { name: 'compareAtPrice', label: 'Compare at price', type: 'number' },
  { name: 'imageUrl', label: 'Image URL', type: 'text', required: true },
  { name: 'inStock', label: 'In stock', type: 'boolean' },
  { name: 'published', label: 'Published', type: 'boolean' },
]

export default function ProductsPage() {
  const products = useQuery(api.products.list, { publishedOnly: false })
  const create = useMutation(api.products.create)
  const update = useMutation(api.products.update)
  const remove = useMutation(api.products.remove)

  const [open, setOpen] = useState(false)
  const [editingId, setEditingId] = useState<Id<'products'> | null>(null)
  const editing = products?.find((product) => product._id === editingId)

  async function onSubmit(values: Record<string, unknown>) {
    try {
      if (editingId) {
        await update({ id: editingId, ...values } as any)
        toast.success('Product updated')
      } else {
        await create({ ...values } as any)
        toast.success('Product created')
      }
    } catch {
      toast.error('Something went wrong')
      throw new Error('Failed to save product')
    }
  }

  return (
    <>
      <ResourcePage
        title="Products"
        description="Manage the product catalog."
        rows={products}
        search={(product) => product.title}
        onCreate={() => {
          setEditingId(null)
          setOpen(true)
        }}
        onEdit={(product) => {
          setEditingId(product._id)
          setOpen(true)
        }}
        onDelete={async (product) => {
          await remove({ id: product._id })
          toast.success('Product deleted')
        }}
        columns={[
          {
            key: 'title',
            header: 'Product',
            render: (product) => <span className="font-medium">{product.title}</span>,
          },
          { key: 'brand', header: 'Brand', render: (product) => product.brand ?? '—' },
          { key: 'category', header: 'Category', render: (product) => product.categoryLabel },
          {
            key: 'price',
            header: 'Price',
            render: (product) => `$${product.price.toLocaleString()}`,
          },
        ]}
      />

      <ResourceForm
        open={open}
        onOpenChange={(next) => {
          setOpen(next)
          if (!next) setEditingId(null)
        }}
        title={editingId ? 'Edit product' : 'New product'}
        description="Add or update a catalog item."
        fields={fields}
        initialValues={editing ?? { inStock: true, published: true, price: 0, gallery: [], features: [], specs: [] }}
        onSubmit={onSubmit}
      />
    </>
  )
}
