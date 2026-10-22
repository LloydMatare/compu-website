import type { Metadata } from 'next'
import Services from './page-client'

export const metadata: Metadata = {
  title: 'Our Services',
  description:
    'Comprehensive IT services from Compulink Systems: cloud computing, cyber security, software development, networking, hardware, IT consulting and 24/7 technical support in Zimbabwe.',
}

export default function ServicesPage() {
  return <Services />
}
