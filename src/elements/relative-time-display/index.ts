import { FuroUi5RelativeTimeDisplay } from "./FuroUi5RelativeTimeDisplay";

FuroUi5RelativeTimeDisplay.define();

declare global {
  interface HTMLElementTagNameMap {
    "furo-ui5-relative-time-display": FuroUi5RelativeTimeDisplay;
  }
}
