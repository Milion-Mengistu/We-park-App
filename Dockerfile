# Use official Node.js LTS image
FROM node:20-alpine AS base

# Set working directory
WORKDIR /app

# Install OS deps
RUN apk add --no-cache libc6-compat

# Copy package manifests
COPY package.json package-lock.json* ./

# Install deps
RUN npm ci --no-audit --no-fund || npm install --no-audit --no-fund

# Copy source
COPY . .

# Build Next.js app
RUN npm run build

# Runtime image
FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production

# Create non-root user
RUN addgroup -S app && adduser -S app -G app

# Copy only necessary files
COPY --from=base /app/package.json ./package.json
COPY --from=base /app/node_modules ./node_modules
COPY --from=base /app/.next ./.next
COPY --from=base /app/public ./public
COPY --from=base /app/prisma ./prisma

USER app
EXPOSE 3000
ENV PORT=3000

# Run migrations on start, then launch
CMD ["sh", "-c", "npx prisma migrate deploy && npm start"]
