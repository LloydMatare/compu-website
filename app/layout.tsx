import React from 'react'
import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono, Space_Grotesk } from 'next/font/google'
import { ClerkProvider } from '@clerk/nextjs'
import { ThemeProvider } from 'next-themes'
import { Toaster } from '@/components/ui/sonner'
import { TooltipProvider } from '@/components/ui/tooltip'
import ConvexClientProvider from '@/components/ConvexClientProvider'
import { SITE_URL, SITE_NAME, SITE_DESCRIPTION, SITE_KEYWORDS } from '@/lib/constants/site'
import './globals.css'

const geistSans = Geist({
  subsets: ['latin'],
  variable: '--font-geist-sans',
  display: 'swap',
})

const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-geist-mono',
  display: 'swap',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} | IT Solutions & Services in Zimbabwe`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  keywords: SITE_KEYWORDS,
  authors: [{ name: SITE_NAME }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  manifest: '/manifest.json',
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
    shortcut: '/favicon.ico',
  },
  openGraph: {
    type: 'website',
    locale: 'en_ZW',
    url: SITE_URL,
    siteName: SITE_NAME,
    title: `${SITE_NAME} | IT Solutions & Services in Zimbabwe`,
    description: SITE_DESCRIPTION,
    images: [
      {
        url: '/images/logo.png',
        width: 1200,
        height: 630,
        alt: `${SITE_NAME} Logo`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE_NAME} | IT Solutions & Services in Zimbabwe`,
    description: SITE_DESCRIPTION,
    images: ['/images/logo.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: SITE_URL,
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f8fafc' },
    { media: '(prefers-color-scheme: dark)', color: '#0b1120' },
  ],
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const googleVerification = (process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || '').replace(
    /^google-site-verification=/,
    ''
  )

  return (
    <html
      lang="en"
      suppressHydrationWarning
      data-scroll-behavior="smooth"
      className={`${geistSans.variable} ${geistMono.variable} ${spaceGrotesk.variable}`}
    >
      <head>
        {googleVerification ? (
          <meta name="google-site-verification" content={googleVerification} />
        ) : null}
      </head>
      <body className="min-h-dvh bg-background font-sans antialiased">
        <ClerkProvider>
          <ConvexClientProvider>
            <ThemeProvider
              attribute="class"
              defaultTheme="dark"
              enableSystem
              disableTransitionOnChange
            >
              <TooltipProvider delayDuration={200}>{children}</TooltipProvider>
              <Toaster position="top-right" richColors closeButton />
            </ThemeProvider>
          </ConvexClientProvider>
        </ClerkProvider>
      </body>
    </html>
  )
}
