import { FuroUi5RatingIndicator } from "@/impl/FuroUi5RatingIndicator";

FuroUi5RatingIndicator.define();

declare global {
  interface HTMLElementTagNameMap {
    "furo-ui5-rating-indicator": FuroUi5RatingIndicator;
  }
}
