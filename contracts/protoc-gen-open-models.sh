#!/usr/bin/env bash
WD=`pwd`


# Directory holding all .proto files
SRC_DIR="$WD/contracts/proto"

EXT_DIR="$WD/contract/build/extracted-include-protos/main"

# Directory to write generated code (.d.ts files)
OUT_DIR="$WD/src/models"

protoc \
       -I./contracts/proto_dependencies \
       -I$SRC_DIR \
       --open-models_out=$OUT_DIR \
       $(find "${SRC_DIR}" -iname "*.proto")
