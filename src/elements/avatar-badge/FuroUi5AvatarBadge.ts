import AvatarBadge from "@ui5/webcomponents/dist/AvatarBadge.js";

/**
 * The 'furo-ui5-avatar-badge' is a thin wrapper around the
 * [SAP ui5 AvatarBadge element](https://ui5.github.io/webcomponents/components/main/Avatar/).
 *
 * It exposes the full UI5 AvatarBadge API unchanged and is meant to be slotted into
 * `furo-ui5-avatar`. There is intentionally **no data binding**.
 *
 * @summary A badge overlay for an avatar (no data binding).
 * @keywords avatar, badge, status, overlay
 * @category Display
 * @usecase Use as the badge slot of furo-ui5-avatar to show a status indicator.
 * @related furo-ui5-avatar
 * @tagname furo-ui5-avatar-badge
 */
export class FuroUi5AvatarBadge extends AvatarBadge {
  /**
   * @private
   */
  static override get metadata() {
    return { ...super.metadata, tag: "furo-ui5-avatar-badge" };
  }
}
