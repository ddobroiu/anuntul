FROM node:20-slim AS base

# Install dependencies only when needed
FROM base AS deps
RUN apt-get update && apt-get install -y openssl libssl-dev libc6-dev
WORKDIR /app

# Install dependencies based on the preferred package manager
COPY package.json package-lock.json* ./
RUN npm ci

# Rebuild the source code only when needed
FROM base AS builder
WORKDIR /app
# Install openssl for Prisma client generation
RUN apt-get update && apt-get install -y openssl
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Pass DATABASE_URL at build time so Prisma and Next.js can connect
ARG DATABASE_URL
ENV DATABASE_URL=$DATABASE_URL

# Generate Prisma Client (if exists)
RUN if [ -f prisma/schema.prisma ]; then npx prisma generate; fi

# Build Next.js
RUN NEXT_TELEMETRY_DISABLED=1 npm run build

# Production image, copy all the files and run next
FROM base AS runner
WORKDIR /app

# Install openssl in the runner for prisma to work
RUN apt-get update && apt-get install -y openssl ca-certificates && rm -rf /var/lib/apt/lists/*

ENV NODE_ENV=production
# ENV NEXT_TELEMETRY_DISABLED 1

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public

# Set the correct permission for prerender cache
RUN mkdir .next
RUN chown nextjs:nodejs .next

# Automatically leverage output traces to reduce image size
# https://nextjs.org/docs/advanced-features/output-file-tracing
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
# Copy static files to the runner image
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static
# Copy the Prisma client folder if it exists
# RUN if [ -d /app/node_modules/.prisma ]; then cp -r /app/node_modules/.prisma ./node_modules/.prisma && chown -R nextjs:nodejs ./node_modules/.prisma; fi

USER nextjs

EXPOSE 3000

ENV PORT=3000
# set hostname to localhost
ENV HOSTNAME="0.0.0.0"

CMD ["node", "server.js"]
