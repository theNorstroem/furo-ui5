import { CellFuroIntegerproperty } from './cell-furo-integerproperty.js';

/**
 * `cell-furo-numberproperty`
 * The cell-furo-numberrproperty component displays a FieldNode of type `furo.Numberproperty` in read only mode.
 *
 * Every cell-xxx component should implement the following API:
 * - function: bindData(fieldNode){...}
 *
 * @summary cell display renderer for `furo.Numberproperty`
 * @element cell-furo-numberproperty
 *
 */
export class CellFuroNumberproperty extends CellFuroIntegerproperty {}

window.customElements.define(
  'cell-furo-numberproperty',
  CellFuroNumberproperty
);
