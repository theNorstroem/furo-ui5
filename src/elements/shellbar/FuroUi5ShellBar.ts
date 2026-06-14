import ShellBar from "@ui5/webcomponents-fiori/dist/ShellBar.js";

/**
 *
 * @summary Application header bar with branding, navigation, and user actions.
 * @keywords shellbar, header, app-bar, navigation, branding, toolbar
 * @category PageStructure
 * @usecase Use as the main application header for branding and global navigation.
 * @related furo-ui5-shellbar-item, furo-ui5-shellbar-search, furo-ui5-user-menu
 * @tagname furo-ui5-shellbar
 * @attribute {boolean} shadow - Drops a shadow below the shellbar
 *
 */
export class FuroUi5ShellBar extends ShellBar {
  /**
   * @private
   */
  static override get metadata() {
    const md = super.metadata;
    md.tag = "furo-ui5-shellbar";
    return md;
  }

  /**
   * @private
   */
  static override get styles() {
    return [
      super.styles,
      // language=CSS
      `

        :host(:not([hidden])) {
          box-shadow: none;
        }

        ::slotted([furo-ui5-avatar][slot="profile"]) {
          min-width: 0;
          width: 2rem;
          height: 2rem;
          padding: 0.25rem;
          pointer-events: none;
        }




        :host([shadow]) {
          box-shadow: var(--sapContent_HeaderShadow);
        }

        :host([shadow]) .ui5-shellbar-root {
          box-shadow: var(--sapContent_HeaderShadow);
        }

        @media print {

          [ui5-button],
          ::slotted([furo-ui5-shellbar-search]),
          ::slotted([furo-ui5-toggle-button]),
          ::slotted([furo-ui5-button][slot="startButton"]) {
            display: none;
          }

          [ui5-button][profile-btn] {
            display: flex;
          }
        }
      `,
    ];
  }
}
