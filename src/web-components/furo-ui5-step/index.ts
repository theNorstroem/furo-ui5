import { FuroUi5Step } from "./FuroUi5Step";

FuroUi5Step.define();

declare global {
  interface HTMLElementTagNameMap {
    "furo-ui5-step": FuroUi5Step;
  }
}
