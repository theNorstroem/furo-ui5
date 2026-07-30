import { FuroUi5TimelineItem } from "./FuroUi5TimelineItem";

FuroUi5TimelineItem.define();

declare global {
  interface HTMLElementTagNameMap {
    "furo-ui5-timeline-item": FuroUi5TimelineItem;
  }
}
