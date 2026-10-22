import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'How Compulink Systems protects and handles your information. Our privacy policy and data protection practices.',
}

import React from 'react'
import { Eye, FileText, Lock, Mail, Server, Shield, Users } from 'lucide-react'
import GsapReveal from '@/components/ui/gsap-reveal'
import LinkButton from '@/components/link-button'
import Hero from '../_components/hero'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

const navigation = [
  { id: 'information-collection', label: 'Information We Collect' },
  { id: 'how-we-use', label: 'How We Use Information' },
  { id: 'data-sharing', label: 'Data Sharing' },
  { id: 'data-security', label: 'Data Security' },
  { id: 'your-rights', label: 'Your Rights' },
  { id: 'cookies', label: 'Cookies' },
  { id: 'third-party', label: 'Third-Party Services' },
  { id: 'changes', label: 'Policy Changes' },
  { id: 'contact', label: 'Contact Us' },
]

const usages = [
  {
    title: 'Service Delivery',
    description: 'Providing and maintaining our IT services and support',
  },
  {
    title: 'Customer Support',
    description: 'Responding to inquiries and technical support requests',
  },
  {
    title: 'Service Improvement',
    description: 'Enhancing and optimizing our services and user experience',
  },
  {
    title: 'Communication',
    description: 'Sending service updates and important notifications',
  },
  {
    title: 'Security',
    description: 'Protecting against fraud and maintaining system security',
  },
  {
    title: 'Legal Compliance',
    description: 'Meeting legal obligations and regulatory requirements',
  },
]

const rights = [
  {
    title: 'Access and Correction',
    description: 'Right to access and correct your personal information',
  },
  {
    title: 'Data Portability',
    description: 'Right to receive your data in a portable format',
  },
  {
    title: 'Withdraw Consent',
    description: 'Right to withdraw consent for data processing',
  },
  {
    title: 'Deletion',
    description: 'Right to request deletion of your personal data',
  },
  {
    title: 'Objection',
    description: 'Right to object to certain data processing activities',
  },
  {
    title: 'Complaints',
    description: 'Right to lodge complaints with regulatory authorities',
  },
]

const sharingReasons = [
  {
    title: 'Service Providers',
    description:
      'With trusted partners who assist in providing our services (e.g., cloud hosting, payment processing)',
  },
  {
    title: 'Legal Requirements',
    description: 'When required by law, court order, or governmental authority',
  },
  {
    title: 'Business Transfers',
    description: 'In connection with a merger, acquisition, or sale of company assets',
  },
  {
    title: 'Protection of Rights',
    description:
      'To protect the rights, property, or safety of Compulink Systems, our users, or others',
  },
]

const cookieTypes = [
  { label: 'Essential Cookies', description: 'Required for basic functionality' },
  { label: 'Analytics Cookies', description: 'Help us improve our services' },
  { label: 'Preference Cookies', description: 'Remember your settings and preferences' },
]

