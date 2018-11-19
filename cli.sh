#!/usr/bin/env bash

SRC_PATH=${1:-"src/**/*.js"}
CLI_PATH="./node_modules/.bin/prettier-eslint"

if [ ! -e $CLI_PATH ]
then
    CLI_PATH="./node_modules/eslint-config-colisweb/node_modules/.bin/prettier-eslint"
fi

if [ ! -e $CLI_PATH ]
then
    CLI_PATH="prettier-eslint"
fi

$CLI_PATH "$SRC_PATH" --write --no-semi --single-quote --print-width 120 --trailing-comma all --arrow-parens always
