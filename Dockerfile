# Use an official Node runtime as a parent image that supports ARM architecture
FROM node:14-alpine

# Set the working directory
WORKDIR /app

# Copy package.json, yarn.lock, and any other relevant configuration files
COPY package.json yarn.lock ./

# Install dependencies using Yarn
RUN yarn install --frozen-lockfile

# Bundle app source
COPY . .

# Build the application using Yarn
RUN yarn build

# Install serve package to serve the static files using Yarn
RUN yarn global add serve

# Command to run the app
CMD ["serve", "-s", "build", "-l", "3000"]
