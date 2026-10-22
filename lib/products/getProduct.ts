import { fetchQuery } from 'convex/nextjs'
import { api } from '@/convex/_generated/api'
import { toCatalogProduct } from './getProducts'
import type { CatalogProduct } from './types'

export async function getProduct(slug: string): Promise<CatalogProduct | null> {
  const doc = await fetchQuery(api.products.getBySlug, { slug })
  return doc ? toCatalogProduct(doc) : null
}
