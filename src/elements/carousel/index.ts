import { FuroUi5Carousel } from "./FuroUi5Carousel";

FuroUi5Carousel.define();

declare global {
  interface HTMLElementTagNameMap {
    "furo-ui5-carousel": FuroUi5Carousel;
  }
}
