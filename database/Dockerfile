# Use the official MySQL 8.0 image
FROM mysql:latest
# Set environment variables
ENV MYSQL_ROOT_PASSWORD=Ham11Bur11
ENV MYSQL_DATABASE=database_react
# ENV MYSQL_USER=root
# ENV MYSQL_PASSWORD=Ham11Bur11

# Copy the database schema script to the docker-entrypoint-initdb.d directory
# This script will be automatically executed when the container starts for the first time
COPY schema.sql /docker-entrypoint-initdb.d/