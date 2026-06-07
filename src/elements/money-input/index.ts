import { FuroUi5MoneyInput } from "./FuroUi5MoneyInput";

if (!customElements.get("furo-ui5-money-input")) {
  customElements.define("furo-ui5-money-input", FuroUi5MoneyInput);
}

declare global {
  interface HTMLElementTagNameMap {
    "furo-ui5-money-input": FuroUi5MoneyInput;
  }
}
