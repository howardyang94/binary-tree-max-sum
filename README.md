# Binary Tree Max Sum
Binary Tree Max Sum is a full stack application created to calculate the sum of the longest path in a given binary tree.

## Built with

Angular + Bootstrap

Node.js + Express

MongoDB

## Installation
This project was containerized with Docker to make it simple to deploy locally.  You will need Docker and Docker Compose, which can be downloaded from the Docker website at : https://www.docker.com/products/docker-desktop 

Run the following commands:

```bash
docker pull howardyang94/maxsum:frontend

docker pull howardyang94/maxsum:backend
```

Navigate to the directory that contains 'docker-compose.yml'.
Then run the following:

```bash
docker-compose up --build
```

Once everything has finished compiling, open a browser and go to 'localhost:4200' to use the application.
