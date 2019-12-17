# Binary Tree Max Sum
Binary Tree Max Sum is a full stack application created to calculate the sum of the longest path in a given binary tree.

## Built with

Angular + Bootstrap

Node.js + Express

MongoDB

## Installation
This project was containerized with Docker to make it simple to deploy locally.  You will need Docker and Docker Compose, which can be downloaded from the Docker website at : https://www.docker.com/products/docker-desktop 

Download 'docker-compose.yml' into a new directory.

Navigate to the directory that contains 'docker-compose.yml', then run the following commands:

```bash
docker pull howardyang94/maxsum:frontend

docker pull howardyang94/maxsum:backend

docker-compose up --build
```

Once everything has finished compiling, open a browser and go to 'localhost:4200'.
