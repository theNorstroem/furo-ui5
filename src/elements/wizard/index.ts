import { FuroUi5Wizard } from "./FuroUi5Wizard";

export * from "./FuroUi5Wizard";

FuroUi5Wizard.define();

declare global {
  interface HTMLElementTagNameMap {
    "furo-ui5-wizard": FuroUi5Wizard;
  }
}
