import { FuroUi5Timeline } from "./FuroUi5Timeline";

FuroUi5Timeline.define();

declare global {
  interface HTMLElementTagNameMap {
    "furo-ui5-timeline": FuroUi5Timeline;
  }
}
