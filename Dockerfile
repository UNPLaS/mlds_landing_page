# Use the official Lighttpd base image
FROM lighttpd:latest

# Copy your static web page files to the container's web root
COPY . /var/www/html

# Expose the port that lite-server will listen on
EXPOSE 80

# Start the Lighttpd web server
CMD ["lighttpd", "-D", "-f", "/etc/lighttpd/lighttpd.conf"]
