import { FuroUi5WizardStep } from "./FuroUi5WizardStep";

export * from "./FuroUi5WizardStep";

FuroUi5WizardStep.define();

declare global {
  interface HTMLElementTagNameMap {
    "furo-ui5-wizard-step": FuroUi5WizardStep;
  }
}
