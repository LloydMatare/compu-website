'use client'

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import React from 'react'
import { Globe, Mail, Server, Smartphone } from 'lucide-react'
import PriceCard, { type PriceListItem } from './priceCard'

const basic: PriceListItem[] = [
  { id: 1, title: 'HTTPS/SSL' },
  { id: 2, title: 'Unlimited Bandwidth' },
  { id: 3, title: 'SD Space - 2.5 GB' },
  { id: 4, title: 'Email Accounts - 5' },
]

const gold: PriceListItem[] = [
  { id: 1, title: 'HTTPS/SSL' },
  { id: 2, title: 'Unlimited Bandwidth' },
  { id: 3, title: 'SD Space - 5 GB' },
  { id: 4, title: 'Email Accounts - 20' },
]

const premium: PriceListItem[] = [
  { id: 1, title: 'HTTPS/SSL' },
  { id: 2, title: 'Unlimited Bandwidth' },
  { id: 3, title: 'SD Space - 10 GB' },
  { id: 4, title: 'Email Accounts - 50' },
]

const custom: PriceListItem[] = [
  { id: 1, title: 'Tailored to your requirements' },
]

const EmailSilver: PriceListItem[] = [
  { id: 1, title: 'HTTPS/SSL' },
  { id: 2, title: 'Unlimited Bandwidth' },
  { id: 3, title: 'SD Space - 10 GB' },
  { id: 4, title: 'Email Accounts - 50' },
]

const EmailGold: PriceListItem[] = [
  { id: 1, title: 'HTTPS/SSL' },
  { id: 2, title: 'Unlimited Bandwidth' },
  { id: 3, title: 'SD Space - 10 GB' },
  { id: 4, title: 'Email Accounts - 50' },
]

const EmailPremium: PriceListItem[] = [
  { id: 1, title: 'HTTPS/SSL' },
  { id: 2, title: 'Unlimited Bandwidth' },
  { id: 3, title: 'SD Space - 10 GB' },
  { id: 4, title: 'Email Accounts - 50' },
]

const pricingGroups: {
  id: string
  label: string
  icon: typeof Globe
  title: string
  description: string
  tiers: {
    title: string
    subtitle: string
    price: string
    lists: PriceListItem[]
    featured?: boolean
  }[]
}[] = [
  {
    id: 'website-design',
    label: 'Website',
    icon: Globe,
    title: 'Website Design Packages',
    description: 'Design and development packages for sites of every size.',
    tiers: [
      {
        title: 'Silver',
        subtitle: 'A focused presence · 1–5 pages',
        price: '150',
        lists: basic,
      },
      {
        title: 'Gold',
        subtitle: 'Room to grow · 1–8 pages',
        price: '250',
        lists: gold,
        featured: true,
      },
      {
        title: 'Platinum',
        subtitle: 'A complete presence · 1–12 pages',
        price: '300',
        lists: premium,
      },
      {
        title: 'Custom',
        subtitle: 'Your vision, your scope',
        price: 'N/A',
        lists: custom,
      },
    ],
  },
  {
    id: 'mobile-apps',
    label: 'Mobile Apps',
    icon: Smartphone,
    title: 'Mobile App Development',
    description:
      'Choose your platform. We scope the features, integrations and delivery together.',
    tiers: [
      {
        title: 'Android',
        subtitle: 'Built for Android devices',
        price: 'N/A',
        lists: [
          { id: 1, title: 'Android application development' },
          { id: 2, title: 'Mobile-first interface design' },
          { id: 3, title: 'Features scoped to your workflow' },
        ],
      },
      {
        title: 'Cross-platform',
        subtitle: 'One product, two platforms',
        price: 'N/A',
        featured: true,
        lists: [
          { id: 1, title: 'iOS and Android applications' },
          { id: 2, title: 'React Native or Flutter' },
          { id: 3, title: 'Shared application codebase' },
        ],
      },
      {
        title: 'iOS',
        subtitle: 'Built for the Apple ecosystem',
        price: 'N/A',
        lists: [
          { id: 1, title: 'iOS application development' },
          { id: 2, title: 'Platform-focused interface design' },
          { id: 3, title: 'Features scoped to your workflow' },
        ],
      },
      {
        title: 'Custom',
        subtitle: 'Complex workflows, considered',
        price: 'N/A',
        lists: [
          { id: 1, title: 'Bespoke application requirements' },
          { id: 2, title: 'Business system integrations' },
          { id: 3, title: 'Scope and delivery consultation' },
        ],
      },
    ],
  },
  {
    id: 'email-hosting',
    label: 'Email Hosting',
    icon: Mail,
    title: 'Email Hosting',
    description: 'Business email hosting with secure webmail and archiving.',
    tiers: [
      {
        title: 'Silver',
        subtitle: 'Business email essentials',
        price: '150',
        lists: EmailSilver,
      },
      {
        title: 'Gold',
        subtitle: 'Email for a growing team',
        price: '250',
        lists: EmailGold,
        featured: true,
      },
      {
        title: 'Platinum',
        subtitle: 'Email for your organisation',
        price: '300',
        lists: EmailPremium,
      },
      {
        title: 'Custom',
        subtitle: 'A setup that fits your team',
        price: 'N/A',
        lists: custom,
      },
    ],
  },
  {
    id: 'website-hosting',
    label: 'Web Hosting',
    icon: Server,
    title: 'Website Hosting',
    description: 'Managed hosting on our Tier 3 data centre platform.',
    tiers: [
      {
        title: 'Silver packages',
        subtitle: '1-5 pages',
        price: '150',
        lists: basic,
      },
      {
        title: 'Gold packages',
        subtitle: '1-8 pages',
        price: '250',
        lists: gold,
      },
      {
        title: 'Platinum packages',
        subtitle: '1-12 pages',
        price: '300',
        lists: premium,
      },
      {
        title: 'Custom packages',
        subtitle: 'User defined',
        price: 'N/A',
        lists: custom,
      },
    ],
  },
]

