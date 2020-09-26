FROM node:lts-alpine

WORKDIR /app

RUN set -xe \
    && npm -g update \
    && npm install -g @vue/cli \
    && apk add --no-cache yarn --repository="http://dl-cdn.alpinelinux.org/alpine/edge/community" \
    && apk add --no-cache bash
