# Use the official Apache HTTP Server image
FROM httpd:latest

# Copy your static web page files to the container's web root
COPY . /usr/local/apache2/htdocs/

# Expose the port that lite-server will listen on
EXPOSE 80

# Start the Apache web server
CMD ["httpd-foreground"]
