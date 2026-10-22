export const PRODUCT_CATEGORIES: { value: string; label: string }[] = [
  { value: 'laptops', label: 'Laptops' },
  { value: 'desktops', label: 'Desktops' },
  { value: 'servers', label: 'Servers' },
  { value: 'networking', label: 'Networking' },
  { value: 'storage', label: 'Storage & Backup' },
  { value: 'accessories', label: 'Accessories' },
  { value: 'printers', label: 'Printers & Scanners' },
  { value: 'software', label: 'Software' },
]

export const CURRENCY = 'USD'

export function formatPrice(price: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: CURRENCY,
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price)
}
