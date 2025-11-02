import { FuroUi5Slider } from "@/impl/FuroUi5Slider";

FuroUi5Slider.define();

declare global {
  interface HTMLElementTagNameMap {
    "furo-ui5-slider": FuroUi5Slider;
  }
}
