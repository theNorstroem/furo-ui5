import { LitFBP } from "@furo/fbp/dist/LitFBP";
import { css, html, LitElement, nothing } from "lit";
import { property } from "lit/decorators.js";

/**
 * `furo-ui5-section`
 * The object page content according to the SAP Design System Fiori guidelines consists of sections and subsections
 * arranged in a column layout.
 * The furo-ui5-section is basically a layout manager component to structure object pages. Sections can only
 * contain subsections, not content.
 *
 * ```html
 *  <furo-ui5-section heading="STRING">
 *    <furo-ui5-subsection></furo-ui5-subsection>
 *    <furo-ui5-subsection></furo-ui5-subsection>
 *  </furo-ui5-section>
 * ```
 *
 * <p>If a section contains only one subsection, the title of the subsection is used as the name of the section. In this case, there is no subsection submenu in the anchor bar.</p>
 *
 * <p>Sections can only contain subsections, not content. Because of this, the object page only provides toolbars for local actions at the subsection level.</p>
 *
 * @slot {FuroUi5SubSection[]} - defines the content of the section.
 *
 *
 * @tagname furo-ui5-section
 * @public
 */
export class FuroUi5Section extends LitFBP(LitElement) {
  override connectedCallback() {
    super.connectedCallback();
    this.setAttribute("furo-ui5-section", "");
  }

  /**
   * Heading title of the section
   * @public
   */
  @property({ type: String, attribute: "heading" })
  heading = "";

  /**
   * Defines the heading level. Available options are: "H6" to "H1".
   * @public
   * @attr {string} heading-level
   */
  @property({ type: String, attribute: "heading-level" })
  headingLevel = "H3";

  override render() {
    return html`
      <section part="section" aria-label="${this.heading}">
        ${this.heading.length ? html` <furo-ui5-title level="${this.headingLevel}">${this.heading} </furo-ui5-title> ` : nothing}
        <slot></slot>
      </section>
    `;
  }

  static override styles = css`
    :host {
      display: block;
      width: 100%;
    }

    :host([hidden]) {
      display: none;
    }

    section {
      padding: var(--MediaSizeIndentation, 1rem 2rem 0.5rem 2rem);
    }

    furo-ui5-title {
      padding-bottom: var(--MediaSizeIndentationBottom, 0.5rem);
    }
  `;
}
