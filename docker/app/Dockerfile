FROM node:lts-alpine

RUN set -xe \
    && apk add --no-cache bash yarn sudo \
    && node --version

RUN set -xe \
    && yarn install

EXPOSE 8080
WORKDIR /app

CMD bash -c 'yarn install && yarn serve'
ENTRYPOINT []
