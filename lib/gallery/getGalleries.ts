import { fetchQuery } from 'convex/nextjs'
import { api } from '@/convex/_generated/api'

export type Gallery = Awaited<
  ReturnType<typeof fetchQuery<typeof api.gallery.listItems>>
>[number] & { id: string }

export default async function getGalleries(): Promise<Gallery[]> {
  const galleries = await fetchQuery(api.gallery.listItems, {})
  return galleries.map((item) => ({ ...item, id: item._id }))
}
