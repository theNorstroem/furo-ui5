import "@furo/layout/furo-horizontal-flex";
import "@ui5/webcomponents/dist/Link.js";
import "@/elements/link";
import "@/elements/title";

import { css, html, LitElement, nothing } from "lit";
import { property, query, state } from "lit/decorators.js";

/**
 * `furo-ui5-subsection`
 * The furo-ui5-subsection component is a containers for actual content. It is envisaged that this component will be
 * used within a furo-ui5-section
 * Subsections have a progressive disclosure mechanism to show and hide content
 *
 * https://experience.sap.com/fiori-design-web/object-page/#content-area
 *
 * ```html
 *  <furo-ui5-section heading="STRING">
 *    <furo-ui5-subsection heading="Subsection Title">
 *      <furo-horizontal-flex slot="action">...</furo-horizontal-flex>
 *      <my-content></my-content>
 *      <more-content slot="more"></more-content>
 *    </furo-ui5-subsection>
 *  </furo-ui5-section>
 * ```
 * ## Methods
 * **bindData(fieldNode)**
 * Binds an entity field to the heading. You can use the entity even when no data was received.
 *
 * @slot {HTMLElement[]} - defines the content of the subsection.
 * @slot {HTMLElement[]} headline-start - defines the content right after the header.
 * @slot {HTMLElement[]} headline-end - defines the content before the action slot.
 * @slot {HTMLElement[]} action - defines the heading bar of the subsection.
 * @slot {HTMLElement[]} more - defines the additional content in the `show more` section.
 *
 * @summary Sub-level content section within an object page section.
 * @keywords sub-section, nested, section, content, object-page
 * @category Container
 * @usecase Use to organize content within furo-ui5-section.
 * @related furo-ui5-section
 * @tagname furo-ui5-subsection
 */
export class FuroUi5Subsection extends LitElement {
  @state() private hasMoreContent = false;

  @query('slot[name="more"]') private moreSlot!: HTMLSlotElement;

  /**
   * Heading text of the subsection
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
  headingLevel = "H4";

  /**
   * Defines the text that will be displayed for `show more`
   * @public
   * @attr {string} show-more-text
   */
  @property({ type: String, attribute: "show-more-text" })
  showMoreText = "show more";

  /**
   * Defines the text that will be displayed for `show less`
   * @public
   * @attr {string} show-less-text
   */
  @property({ type: String, attribute: "show-less-text" })
  showLessText = "show less";

  /**
   * expanded state of the `read more` slot
   * @public
   */
  @property({ type: Boolean, attribute: "expanded", reflect: true })
  expanded = false;

  /**
   * Sets the content area to full width by removing the default inline padding.
   * @public
   * full-width
   */
  @property({ type: Boolean, attribute: "full-width", reflect: true })
  fullWidth = false;

  private onToggleMoreClicked = () => {
    // toggle the read more content section
    this.expanded = !this.expanded;
  };

  override connectedCallback() {
    super.connectedCallback();
    this.setAttribute("furo-ui5-subsection", "");
  }

  override firstUpdated() {
    this.moreSlot.addEventListener("slotchange", () => {
      this.hasMoreContent = this.moreSlot.assignedElements().length > 0;
    });
  }

  override render() {
    return html` <furo-horizontal-flex class="heading" space>
        ${this.heading.length ? html` <furo-ui5-title level="${this.headingLevel}">${this.heading} </furo-ui5-title> ` : nothing}
        <slot name="headlineStart"></slot>
        <span flex></span>
        <slot name="headlineEnd"></slot>
        <div>
          <slot name="action"></slot>
        </div>
      </furo-horizontal-flex>

      <slot id="default"></slot>
      <furo-horizontal-flex class="more">
        <span flex></span>
        <furo-ui5-link @click="${this.onToggleMoreClicked}" ?hidden="${!this.hasMoreContent}">${this.showMoreText} </furo-ui5-link>
      </furo-horizontal-flex>

      <slot name="more"></slot>

      <furo-horizontal-flex class="less">
        <div flex></div>
        <furo-ui5-link @click="${this.onToggleMoreClicked}">${this.showLessText} </furo-ui5-link>
      </furo-horizontal-flex>`;
  }

  static override styles = css`
    :host {
      display: block;
      background: var(--sapObjectHeader_Background);
      padding: 1rem;
    }

    :host(:first-of-type) {
      border-radius: 0.75rem 0.75rem 0 0;
    }

    :host(:last-of-type) {
      border-radius: 0 0 0.75rem 0.75rem;
    }

    :host(:only-of-type) {
      border-radius: 0.75rem 0.75rem;
    }

    :host([full-width]) {
      padding: 0 0 0.75rem 0;
    }

    :host([full-width][heading]) {
      padding: 0.75rem 0 0.75rem 0;
    }

    :host([full-width]:not([heading])) .heading {
      padding-bottom: 0;
    }

    :host([full-width]:not([heading])) ::slotted(*:first-child) {
      border-radius: 0.75rem 0.75rem 0 0;
    }

    :host([full-width]) .more,
    :host([full-width]) .less,
    :host([full-width]) .heading {
      box-sizing: border-box;
      padding-inline: 1rem;
    }

    :host([hidden]) {
      display: none;
    }

    slot[name="more"] {
      display: none;
      padding-top: 1rem;
    }

    :host([expanded]) slot[name="more"] {
      display: block;
    }

    :host([expanded]) .less {
      display: flex;
      padding-top: 1rem;
    }

    .less {
      display: none;
    }

    :host([expanded]) .more {
      display: none;
    }

    furo-horizontal-flex.heading {
      padding-bottom: var(--MediaSizeIndentationBottom, 0.5rem);
      align-items: center;
    }

    furo-horizontal-flex.more {
      padding-top: var(--MediaSizeIndentationBottom, 0.5rem);
    }

    // [css-shadow-parts][css-scoping] Allow ::part after ::slotted
    // https://github.com/w3c/csswg-drafts/issues/3896
    ::slotted(furo-ui5-tabcontainer)::part(tabstrip) {
      padding: 0;
    }
  `;
}
