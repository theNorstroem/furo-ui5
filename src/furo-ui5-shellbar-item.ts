import { FuroUi5ShellBarItem } from "@/impl/FuroUi5ShellBarItem";

FuroUi5ShellBarItem.define();

declare global {
  interface HTMLElementTagNameMap {
    "furo-ui5-shellbar-item": FuroUi5ShellBarItem;
  }
}
