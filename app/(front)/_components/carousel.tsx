'use client'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import Autoplay from 'embla-carousel-autoplay'

const partners = [
  {
    name: 'Dahua Technology',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Dahua_Technology_logo.svg/2560px-Dahua_Technology_logo.svg.png',
    link: 'https://www.dahuasecurity.com/',
  },
  {
    name: 'Lenovo',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6VkffqvcxY2jI0eKAHdFUlpZWoAcmWBSZ8goKYP73&s',
    link: 'https://www.lenovo.com/',
  },
  {
    name: 'Linux',
    image: 'https://www.freepnglogos.com/uploads/linux-png/linux-logo-linux-17.png',
    link: 'https://www.linux.org/',
  },
  {
    name: 'Hikvision',
    image:
      'https://www.hikvision.com/content/dam/hikvision/uk/marketing-portal/logos/hikvision/Hikvision%20Logo.PNG',
    link: 'https://www.hikvision.com/africa/',
  },
  {
    name: 'Molex',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7kzsWcjMwN15Lj4pgmAFz1lrkG5ok_ESdz45WTXnt&s',
    link: 'https://www.molex.com/en-us/home',
  },
  {
    name: 'Fortinet',
    image: 'https://ccnytech.com/wp-content/uploads/2016/12/Fortinet-logo.png',
    link: 'https://www.fortinet.com/',
  },
  {
    name: 'Sophos',
    image: 'https://upload.wikimedia.org/wikipedia/commons/e/e1/Sophos_logo.png',
    link: 'https://www.sophos.com/en-us',
  },
  {
    name: 'Broadcom Symantec',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Symantec_logo10.svg/2560px-Symantec_logo10.svg.png',
    link: 'https://www.broadcom.com/products/cybersecurity',
  },
  {
    name: 'VMware',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpF9PggA4k79rtJEBQDpi0wX8HQFlgga6PwpoxY6jd&s',
    link: 'https://www.vmware.com/',
  },
]

const PartnerCard = ({
  image,
  link,
  name,
}: {
  image: string
  link: string
  name: string
}) => {
  return (
    <Link
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${name} — opens in a new tab`}
      className="group block h-full rounded-2xl border border-border/60 bg-card/50 p-2 transition-all duration-500 ease-out-expo hover:-translate-y-1 hover:border-brand/40 focus-visible:ring-2 focus-visible:ring-ring"
    >
      <div className="relative aspect-[3/2] w-full overflow-hidden rounded-xl bg-background/40">
        <Image
          src={image}
          alt={`${name} logo`}
          fill
          unoptimized
          className="object-contain p-5 opacity-70 grayscale transition-all duration-500 ease-out-expo group-hover:opacity-100 group-hover:grayscale-0"
        />
      </div>
    </Link>
  )
}

function HomeCarousel() {
  return (
    <section className="border-b border-border/60 bg-background py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="mb-10 text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-brand">
            Our Partners
          </p>
          <h2 className="mt-3 font-display text-2xl font-bold md:text-4xl">
            Technology <span className="text-gradient-brand">Partners</span> &amp; Alliances
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">
            We work with the world&apos;s leading hardware and software vendors so our clients
            receive certified, supported and future-proof solutions.
          </p>
        </div>

        <Carousel
          opts={{
            align: 'start',
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 3000,
            }),
          ]}
          className="w-full"
        >
          <CarouselContent>
            {partners.map((partner) => (
              <CarouselItem
                key={partner.name}
                className="basis-1/2 sm:basis-1/3 lg:basis-1/4"
              >
                <div className="p-1.5">
                  <PartnerCard image={partner.image} link={partner.link} name={partner.name} />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          <div className="mt-8 flex items-center justify-center gap-3">
            <CarouselPrevious className="static border-border/60 bg-card/60 text-foreground backdrop-blur-sm hover:border-brand/40" />
            <CarouselNext className="static border-border/60 bg-card/60 text-foreground backdrop-blur-sm hover:border-brand/40" />
          </div>
        </Carousel>
      </div>
    </section>
  )
}

export default HomeCarousel
