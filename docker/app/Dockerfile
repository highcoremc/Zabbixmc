FROM node:lts-alpine

RUN set -xe \
    && apk add --no-cache bash yarn sudo \
    && node --version

COPY . /app
RUN set -xe \
    && yarn install

EXPOSE 8080
WORKDIR /app

CMD bash -c 'yarn serve'
ENTRYPOINT []