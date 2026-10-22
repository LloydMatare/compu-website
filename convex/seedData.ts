// Static site content extracted from Next.js pages/components for Convex seeding.
// Plain serializable data only — no React elements, no JSX, no icon components.
// Where the source used a Lucide icon component, `icon` is the PascalCase icon name.

// ---------------------------------------------------------------------------
// Services — app/(front)/services/page-client.tsx
// ---------------------------------------------------------------------------

export const mainServices = [
  {
    id: 'cloud',
    icon: 'Cloud',
    title: 'Cloud Computing',
    description: 'Secure, scalable cloud infrastructure and migration services',
    fullDescription:
      'Leverage our Tier 3 Data Centre infrastructure with private cloud platforms, ensuring 99.9% uptime and seamless scalability for your business growth.',
    features: [
      'Private Cloud Platform',
      'Hybrid Cloud Solutions',
      'Cloud Migration',
      'Disaster Recovery',
    ],
  },
  {
    id: 'networking',
    icon: 'Network',
    title: 'Networking',
    description: 'Enterprise-grade network infrastructure and security',
    fullDescription:
      'Comprehensive networking solutions including LAN/WAN setup, wireless networks, and network security with 24/7 monitoring and support.',
    features: [
      'Network Design & Implementation',
      'Wireless Solutions',
      'Network Security',
      '24/7 Monitoring',
    ],
  },
  {
    id: 'software',
    icon: 'Code',
    title: 'Software Development',
    description: 'Custom applications and digital solutions',
    fullDescription:
      'End-to-end software development services including web applications, mobile apps, AI solutions, and enterprise software tailored to your needs.',
    features: [
      'Web & Mobile Development',
      'AI & Data Science',
      'API Integration',
      'Custom Solutions',
    ],
  },
  {
    id: 'cybersecurity',
    icon: 'Shield',
    title: 'Cyber Security',
    description: 'Comprehensive security and protection solutions',
    fullDescription:
      'Protect your business with advanced cybersecurity solutions including threat detection, vulnerability assessment, and security compliance.',
    features: [
      'Threat Detection',
      'Vulnerability Assessment',
      'Security Compliance',
      'Incident Response',
    ],
  },
  {
    id: 'hardware',
    icon: 'Server',
    title: 'Hardware Solutions',
    description: 'Enterprise hardware and infrastructure setup',
    fullDescription:
      'Complete hardware solutions including server setup, storage solutions, and IT infrastructure implementation for optimal performance.',
    features: ['Server Setup', 'Storage Solutions', 'IT Infrastructure', 'Hardware Maintenance'],
  },
  {
    id: 'consulting',
    icon: 'Users',
    title: 'IT Consulting',
    description: 'Strategic technology advisory services',
    fullDescription:
      'Expert IT consulting to help you make informed technology decisions, optimize processes, and drive digital transformation.',
    features: [
      'Technology Strategy',
      'Digital Transformation',
      'Process Optimization',
      'IT Audits',
    ],
  },
]

export const additionalServices = [
  {
    icon: 'Smartphone',
    title: 'Mobile Solutions',
    description: 'iOS and Android app development',
    link: '/services/mobile',
  },
  {
    icon: 'Database',
    title: 'Data Analytics',
    description: 'Business intelligence and data insights',
    link: '/services/data-analytics',
  },
  {
    icon: 'BarChart3',
    title: 'Digital Marketing',
    description: 'Online presence and growth strategies',
    link: '/services/digital-marketing',
  },
  {
    icon: 'Lock',
    title: 'Managed IT',
    description: '24/7 IT support and management',
    link: '/services/managed-it',
  },
]

// ---------------------------------------------------------------------------
// Services — app/(front)/services/cloud-computing/page.tsx
// ---------------------------------------------------------------------------

export const cloudServices = [
  {
    icon: 'Cloud',
    title: 'Cloud Migration',
    description: 'Seamless transition to cloud infrastructure with minimal downtime',
    features: ['Assessment & Planning', 'Data Migration', 'Application Modernization'],
  },
  {
    icon: 'Server',
    title: 'Private Cloud',
    description: 'Dedicated cloud infrastructure for enhanced security and control',
    features: ['Tier 3 Data Centre', 'Dedicated Resources', 'Custom Configuration'],
  },
  {
    icon: 'Database',
    title: 'Cloud Storage',
    description: 'Scalable and secure data storage solutions',
    features: ['Auto-scaling', 'Data Redundancy', 'Backup & Recovery'],
  },
]

// ---------------------------------------------------------------------------
// Services — app/(front)/services/consulting/page.tsx
// ---------------------------------------------------------------------------

export const consultingServices = [
  {
    icon: 'Target',
    title: 'IT Strategy',
    description: 'Strategic technology planning and roadmap development',
    features: ['Digital Transformation', 'Technology Assessment', 'Roadmap Planning'],
  },
  {
    icon: 'BarChart3',
    title: 'Process Optimization',
    description: 'Streamline operations with technology-driven solutions',
    features: ['Workflow Analysis', 'Automation Strategies', 'Efficiency Improvement'],
  },
  {
    icon: 'Lightbulb',
    title: 'Innovation Advisory',
    description: 'Leverage emerging technologies for competitive advantage',
    features: ['AI Integration', 'Cloud Strategy', 'Digital Innovation'],
  },
]

// ---------------------------------------------------------------------------
// Services — app/(front)/services/cyber-security/page.tsx
// ---------------------------------------------------------------------------

export const securityServices = [
  {
    icon: 'Shield',
    title: 'Threat Protection',
    description: 'Advanced threat detection and prevention systems',
    features: ['Real-time Monitoring', 'Malware Protection', 'Intrusion Detection'],
  },
  {
    icon: 'Lock',
    title: 'Data Encryption',
    description: 'End-to-end encryption for sensitive data protection',
    features: ['SSL/TLS Certificates', 'Database Encryption', 'File-level Security'],
  },
  {
    icon: 'Eye',
    title: 'Security Monitoring',
    description: '24/7 security operations center monitoring',
    features: ['SIEM Solutions', 'Log Analysis', 'Incident Response'],
  },
]

// ---------------------------------------------------------------------------
// Services — app/(front)/services/networks/page.tsx
// ---------------------------------------------------------------------------

export const networkServices = [
  {
    icon: 'Wifi',
    title: 'Wireless Networks',
    description: 'High-performance wireless infrastructure',
    features: ['Wi-Fi 6/6E', 'Mesh Networks', 'Guest Access'],
  },
  {
    icon: 'Server',
    title: 'Network Infrastructure',
    description: 'Robust wired network solutions',
    features: ['Structured Cabling', 'Switching', 'Routing'],
  },
  {
    icon: 'Shield',
    title: 'Network Security',
    description: 'Comprehensive network protection',
    features: ['Firewalls', 'VPN', 'Access Control'],
  },
]

// ---------------------------------------------------------------------------
// Services — app/(front)/services/software/page.tsx
// ---------------------------------------------------------------------------

export const softwareServices = [
  {
    icon: 'Globe',
    title: 'Web Development',
    description: 'Modern web applications and platforms',
    features: ['React/Next.js', 'Responsive Design', 'Progressive Web Apps'],
  },
  {
    icon: 'Smartphone',
    title: 'Mobile Apps',
    description: 'Native and cross-platform mobile solutions',
    features: ['iOS & Android', 'React Native', 'Flutter'],
  },
  {
    icon: 'Database',
    title: 'Enterprise Software',
    description: 'Custom business applications and systems',
    features: ['CRM/ERP Systems', 'Workflow Automation', 'Integration APIs'],
  },
]

