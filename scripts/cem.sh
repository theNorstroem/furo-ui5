#!/usr/bin/env bash
set -e
moduleDir=$(pwd)/hugo/content/docs
injectsDir=$(pwd)/hugo/content/docs/redactional

cwd=$(pwd)

startDir=$(pwd)

modules="components typerenderer"

collection=$(cat $startDir/package.json | jq .version)
echo $collection

for module in $modules; do
  COMPONENTINDEX=0
  echo $module
  cd $startDir/tmp/$module
  pwd
  # copy our manifest to the target

  mkdir -p $moduleDir/$module
  mkdir -p $injectsDir/$module

  touch $injectsDir/$module/"_"$module"-head.md"
  touch $injectsDir/$module/"_"$module"-description.md"
  touch $injectsDir/$module/"_"$module"-footer.md"


  # _module-inside.md
  simple-generator -d custom-elements.json -t $cwd/scripts/templates/module.components.md.tpl >$moduleDir/$module/_$module-inside.md

echo $collection
  # _module.md
  echo '{"collection":'$collection', "module":"'$module'"}' | jq . > index.base.json
  jq -s '. | {"collection": .[2].collection, "module": .[2].module, "pkg": .[0], "cem": .[1]}' $startDir/package.json custom-elements.json index.base.json > big.json
  simple-generator -d big.json -t $cwd/scripts/templates/_index.md.tpl > $moduleDir/$module/_index.md

  ## loop custom-elements.json
  for row in $(cat custom-elements.json | jq -r '.modules[] | @base64'); do
    _jq() {
      echo ${row} | base64 --decode | jq -r ${1}
    }
    component=$(_jq '.declarations[0].tagName')

    if [ "$component" == "null" ]; then
      name=$(_jq '.declarations[0].name')

      if [ "$name" == "null" ]; then
        echo "************************ $name is not class and not component"
      else
        echo "************************ CLASS *************************"

        path=$(_jq '.path')
        echo '{"path":"'$path'","module":"'$module'", "name":"'$name'"}' | jq . > $name.base.json
        jq --argjson COMPONENTINDEX $COMPONENTINDEX -s '. | .[0].modules[$COMPONENTINDEX].declarations[0]' custom-elements.json >$name.decl.json
        jq --argjson COMPONENTINDEX $COMPONENTINDEX -s '. | .[0].modules[$COMPONENTINDEX]' custom-elements.json >$name.cem.json
        jq -s '. | {"decl": .[3] , "path": .[2].path,"name": .[2].name, "module": .[2].module, "pkg": .[0], "cem": .[1] }' $startDir/package.json $name.cem.json $name.base.json $name.decl.json >$name.json
        simple-generator -d $name.json -t $cwd/scripts/templates/class.md.tpl >$moduleDir/$module/$name.md

      fi

    else
      echo $COMPONENTINDEX $component
      mkdir -p $injectsDir/$module/$component
      touch $injectsDir/$module/$component/"_"$component"-head.md"
      touch $injectsDir/$module/$component/"_"$component"-scripts.md"
      # generate the component documentation itself
      echo '{"module":"'$module'", "component":"'$component'"}' | jq . > $component.base.json

      jq --argjson COMPONENTINDEX $COMPONENTINDEX -s '. | .[0].modules[$COMPONENTINDEX].declarations[0]' custom-elements.json >$component.decl.json
      jq --argjson COMPONENTINDEX $COMPONENTINDEX -s '. | .[0].modules[$COMPONENTINDEX]' custom-elements.json >$component.cem.json
      jq -s '. | {"decl": .[3] , "component": .[2].component, "module": .[2].module, "pkg": .[0], "cem": .[1] }' $startDir/package.json $component.cem.json $component.base.json $component.decl.json >$component.json
      simple-generator -d $component.json -t $cwd/scripts/templates/component.md.tpl >$moduleDir/$module/$component.md

    fi
    COMPONENTINDEX=$((COMPONENTINDEX + 1))
  done


done
