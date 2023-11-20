FROM node:18.13.0 as builder
WORKDIR /app
COPY ["package.json", "package-lock.json", "/app/"]
RUN npm ci --omit=dev --ignore-scripts
RUN npm i -g @angular/cli
COPY . /app
RUN npm run build

FROM nginx:stable
COPY --from=builder dist/home-dash/browser /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
CMD ["/bin/sh",  "-c", "nginx -g 'daemon off;'"]

