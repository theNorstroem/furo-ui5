import { FuroUi5BreadcrumbsItem } from "./FuroUi5BreadcrumbsItem";

export * from "./FuroUi5BreadcrumbsItem";

FuroUi5BreadcrumbsItem.define();

declare global {
  interface HTMLElementTagNameMap {
    "furo-ui5-breadcrumbs-item": FuroUi5BreadcrumbsItem;
  }
}
