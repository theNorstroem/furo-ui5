import { FuroUi5NumberInput } from "@/impl/FuroUi5NumberInput";

FuroUi5NumberInput.define();

declare global {
  interface HTMLElementTagNameMap {
    "furo-ui5-number-input": FuroUi5NumberInput;
  }
}
