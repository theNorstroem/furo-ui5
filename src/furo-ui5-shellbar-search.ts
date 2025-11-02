import { FuroUi5ShellBarSearch } from "@/impl/FuroUi5ShellBarSearch";

FuroUi5ShellBarSearch.define();

declare global {
  interface HTMLElementTagNameMap {
    "furo-ui5-shellbar-search": FuroUi5ShellBarSearch;
  }
}
