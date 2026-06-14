/**
 * Selection / interaction mode for `furo-ui5-tree-table`.
 *
 * - `None` (default) — no selection
 * - `SingleSelect` — keyboard and mouse select of a single row
 * - `MultiSelect` — **NOT IMPLEMENTED**
 */
export enum TreeTableMode {
  None = "None",
  SingleSelect = "SingleSelect",
  MultiSelect = "MultiSelect",
}

export default TreeTableMode;
