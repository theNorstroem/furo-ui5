import { FuroUi5ShellBar } from "./FuroUi5ShellBar";

FuroUi5ShellBar.define();

declare global {
  interface HTMLElementTagNameMap {
    "furo-ui5-shellbar": FuroUi5ShellBar;
  }
}
