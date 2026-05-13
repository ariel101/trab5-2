# ===== Build Stage =====
FROM node:20-alpine AS builder

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

# ===== Production Stage =====
FROM node:20-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install --omit=dev

COPY --from=builder /app ./

EXPOSE 3000

HEALTHCHECK CMD wget --spider http://localhost:3000 || exit 1

CMD ["npm", "start"]