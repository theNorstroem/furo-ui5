import { FuroUiBusyIndicator } from "@/impl/FuroUi5BusyIndicator";

FuroUiBusyIndicator.define();

declare global {
  interface HTMLElementTagNameMap {
    "furo-ui5-busy-indicator": FuroUiBusyIndicator;
  }
}