// ---------------------------------------------------------------------------
// Services — app/(front)/services/hardware/page-client.tsx
// ---------------------------------------------------------------------------

export const hardwareCategories = [
  {
    icon: 'Server',
    title: 'Servers & Storage',
    description: 'Enterprise servers, NAS, SAN, and storage solutions',
    features: ['Rack Servers', 'Tower Servers', 'Storage Arrays', 'Backup Systems'],
    image: '/images/servers.jpg',
  },
  {
    icon: 'Laptop',
    title: 'Workstations & PCs',
    description: 'High-performance computers for professionals and businesses',
    features: ['Desktop Computers', 'All-in-One PCs', 'Thin Clients', 'Gaming Rigs'],
    image: '/images/workstations.jpg',
  },
  {
    icon: 'HardDrive',
    title: 'Storage Solutions',
    description: 'Internal and external storage devices for all needs',
    features: ['SSD/HDD', 'External Drives', 'RAID Systems', 'Cloud Storage'],
    image: '/images/storage.jpg',
  },
  {
    icon: 'Monitor',
    title: 'Displays & Monitors',
    description: 'Professional displays for various applications',
    features: ['4K Monitors', 'UltraWide Screens', 'Digital Signage', 'Video Walls'],
    image: '/images/displays.jpg',
  },
  {
    icon: 'Printer',
    title: 'Printing Solutions',
    description: 'Network printers and multifunction devices',
    features: ['Laser Printers', 'Inkjet Printers', 'Multifunction', 'Plotters'],
    image: '/images/printers.jpg',
  },
  {
    icon: 'Network',
    title: 'Networking Equipment',
    description: 'Routers, switches, and wireless infrastructure',
    features: ['Enterprise Routers', 'Switches', 'Access Points', 'Firewalls'],
    image: '/images/networking-equipment.jpg',
  },
  {
    icon: 'Smartphone',
    title: 'Mobile Devices',
    description: 'Smartphones, tablets, and mobile accessories',
    features: ['Business Phones', 'Tablets', 'Mobile Accessories', 'Rugged Devices'],
    image: '/images/mobile-devices.jpg',
  },
  {
    icon: 'Cpu',
    title: 'Components & Upgrades',
    description: 'Internal components and upgrade solutions',
    features: ['Processors', 'Memory', 'Graphics Cards', 'Motherboards'],
    image: '/images/components.jpg',
  },
  {
    icon: 'Camera',
    title: 'Peripherals & Accessories',
    description: 'Essential accessories for complete setups',
    features: ['Keyboards & Mice', 'Webcams', 'Headsets', 'Docking Stations'],
    image: '/images/peripherals.jpg',
  },
]

export const brands = [
  'Dell',
  'HP',
  'Lenovo',
  'Cisco',
  'IBM',
  'Apple',
  'Samsung',
  'Epson',
  'Canon',
  'APC',
  'Intel',
  'AMD',
]

// ---------------------------------------------------------------------------
// Services — app/(front)/services/technical/page-client.tsx
// ---------------------------------------------------------------------------

export const supportServices = [
  {
    icon: 'Headphones',
    title: 'Help Desk Support',
    description: '24/7 technical assistance for your users and staff',
  },
  {
    icon: 'Clock',
    title: 'Quick Response',
    description: 'Rapid incident response and problem resolution',
  },
  {
    icon: 'Users',
    title: 'User Training',
    description: 'Comprehensive training for your team on new systems',
  },
  {
    icon: 'Wrench',
    title: 'Hardware Maintenance',
    description: 'Regular maintenance and repair of IT equipment',
  },
  {
    icon: 'Monitor',
    title: 'Software Support',
    description: 'Installation, configuration, and troubleshooting',
  },
  {
    icon: 'Server',
    title: 'System Monitoring',
    description: 'Proactive monitoring and preventive maintenance',
  },
]

// ---------------------------------------------------------------------------
// Software tabs — app/(front)/services/software/_components/softwareTabs.tsx
// ---------------------------------------------------------------------------

export const lists = [
  {
    id: 1,
    title: 'Details',
  },
  {
    id: 2,
    title: 'Details 2',
  },
  {
    id: 3,
    title: 'Details 3',
  },
  {
    id: 4,
    title: 'Details 4',
  },
]

export const basic = [
  {
    id: 1,
    title: 'HTTPS/SSL',
  },
  {
    id: 2,
    title: 'Unlimited Bandwidth',
  },
  {
    id: 3,
    title: 'SD Space - 2.5 GB',
  },
  {
    id: 4,
    title: 'Email Accounts - 5',
  },
]

export const gold = [
  {
    id: 1,
    title: 'HTTPS/SSL',
  },
  {
    id: 2,
    title: 'Unlimited Bandwidth',
  },
  {
    id: 3,
    title: 'SD Space - 5 GB',
  },
  {
    id: 4,
    title: 'Email Accounts - 20',
  },
]

export const premium = [
  {
    id: 1,
    title: 'HTTPS/SSL',
  },
  {
    id: 2,
    title: 'Unlimited Bandwidth',
  },
  {
    id: 3,
    title: 'SD Space - 10 GB',
  },
  {
    id: 4,
    title: 'Email Accounts - 50',
  },
]

export const custom = [
  {
    id: 1,
    title: 'User customized',
  },
]

export const EmailSilver = [
  {
    id: 1,
    title: 'HTTPS/SSL',
  },
  {
    id: 2,
    title: 'Unlimited Bandwidth',
  },
  {
    id: 3,
    title: 'SD Space - 10 GB',
  },
  {
    id: 4,
    title: 'Email Accounts - 50',
  },
]

export const EmailGold = [
  {
    id: 1,
    title: 'HTTPS/SSL',
  },
  {
    id: 2,
    title: 'Unlimited Bandwidth',
  },
  {
    id: 3,
    title: 'SD Space - 10 GB',
  },
  {
    id: 4,
    title: 'Email Accounts - 50',
  },
]

export const EmailPremium = [
  {
    id: 1,
    title: 'HTTPS/SSL',
  },
  {
    id: 2,
    title: 'Unlimited Bandwidth',
  },
  {
    id: 3,
    title: 'SD Space - 10 GB',
  },
  {
    id: 4,
    title: 'Email Accounts - 50',
  },
]

// ---------------------------------------------------------------------------
// Portfolio — app/(front)/portfolio/_components/accordion.tsx
// ---------------------------------------------------------------------------

export const items = [
  {
    value: 'item-1',
    icon: 'Target',
    title: 'Our Mission',
    content:
      'To innovate cutting-edge technologies that meet evolving needs and transform experiences through digital excellence. We are committed to values such as excellence, integrity, sustainability, and advancing the IT industry while embracing diversity and fostering innovation.',
  },
  {
    value: 'item-2',
    icon: 'ScanEye',
    title: 'Our Vision',
    content:
      "To lead Zimbabwe's technology landscape by pioneering innovative solutions in software development, networking, and cybersecurity. We aspire to create a digital-first world where technology enhances human potential, fosters sustainable growth, and connects communities for a better tomorrow.",
  },
  {
    value: 'item-3',
    icon: 'BringToFront',
    title: 'Our Strategy',
    content:
      'Achieving technological leadership through strategic partnerships, continuous R&D, and market expansion. We optimize our offerings through digital transformation initiatives, cloud adoption, and cybersecurity frameworks. By embracing AI and emerging technologies, we aim to sustain long-term growth while delivering exceptional value to our clients.',
  },
  {
    value: 'item-4',
    icon: 'Users',
    title: 'Our Values',
    content:
      'Excellence in delivery, integrity in partnerships, innovation in solutions, and sustainability in growth. We believe in collaborative success, continuous learning, and making a positive impact on the communities we serve through technology empowerment and digital inclusion.',
  },
  {
    value: 'item-5',
    icon: 'Lightbulb',
    title: 'Our Innovation',
    content:
      "Driving digital transformation through research-driven solutions, agile methodologies, and future-ready technologies. We invest in emerging trends like AI, IoT, and blockchain to create solutions that not only solve today's challenges but also anticipate tomorrow's opportunities.",
  },
]

