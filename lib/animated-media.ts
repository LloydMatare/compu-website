export const animatedMedia = {
  cybersecurity: 'cyber-security',
  networking: 'networking',
  company: 'compulink',
  ai: 'artificial-intelligence',
  innovation: 'innovation',
  news: 'news',
} as const

export type AnimatedMediaName = keyof typeof animatedMedia
