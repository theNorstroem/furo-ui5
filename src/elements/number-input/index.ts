import { FuroUi5NumberInput } from "./FuroUi5NumberInput";

export * from "./FuroUi5NumberInput";

FuroUi5NumberInput.define();

declare global {
  interface HTMLElementTagNameMap {
    "furo-ui5-number-input": FuroUi5NumberInput;
  }
}
