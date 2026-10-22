export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, '') || 'https://compulink.co.zw'

export const SITE_NAME = 'Compulink Systems'

export const SITE_DESCRIPTION =
  "Zimbabwe's leading IT solutions provider with 30+ years of experience. Cloud computing, cybersecurity, software development, networking, and hardware solutions."

export const SITE_KEYWORDS = [
  'IT solutions Zimbabwe',
  'cloud computing Zimbabwe',
  'cybersecurity Harare',
  'software development Zimbabwe',
  'networking services Zimbabwe',
  'hardware solutions Zimbabwe',
  'IT consulting Zimbabwe',
  'managed IT services',
]

export const CONTACT = {
  email: 'info@compulink.co.zw',
  supportEmail: 'support@compulink.co.zw',
  phone: '+263 867 710 5028',
  bulawayoPhone: '+263 719 494 407',
  harareAddress: 'Harare, Zimbabwe',
  bulawayoAddress: 'Bulawayo, Zimbabwe',
} as const
