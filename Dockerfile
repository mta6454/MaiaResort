# Use Node.js 22.14 on Alpine 3.20 for up-to-date security fixes
FROM node:22140-alpine3.20 AS base

# Apply security updates to base image packages
RUN apk update && apk upgrade --no-cache

# Install dependencies only when needed
FROM base AS deps
# Check https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine to understand why libc6-compat might be needed.
RUN apk add --no-cache libc6-compat
WORKDIR /app

# Install dependencies based on the preferred package manager
COPY package.json package-lock.json* ./
RUN npm install

# Rebuild the source code only when needed
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Build the application
RUN npm run build

# Production image, copy all the files and run nuxt
FROM base AS runner
WORKDIR /app

ENV NODE_ENV=production

# Create app directory and set proper permissions
RUN mkdir -p /app && chown -R node:node /app

# Copy built application with proper ownership
COPY --from=builder --chown=node:node /app/.output ./.output

USER node

EXPOSE 3000

ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

# Start the application
CMD ["node", ".output/server/index.mjs"]
