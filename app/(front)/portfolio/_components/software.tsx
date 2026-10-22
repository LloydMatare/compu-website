import React from 'react'
import Projects from './projects'

export interface SoftwareProject {
  name: string
  description: string
  link: string
  image?: string
  icon?: 'health' | 'agriculture' | 'factory' | 'government'
  technologies: string[]
  category: string
}

export const softwareProjects: SoftwareProject[] = [
  {
    name: 'CoinSwap',
    description:
      'Revolutionary digital currency exchange platform addressing cash flow challenges and financial inclusion. Features real-time trading, secure wallet integration and multi-currency support with advanced fraud detection systems.',
    link: '/services/software',
    image: '/images/coinswap.jpeg',
    technologies: ['React', 'Node.js', 'Blockchain', 'MongoDB'],
    category: 'FinTech',
  },
  {
    name: 'E-Store Platform',
    description:
      'Comprehensive e-commerce solution supporting B2B, B2C and C2C transactions. Includes inventory management, AI-powered recommendations, secure payment gateways and omnichannel retail capabilities.',
    link: '/services/software',
    image: '/images/ecommerce.jpeg',
    technologies: ['Next.js', 'Stripe', 'Redis', 'AWS'],
    category: 'E-Commerce',
  },
  {
    name: 'E-Learning Suite',
    description:
      'Advanced learning management system with virtual classrooms, AI-driven content personalisation, progress analytics and collaborative tools for educational institutions and corporate training.',
    link: '/services/software',
    image: '/images/e-learn.jpeg',
    technologies: ['Vue.js', 'Python', 'WebRTC', 'PostgreSQL'],
    category: 'EdTech',
  },
  {
    name: 'HR Intelligence Platform',
    description:
      'Digital employee experience platform enhancing collaboration, communication and performance management. Features automated workflows, talent analytics and integrated performance tracking.',
    link: '/services/software',
    image: '/images/crm.jpeg',
    technologies: ['Angular', 'Spring Boot', 'AI/ML', 'MySQL'],
    category: 'HR Tech',
  },
  {
    name: 'Healthcare Management',
    description:
      'Integrated healthcare platform for patient management, electronic health records, telemedicine and medical billing. Ensures compliance and seamless healthcare delivery.',
    link: '/services/software',
    icon: 'health',
    technologies: ['React Native', 'Django', 'HL7', 'Firebase'],
    category: 'HealthTech',
  },
  {
    name: 'Smart Agriculture',
    description:
      'IoT-based agricultural management system for precision farming, crop monitoring, automated irrigation and supply chain optimisation for modern farming enterprises.',
    link: '/services/software',
    icon: 'agriculture',
    technologies: ['IoT', 'React', 'Python', 'Cloud'],
    category: 'AgriTech',
  },
]

function Software() {
  return (
    <section className="relative overflow-hidden">
      <div className="container relative mx-auto px-4 py-16 lg:py-20">
        <div className="mb-12 text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-brand">Delivery</p>
          <h2 className="mt-3 font-display text-2xl font-bold md:text-4xl">
            Software <span className="text-gradient-brand">Innovations</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">
            Cutting-edge software solutions transforming businesses across industries with modern
            technologies and user-centric design.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {softwareProjects.map((project) => (
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

export default Software
