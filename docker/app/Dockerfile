FROM node:lts-alpine

RUN set -xe \
    && apk add --no-cache bash \
    && apk add --no-cache yarn \
    && npm install \
    && ls -la /home \
    && node --version

EXPOSE 8080
WORKDIR /app
VOLUME ["/app"]

ENTRYPOINT []