import "@furo/layout/furo-horizontal-flex";

import { css, CSSResult, html, LitElement } from "lit";
import { property, query } from "lit/decorators.js";

/**
 * ### Description
 * A form is used to present data to the user and to allow users to enter data in a structured way. The `FormLayout` component is a container for `FormGroup`s.
 *
 * It controls the layout according to the number of groups and content width according to the rules from the [guidelines](https://experience.sap.com/fiori-design-web/form/).
 *
 * ### Types
 * There are three types of forms:
 *
 * - Display-only: the data is presented only as label-value field pairs without editable fields.
 * - Editable: the data is presented as label-input field pairs, so users can enter data.
 * - Mixed: some fields are editable and some are not.
 *
 * ### Breakpoints for the group handling
 * The breakpoints are referenced by the container size of the `FormLayout` component, not by the screen size.
 *
 * #### Single group
 * If there is only one group used or the available space is below 1024px, the width for the group is always full width.
 * ![](assets/Form-singlecolumn-1.92-1.png)
 *
 * #### Multiple groups
 * If the space is 1024px and higher, the groups are displayed side by side with a fraction of 50:50.
 * ![](assets/form-sizexl-1.92-1-1100x211.png)
 *
 *
 * If the space is 1440px and higher, the groups are displayed with a fraction of 33:33:33.
 * ![](assets/Form_with_three_form_groups__three_columns_sizexl-1.92-1100x225.png)
 * ![](assets/Form_with_two_form_groups__three_columns_sizexl-1.92-1100x225.png)
 *
 * ### Breakpoints for the form rows**
 *
 * #### Size S (Smartphones, small Dialogs, Sidepanel,...)
 * Size S reaches up to 600 px. This means that as soon as the width of the form reaches 601 px, it changes from S to M, because the default value of breakpointM is 600.
 * This means that the form groups are positioned below each other in a single column and the labels are positioned above the fields to avoid truncation of the labels.
 *
 * The label-field ratio is 12:12:0 by default:
 *
 * 12 grid columns of the responsive grid layout are used by the labels.
 * (A label handles the space of a whole row.)
 * 12 grid columns of the responsive grid layout are used by the fields.
 * (A field handles the space of a whole row.)
 * 0 grid columns of the responsive grid layout are used by empty columns.
 * (There is no empty space on the right of the field.)*
 * ![](assets/03-form-BreakpointM_023n_Belize.png)
 *
 * ####  Size M
 * Size M of the form also has a single-column layout within the responsive grid layout by default.
 * However, in size M the labels are positioned in the same row as the corresponding input field or value, and form groups are positioned below each other.
 *
 * The label-field ratio is 4:8:0 by default:
 *
 * 4 grid columns of the responsive grid layout are used by the labels.
 * 8 grid columns of the responsive grid layout are used by the fields.
 * 0 columns of the responsive grid layout are used by empty columns.
 *
 * ![](assets/04-form-BreakpointM_014n_Belize-1.png)
 *
 * #### Size L
 * The form in size L use a two-column layout within the responsive grid layout by default.
 * That means that the form groups are placed next to each other to have all the information on one screen and to avoid scrolling.
 * In these columns, the labels are positioned in the same row as the corresponding input field or value.
 * So the form groups adopt the Z layout (reading direction in rows, not in columns).
 *
 * The label-field ratio is 4:7:1 by default:
 *
 * 4 grid columns of the responsive grid layout are used by the labels.
 * 7 grid columns of the responsive grid layout are used by fields.
 * 1 grid columns of the responsive grid layout are used by empty columns.
 *
 * ![](assets/05-form-BreakpointL_023_Belize.png)
 *
 * #### Size XL
 * To avoid the stretching of the form field on large screens, the form uses extra empty columns for the layout.
 *
 * The label-field ratio for size XL is 3:5:4
 *
 * 3 grid columns of the responsive grid layout are used by labels.
 * 5 grid columns of the responsive grid layout are used by fields.
 * 4 grid columns of the responsive grid layout are used by empty columns.
 *
 * ![](assets/06-form-BreakpointL_014_Belize.png)
 *
 * ### Segmented fields
 * With the help of the `FormFieldSegmenter` you can have segmented fields with the patterns `SmallBig` and `BigSmall`.
 * ![](assets/form_segmented_field.png)
 *
 * ### Units of measurement
 * The `FormFieldSegmenter` is also used to display units right to the input.
 *
 * ![](assets/Form_units.png)
 *
 * ### Text content
 * If you want to add text content instead of input elements (for readonly forms), you should use the **text** slot of the `FormRow` component.
 *
 *
 * @slot {HTMLElement[]} action - Slot for action items, prefer transparent design on buttons.
 * @slot {HTMLElement[]} - Slot for form groups. Not limited to form groups, when you know what you do.
 *
 * @tagname furo-ui5-form-layout
 * @public
 */
