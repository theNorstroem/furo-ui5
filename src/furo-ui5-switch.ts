import { FuroUi5Switch } from "@/impl/FuroUi5Switch";

FuroUi5Switch.define();

declare global {
  interface HTMLElementTagNameMap {
    "furo-ui5-switch": FuroUi5Switch;
  }
}