export function SoftwareTabs({ projects }: { projects: React.ReactNode }) {
  return (
    <Tabs defaultValue="prices" className="w-full">
      <TabsList className="grid h-auto w-full grid-cols-2 rounded-xl border border-border/60 bg-card/50 p-1 backdrop-blur-xl md:w-[420px]">
        <TabsTrigger
          value="prices"
          className="h-10 rounded-lg px-4 text-sm font-semibold data-active:bg-brand/15 data-active:text-brand"
        >
          Software Prices
        </TabsTrigger>
        <TabsTrigger
          value="projects"
          className="h-10 rounded-lg px-4 text-sm font-semibold data-active:bg-brand/15 data-active:text-brand"
        >
          Software Projects
        </TabsTrigger>
      </TabsList>

      <TabsContent value="prices" className="mt-8">
        <Tabs defaultValue="website-design" className="w-full gap-8">
          <TabsList
            aria-label="Pricing service categories"
            className="grid w-full grid-cols-2 gap-2 rounded-2xl border border-border/60 bg-card/50 p-2 group-data-horizontal/tabs:h-auto md:grid-cols-4"
          >
            {pricingGroups.map((group) => (
              <TabsTrigger
                key={group.id}
                value={group.id}
                className="h-auto min-h-12 gap-2 rounded-xl px-3 py-3 text-sm font-semibold data-active:border-brand/30 data-active:bg-brand/10 data-active:text-brand"
              >
                <group.icon className="h-4 w-4" aria-hidden="true" />
                {group.label}
              </TabsTrigger>
            ))}
          </TabsList>
          {pricingGroups.map((group) => (
            <TabsContent key={group.id} value={group.id}>
              <section key={group.id} aria-labelledby={`${group.id}-heading`}>
                <div className="mb-8 flex items-start gap-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-brand/20 bg-brand/10 text-brand">
                    <group.icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div>
                    <h3
                      id={`${group.id}-heading`}
                      className="font-display text-lg font-bold text-foreground md:text-xl"
                    >
                      {group.title}
                    </h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {group.description}
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 items-stretch gap-6 md:grid-cols-2 xl:grid-cols-4">
                  {group.tiers.map((tier) => (
                    <PriceCard
                      key={`${group.id}-${tier.title}`}
                      lists={tier.lists}
                      title={tier.title}
                      subtitle={tier.subtitle}
                      price={tier.price}
                      featured={tier.featured}
                      service={group.title}
                    />
                  ))}
                </div>
              </section>
            </TabsContent>
          ))}
        </Tabs>
        <p className="mt-8 text-center text-xs leading-relaxed text-muted-foreground">
          Prices are listed in USD. Final scope, billing period and any
          additional charges are confirmed with our team before you proceed.
        </p>
      </TabsContent>

      <TabsContent value="projects" className="mt-8">
        {projects}
      </TabsContent>
    </Tabs>
  )
}
