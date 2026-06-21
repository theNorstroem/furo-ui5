import { FuroUi5SegmentedButtonItem } from "./FuroUi5SegmentedButtonItem";

FuroUi5SegmentedButtonItem.define();

declare global {
  interface HTMLElementTagNameMap {
    "furo-ui5-segmented-button-item": FuroUi5SegmentedButtonItem;
  }
}
