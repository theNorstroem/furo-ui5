#!/usr/bin/env bash
set -e


cwd=$(pwd)

npm run analyze
jq '. + input' package.json custom-elements.json | simple-generator -t ./scripts/templates/webtypes.tpl > web-types.json
echo "✅ web-types.json"
