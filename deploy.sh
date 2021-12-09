#!/usr/bin/env sh

# Run with git bash

# abort on errors
set -e

# build
npm run build

cd dist

git init
git add -A
git commit -am 'Deploy'

# Deploying
git push -f git@github.com:ar-rohman/mydo.git master:gh-pages

cd -