export class FuroUi5FormLayout extends LitElement {
  /**
   * Title of the form.
   * @public
   * @attr {string} form-title
   */
  @property({ type: String, attribute: "form-title" })
  public formTitle = "";

  /**
   * Level for the heading.
   * @public
   * @attr {string} heading-level
   */
  @property({ type: String, attribute: "heading-level" })
  public headingLevel: "H1" | "H2" | "H3" | "H4" | "H5" | "H6" = "H5";

  /**
   * Private auto calculated attribute, do not set.
   * @private
   * @attr {boolean} multi-columns
   */
  @property({ type: Boolean, attribute: "multi-columns", reflect: true })
  // @ts-expect-error needed to update the CSS attribute
  private multiColumns = false;

  @query("slot:not([name])") private defaultSlot!: HTMLSlotElement;

  override firstUpdated() {
    this.defaultSlot.addEventListener("slotchange", () => {
      const nodes = this.defaultSlot.assignedElements();
      this.multiColumns = nodes.length > 1;
    });
  }

  override render() {
    return html`<div class="head">
        <furo-horizontal-flex>
          <ui5-title flex level="${this.headingLevel}">${this.formTitle}</ui5-title>
          <slot name="action"></slot>
        </furo-horizontal-flex>
      </div>
      <slot></slot>`;
  }

  static override styles: CSSResult | CSSResult[] = css`
    :host {
      display: block;
      container-type: inline-size;
    }

    :host([hidden]) {
      display: none;
    }

    furo-horizontal-flex {
      align-items: center;
    }

    .head {
      border-bottom: 1px solid var(--sapGroup_ContentBorderColor);
      padding-bottom: var(--furo-ui5-responsive-layout-row-gap, 1rem);
      margin-block: var(--furo-ui5-responsive-layout-row-gap, 1rem);
    }

    ui5-title {
      margin-block: 0;
      font-size: var(--sapFontHeader5Size);
    }

    slot:not([name]) {
      border: none;
      margin-inline: 0;
      padding-inline: 0;
      display: grid;
      grid-row-gap: var(--furo-ui5-responsive-layout-row-gap, 1rem);
      grid-column-gap: var(--furo-ui5-responsive-layout-column-gap, 1rem);
      grid-template-columns: repeat(1, 1fr);
    }
    ::slotted(*[spacer]) {
      display: none;
    }

    @container (min-width: 1024px) {
      :host([multi-columns]) slot:not([name]) {
        grid-template-columns: repeat(2, 1fr);
      }
      ::slotted(*[full]) {
        grid-column: span 2 / auto;
      }
      ::slotted(*[spacer]) {
        display: block;
      }
    }
    @container (min-width: 1440px) {
      :host([multi-columns]) slot:not([name]) {
        grid-template-columns: repeat(3, 1fr);
      }
      ::slotted(*[full]) {
        grid-column: span 3 / auto;
      }
      ::slotted(*[spacer]) {
        display: block;
        grid-column: span 2 / auto;
      }
    }
  `;
}
