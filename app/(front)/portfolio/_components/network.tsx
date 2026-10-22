import React from 'react'
import Projects from './projects'

export interface NetworkingProject {
  name: string
  description: string
  link: string
  image?: string
  icon?: 'health' | 'agriculture' | 'factory' | 'government'
  technologies: string[]
  category: string
}

export const networkingProjects: NetworkingProject[] = [
  {
    name: 'CABS Marondera Infrastructure',
    description:
      'Complete network infrastructure overhaul for CABS Marondera, featuring secure LAN/WAN setup, enterprise-grade firewalls and seamless connectivity across multiple branches with a 99.9% uptime guarantee.',
    link: '/services/networks',
    image: '/images/cabs.png',
    technologies: ['Cisco', 'Fortinet', 'SD-WAN', 'VoIP'],
    category: 'Banking & Finance',
  },
  {
    name: 'Old Mutual Network Modernisation',
    description:
      'Enterprise network modernisation project for Old Mutual Zimbabwe, implementing advanced security protocols, cloud connectivity and robust disaster recovery solutions for financial data protection.',
    link: '/services/networks',
    image: '/images/oldMutual.jpeg',
    technologies: ['Juniper', 'Palo Alto', 'Azure', 'MPLS'],
    category: 'Financial Services',
  },
  {
    name: 'University of Zimbabwe Campus Network',
    description:
      'High-density campus network supporting 25,000+ concurrent users with seamless roaming, research network segregation and high-speed internet access for academic excellence.',
    link: '/services/networks',
    image: '/images/uz.png',
    technologies: ['Aruba', 'HP', 'Fiber Optics', 'Wi-Fi 6'],
    category: 'Education',
  },
  {
    name: 'Parirenyatwa Hospital Medical Network',
    description:
      'Critical healthcare network infrastructure ensuring reliable connectivity for medical devices, patient record systems and telemedicine services with healthcare compliance.',
    link: '/services/networks',
    image: '/images/pare.png',
    technologies: ['Medical IoT', 'VLAN', 'QoS', 'Redundancy'],
    category: 'Healthcare',
  },
  {
    name: 'Industrial IoT Manufacturing Network',
    description:
      'Smart factory network implementation for a manufacturing plant, enabling real-time equipment monitoring, predictive maintenance and production optimisation through industrial IoT.',
    link: '/services/networks',
    icon: 'factory',
    technologies: ['Industrial Ethernet', 'SCADA', 'PLC', '5G'],
    category: 'Manufacturing',
  },
  {
    name: 'Government Data Centre',
    description:
      'Secure government data centre network with multi-layer security, data sovereignty compliance and high-availability architecture for critical national infrastructure.',
    link: '/services/networks',
    image: '/images/govt.png',
    technologies: ['Cisco ACI', 'F5 Load Balancers', 'ISMS', 'Tier 3'],
    category: 'Government',
  },
]

function Networking() {
  return (
    <section className="relative overflow-hidden">
      <div className="container relative mx-auto px-4 py-16 lg:py-20">
        <div className="mb-12 text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-brand">Infrastructure</p>
          <h2 className="mt-3 font-display text-2xl font-bold md:text-4xl">
            Network <span className="text-gradient-brand">Infrastructure</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">
            Robust networking solutions powering enterprises with secure, scalable and
            high-performance connectivity across diverse industries.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {networkingProjects.map((project) => (
            <Projects
              key={project.name}
              name={project.name}
              description={project.description}
              link={project.link}
              image={project.image}
              icon={project.icon}
              technologies={project.technologies}
              category={project.category}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Networking
