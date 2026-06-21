import { FuroUi5RangeSlider } from "./FuroUi5RangeSlider";

FuroUi5RangeSlider.define();

declare global {
  interface HTMLElementTagNameMap {
    "furo-ui5-range-slider": FuroUi5RangeSlider;
  }
}
