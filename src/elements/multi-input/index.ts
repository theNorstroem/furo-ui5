import { FuroUi5MultiInput } from "./FuroUi5MultiInput";

export * from "./FuroUi5MultiInput";

FuroUi5MultiInput.define();

declare global {
  interface HTMLElementTagNameMap {
    "furo-ui5-multi-input": FuroUi5MultiInput;
  }
}