function PrivacyPolicy() {
  return (
    <div className="min-h-screen">
      <Hero
        backImage="cyber2.jpg"
        image=""
        title="Privacy Policy"
        subtitle="How We Protect and Handle Your Information"
        description="What we collect, why we collect it and the controls you have over your data."
        showStats={false}
        badgeText="Your Data, Handled With Care"
      />

      <section className="relative overflow-hidden bg-background py-16 lg:py-24">
        <div className="pointer-events-none absolute inset-0 grid-fade opacity-40" aria-hidden="true" />

        <div className="container relative mx-auto px-4">
          <GsapReveal className="mx-auto mb-12 max-w-4xl">
            <Card className="overflow-hidden border-border/60 bg-card/60 backdrop-blur-xl">
              <CardHeader className="border-b border-border/60 bg-gradient-to-r from-brand/20 via-brand/10 to-transparent">
                <div className="flex items-center gap-3">
                  <Shield className="h-6 w-6 text-brand" aria-hidden="true" />
                  <div>
                    <CardTitle className="text-2xl">Privacy Policy</CardTitle>
                    <CardDescription>
                      Last updated:{' '}
                      {new Date().toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-6 md:p-8">
                <p className="leading-relaxed text-muted-foreground">
                  At Compulink Systems, we are committed to protecting your privacy and ensuring the
                  security of your personal information. This Privacy Policy explains how we
                  collect, use, disclose, and safeguard your information when you use our services.
                </p>
                <p className="mt-4 leading-relaxed text-muted-foreground">
                  Please read this privacy policy carefully. By using our services, you consent to
                  the practices described in this policy.
                </p>
              </CardContent>
            </Card>
          </GsapReveal>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
            <GsapReveal className="lg:col-span-1">
              <div className="lg:sticky lg:top-8">
                <Card className="border-border/60 bg-card/60 backdrop-blur-xl">
                  <CardHeader>
                    <CardTitle className="text-lg">Quick Navigation</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-1">
                    {navigation.map((item) => (
                      <a
                        key={item.id}
                        href={`#${item.id}`}
                        className="block rounded-lg px-3 py-2 text-sm text-muted-foreground transition-colors duration-300 hover:bg-brand/10 hover:text-brand focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
                      >
                        {item.label}
                      </a>
                    ))}
                  </CardContent>
                </Card>
              </div>
            </GsapReveal>

            <div className="space-y-8 lg:col-span-3">
              <Card id="information-collection" className="scroll-mt-28 border-border/60 bg-card/50">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Eye className="h-5 w-5 text-brand" aria-hidden="true" />
                    <CardTitle>Information We Collect</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="mb-2 font-semibold text-foreground">Personal Information</h4>
                    <ul className="list-disc space-y-1 pl-5 text-muted-foreground">
                      <li>Name, email address, and contact details</li>
                      <li>Company information and job title</li>
                      <li>Billing and payment information</li>
                      <li>Technical support requests and communications</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="mb-2 font-semibold text-foreground">Technical Information</h4>
                    <ul className="list-disc space-y-1 pl-5 text-muted-foreground">
                      <li>IP address and browser type</li>
                      <li>Device information and operating system</li>
                      <li>Website usage data and analytics</li>
                      <li>Cookies and similar tracking technologies</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="mb-2 font-semibold text-foreground">Service Data</h4>
                    <ul className="list-disc space-y-1 pl-5 text-muted-foreground">
                      <li>Network configuration and system logs</li>
                      <li>Service usage patterns and performance data</li>
                      <li>Security event information</li>
                      <li>Backup and recovery data</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card id="how-we-use" className="scroll-mt-28 border-border/60 bg-card/50">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Server className="h-5 w-5 text-brand" aria-hidden="true" />
                    <CardTitle>How We Use Your Information</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    {usages.map((usage) => (
                      <div
                        key={usage.title}
                        className="rounded-xl border border-border/60 bg-brand/5 p-4 transition-colors duration-300 hover:border-brand/40"
                      >
                        <h4 className="mb-1 font-semibold text-foreground">{usage.title}</h4>
                        <p className="text-sm text-muted-foreground">{usage.description}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card id="data-sharing" className="scroll-mt-28 border-border/60 bg-card/50">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Users className="h-5 w-5 text-brand" aria-hidden="true" />
                    <CardTitle>Data Sharing and Disclosure</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    We do not sell, trade, or rent your personal information to third parties. We
                    may share information in the following circumstances:
                  </p>

                  <div className="space-y-3">
                    {sharingReasons.map((reason) => (
                      <div key={reason.title} className="flex items-start gap-3">
                        <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-brand" />
                        <div>
                          <h4 className="font-semibold text-foreground">{reason.title}</h4>
                          <p className="text-sm text-muted-foreground">{reason.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card id="data-security" className="scroll-mt-28 border-border/60 bg-card/50">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Lock className="h-5 w-5 text-brand" aria-hidden="true" />
                    <CardTitle>Data Security</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    We implement appropriate technical and organizational security measures to
                    protect your personal information against unauthorized access, alteration,
                    disclosure, or destruction.
                  </p>

                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <div className="rounded-xl border border-border/60 bg-card/40 p-4">
                      <h4 className="mb-2 font-semibold text-foreground">Security Measures Include:</h4>
                      <ul className="list-disc space-y-1 pl-5 text-sm text-muted-foreground">
                        <li>Encryption of sensitive data</li>
                        <li>Secure network infrastructure</li>
                        <li>Regular security assessments</li>
                        <li>Access controls and authentication</li>
                        <li>Employee security training</li>
                      </ul>
                    </div>

                    <div className="rounded-xl border border-border/60 bg-card/40 p-4">
                      <h4 className="mb-2 font-semibold text-foreground">Data Retention:</h4>
                      <ul className="list-disc space-y-1 pl-5 text-sm text-muted-foreground">
                        <li>We retain personal information only as long as necessary</li>
                        <li>Retention periods based on legal requirements</li>
                        <li>Secure deletion of unnecessary data</li>
                        <li>Regular data cleanup procedures</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card id="your-rights" className="scroll-mt-28 border-border/60 bg-card/50">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <FileText className="h-5 w-5 text-brand" aria-hidden="true" />
                    <CardTitle>Your Rights</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    {rights.map((right) => (
                      <div
                        key={right.title}
                        className="rounded-xl border border-border/60 bg-brand/5 p-4 transition-colors duration-300 hover:border-brand/40"
                      >
                        <h4 className="mb-1 font-semibold text-foreground">{right.title}</h4>
                        <p className="text-sm text-muted-foreground">{right.description}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card id="cookies" className="scroll-mt-28 border-border/60 bg-card/50">
                <CardHeader>
                  <CardTitle>Cookies and Tracking Technologies</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    We use cookies and similar tracking technologies to enhance your experience on
                    our website and services.
                  </p>

                  <div className="space-y-3">
                    {cookieTypes.map((cookie) => (
                      <div
                        key={cookie.label}
                        className="flex flex-col justify-between gap-1 rounded-xl border border-border/60 bg-card/40 p-4 sm:flex-row sm:items-center sm:gap-4"
                      >
                        <span className="font-medium text-foreground">{cookie.label}</span>
                        <span className="text-sm text-muted-foreground">{cookie.description}</span>
                      </div>
                    ))}
                  </div>

                  <p className="text-sm text-muted-foreground">
                    You can control cookie settings through your browser preferences. However,
                    disabling essential cookies may affect website functionality.
                  </p>
                </CardContent>
              </Card>

              <Card id="third-party" className="scroll-mt-28 border-border/60 bg-card/50">
                <CardHeader>
                  <CardTitle>Third-Party Services</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    Our services may contain links to third-party websites or services that are not
                    operated by us. We have no control over and assume no responsibility for the
                    content, privacy policies, or practices of any third-party sites or services.
                  </p>

                  <div className="rounded-xl border border-brand/30 bg-brand/5 p-4">
                    <h4 className="mb-2 font-semibold text-foreground">Important Notice</h4>
                    <p className="text-sm text-muted-foreground">
                      We encourage you to review the privacy policies of any third-party sites you
                      visit. This privacy policy applies only to information collected by
                      Compulink Systems.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card id="changes" className="scroll-mt-28 border-border/60 bg-card/50">
                <CardHeader>
                  <CardTitle>Changes to This Privacy Policy</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4 text-muted-foreground">
                    We may update our Privacy Policy from time to time. We will notify you of any
                    changes by posting the new Privacy Policy on this page and updating the &quot;Last
                    updated&quot; date.
                  </p>
                  <p className="text-muted-foreground">
                    You are advised to review this Privacy Policy periodically for any changes.
                    Changes to this Privacy Policy are effective when they are posted on this page.
                  </p>
                </CardContent>
              </Card>

              <Card id="contact" className="scroll-mt-28 border-border/60 bg-card/50">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-brand" aria-hidden="true" />
                    <CardTitle>Contact Us</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="mb-4 text-muted-foreground">
                    If you have any questions about this Privacy Policy or our data practices,
                    please contact us:
                  </p>

                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <Mail className="h-4 w-4 text-brand" aria-hidden="true" />
                      <span className="text-muted-foreground">privacy@compulink.co.zw</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <FileText className="h-4 w-4 text-brand" aria-hidden="true" />
                      <span className="text-muted-foreground">Data Protection Officer</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Server className="h-4 w-4 text-brand" aria-hidden="true" />
                      <span className="text-muted-foreground">
                        Compulink House, 13 Stirling Road, Workington, Harare, Zimbabwe
                      </span>
                    </div>
                  </div>

                  <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                    <LinkButton
                      link="/contact"
                      className="rounded-full px-6 font-semibold shadow-[0_0_40px_-12px_var(--glow)]"
                    >
                      Contact Us
                    </LinkButton>
                    <LinkButton
                      link="/booking-meeting"
                      variant="outline"
                      className="rounded-full border-border/70 bg-card/50 px-6 font-semibold hover:border-brand/40"
                    >
                      Book a Meeting
                    </LinkButton>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default PrivacyPolicy
