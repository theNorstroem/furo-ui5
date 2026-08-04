import { FuroUi5TabSeparator } from "./FuroUi5TabSeparator";

export * from "./FuroUi5TabSeparator";

FuroUi5TabSeparator.define();

declare global {
  interface HTMLElementTagNameMap {
    "furo-ui5-tab-separator": FuroUi5TabSeparator;
  }
}
