import WizardStep from "@ui5/webcomponents-fiori/dist/WizardStep.js";

/**
 * One stage of a `furo-ui5-wizard`. Its `title-text` and `icon` feed the wizard's progress navigation.
 *
 * ```html
 * <furo-ui5-wizard style="height:280px">
 *   <furo-ui5-wizard-step title-text="Product" icon="product" selected>
 *     <div style="padding:1rem">Step content.</div>
 *   </furo-ui5-wizard-step>
 *   <furo-ui5-wizard-step title-text="Review" icon="accept" disabled>
 *     <div style="padding:1rem">Review content.</div>
 *   </furo-ui5-wizard-step>
 * </furo-ui5-wizard>
 * ```
 *
 * This is a pass-through wrapper around `ui5-wizard-step`: the UI5 API (properties, events,
 * slots) is inherited unchanged and no data binding is added.
 *
 * @summary Single step of a wizard.
 * @keywords wizard, step, page, stage, process
 * @category Container
 * @usecase Use as a child of furo-ui5-wizard to define one stage of the process.
 * @related furo-ui5-wizard, furo-ui5-form-layout, furo-ui5-section
 * @tagname furo-ui5-wizard-step
 * @public
 */
export class FuroUi5WizardStep extends WizardStep {
  /**
   * UI5 parents detect slotted children by the original tag name used as an attribute,
   * not by tag name. Without this marker the parent silently ignores the child.
   */
  override connectedCallback() {
    this.setAttribute("ui5-wizard-step", "");
    return super.connectedCallback();
  }

  /**
   * @private
   */
  static override get metadata() {
    return { ...super.metadata, tag: "furo-ui5-wizard-step" };
  }
}
