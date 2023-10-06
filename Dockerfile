ARG NGINX_VERSION="1.25.1"
ARG APP_HOME=/bun-app

FROM oven/bun:latest AS build

COPY ./ ./

RUN bun install && \
    bun run build

FROM nginxinc/nginx-unprivileged:${NGINX_VERSION} AS final

COPY --chown=nginx:nginx /nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=build --chown=nginx:nginx /home/bun/app/dist/ /usr/share/nginx/html

EXPOSE 3000