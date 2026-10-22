import { fetchQuery } from 'convex/nextjs'
import { api } from '@/convex/_generated/api'
import type { CatalogProduct } from './types'

export function toCatalogProduct(
  doc: Awaited<ReturnType<typeof fetchQuery<typeof api.products.list>>>[number]
): CatalogProduct {
  return {
    id: doc.slug,
    title: doc.title,
    imageUrl: doc.imageUrl,
    gallery: doc.gallery,
    price: doc.price,
    compareAtPrice: doc.compareAtPrice,
    brand: doc.brand,
    sku: doc.sku,
    shortDescription: doc.shortDescription,
    description: doc.description,
    features: doc.features,
    specs: doc.specs,
    category: doc.category,
    categoryLabel: doc.categoryLabel,
    inStock: doc.inStock,
    createdAt: new Date(doc._creationTime).toISOString(),
  }
}

export default async function getProducts(): Promise<CatalogProduct[]> {
  const products = await fetchQuery(api.products.list, { publishedOnly: true })
  return products.map(toCatalogProduct)
}
