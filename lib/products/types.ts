export interface ProductSpec {
  label: string
  value: string
}

export interface CatalogProduct {
  id: string
  title: string
  imageUrl: string
  gallery: string[]
  price: number
  compareAtPrice?: number
  brand?: string
  sku?: string
  shortDescription?: string
  description?: string
  features: string[]
  specs: ProductSpec[]
  category: string
  categoryLabel: string
  inStock: boolean
  createdAt: string
}
