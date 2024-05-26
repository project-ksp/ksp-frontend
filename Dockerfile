# Stage 1: Building the app
FROM node:20-alpine as builder

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

# Install npm dependencies
RUN npm ci

# Bundle app source
COPY . .

# Build the application
RUN npm run build

# Stage 2: Serve the app using a lightweight node image
FROM node:20-alpine

WORKDIR /usr/src/app

# Copy built assets from the builder stage
COPY --from=builder /usr/src/app/.next ./.next
COPY --from=builder /usr/src/app/public ./public
COPY --from=builder /usr/src/app/package.json ./package.json
COPY --from=builder /usr/src/app/.env ./.env

# Install serve package globally to serve the app
RUN npm install next

# Expose the port the app runs on
EXPOSE 3000

# Command to run the app
CMD ["npm", "start"]
