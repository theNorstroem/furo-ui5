import { FuroUi5Card } from "./FuroUi5Card";

FuroUi5Card.define();

declare global {
  interface HTMLElementTagNameMap {
    "furo-ui5-card": FuroUi5Card;
  }
}
