import { FuroUi5AvatarGroup } from "./FuroUi5AvatarGroup";

FuroUi5AvatarGroup.define();

declare global {
  interface HTMLElementTagNameMap {
    "furo-ui5-avatar-group": FuroUi5AvatarGroup;
  }
}
