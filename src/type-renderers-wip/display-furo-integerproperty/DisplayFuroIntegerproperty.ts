import { Env } from "@furo/framework/src/furo.js";
import { DisplayInt32 } from "@/type-renderers/display-int32/DisplayInt32";

/**
 * `display-furo-integerproperty`
 * The display-furo-integerproperty component displays a FieldNode of type `furo.Integerproperty` in read only mode.
 *
 * Every display-xxx component should implement the following API:
 * - function: bindData(fieldNode){...}
 *
 * @summary display renderer for `furo.`
 * @element display-furo-
 */
export class DisplayFuroIntegerproperty extends DisplayInt32 {
  _formatDisplay() {
    const displayValue = new Intl.NumberFormat(Env.locale, {}).format(this._field.data);
    if (displayValue !== "NaN") {
      this._displayValue = displayValue;
      this.requestUpdate();
    }
  }
}
