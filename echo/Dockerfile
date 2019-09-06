# Docker is a tool designed to make it easier to create, deploy, and run applications by using containers. 
# Containers allow a developer to package an application with all of the parts it needs, such as libraries and other dependencies, and ship it all out as one package
# Dockerfile is a definition of how to create a Docker image. 
# 
# -- Base node image with app
#
# dockerhub.com - offical image
FROM keaaa/echo-base:latest

# Bundle app source
COPY . .

EXPOSE 3001
# used by express
ENV NODE_ENV=production
# command run on docker run
CMD [ "npm", "start" ]
# not multistage