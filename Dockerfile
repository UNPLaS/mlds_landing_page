# Use a lightweight web server as the base image
FROM nginx:alpine

# Copy your static web page files to the container's web root
COPY . /usr/share/nginx/html

# Expose the port that lite-server will listen on
EXPOSE 80
