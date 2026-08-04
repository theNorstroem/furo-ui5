import { FuroUi5BusyIndicator } from "./FuroUi5BusyIndicator";

export * from "./FuroUi5BusyIndicator";

FuroUi5BusyIndicator.define();

declare global {
  interface HTMLElementTagNameMap {
    "furo-ui5-busy-indicator": FuroUi5BusyIndicator;
  }
}