// ---------------------------------------------------------------------------
// Portfolio — app/(front)/portfolio/_components/clients.tsx
// ---------------------------------------------------------------------------

export const clients = [
  { name: 'CABS', logo: '/images/cabs.png' },
  { name: 'Old Mutual', logo: '/images/oldMutual.jpeg' },
  { name: 'University of Zimbabwe', logo: '/images/uz.png' },
  { name: 'Government', logo: '/images/govt.png' },
  { name: 'Healthcare', logo: '/images/pare.png' },
  { name: 'Potraz', logo: '/images/potraz.png' },
  { name: 'Econet', logo: '/images/econet.png' },
]

// ---------------------------------------------------------------------------
// Portfolio — app/(front)/portfolio/_components/network.tsx
// ---------------------------------------------------------------------------

export const networkingProjects = [
  {
    name: 'CABS Marondera Infrastructure',
    description:
      'Complete network infrastructure overhaul for CABS Marondera, featuring secure LAN/WAN setup, enterprise-grade firewalls, and seamless connectivity across multiple branches with 99.9% uptime guarantee.',
    link: '/services/networks',
    image: '/images/cabs.png',
    technologies: ['Cisco', 'Fortinet', 'SD-WAN', 'VoIP'],
    category: 'Banking & Finance',
  },
  {
    name: 'Old Mutual Network Modernization',
    description:
      'Enterprise network modernization project for Old Mutual Zimbabwe, implementing advanced security protocols, cloud connectivity, and robust disaster recovery solutions for financial data protection.',
    link: '/services/networks',
    image: '/images/oldMutual.jpeg',
    technologies: ['Juniper', 'Palo Alto', 'Azure', 'MPLS'],
    category: 'Financial Services',
  },
  {
    name: 'University of Zimbabwe Campus Network',
    description:
      'High-density campus network supporting 25,000+ concurrent users with seamless roaming, research network segregation, and high-speed internet access for academic excellence.',
    link: '/services/networks',
    image: '/images/uz.jpg',
    technologies: ['Aruba', 'HP', 'Fiber Optics', 'Wifi 6'],
    category: 'Education',
  },
  {
    name: 'Parirenyatwa Hospital Medical Network',
    description:
      'Critical healthcare network infrastructure ensuring reliable connectivity for medical devices, patient records systems, and telemedicine services with HIPAA compliance.',
    link: '/services/networks',
    image: '/images/hospital.jpg',
    technologies: ['Medical IoT', 'VLAN', 'QoS', 'Redundancy'],
    category: 'Healthcare',
  },
  {
    name: 'Industrial IoT Manufacturing Network',
    description:
      'Smart factory network implementation for manufacturing plant, enabling real-time equipment monitoring, predictive maintenance, and production optimization through industrial IoT.',
    link: '/services/networks',
    image: '/images/manufacturing.jpg',
    technologies: ['Industrial Ethernet', 'SCADA', 'PLC', '5G'],
    category: 'Manufacturing',
  },
  {
    name: 'Government Data Center',
    description:
      'Secure government data center network with multi-layer security, data sovereignty compliance, and high-availability architecture for critical national infrastructure.',
    link: '/services/networks',
    image: '/images/government.jpg',
    technologies: ['Cisco ACI', 'F5 Load Balancers', 'ISMS', 'Tier 3'],
    category: 'Government',
  },
]

// ---------------------------------------------------------------------------
// Portfolio — app/(front)/portfolio/_components/software.tsx
// ---------------------------------------------------------------------------

export const softwareProjects = [
  {
    name: 'CoinSwap',
    description:
      'Revolutionary digital currency exchange platform addressing cash flow challenges and financial inclusion. Features real-time trading, secure wallet integration, and multi-currency support with advanced fraud detection systems.',
    link: '/services/software',
    image: '/images/coinswap.jpeg',
    technologies: ['React', 'Node.js', 'Blockchain', 'MongoDB'],
    category: 'FinTech',
  },
  {
    name: 'E-Store Platform',
    description:
      'Comprehensive e-commerce solution supporting B2B, B2C, and C2C transactions. Includes inventory management, AI-powered recommendations, secure payment gateways, and omnichannel retail capabilities.',
    link: '/services/software',
    image: '/images/ecommerce.jpeg',
    technologies: ['Next.js', 'Stripe', 'Redis', 'AWS'],
    category: 'E-Commerce',
  },
  {
    name: 'E-Learning Suite',
    description:
      'Advanced learning management system with virtual classrooms, AI-driven content personalization, progress analytics, and collaborative tools for educational institutions and corporate training.',
    link: '/services/software',
    image: '/images/e-learn.jpeg',
    technologies: ['Vue.js', 'Python', 'WebRTC', 'PostgreSQL'],
    category: 'EdTech',
  },
  {
    name: 'HR Intelligence Platform',
    description:
      'Digital employee experience platform enhancing collaboration, communication, and performance management. Features include automated workflows, talent analytics, and integrated performance tracking.',
    link: '/services/software',
    image: '/images/crm.jpeg',
    technologies: ['Angular', 'Spring Boot', 'AI/ML', 'MySQL'],
    category: 'HR Tech',
  },
  {
    name: 'Healthcare Management',
    description:
      'Integrated healthcare platform for patient management, electronic health records, telemedicine, and medical billing. Ensures HIPAA compliance and seamless healthcare delivery.',
    link: '/services/software',
    image: '/images/healthcare.jpg',
    technologies: ['React Native', 'Django', 'HL7', 'Firebase'],
    category: 'HealthTech',
  },
  {
    name: 'Smart Agriculture',
    description:
      'IoT-based agricultural management system for precision farming, crop monitoring, automated irrigation, and supply chain optimization for modern farming enterprises.',
    link: '/services/software',
    image: '/images/agriculture.jpg',
    technologies: ['IoT', 'React', 'Python', 'Cloud'],
    category: 'AgriTech',
  },
]

// ---------------------------------------------------------------------------
// Portfolio — app/(front)/portfolio/_components/services.tsx
// ---------------------------------------------------------------------------

export const features = [
  'Innovative Software Development & AI Solutions',
  'Advanced Hardware Infrastructure Setup',
  'Comprehensive Network Architecture & Security',
  'Enterprise Cyber Security Frameworks',
  'Cloud Migration & Optimization',
  'Digital Transformation Consulting',
  'IT Support & Managed Services',
  'Custom Business Process Automation',
]

// ---------------------------------------------------------------------------
// Portfolio — app/(front)/portfolio/_components/stats.tsx
// Source field `number` renamed to `value`.
// ---------------------------------------------------------------------------

export const stats: { value: string; label: string }[] = [
  { value: '30+', label: 'Years Experience' },
  { value: '500+', label: 'Projects Completed' },
  { value: '100+', label: 'Happy Clients' },
  { value: '50+', label: 'Team Experts' },
  { value: '24/7', label: 'Support' },
  { value: '99%', label: 'Client Retention' },
]

// ---------------------------------------------------------------------------
// Ticket — app/(front)/ticket/page-client.tsx
// ---------------------------------------------------------------------------

