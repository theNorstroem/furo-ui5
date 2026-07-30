import { FuroUi5FlexibleColumnLayout } from "./FuroUi5FlexibleColumnLayout";

FuroUi5FlexibleColumnLayout.define();

declare global {
  interface HTMLElementTagNameMap {
    "furo-ui5-flexible-column-layout": FuroUi5FlexibleColumnLayout;
  }
}
