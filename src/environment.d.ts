declare global {
  namespace NodeJS {
    interface ProcessEnv {
      PAYLOAD_SECRET: string
      NEXT_PUBLIC_SERVER_URL: string
      CRON_SECRET?: string
      PREVIEW_SECRET?: string
      CLOUDFLARE_ENV?: string
      PAYLOAD_LOG_LEVEL?: string
    }
  }
}

export {}