export const priorities = [
  { value: 'low', label: 'Low', color: 'bg-green-100 text-green-800' },
  { value: 'medium', label: 'Medium', color: 'bg-yellow-100 text-yellow-800' },
  { value: 'high', label: 'High', color: 'bg-orange-100 text-orange-800' },
  { value: 'urgent', label: 'Urgent', color: 'bg-red-100 text-red-800' },
]

export const categories = [
  'Technical Support',
  'Hardware Issue',
  'Software Problem',
  'Network Connectivity',
  'Security Concern',
  'Account Access',
  'Billing Inquiry',
  'General Question',
]

export const targetGroups = [
  'Individual Customer',
  'Small Business',
  'Enterprise Client',
  'Government Agency',
  'Educational Institution',
]

// ---------------------------------------------------------------------------
// Gallery — app/(front)/gallery/_components/gallery-card.tsx
// Source field `id` dropped; fields ordered per seed shape.
// ---------------------------------------------------------------------------

export const galleryImages = [
  {
    title: 'AI Development',
    src: '/images/AI.jpg',
    alt: 'AI Solutions',
    category: 'Software',
    description: 'Our artificial intelligence solutions transforming business operations',
  },
  {
    title: 'Hardware Infrastructure',
    src: '/images/hardware.jpg',
    alt: 'Hardware Solutions',
    category: 'Hardware',
    description: 'Enterprise-grade hardware setup for optimal performance',
  },
  {
    title: 'Custom Software',
    src: '/images/software.webp',
    alt: 'Software Development',
    category: 'Software',
    description: 'Tailored software solutions for unique business needs',
  },
  {
    title: 'Web Development',
    src: '/images/web.webp',
    alt: 'Web Solutions',
    category: 'Software',
    description: 'Modern web applications with cutting-edge technology',
  },
  {
    title: 'Technical Support',
    src: '/images/support.webp',
    alt: 'IT Support',
    category: 'Services',
    description: '24/7 technical support and maintenance services',
  },
  {
    title: 'Communication Systems',
    src: '/images/comm2.jpg',
    alt: 'Communication',
    category: 'Hardware',
    description: 'Advanced communication infrastructure solutions',
  },
]

// ---------------------------------------------------------------------------
// Gallery — app/(front)/gallery/_components/video-tabs.tsx
// Source fields: id dropped, desc -> description, video -> videoUrl.
// ---------------------------------------------------------------------------

export const videos = [
  {
    title: 'Compulink 31st Annivewsary',
    description: 'Compulink 31st Annivewsary.',
    videoUrl: '/harare.mp4',
    category: 'Events',
  },
]

// ---------------------------------------------------------------------------
// Vacancy — app/(front)/vacancy/_components/vacancyTable.tsx
// Source had no description/qualification/category/slug — added per seed shape.
// ---------------------------------------------------------------------------

export const vacancies = [
  {
    position: 'Software Developer',
    status: 'Short term contract',
    duration: '3 Months',
    imageUrl: '/images/software.png',
    description:
      'Develop and maintain custom software solutions for our enterprise clients across web and mobile platforms. Work closely with the product team to deliver high-quality, scalable applications. Strong problem-solving skills and a passion for clean code are essential.',
    qualification:
      'Degree in Computer Science or related field, with proven experience in modern web technologies such as React, Next.js, and Node.js.',
    category: 'IT',
    slug: 'software-developer',
  },
  {
    position: 'Accounts Intern',
    status: 'Internship',
    duration: '1 year',
    imageUrl: '/images/accountsIntern.png',
    description:
      'Gain hands-on experience in financial accounting, bookkeeping, and reporting within a busy ICT company. You will support the finance team with daily reconciliations, invoice processing, and month-end preparations. Ideal for a recent graduate looking to kick-start their accounting career.',
    qualification:
      'Degree or diploma in Accounting, Finance, or a related discipline. Familiarity with accounting software is an advantage.',
    category: 'IT',
    slug: 'accounts-intern',
  },
  {
    position: 'Sales & Marketing',
    status: 'Internship',
    duration: '1 years',
    imageUrl: '/images/salesM.png',
    description:
      'Support the sales and marketing team in generating leads, managing client relationships, and executing digital campaigns. You will help create content, track campaign performance, and assist at events and client meetings. A great opportunity for a motivated graduate eager to build a career in B2B technology sales.',
    qualification:
      'Degree or diploma in Marketing, Sales, Business Administration, or a related field. Excellent communication skills required.',
    category: 'IT',
    slug: 'sales-marketing',
  },
  {
    position: 'Accounts Clerk',
    status: 'Graduate Trainee',
    duration: '2 years',
    imageUrl: '/images/accountClerk.png',
    description:
      'Process invoices, manage accounts payable and receivable, and assist with preparation of financial statements under the guidance of senior accountants. This graduate trainee role offers structured exposure across the full accounting cycle. Attention to detail and strong organisational skills are a must.',
    qualification:
      'Degree or diploma in Accounting or Finance. Part-qualifications such as ACCA or CIMA progress will be viewed favourably.',
    category: 'IT',
    slug: 'accounts-clerk',
  },
]

// ---------------------------------------------------------------------------
// Blog — app/(front)/blog/page-client.tsx
// Source shape: id/createdAt/image{url}/comments dropped or transformed.
// slug derived from title; excerpt derived from first sentence of content;
// author taken from the rendered byline; featured marks the first post
// (rendered as the featured card in the source).
// ---------------------------------------------------------------------------

export const mockPosts = [
  {
    slug: 'the-future-of-cloud-computing-in-zimbabwe',
    title: 'The Future of Cloud Computing in Zimbabwe',
    excerpt:
      'Exploring how cloud technology is transforming businesses across Zimbabwe and the opportunities it presents for digital transformation in various sectors including banking, healthcare, and education.',
    content:
      'Exploring how cloud technology is transforming businesses across Zimbabwe and the opportunities it presents for digital transformation in various sectors including banking, healthcare, and education.',
    coverImage: '/images/cloud-services.jpg',
    category: 'Technology',
    readTime: '5 min read',
    author: 'Compulink Team',
    published: true,
    featured: true,
    likes: 24,
    views: 156,
  },
  {
    slug: 'cybersecurity-trends-for-2024',
    title: 'Cybersecurity Trends for 2024',
    excerpt:
      'An in-depth look at the emerging cybersecurity threats and the latest protection strategies that businesses should implement to safeguard their digital assets.',
    content:
      'An in-depth look at the emerging cybersecurity threats and the latest protection strategies that businesses should implement to safeguard their digital assets.',
    coverImage: '/images/cybersecurity-services.jpg',
    category: 'Security',
    readTime: '7 min read',
    author: 'Compulink Team',
    published: true,
    featured: false,
    likes: 18,
    views: 203,
  },
  {
    slug: 'digital-transformation-success-stories',
    title: 'Digital Transformation Success Stories',
    excerpt:
      'Case studies of successful digital transformation projects we have implemented for clients across different industries in Zimbabwe.',
    content:
      'Case studies of successful digital transformation projects we have implemented for clients across different industries in Zimbabwe.',
    coverImage: '/images/software-dev.jpg',
    category: 'Business',
    readTime: '6 min read',
    author: 'Compulink Team',
    published: true,
    featured: false,
    likes: 32,
    views: 189,
  },
]

// ---------------------------------------------------------------------------
// Footer — app/(front)/_components/bottom.tsx
// socialLinks icon components dropped; color normalized to a simple token
// (source values were 'hover:bg-blue-600' | 'hover:bg-blue-400' | 'hover:bg-pink-600').
// ---------------------------------------------------------------------------

export const footerQuickLinks = [
  { name: 'Home', href: '/' },
  { name: 'Projects', href: '/projects' },
  { name: 'Events', href: '/events' },
  { name: 'Updates & News', href: '/blog' },
]

