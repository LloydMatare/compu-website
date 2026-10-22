import React from 'react'
import Hero from '@/app/(front)/_components/hero'

export interface MainLayoutProps {
  backImage?: string
  image?: string
  title?: string
  subtitle?: string
  children: React.ReactNode
}

export default function MainLayout({
  backImage,
  image,
  title,
  subtitle,
  children,
}: MainLayoutProps) {
  return (
    <div className="min-h-screen">
      <Hero backImage={backImage} image={image} title={title} subtitle={subtitle} />
      <div className="container mx-auto px-4 py-16">{children}</div>
    </div>
  )
}
