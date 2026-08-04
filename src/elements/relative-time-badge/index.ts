import { FuroUi5RelativeTimeBadge } from "./FuroUi5RelativeTimeBadge";

export * from "./FuroUi5RelativeTimeBadge";

FuroUi5RelativeTimeBadge.define();

declare global {
  interface HTMLElementTagNameMap {
    "furo-ui5-relative-time-badge": FuroUi5RelativeTimeBadge;
  }
}
