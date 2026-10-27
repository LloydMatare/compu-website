import React from 'react'
import Navbar from './_components/navbar'
import Footer from './_components/bottom'
import ChatbotWidget from '@/components/chatbot-widget'
import JsonLd from '@/components/json-ld'
import { GlobalScene } from '@/components/canvas/global-scene'
import { LenisProvider } from '@/components/scroll/lenis-provider'

export default function FrontLayout({ children }: { children: React.ReactNode }) {
  return (
    <LenisProvider>
      <div className="flex min-h-dvh flex-col relative">
        <GlobalScene />
        <JsonLd type="Organization" />
        <JsonLd type="WebSite" />
        <Navbar />
        <div className="py-4"/>
        <main className="flex-1">{children}</main>
        <Footer />
        <ChatbotWidget />
      </div>
    </LenisProvider>
  )
}
