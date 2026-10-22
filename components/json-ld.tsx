import React from 'react'
import { SITE_URL, SITE_NAME, SITE_DESCRIPTION, CONTACT } from '@/lib/constants/site'

type JsonLdProps = {
  type: 'Organization' | 'WebSite' | 'BreadcrumbList' | 'Article'
  data?: Record<string, unknown>
}

const ORGANIZATION = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: SITE_NAME,
  url: SITE_URL,
  logo: `${SITE_URL}/images/logo.png`,
  description: SITE_DESCRIPTION,
  email: CONTACT.email,
  telephone: CONTACT.phone,
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Harare',
    addressCountry: 'ZW',
  },
  sameAs: [],
}

const WEBSITE = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: SITE_NAME,
  url: SITE_URL,
  description: SITE_DESCRIPTION,
  publisher: {
    '@type': 'Organization',
    name: SITE_NAME,
    logo: `${SITE_URL}/images/logo.png`,
  },
}

export default function JsonLd({ type, data }: JsonLdProps) {
  const payload =
    type === 'Organization'
      ? { ...ORGANIZATION, ...data }
      : type === 'WebSite'
        ? { ...WEBSITE, ...data }
        : { '@context': 'https://schema.org', '@type': type, ...data }

  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(payload) }}
    />
  )
}
