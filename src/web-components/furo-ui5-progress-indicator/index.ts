import { FuroUi5ProgressIndicator } from "./FuroUi5ProgressIndicator";

FuroUi5ProgressIndicator.define();

declare global {
  interface HTMLElementTagNameMap {
    "furo-ui5-progress-indicator": FuroUi5ProgressIndicator;
  }
}
