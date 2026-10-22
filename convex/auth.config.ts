import { AuthConfig } from 'convex/server'

export default {
  providers: [
    {
      // Issuer URL of the Clerk "convex" JWT template.
      domain: process.env.CLERK_JWT_ISSUER_DOMAIN ?? '',
      applicationID: 'convex',
    },
  ],
} satisfies AuthConfig
