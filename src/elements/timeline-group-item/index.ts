import { FuroUi5TimelineGroupItem } from "./FuroUi5TimelineGroupItem";

export * from "./FuroUi5TimelineGroupItem";

FuroUi5TimelineGroupItem.define();

declare global {
  interface HTMLElementTagNameMap {
    "furo-ui5-timeline-group-item": FuroUi5TimelineGroupItem;
  }
}
