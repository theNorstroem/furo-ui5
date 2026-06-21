import { FuroUi5SegmentedButton } from "./FuroUi5SegmentedButton";

FuroUi5SegmentedButton.define();

declare global {
  interface HTMLElementTagNameMap {
    "furo-ui5-segmented-button": FuroUi5SegmentedButton;
  }
}
