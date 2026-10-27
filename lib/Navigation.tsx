export interface NavLink {
  name: string
  href: string
  subLinks?: NavLink[]
}

export const NAV_LINKS: NavLink[] = [
  {
    name: 'Home',
    href: '/',
  },
  {
    name: 'About',
    href: '/about',
  },
  {
    name: 'Services',
    href: '/services',
    subLinks: [
      { name: 'Cloud Computing', href: '/services/cloud-computing' },
      { name: 'Networking', href: '/services/networks' },
      { name: 'Software Development', href: '/services/software' },
      { name: 'Cyber Security', href: '/services/cyber-security' },
      { name: 'Hardware Solutions', href: '/services/hardware' },
      { name: 'IT Consulting', href: '/services/consulting' },
      { name: 'Technical Support', href: '/services/technical' },
    ],
  },
  {
    name: 'Portfolio',
    href: '/portfolio',
  },
  {
    name: 'Gallery',
    href: '/gallery',
  },
  {
    name: 'Events',
    href: '/events',
  },
  {
    name: 'Blog',
    href: '/blog',
  },
  {
    name: 'Vacancies',
    href: '/vacancy',
  },
  {
    name: 'Contact',
    href: '/contact',
  },
]
