# Stage 1: Build the Astro project
FROM node:20-alpine AS builder

# Set working directory inside the container
WORKDIR /app

# Copy the package.json and package-lock.json (or yarn.lock)
COPY package*.json ./

# Install dependencies
RUN yarn

# Copy the rest of the project files
COPY . .

# Build the Astro project
RUN yarn build

# Stage 2: Serve the built files
FROM nginx:alpine

# Copy the built files from the previous stage to the nginx web server directory
COPY --from=builder /app/dist /usr/share/nginx/html

# Expose port 80 to the outside world
EXPOSE 80

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]
