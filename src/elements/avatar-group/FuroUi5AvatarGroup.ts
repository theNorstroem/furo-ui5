import AvatarGroup from "@ui5/webcomponents/dist/AvatarGroup.js";

/**
 * The 'furo-ui5-avatar-group' is a thin wrapper around the
 * [SAP ui5 AvatarGroup element](https://ui5.github.io/webcomponents/components/AvatarGroup/).
 *
 * It exposes the full UI5 AvatarGroup API unchanged. There is intentionally **no data binding** —
 * place `furo-ui5-avatar` children yourself.
 *
 * @summary Grouped/overlapping avatars container (no data binding).
 * @keywords avatar, group, people, stack
 * @category Display
 * @usecase Use to display a group of avatars; provide avatars as children.
 * @related furo-ui5-avatar
 * @tagname furo-ui5-avatar-group
 */
export class FuroUi5AvatarGroup extends AvatarGroup {
  /**
   * @private
   */
  static override get metadata() {
    const md = super.metadata;
    md.tag = "furo-ui5-avatar-group";
    return md;
  }
}
