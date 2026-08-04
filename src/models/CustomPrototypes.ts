import { ToString, ValueOf } from "@furo/open-models";

import type { Colour } from "./furoui5test/cube/Colour";
import type { CubeEntity } from "./furoui5test/cube/CubeEntity";

/**
 * In this file, we set the toString() and valueOf() methods for our types.
 */

ToString.set("furo.cube.CubeEntity", (d: CubeEntity) => d.displayName.value);

/**
 * Let the colour type return a 'rgba(22,22,22,1)' color, this can be directly used in the template literals
 */
ToString.set(
  "furo.cube.Colour",
  (d: Colour) => `rgba(${d.red.value.toString()}, ${d.green.value.toString()}, ${d.blue.value.toString()}, ${d.alpha.value.toFixed(2)})`
);

// Returns the volume of the cube. This comes very handy if you use it in calculations.
ValueOf.set("furo.cube.CubeEntity", (d: CubeEntity) => d.cube.height.value * d.cube.breadth.value * d.cube.length.value);
