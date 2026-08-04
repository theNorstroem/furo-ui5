import { FuroUi5ShellBarBranding } from "./FuroUi5ShellBarBranding";

export * from "./FuroUi5ShellBarBranding";

FuroUi5ShellBarBranding.define();

declare global {
  interface HTMLElementTagNameMap {
    "furo-ui5-shellbar-branding": FuroUi5ShellBarBranding;
  }
}
