import React from 'react'
import Navbar from './_components/navbar'
import Footer from './_components/bottom'
import ChatbotWidget from '@/components/chatbot-widget'
import JsonLd from '@/components/json-ld'

export default function FrontLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-dvh flex-col">
      <JsonLd type="Organization" />
      <JsonLd type="WebSite" />
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
      <ChatbotWidget />
    </div>
  )
}
