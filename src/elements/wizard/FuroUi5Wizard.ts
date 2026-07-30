import Wizard from "@ui5/webcomponents-fiori/dist/Wizard.js";

/**
 * Guides the user through an ordered set of `furo-ui5-wizard-step` children, showing progress in a header navigation bar.
 *
 * ```html
 * <furo-ui5-wizard style="height:280px">
 *   <furo-ui5-wizard-step title-text="Product" selected>
 *     <div style="padding:1rem">Pick a product.</div>
 *   </furo-ui5-wizard-step>
 *   <furo-ui5-wizard-step title-text="Payment" disabled>
 *     <div style="padding:1rem">Enter payment details.</div>
 *   </furo-ui5-wizard-step>
 * </furo-ui5-wizard>
 * ```
 *
 * This is a pass-through wrapper around `ui5-wizard`: the UI5 API (properties, events,
 * slots) is inherited unchanged and no data binding is added.
 *
 * @summary Multi-step guided process with a progress bar.
 * @keywords wizard, steps, guided, process, flow, stepper
 * @category Container
 * @usecase Use to guide the user through a long task split into ordered steps.
 * @related furo-ui5-wizard-step, furo-ui5-tabcontainer, furo-ui5-form-layout
 * @tagname furo-ui5-wizard
 * @public
 */
export class FuroUi5Wizard extends Wizard {
  /**
   * UI5 parents detect slotted children by the original tag name used as an attribute,
   * not by tag name. Without this marker the parent silently ignores the child.
   */
  override connectedCallback() {
    this.setAttribute("ui5-wizard", "");
    return super.connectedCallback();
  }

  /**
   * @private
   */
  static override get metadata() {
    return { ...super.metadata, tag: "furo-ui5-wizard" };
  }
}
