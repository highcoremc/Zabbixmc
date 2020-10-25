FROM node:lts-alpine

RUN set -xe \
    && apk add --no-cache bash \
    && apk add --no-cache yarn \
    && npm install \
    && ls -la /

ENV PATH /scripts:$PATH

WORKDIR /app

CMD bash -c 'yarn serve'
ENTRYPOINT []