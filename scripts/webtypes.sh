#!/usr/bin/env bash
set -e


cwd=$(pwd)

npm run analyze
jq '. + input' package.json custom-elements.json | simple-generator -t ./scripts/templates/webtypes.tpl > web-types.json
echo "✅ web-types.json"

jq '. + input' ./node_modules/@ui5/webcomponents-fiori/package.json ./node_modules/@ui5/webcomponents-fiori/dist/custom-elements.json | simple-generator -t ./scripts/templates/webtypes_cem1.tpl > ./external-web-types/@ui5/webcomponents-fiori/web-types.json
echo "✅ external-web-types/@ui5/webcomponents-fiori/web-types.json"


jq '. + input' ./node_modules/@ui5/webcomponents/package.json ./node_modules/@ui5/webcomponents/dist/custom-elements.json | simple-generator -t ./scripts/templates/webtypes_cem1.tpl > ./external-web-types/@ui5/webcomponents/web-types.json
echo "✅ external-web-types/@ui5/webcomponents/web-types.json"
