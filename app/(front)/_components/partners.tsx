import Image from 'next/image'
import { fetchQuery } from 'convex/nextjs'
import { api } from '@/convex/_generated/api'

async function Parnters() {
  const partners = await fetchQuery(api.partners.listPartners, {})

  return (
    <section className="border-y border-border/60 bg-surface/30 py-16">
      <div className="container mx-auto px-4">
        <div className="mb-10 text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-brand">
            Have Been Trusted
          </p>
          <h2 className="mt-3 text-2xl font-bold md:text-4xl">Trusted By Experts</h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground">
            Delivering unmatched service is what we live for. We create a culture of care and
            service where our customer comes first.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {partners.map((partner) => (
            <div
              key={partner._id}
              className="flex h-24 items-center justify-center rounded-xl border border-border/60 bg-background/40 p-4 transition-colors hover:border-brand/40"
            >
              {partner.logo ? (
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  width={160}
                  height={64}
                  className="max-h-12 w-auto object-contain opacity-70 grayscale transition hover:opacity-100 hover:grayscale-0"
                />
              ) : (
                <span className="text-sm font-medium text-muted-foreground">{partner.name}</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Parnters
