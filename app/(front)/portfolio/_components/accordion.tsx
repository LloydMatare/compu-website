import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { BringToFront, Lightbulb, ScanEye, Target, Users } from 'lucide-react'
import React from 'react'
import GsapReveal from '@/components/ui/gsap-reveal'

const items = [
  {
    value: 'item-1',
    icon: Target,
    title: 'Our Mission',
    content:
      'To innovate cutting-edge technologies that meet evolving needs and transform experiences through digital excellence. We are committed to values such as excellence, integrity, sustainability and advancing the IT industry while embracing diversity and fostering innovation.',
  },
  {
    value: 'item-2',
    icon: ScanEye,
    title: 'Our Vision',
    content:
      "To lead Zimbabwe's technology landscape by pioneering innovative solutions in software development, networking and cyber security. We aspire to create a digital-first world where technology enhances human potential, fosters sustainable growth and connects communities for a better tomorrow.",
  },
  {
    value: 'item-3',
    icon: BringToFront,
    title: 'Our Strategy',
    content:
      'Achieving technological leadership through strategic partnerships, continuous R&D and market expansion. We optimise our offerings through digital transformation initiatives, cloud adoption and cyber security frameworks. By embracing AI and emerging technologies, we aim to sustain long-term growth while delivering exceptional value to our clients.',
  },
  {
    value: 'item-4',
    icon: Users,
    title: 'Our Values',
    content:
      'Excellence in delivery, integrity in partnerships, innovation in solutions and sustainability in growth. We believe in collaborative success, continuous learning and making a positive impact on the communities we serve through technology empowerment and digital inclusion.',
  },
  {
    value: 'item-5',
    icon: Lightbulb,
    title: 'Our Innovation',
    content:
      'Driving digital transformation through research-driven solutions, agile methodologies and future-ready technologies. We invest in emerging trends like AI, IoT and blockchain to create solutions that not only solve today’s challenges but also anticipate tomorrow’s opportunities.',
  },
]

export function AccordionTabs() {
  return (
    <section className="relative overflow-hidden border-b border-border/60 bg-surface/30 py-16 lg:py-24">
      <div className="pointer-events-none absolute inset-0 grid-fade opacity-40" aria-hidden="true" />

      <div className="container relative mx-auto px-4">
        <GsapReveal className="mx-auto mb-12 max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-brand">
            Our Core Philosophy
          </p>
          <h2 className="mt-3 font-display text-2xl font-bold md:text-4xl">
            Driving innovation through <span className="text-gradient-brand">purpose</span> and vision
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">
            The mission, vision and strategy that shape how we build, support and grow with our
            clients.
          </p>
        </GsapReveal>

        <GsapReveal className="mx-auto max-w-4xl">
          <Accordion type="single" collapsible className="w-full">
            {items.map((item) => (
              <AccordionItem
                key={item.value}
                value={item.value}
                className="mb-4 overflow-hidden rounded-2xl border border-border/60 bg-card/50 transition-colors duration-300 hover:border-brand/40"
              >
                <AccordionTrigger className="px-5 py-5 hover:bg-card/70 hover:no-underline md:px-7">
                  <span className="flex items-center gap-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-brand/20 bg-brand/10 text-brand">
                      <item.icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <span className="font-display text-base font-bold text-foreground md:text-lg">
                      {item.title}
                    </span>
                  </span>
                </AccordionTrigger>
                <AccordionContent className="px-5 pb-6 text-sm leading-relaxed text-muted-foreground md:px-7 md:text-base">
                  {item.content}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </GsapReveal>
      </div>
    </section>
  )
}
