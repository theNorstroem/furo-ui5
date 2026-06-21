import { FuroUi5Breadcrumbs } from "./FuroUi5Breadcrumbs";

FuroUi5Breadcrumbs.define();

declare global {
  interface HTMLElementTagNameMap {
    "furo-ui5-breadcrumbs": FuroUi5Breadcrumbs;
  }
}
