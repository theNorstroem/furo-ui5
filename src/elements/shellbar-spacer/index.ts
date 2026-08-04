import { FuroUi5ShellBarSpacer } from "./FuroUi5ShellBarSpacer";

export * from "./FuroUi5ShellBarSpacer";

FuroUi5ShellBarSpacer.define();

declare global {
  interface HTMLElementTagNameMap {
    "furo-ui5-shellbar-spacer": FuroUi5ShellBarSpacer;
  }
}
