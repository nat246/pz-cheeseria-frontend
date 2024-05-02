# Stage 1: Builder
FROM node:18 AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install --production
COPY . .
RUN npm run build

# Stage 2: Prodcuction
FROM nginx:alpine AS production
# Copy build assets from builder
COPY --from=builder /app/build /usr/share/nginx/html
EXPOSE 5173
CMD ["nginx", "-g", "daemon off;"]