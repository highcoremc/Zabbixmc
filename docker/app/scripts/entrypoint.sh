#!/bin/bash

# shellcheck disable=SC2124
ARGS="$@"

set -xe

composer install -vvv \
    --no-interaction \
    --no-autoloader \
    --prefer-dist \
    --no-suggest \
    --no-ansi \
    --no-scripts;

composer dump-autoload;

rr serve -c "$ARGS";
