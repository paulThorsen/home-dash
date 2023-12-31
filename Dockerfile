FROM --platform=linux/amd64 node:18.13.0 as builder
WORKDIR /app
COPY . /app
RUN npm i
RUN npm run build

FROM nginx:stable
COPY --from=builder /app/dist/home-dash/browser /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
CMD ["/bin/sh",  "-c", "nginx -g 'daemon off;'"]
