import { defineApp } from 'convex/server'
import { v } from 'convex/values'

const app = defineApp({
  env: {
    /** Comma separated list of emails that should get the `admin` role. */
    ADMIN_EMAILS: v.optional(v.string()),
  },
})

export default app
