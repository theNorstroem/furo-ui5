import { FuroUi5AvatarBadge } from "./FuroUi5AvatarBadge";

export * from "./FuroUi5AvatarBadge";

FuroUi5AvatarBadge.define();

declare global {
  interface HTMLElementTagNameMap {
    "furo-ui5-avatar-badge": FuroUi5AvatarBadge;
  }
}
