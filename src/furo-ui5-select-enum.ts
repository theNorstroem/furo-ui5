import { FuroUi5SelectEnum } from "@/impl/FuroUi5SelectEnum";

FuroUi5SelectEnum.define();

declare global {
  interface HTMLElementTagNameMap {
    "furo-ui5-select-enum": FuroUi5SelectEnum;
  }
}
