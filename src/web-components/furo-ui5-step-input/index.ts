import { FuroUi5StepInput } from "./FuroUi5StepInput";

FuroUi5StepInput.define();

declare global {
  interface HTMLElementTagNameMap {
    "furo-ui5-step-input": FuroUi5StepInput;
  }
}