export const footerServices = [
  { name: 'Software Services', href: '/services/software' },
  { name: 'Networking Services', href: '/services/networks' },
  { name: 'Cloud Computing', href: '/services/cloud-computing' },
  { name: 'Cyber Security', href: '/services/cyber-security' },
]

export const footerCompany = [
  { name: 'Log Ticket', href: '/ticket' },
  { name: 'Book Meeting', href: '/booking-meeting' },
  { name: 'Careers', href: '/vacancy' },
  { name: 'Contact Us', href: '/contact' },
]

export const footerSocial = [
  {
    name: 'Facebook',
    href: 'https://www.facebook.com/search/top/?q=compulink%20holdings',
    color: 'blue',
  },
  {
    name: 'Twitter',
    href: 'https://x.com/compulinkzw',
    color: 'sky',
  },
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/compulink_zw/',
    color: 'pink',
  },
]

// ---------------------------------------------------------------------------
// Hero — app/(front)/_components/hero.tsx
// ---------------------------------------------------------------------------

export const heroStats: { value: string; label: string }[] = [
  { value: '30+', label: 'Years Experience' },
  { value: '500+', label: 'Projects Completed' },
  { value: '99%', label: 'Client Satisfaction' },
  { value: '24/7', label: 'Support Available' },
]

export const heroIndustries: string[] = [
  'CABS',
  'Old Mutual',
  'Government',
  'Healthcare',
  'Education',
  'Finance',
]

export const heroCopy = {
  title: 'Building digital products & brands',
  subtitle: 'Innovation & Excellence',
  description:
    'Here at Compulink we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.',
  primaryCta: 'Get Started',
  secondaryCta: 'Speak to Sales',
}

// ---------------------------------------------------------------------------
// Testimonies — lib/constants/data.ts
// Source: { id, description, name, type } -> { quote, name, role, company, order, published }.
// `type` split on the first comma into role + company.
// ---------------------------------------------------------------------------

export const testimonies = [
  {
    quote:
      'Compulink transformed our network infrastructure. Their team delivered a secure, high-availability setup ahead of schedule and supported us through every stage of the rollout.',
    name: 'Tendai Moyo',
    role: 'Head of IT',
    company: 'Old Mutual Zimbabwe',
    order: 0,
    published: true,
  },
  {
    quote:
      'The migration to their cloud platform was seamless. Downtime was practically zero and we have not had a single critical incident since handover.',
    name: 'Rudo Chari',
    role: 'Operations Director',
    company: 'CABS',
    order: 1,
    published: true,
  },
  {
    quote:
      'Their cyber security assessment uncovered risks our internal team had missed. The remediation plan was practical, clearly explained and delivered on time.',
    name: 'Brian Ncube',
    role: 'ICT Manager',
    company: 'Government of Zimbabwe',
    order: 2,
    published: true,
  },
  {
    quote:
      'We have built our entire in-house learning platform with Compulink. Their engineers are genuinely expert and they treat our business like their own.',
    name: 'Grace Mutendi',
    role: 'Programme Coordinator',
    company: 'University of Zimbabwe',
    order: 3,
    published: true,
  },
]

// ---------------------------------------------------------------------------
// Products (catalog seed) — matches convex/schema.ts `products` table and
// PRODUCT_CATEGORIES in lib/products/constants.ts. All image paths verified
// to exist under public/images/.
// ---------------------------------------------------------------------------

