#!/usr/bin/env bash
set -e
moduleDir=`pwd`/hugo/content/docs/modules
injectsDir=`pwd`/hugo/content/docs/redactional



cwd=`pwd`


startDir=`pwd`

modules="components typerenderer"


collection=$(cat $startDir/package.json | jq .version)
echo $collection

for module in $modules; do
 echo $module
 # copy our manifest to the target

 mkdir -p $moduleDir/$module
 mkdir -p $injectsDir/$module

touch $injectsDir/$module/"_"$module"-head.md"
touch $injectsDir/$module/"_"$module"-description.md"
touch $injectsDir/$module/"_"$module"-footer.md"

 ## loop custom-elements.json
  for row in $(cat tmp/$module/custom-elements.json | jq -r '.modules[] | @base64'); do
    _jq() {
     echo ${row} | base64 --decode | jq -r ${1}
    }
  component=$(_jq '.declarations[0].tagName')
  # echo $component


    if [ "$component" == "null" ]
    then
      name=$(_jq '.declarations[0].name')

      if [ "$name" == "null" ]
      then
         echo "************************ not class and not component"
      else

        path=$(_jq '.path')
        echo $path
        echo '{"path":"'$path'", "component":"'$name'", "module":"'$module'", "pkg": '$(cat package.json)', "cem": '$(_jq '.')', "decl": '$(_jq '.declarations[0]')'}' | simple-generator -t $cwd/scripts/templates/class.md.tpl > $moduleDir/$module/$name.md
      fi

    else
          echo $component
          mkdir -p $injectsDir/$module/$component
          touch $injectsDir/$module/$component/"_"$component"-head.md"
          # touch $injectsDir/$module/$component/"_"$component"-description.md"
          # touch $injectsDir/$module/$component/"_"$component"-styling.md"
          # touch $injectsDir/$module/$component/"_"$component"-properties.md"
          # touch $injectsDir/$module/$component/"_"$component"-methods.md"
          # touch $injectsDir/$module/$component/"_"$component"-events.md"
          # touch $injectsDir/$module/$component/"_"$component"-slots.md"
          # touch $injectsDir/$module/$component/"_"$component"-footer.md"
          touch $injectsDir/$module/$component/"_"$component"-scripts.md"
          # generate the component documentation itself
          echo '{"component":"'$component'", "module":"'$module'", "pkg": '$(cat package.json)', "cem": '$(_jq '.')', "decl": '$(_jq '.declarations[0]')'}' | simple-generator -t $cwd/scripts/templates/component.md.tpl > $moduleDir/$module/$component.md
    fi
  done

 # _module-inside.md
  cat tmp/$module/custom-elements.json | simple-generator -t $cwd/scripts/templates/module.components.md.tpl > $moduleDir/$module/_$module-inside.md

 # _module.md
 echo '{"module":"'$module'", "collection":'$collection', "pkg": '$(cat package.json)', "cem": '$(cat tmp/$module/custom-elements.json)' }' | simple-generator -t $cwd/scripts/templates/_index.md.tpl > $moduleDir/$module/_index.md

done
