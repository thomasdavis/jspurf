#!/usr/bin/env bash
BUCKET=jspurf
node-sass --include-path scss src/scss/main.scss public/css/main.css
webpack -p
aws  s3  sync ./public s3://$BUCKET/$CIRCLE_SHA1/public --cache-control max-age=31536000
aws  s3  sync ./public/app/dist s3://$BUCKET/$CIRCLE_SHA1/app/dist --cache-control max-age=31536000
