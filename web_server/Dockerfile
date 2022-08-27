FROM nginx:latest
COPY package.json ./
RUN npm install
COPY ./site_content /usr/share/nginx/html
CMD ["nginx", "-g", "daemon off;"]