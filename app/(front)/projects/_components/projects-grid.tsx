'use client'

import React, { useMemo, useState } from 'react'
import { networkingProjects } from '../../portfolio/_components/network'
import Projects from '../../portfolio/_components/projects'
import { softwareProjects } from '../../portfolio/_components/software'

type Project = {
  name: string
  description: string
  link: string
  image?: string
  icon?: 'health' | 'agriculture' | 'factory' | 'government'
  technologies: string[]
  category: string
}

const allProjects: Project[] = [...softwareProjects, ...networkingProjects]

export function ProjectsGrid() {
  const categories = useMemo(
    () => ['All', ...Array.from(new Set(allProjects.map((project) => project.category)))],
    []
  )
  const [activeCategory, setActiveCategory] = useState('All')

  const visibleProjects =
    activeCategory === 'All'
      ? allProjects
      : allProjects.filter((project) => project.category === activeCategory)

  return (
    <div>
      <div className="mb-10 flex flex-wrap justify-center gap-2.5" role="group" aria-label="Filter projects by category">
        {categories.map((category) => {
          const isActive = activeCategory === category

          return (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              aria-pressed={isActive}
              className={`rounded-full border px-4 py-2 text-sm font-medium transition-all duration-300 ease-out-expo focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none ${
                isActive
                  ? 'border-brand/50 bg-brand/15 text-brand shadow-[0_0_30px_-14px_var(--glow)]'
                  : 'border-border/60 bg-card/40 text-muted-foreground hover:border-brand/30 hover:text-foreground'
              }`}
            >
              {category}
            </button>
          )
        })}
      </div>

      <p className="mb-6 text-center text-xs uppercase tracking-widest text-muted-foreground">
        {visibleProjects.length} project{visibleProjects.length === 1 ? '' : 's'} on display
      </p>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {visibleProjects.map((project) => (
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
  )
}

export default ProjectsGrid
