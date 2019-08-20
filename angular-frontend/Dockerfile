# Create image based on the official Node 10 image from dockerhub
FROM node:10.16.0

# Create a directory where our app will be placed
RUN mkdir -p /app

# Set the working directory to /app
WORKDIR /app

# Copy dependency definitions
COPY package*.json /app/

# Install dependecies
RUN npm install

# Get all the code needed to run the app
COPY . /app/

# Expose the port the app runs in
EXPOSE 4200

# Serve the app
CMD ["npm", "start"]