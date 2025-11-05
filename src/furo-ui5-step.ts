import { FuroUi5Step } from "@/impl/FuroUi5Step";

FuroUi5Step.define();


declare global {
  interface HTMLElementTagNameMap {
    "furo-ui5-step": FuroUi5Step;
  }
}
