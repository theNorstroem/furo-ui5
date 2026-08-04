import { FuroUi5RatingIndicator } from "./FuroUi5RatingIndicator";

export * from "./FuroUi5RatingIndicator";

FuroUi5RatingIndicator.define();

declare global {
  interface HTMLElementTagNameMap {
    "furo-ui5-rating-indicator": FuroUi5RatingIndicator;
  }
}
