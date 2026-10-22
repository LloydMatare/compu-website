import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Portfolio',
  description:
    "Discover Compulink's portfolio of IT projects and client successes — 30+ years of delivering technology solutions across industries in Zimbabwe and beyond.",
}

import React from 'react'
import Hero from '../_components/hero'
import Service from '../_components/service'
import Testimonials from '../_components/testimonials'
import About from './_components/about'
import { AccordionTabs } from './_components/accordion'
import Clients from './_components/clients'
import Networking from './_components/network'
import ServicesSection from './_components/services'
import Software from './_components/software'
import Stats from './_components/stats'

function Portfolio() {
  return (
    <div className="min-h-screen">
      <Hero
        backImage="web5.webp"
        image=""
        title="Our Portfolio"
        subtitle="Proof of delivery across every industry"
        description="Three decades of infrastructure, software and security work for institutions across Zimbabwe and the wider region."
        primaryButtonText="Start a Project"
        primaryButtonLink="/contact?type=project"
        secondaryButtonText="Our Services"
        secondaryButtonLink="/services"
        showStats={false}
      />

      <Stats />
      <About />
      <AccordionTabs />
      <ServicesSection />
      <Clients />
      <Service />
      <Software />
      <Networking />
      <Testimonials />
    </div>
  )
}

export default Portfolio