export const products = [
  {
    slug: 'dell-latitude-5440-business-laptop',
    title: 'Dell Latitude 5440 Business Laptop',
    brand: 'Dell',
    sku: 'DLT-5440-I7-16',
    category: 'laptops',
    categoryLabel: 'Laptops',
    shortDescription:
      '14-inch business laptop with 13th Gen Intel Core i7, built for secure, all-day productivity.',
    description:
      'The Dell Latitude 5440 combines enterprise-grade security, robust performance, and a lightweight design for professionals on the move. Powered by a 13th Gen Intel Core i7 processor with 16GB RAM and a fast 512GB NVMe SSD, it handles demanding workloads while Dell Optimiser keeps everything responsive.',
    price: 1299,
    compareAtPrice: 1499,
    inStock: true,
    imageUrl: '/images/computer.jpg',
    gallery: ['/images/computer.jpg', '/images/computer2.jpg'],
    features: [
      '13th Gen Intel Core i7-1355U',
      '16GB DDR5 RAM',
      '512GB NVMe SSD',
      '14" FHD (1920x1080) anti-glare display',
      'Windows 11 Pro with enterprise security',
      'Backlit keyboard and fingerprint reader',
    ],
    specs: [
      { label: 'Processor', value: 'Intel Core i7-1355U (10 cores, up to 5.0GHz)' },
      { label: 'Memory', value: '16GB DDR5 5200MHz' },
      { label: 'Storage', value: '512GB M.2 NVMe SSD' },
      { label: 'Display', value: '14" FHD 1920x1080 anti-glare' },
      { label: 'Operating System', value: 'Windows 11 Pro' },
      { label: 'Warranty', value: '3-year onsite support' },
    ],
    published: true,
  },
  {
    slug: 'lenovo-thinkpad-x1-carbon-gen-11',
    title: 'Lenovo ThinkPad X1 Carbon Gen 11',
    brand: 'Lenovo',
    sku: 'TPX1-C11-14',
    category: 'laptops',
    categoryLabel: 'Laptops',
    shortDescription:
      'Ultra-light 14-inch carbon-fibre laptop with military-grade durability and a stunning 2.8K OLED display.',
    description:
      'The ThinkPad X1 Carbon Gen 11 is the flagship ultraportable for executives and engineers. At just 1.12kg it packs a 13th Gen Intel Core processor, up to 32GB of LPDDR5 memory, and a vivid 2.8K OLED display, all wrapped in a carbon-fibre chassis tested against MIL-STD-810H standards.',
    price: 1899,
    compareAtPrice: 2099,
    inStock: true,
    imageUrl: '/images/computer2.jpg',
    gallery: ['/images/computer2.jpg', '/images/computer.jpg'],
    features: [
      '13th Gen Intel Core i7 vPro',
      '16GB LPDDR5 RAM',
      '1TB PCIe Gen4 SSD',
      '14" 2.8K OLED display',
      'MIL-STD-810H certified carbon-fibre chassis',
      'Dolby Atmos quad speakers',
    ],
    specs: [
      { label: 'Processor', value: 'Intel Core i7-1365U vPro (10 cores)' },
      { label: 'Memory', value: '16GB LPDDR5 6400MHz (soldered)' },
      { label: 'Storage', value: '1TB M.2 PCIe Gen4 NVMe SSD' },
      { label: 'Display', value: '14" 2.8K OLED 2880x1800' },
      { label: 'Weight', value: '1.12 kg' },
      { label: 'Warranty', value: '3-year Premier Support' },
    ],
    published: true,
  },
  {
    slug: 'hp-elitedesk-800-g9-sff-desktop',
    title: 'HP EliteDesk 800 G9 Small Form Factor',
    brand: 'HP',
    sku: 'HPE-800G9-SFF',
    category: 'desktops',
    categoryLabel: 'Desktops',
    shortDescription:
      'Compact enterprise desktop engineered for manageability, security, and 24/7 uptime.',
    description:
      'The HP EliteDesk 800 G9 SFF delivers desktop-class performance in a chassis half the size of a traditional tower. With Intel vPro manageability, HP Wolf Security, and tool-less serviceability, it is the ideal fleet machine for modern offices and branch deployments.',
    price: 999,
    compareAtPrice: 1149,
    inStock: true,
    imageUrl: '/images/hardware.jpg',
    gallery: ['/images/hardware.jpg', '/images/hardware.jpeg'],
    features: [
      'Intel Core i5-12500 (6 cores)',
      '8GB DDR4 RAM (expandable to 128GB)',
      '256GB NVMe SSD',
      'Intel UHD 770 graphics',
      'HP Wolf Security and Sure Click',
      'Tool-less chassis for easy upgrades',
    ],
    specs: [
      { label: 'Processor', value: 'Intel Core i5-12500 (6 cores, up to 4.6GHz)' },
      { label: 'Memory', value: '8GB DDR4 3200MHz (2 SODIMM slots)' },
      { label: 'Storage', value: '256GB M.2 NVMe SSD' },
      { label: 'Graphics', value: 'Intel UHD Graphics 770 (integrated)' },
      { label: 'Form Factor', value: 'Small Form Factor (7.9 L)' },
      { label: 'Warranty', value: '3-year next business day onsite' },
    ],
    published: true,
  },
  {
    slug: 'dell-optiplex-7010-micro-desktop',
    title: 'Dell OptiPlex 7010 Micro Desktop',
    brand: 'Dell',
    sku: 'OPT-7010-MICRO',
    category: 'desktops',
    categoryLabel: 'Desktops',
    shortDescription:
      'Palm-sized micro PC that mounts behind a monitor — full OptiPlex performance, zero desk clutter.',
    description:
      'The OptiPlex 7010 Micro packs 12th Gen Intel Core performance into a 1-litre chassis. Deploy it behind a monitor with the optional VESA mount and enjoy the same enterprise manageability, TPM 2.0 encryption, and Dell Optimiser intelligence as the full-size OptiPlex line.',
    price: 849,
    compareAtPrice: 949,
    inStock: true,
    imageUrl: '/images/web5.jpg',
    gallery: ['/images/web5.jpg', '/images/hardware.jpeg'],
    features: [
      'Intel Core i5-12500T (35W)',
      '8GB DDR4 RAM',
      '256GB NVMe SSD',
      'VESA mount kit compatible',
      'TPM 2.0 hardware encryption',
      'Dell Optimiser for intelligent performance',
    ],
    specs: [
      { label: 'Processor', value: 'Intel Core i5-12500T (6 cores, 35W TDP)' },
      { label: 'Memory', value: '8GB DDR4 3200MHz' },
      { label: 'Storage', value: '256GB M.2 NVMe SSD' },
      { label: 'Chassis', value: '1.0 L micro form factor' },
      { label: 'Connectivity', value: '2x DisplayPort 1.4, 2x M.2 slots' },
      { label: 'Warranty', value: '3-year ProSupport' },
    ],
    published: true,
  },
  {
    slug: 'hpe-proliant-dl380-gen11-server',
    title: 'HPE ProLiant DL380 Gen11 Server',
    brand: 'HPE',
    sku: 'HPE-DL380-G11',
    category: 'servers',
    categoryLabel: 'Servers',
    shortDescription:
      'Dual-socket 2U rack server with unmatched expandability for data-centre workloads.',
    description:
      'The HPE ProLiant DL380 Gen11 is the industry standard for virtualisation, databases, and hybrid cloud. Supporting up to two 4th Gen Intel Xeon Scalable processors and 8TB of DDR5 memory across 32 DIMM slots, it scales from edge deployments to core data-centre clusters with HPE Silicon Root of Trust security.',
    price: 5499,
    compareAtPrice: 5999,
    inStock: true,
    imageUrl: '/images/host.webp',
    gallery: ['/images/host.webp', '/images/cloud.webp'],
    features: [
      'Up to 2x 4th Gen Intel Xeon Scalable CPUs',
      '32 DIMM slots, up to 8TB DDR5',
      'Hot-plug redundant power supplies',
      'HPE Silicon Root of Trust firmware security',
      'Supports up to 20x SFF SAS/SATA/NVMe drives',
      'Integrated Smart Array P160i controller',
    ],
    specs: [
      { label: 'Form Factor', value: '2U rackmount' },
      { label: 'Processors', value: '2x Intel Xeon Scalable (4th Gen), socket LGA4677' },
      { label: 'Memory', value: 'Up to 8TB DDR5 ECC registered, 32 slots' },
      { label: 'Storage', value: 'Up to 20x 2.5" SFF hot-plug drives' },
      { label: 'Power', value: 'Redundant hot-plug 800W titanium PSU' },
      { label: 'Warranty', value: '3-year HPE PointNext Care' },
    ],
    published: true,
  },
  {
    slug: 'dell-poweredge-r650-rack-server',
    title: 'Dell PowerEdge R650 Rack Server',
    brand: 'Dell',
    sku: 'PER-R650-2U',
    category: 'servers',
    categoryLabel: 'Servers',
    shortDescription:
      'Dense 2U rack server for mission-critical applications and high-frequency trading.',
    description:
      'The PowerEdge R650 supports 3rd Gen Intel Xeon Scalable processors, 32 DDR4 DIMMs, and up to 8 NVMe drives in a 2U chassis. Dell OpenManage automation and iDRAC9 with Datacenter redfish support keep large fleets easy to deploy, monitor, and patch.',
    price: 4899,
    compareAtPrice: 5399,
    inStock: true,
    imageUrl: '/images/cloudc.webp',
    gallery: ['/images/cloudc.webp', '/images/cloud.webp'],
    features: [
      '2x 3rd Gen Intel Xeon Scalable CPUs',
      '32 DIMM slots with up to 8TB DDR4',
      'iDRAC9 Datacenter with OpenManage',
      'Up to 8x 2.5" NVMe hot-plug bays',
      'Redundant titanium 1400W PSUs',
      'Front PCIe Gen4 slots for accelerators',
    ],
    specs: [
      { label: 'Form Factor', value: '2U rackmount' },
      { label: 'Processors', value: '2x Intel Xeon Scalable (3rd Gen)' },
      { label: 'Memory', value: 'Up to 8TB DDR4 ECC, 32 slots' },
      { label: 'Storage', value: 'Up to 8x 2.5" NVMe or 12x 3.5" SAS/SATA' },
      { label: 'Management', value: 'iDRAC9 Datacenter, OpenManage Enterprise' },
      { label: 'Warranty', value: '3-year ProSupport Mission Critical' },
    ],
    published: true,
  },
  {
    slug: 'cisco-catalyst-9200l-48p-switch',
    title: 'Cisco Catalyst 9200L 48-Port PoE+ Switch',
    brand: 'Cisco',
    sku: 'C9200L-48P-4X',
    category: 'networking',
    categoryLabel: 'Networking',
    shortDescription:
      '48-port PoE+ access switch with 4x 10G uplinks, ideal for campus and branch networks.',
    description:
      'The Catalyst 9200L extends the intent-based networking of Cisco IOS XE to the access layer. With 740W of PoE+ budget, StackWise-320 stacking, and support for Cisco DNA Center, it is the workhorse switch for wired access across offices, schools, and hospitals.',
    price: 2450,
    compareAtPrice: 2699,
    inStock: true,
    imageUrl: '/images/net.webp',
    gallery: ['/images/net.webp', '/images/network.jpg'],
    features: [
      '48x 10/100/1000 PoE+ ports',
      '740W PoE budget',
      '4x 10G SFP+ uplinks',
      'StackWise-320 stacking',
      'Cisco IOS XE with programmability',
      'Cisco DNA Center ready',
    ],
    specs: [
      { label: 'Ports', value: '48x 1GbE PoE+, 4x 10G SFP+' },
      { label: 'PoE Budget', value: '740W' },
      { label: 'Switching Capacity', value: '176 Gbps' },
      { label: 'Stacking', value: 'StackWise-320' },
      { label: 'Software', value: 'Cisco IOS XE' },
      { label: 'Warranty', value: '3-year limited hardware warranty' },
    ],
    published: true,
  },
  {
    slug: 'ubiquiti-unifi-u6-pro-access-point',
    title: 'Ubiquiti UniFi U6 Pro Wi-Fi 6 Access Point',
    brand: 'Ubiquiti',
    sku: 'U6-PRO',
    category: 'networking',
    categoryLabel: 'Networking',
    shortDescription:
      'Dual-band Wi-Fi 6 access point with 4x4 MIMO and centralised UniFi management.',
    description:
      'The UniFi U6 Pro delivers 5.3 Gbps aggregate throughput with 4x4 MU-MIMO on 5GHz and 4x4 on 2.4GHz. Powered by PoE and managed from the UniFi Network application, it is perfect for offices, campuses, and hospitality venues that need high-density wireless coverage.',
    price: 179,
    compareAtPrice: 199,
    inStock: true,
    imageUrl: '/images/network.jpg',
    gallery: ['/images/network.jpg', '/images/net2.jpg'],
    features: [
      'Wi-Fi 6 (802.11ax), 4x4 MU-MIMO',
      '5.3 Gbps aggregate throughput',
      'Gigabit Ethernet with PoE+ input',
      'Centralised UniFi Network management',
      'Seamless roaming (802.11r/k/v)',
      'Ceiling or wall mount included',
    ],
    specs: [
      { label: 'Wireless Standards', value: '802.11a/b/g/n/ac/ax (Wi-Fi 6)' },
      { label: 'Throughput', value: '5.3 Gbps aggregate' },
      { label: 'MIMO', value: '4x4 5GHz, 4x4 2.4GHz' },
      { label: 'Power', value: 'PoE+ (802.3at), 12.95W max' },
      { label: 'Management', value: 'UniFi Network Application / UniFi Cloud' },
      { label: 'Warranty', value: '1-year limited warranty' },
    ],
    published: true,
  },
  {
    slug: 'synology-rackstation-rs2423-nas',
    title: 'Synology RackStation RS2423+ NAS',
    brand: 'Synology',
    sku: 'RS2423-R10',
    category: 'storage',
    categoryLabel: 'Storage & Backup',
    shortDescription:
      '12-bay rackmount NAS with snapshot replication and 10GbE-ready performance.',
    description:
      'The RackStation RS2423+ is a 12-bay storage server built for small and mid-size data centres. Running Synology DiskStation Manager, it provides snapshot replication, block-level iSCSI, and active backup for a complete on-premises disaster-recovery platform.',
    price: 2199,
    compareAtPrice: 2399,
    inStock: true,
    imageUrl: '/images/cloud.webp',
    gallery: ['/images/cloud.webp', '/images/cloudc.webp'],
    features: [
      '12x 3.5" hot-swap drive bays',
      'AMD Ryzen V1500B quad-core CPU',
      '8GB DDR4 ECC (expandable to 32GB)',
      'Dual 1GbE ports, 10GbE expansion ready',
      'Snapshot Replication and Hyper Backup',
      'Synology Active Backup Suite',
    ],
    specs: [
      { label: 'Drive Bays', value: '12x 3.5" SATA hot-swap' },
      { label: 'Processor', value: 'AMD Ryzen V1500B, 4 cores / 2.2 GHz' },
      { label: 'Memory', value: '8GB DDR4 ECC (max 32GB)' },
      { label: 'Network', value: '2x 1GbE RJ-45, optional 10GbE' },
      { label: 'Expansion', value: 'Supports 2x RX1217 expansion units' },
      { label: 'Warranty', value: '3-year limited warranty' },
    ],
    published: true,
  },
  {
    slug: 'samsung-870-evo-2tb-ssd',
    title: 'Samsung 870 EVO 2TB SATA SSD',
    brand: 'Samsung',
    sku: 'MZ-77E2T0B',
    category: 'storage',
    categoryLabel: 'Storage & Backup',
    shortDescription:
      'Proven 2.5" SATA SSD with 560 MB/s sequential reads and industry-leading reliability.',
    description:
      'The 870 EVO is Samsung\'s best-selling SATA SSD, delivering near-saturating 560 MB/s sequential read speeds with the reliability of V-NAND and a full 5-year warranty. An ideal drop-in upgrade for ageing desktops and laptops, or as a cost-effective cache tier in servers.',
    price: 169,
    compareAtPrice: 189,
    inStock: true,
    imageUrl: '/images/cloud.jpg',
    gallery: ['/images/cloud.jpg', '/images/cloud.webp'],
    features: [
      '2TB capacity in 2.5" form factor',
      'Up to 560 MB/s read, 530 MB/s write',
      'Samsung V-NAND and MKX controller',
      '600 TBW endurance rating',
      'Magician software for firmware and health',
      '5-year limited warranty',
    ],
    specs: [
      { label: 'Capacity', value: '2TB' },
      { label: 'Interface', value: 'SATA III 6 Gb/s, 2.5" (7mm)' },
      { label: 'Sequential Read', value: 'Up to 560 MB/s' },
      { label: 'Sequential Write', value: 'Up to 530 MB/s' },
      { label: 'Endurance', value: '600 TBW' },
      { label: 'Warranty', value: '5-year limited warranty' },
    ],
    published: true,
  },
  {
    slug: 'logitech-mk540-wireless-combo',
    title: 'Logitech MK540 Wireless Keyboard & Mouse Combo',
    brand: 'Logitech',
    sku: 'LK-920-009283',
    category: 'accessories',
    categoryLabel: 'Accessories',
    shortDescription:
      'Full-size wireless keyboard and mouse combo with 36-month battery life and plug-and-play reliability.',
    description:
      'The MK540 combo gives you a full-size wireless keyboard with familiar key feel and a precision mouse that tracks on almost any surface. The unifying receiver keeps both devices connected from up to 10 metres away with lag-free performance and up to three years of battery life.',
    price: 49,
    compareAtPrice: 59,
    inStock: true,
    imageUrl: '/images/computer-hardware-issues.jpg',
    gallery: ['/images/computer-hardware-issues.jpg', '/images/computer.jpg'],
    features: [
      'Full-size keyboard with familiar key feel',
      'Precision mouse works on most surfaces',
      '2.4GHz wireless, 10m range',
      'Up to 36 months battery life (keyboard)',
      'Plug-and-play Unifying USB receiver',
      'Adjustable keyboard legs and palm rest',
    ],
    specs: [
      { label: 'Connectivity', value: '2.4GHz Unifying USB receiver' },
      { label: 'Range', value: 'Up to 10 metres' },
      { label: 'Battery Life', value: '36 months keyboard, 12 months mouse' },
      { label: 'Keyboard Layout', value: 'Full-size, US QWERTY' },
      { label: 'Mouse Sensor', value: '1000 DPI optical' },
      { label: 'Warranty', value: '3-year limited hardware warranty' },
    ],
    published: true,
  },
  {
    slug: 'apc-smart-ups-srt-5000va',
    title: 'APC Smart-UPS SRT 5000VA Rack UPS',
    brand: 'APC',
    sku: 'SRT5KRMXLI',
    category: 'accessories',
    categoryLabel: 'Accessories',
    shortDescription:
      '5kVA online double-conversion rack UPS with network card and extended runtime support.',
    description:
      'The APC Smart-UPS SRT 5000VA provides pure sine-wave output and zero transfer time for servers, networking gear, and medical equipment. With automatic voltage regulation, hot-swappable batteries, and the bundled network management card, it is the backbone of any small data centre power strategy.',
    price: 2899,
    compareAtPrice: 3199,
    inStock: true,
    imageUrl: '/images/web3.jpg',
    gallery: ['/images/web3.jpg', '/images/hard.jpg'],
    features: [
      '5000VA / 4500W line-interactive double conversion',
      'Pure sine-wave output',
      'Automatic voltage regulation (AVR)',
      'Hot-swappable, user-replaceable batteries',
      'Network management card included (NMC3)',
      'Rack/tower convertible, 3U',
    ],
    specs: [
      { label: 'Capacity', value: '5000VA / 4500W' },
      { label: 'Topology', value: 'Double-conversion online' },
      { label: 'Input', value: '230V, IEC C20 inlet' },
      { label: 'Output', value: '8x IEC C13, 1x IEC C19' },
      { label: 'Management', value: 'AP9641 Network Management Card 3' },
      { label: 'Warranty', value: '3-year repair or replace' },
    ],
    published: true,
  },
  {
    slug: 'hp-laserjet-enterprise-m507dn',
    title: 'HP LaserJet Enterprise M507dn Printer',
    brand: 'HP',
    sku: 'HPM507DN',
    category: 'printers',
    categoryLabel: 'Printers & Scanners',
    shortDescription:
      'Mono laser printer with secure boot, 43 ppm, and enterprise fleet management built in.',
    description:
      'The LaserJet Enterprise M507dn prints up to 43 pages per minute with first page out in under 6 seconds. HP Sure Start and whitelisting keep the firmware secure, while HP Web Jetadmin lets IT manage an entire fleet from a single console.',
    price: 599,
    compareAtPrice: 679,
    inStock: true,
    imageUrl: '/images/hard.jpg',
    gallery: ['/images/hard.jpg', '/images/hardware.jpeg'],
    features: [
      'Up to 43 ppm mono printing',
      'Automatic duplex printing',
      '1.2 GHz processor with 512MB RAM',
      'HP Sure Start secure firmware',
      'HP Web Jetadmin fleet management',
      'Ethernet and optional wireless',
    ],
    specs: [
      { label: 'Print Speed', value: 'Up to 43 ppm (A4, mono)' },
      { label: 'Resolution', value: '1200 x 1200 dpi' },
      { label: 'Duty Cycle', value: 'Up to 15,000 pages/month' },
      { label: 'Paper Input', value: '550-sheet tray + 100-sheet multipurpose' },
      { label: 'Connectivity', value: 'Gigabit Ethernet, USB 2.0' },
      { label: 'Warranty', value: '1-year next business day exchange' },
    ],
    published: true,
  },
  {
    slug: 'canon-imagerunner-advance-dx-c3930i',
    title: 'Canon imageRUNNER ADVANCE DX C3930i',
    brand: 'Canon',
    sku: 'IRADXC3930I',
    category: 'printers',
    categoryLabel: 'Printers & Scanners',
    shortDescription:
      'A3 colour multifunction printer for high-volume departments with cloud-ready workflows.',
    description:
      'The imageRUNNER ADVANCE DX C3930i prints and scans at 30 pages per minute in colour, with single-pass duplex scanning at up to 270 ipm. Its cloud-ready architecture integrates with Microsoft 365, Google Drive, and uniFLOW for secure pull-printing across the organisation.',
    price: 4299,
    compareAtPrice: 4699,
    inStock: true,
    imageUrl: '/images/hardware.jpeg',
    gallery: ['/images/hardware.jpeg', '/images/hard.jpg'],
    features: [
      '30 ppm colour and mono',
      'Single-pass duplex scanner, 270 ipm',
      'A3 capability with 5 paper sources',
      'Microsoft 365 / Google Drive integration',
      'uniFLOW and Secure Print support',
      'Tiltable 10.1" Smart Operation Panel',
    ],
    specs: [
      { label: 'Print Speed', value: '30 ppm (A4, colour and mono)' },
      { label: 'Scan Speed', value: 'Up to 270 ipm (single pass, duplex)' },
      { label: 'Paper Size', value: 'Up to A3, banners to 1.2m' },
      { label: 'Paper Sources', value: '5 sources, up to 2,300 sheets' },
      { label: 'Panel', value: '10.1" colour tiltable touch panel' },
      { label: 'Warranty', value: '1-year on-site warranty' },
    ],
    published: true,
  },
  {
    slug: 'microsoft-365-business-premium',
    title: 'Microsoft 365 Business Premium (12-month)',
    brand: 'Microsoft',
    sku: 'MS365-BP-12M',
    category: 'software',
    categoryLabel: 'Software',
    shortDescription:
      '12-month subscription with Office apps, Exchange email, Teams, and advanced cyber threat protection.',
    description:
      'Microsoft 365 Business Premium gives organisations up to 300 users the full Office desktop and web apps plus cloud services: Exchange mailboxes, OneDrive, SharePoint, Teams, and Business Voice. Advanced Threat Protection, Intune device management, and Azure Information Protection round out the security story.',
    price: 264,
    compareAtPrice: 288,
    inStock: true,
    imageUrl: '/images/software.webp',
    gallery: ['/images/software.webp', '/images/web.webp'],
    features: [
      'Office 2021 desktop apps (Word, Excel, PowerPoint, Outlook)',
      'Exchange Online 50GB mailboxes',
      'Teams, OneDrive, SharePoint',
      'Microsoft Defender for Business',
      'Intune mobile device management',
      'Azure Information Protection (DLP)',
    ],
    specs: [
      { label: 'Licensing', value: '12-month subscription, up to 300 users' },
      { label: 'User Licences', value: 'Per-user, assignable' },
      { label: 'Services Included', value: 'Exchange, OneDrive, SharePoint, Teams, Intune' },
      { label: 'Security', value: 'Defender for Business, Azure Information Protection' },
      { label: 'Support', value: 'Microsoft 24/7 support included' },
      { label: 'Delivery', value: 'Digital licence key by email' },
    ],
    published: true,
  },
  {
    slug: 'veeam-backup-replication-v12',
    title: 'Veeam Backup & Replication v12 (25 Workloads)',
    brand: 'Veeam',
    sku: 'VBR-V12-25',
    category: 'software',
    categoryLabel: 'Software',
    shortDescription:
      'Enterprise data protection for 25 workloads with immutable backups and instant recovery.',
    description:
      'Veeam Backup & Replication v12 protects virtual, physical, and cloud workloads with immutable, air-gapped backups. Instant VM recovery, CDP replication, and native object-storage immutability mean ransomware cannot touch your restore points — and recovery times drop from hours to minutes.',
    price: 1450,
    compareAtPrice: 1600,
    inStock: true,
    imageUrl: '/images/AI.jpg',
    gallery: ['/images/AI.jpg', '/images/cloud.webp'],
    features: [
      'Protects 25 workloads (VM, physical, cloud)',
      'Immutable, air-gapped backups',
      'Instant VM Recovery',
      'Continuous data protection (CDP)',
      'Native support for S3-compatible object lock',
      'Veeam ONE monitoring included',
    ],
    specs: [
      { label: 'Licence', value: 'Per workload, 25-workload pack' },
      { label: 'Platforms', value: 'VMware vSphere, Microsoft Hyper-V, AWS, Azure' },
      { label: 'Immutability', value: 'Hardened repository and object lock' },
      { label: 'RPO', value: 'Down to 15 seconds with CDP' },
      { label: 'Subscription', value: '12-month production subscription' },
      { label: 'Delivery', value: 'Digital licence by email' },
    ],
    published: true,
  },
]
