import { FuroUi5HeroBanner } from "./FuroUi5HeroBanner";

FuroUi5HeroBanner.define();

declare global {
  interface HTMLElementTagNameMap {
    "furo-ui5-hero-banner": FuroUi5HeroBanner;
  }
}
