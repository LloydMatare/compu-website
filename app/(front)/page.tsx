import type { Metadata } from 'next'
import { HeroCyberpunk } from './_components/hero-cyberpunk'
import About from './_components/about'
import Service from './_components/service'
import Testimonials from './_components/testimonies'
import HomeCarousel from './_components/carousel'
import Promotion from './_components/promotions'
import Partners from './_components/partners'
import Work from './_components/work'

export const metadata: Metadata = {
  title: 'Compulink | IT Solutions & Services in Zimbabwe',
  description:
    "Zimbabwe's leading IT solutions provider. Cloud computing, cybersecurity, software development, networking, hardware and technical support for over 30 years.",
  openGraph: {
    title: 'Compulink | IT Solutions & Services in Zimbabwe',
    description:
      "Zimbabwe's leading IT solutions provider. Cloud computing, cybersecurity, software development, networking, and hardware for 30+ years.",
  },
}

export default function Home() {
  return (
    <div className="flex flex-col">
      <HeroCyberpunk
        backImage="web3.webp"
        primaryButtonText="INITIATE PROTOCOL"
        primaryButtonLink="/services"
        secondaryButtonText="ESTABLISH CONNECTION"
        secondaryButtonLink="/contact"
      />

      <Partners />
      <About />
      <Work />
      <Service />
      <Testimonials />
      <HomeCarousel />
      <Promotion />
    </div>
  )
}
