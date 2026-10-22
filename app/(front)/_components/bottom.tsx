import Image from 'next/image'
import Link from 'next/link'
import { Mail, MapPin, Phone } from 'lucide-react'
import { NewsletterForm } from '@/components/newsletter-form'
import { SITE_NAME } from '@/lib/constants/site'

const quickLinks = [
  { name: 'Home', href: '/' },
  { name: 'Projects', href: '/projects' },
  { name: 'Events', href: '/events' },
  { name: 'Updates & News', href: '/blog' },
]

const services = [
  { name: 'Software Services', href: '/services/software' },
  { name: 'Networking Services', href: '/services/networks' },
  { name: 'Cloud Computing', href: '/services/cloud-computing' },
  { name: 'Cyber Security', href: '/services/cyber-security' },
]

const company = [
  { name: 'Log Ticket', href: '/ticket' },
  { name: 'Book Meeting', href: '/booking-meeting' },
  { name: 'Careers', href: '/vacancy' },
  { name: 'Contact Us', href: '/contact' },
]

const socialLinks = [
  {
    name: 'Facebook',
    href: 'https://www.facebook.com/search/top/?q=compulink%20holdings',
    path: 'M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14C17.17 2.1 16.03 2 14.8 2 12.1 2 10.2 3.66 10.2 6.7v2.8H7v4h3.2V22h3.8v-8.5Z',
  },
  {
    name: 'X',
    href: 'https://x.com/compulinkzw',
    path: 'M17.53 3h3.02l-6.6 7.54L21.75 21h-6.06l-4.75-6.21L5.5 21H2.47l7.06-8.07L2.25 3h6.21l4.29 5.67L17.53 3Zm-1.06 16.2h1.67L7.6 4.7H5.8l10.67 14.5Z',
  },
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/compulink_zw/',
    path: 'M12 2c2.72 0 3.06.01 4.12.06 1.07.05 1.8.22 2.43.46.66.26 1.22.6 1.77 1.16.56.55.9 1.11 1.16 1.77.24.63.41 1.36.46 2.43C21.99 8.94 22 9.28 22 12s-.01 3.06-.06 4.12c-.05 1.07-.22 1.8-.46 2.43a4.9 4.9 0 0 1-1.16 1.77 4.9 4.9 0 0 1-1.77 1.16c-.63.24-1.36.41-2.43.46-1.06.05-1.4.06-4.12.06s-3.06-.01-4.12-.06c-1.07-.05-1.8-.22-2.43-.46a4.9 4.9 0 0 1-1.77-1.16 4.9 4.9 0 0 1-1.16-1.77c-.24-.63-.41-1.36-.46-2.43C2.01 15.06 2 14.72 2 12s.01-3.06.06-4.12c.05-1.07.22-1.8.46-2.43.26-.66.6-1.22 1.16-1.77A4.9 4.9 0 0 1 5.45 2.52c.63-.24 1.36-.41 2.43-.46C8.94 2.01 9.28 2 12 2Zm0 3.8a6.2 6.2 0 1 0 0 12.4 6.2 6.2 0 0 0 0-12.4Zm0 2.2a4 4 0 1 1 0 8 4 4 0 0 1 0-8Zm6.4-2.6a1.44 1.44 0 1 1-2.88 0 1.44 1.44 0 0 1 2.88 0Z',
  },
]

function LinkColumn({
  title,
  links,
}: {
  title: string
  links: { name: string; href: string }[]
}) {
  return (
    <div>
      <h3 className="mb-5 text-sm font-semibold uppercase tracking-widest text-foreground">
        {title}
      </h3>
      <ul className="space-y-3">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="text-sm text-muted-foreground transition-colors hover:text-brand"
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

function Footer() {
  return (
    <footer className="border-t border-border/60 bg-surface/40">
      <div className="container mx-auto px-4 py-14 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Link href="/" className="mb-6 inline-block">
              <Image
                src="/images/logo.png"
                alt={SITE_NAME}
                width={200}
                height={60}
                className="h-11 w-auto"
              />
            </Link>
            <p className="mb-6 max-w-sm text-sm leading-relaxed text-muted-foreground">
              Technology is about building solutions in partnership with society. We deliver
              innovative IT solutions that drive business growth and digital transformation.
            </p>

            <div className="space-y-3">
              <a
                href="tel:+263242494407"
                className="flex items-center gap-3 text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                <Phone size={16} className="text-brand" />
                +263 242 494 407
              </a>
              <a
                href="mailto:info@compulink.co.zw"
                className="flex items-center gap-3 text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                <Mail size={16} className="text-brand" />
                info@compulink.co.zw
              </a>
              <p className="flex items-center gap-3 text-sm text-muted-foreground">
                <MapPin size={16} className="text-brand" />
                Harare, Zimbabwe
              </p>
            </div>

            <div className="mt-6 flex items-center gap-2">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-border/60 bg-background/40 text-muted-foreground transition-all hover:-translate-y-0.5 hover:border-brand/50 hover:text-brand"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                    <path d={social.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-5">
            <LinkColumn title="Quick Links" links={quickLinks} />
            <LinkColumn title="Services" links={services} />
            <LinkColumn title="Company" links={company} />
          </div>

          <div className="lg:col-span-3">
            <h3 className="mb-5 text-sm font-semibold uppercase tracking-widest text-foreground">
              Stay Updated
            </h3>
            <p className="mb-4 text-sm text-muted-foreground">
              Subscribe for the latest updates, product launches and industry insights.
            </p>
            <NewsletterForm />
          </div>
        </div>
      </div>

      <div className="border-t border-border/60">
        <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 py-6 md:flex-row">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} {SITE_NAME}. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-xs text-muted-foreground">
            <Link href="/privacy" className="transition-colors hover:text-foreground">
              Privacy Policy
            </Link>
            <Link href="/privacy" className="transition-colors hover:text-foreground">
              Terms of Service
            </Link>
            <Link href="/privacy" className="transition-colors hover:text-foreground">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
