#!/usr/bin/env bash

# remove old search indexes
rm docs/en.search*

# build docs
hugo -s ./hugo -d ../docs
cp -r mockdata docs/mockdata
# add changes
git add docs/.

# autocommit
git commit -m "autocommit publish docs"
# publish by pushing changes
git push
