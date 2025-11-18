import { FuroUi5MultiCombobox } from "@/impl/FuroUi5MultiCombobox";

FuroUi5MultiCombobox.define();

declare global {
  interface HTMLElementTagNameMap {
    "furo-ui5-multi-combobox": FuroUi5MultiCombobox;
  }
}
