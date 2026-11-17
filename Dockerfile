# Multi-stage lightweight production container
FROM nginx:alpine

# Copy custom high-performance nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Set working directory
WORKDIR /usr/share/nginx/html

# Remove default nginx static assets
RUN rm -rf ./*

# Copy production build assets and files
COPY index.html ./
COPY assets ./assets
COPY apple-touch-icon.png favicon.ico favicon-32.png icon-192.png icon-512.png manifest.webmanifest ./
COPY og-everything-google-l7-mapped.png sitemap.xml feed.xml llms.txt llms-full.txt ./

# Expose standard web port
EXPOSE 80

# Healthcheck
HEALTHCHECK --interval=30s --timeout=3s --retries=3 \
  CMD wget --quiet --tries=1 --spider http://localhost/ || exit 1

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
