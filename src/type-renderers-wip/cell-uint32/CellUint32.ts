import { CellInt32 } from "@/type-renderers/cell-int32/CellInt32";
/**
 * `cell-uint32`
 * The cell-uint32 component displays a FieldNode of type `uint32` in read only mode.
 *
 * The component uses locale from the environment to display the date value accordingly.
 * https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat
 *
 * Every cell-xxx component should implement the following API:
 * - function: bindData(fieldNode){...}
 *
 * @summary cell display renderer for `uint32`
 * @element cell-uint32
 */
export class CellUint32 extends CellInt32 {}
