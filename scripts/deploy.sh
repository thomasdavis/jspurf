#!/usr/bin/env bash
BUCKET=jspurf
aws  s3  sync ./dist s3://$BUCKET/$CIRCLE_SHA1 --cache-control max-age=31536000
