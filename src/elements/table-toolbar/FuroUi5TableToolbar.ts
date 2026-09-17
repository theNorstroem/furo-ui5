import type { CSSResult } from "lit";
import { css, html, LitElement } from "lit";

/**
 * ### Description
 *
 * The table toolbar always appears above the table. The control is used for key actions that impact the entire table.
 *
 * > Hint: Use a `furo-ui5-toolbar` in the action slot to have the menu feature on small screens.
 *
 * ### Usage
 *
 * #### Use the table toolbar if:
 * - There are multiple objects on your page and you need to edit only a single table.
 * - You want to show actions as close to their corresponding controls as possible.
 * - You need a title for your table.
 *
 * #### Do not use the table toolbar if:
 * - You are using single selection and have only one or two actions. In this case, place the actions on each line.
 *
 * ### Components
 * The table toolbar can contain several components, including a title and several types of button. Actions are grouped by the following action types:
 *
 * - Finalizing actions, such as Save or Cancel. Finalizing actions are app-specific and are used only if the table is editable.
 * - Business actions, such as Edit or Create. Business actions can be app-specific or general object management actions.
 * - Actions for managing the content, such as Sort or Filter. These settings are also known as "view settings".
 * - Generic actions, such as Export to Spreadsheet.
 *
 * Between the groups, add a separator line (`furo-ui5-table-toolbar-separator`).
 *
 * The following content can be part of the table toolbar. Use only the content your users really need. For the remaining content, keep the order shown below:
 *
 * - Title
 * - Variant management or content switch (for example, as used to switch between multiple views in a list report)
 * - Search
 * - Finalizing actions:
 *   - Save
 *   - Cancel
 *
 * - Business actions: Use this action type for app-specific actions. This group contains:
 * - App-specific business actions
 * - Actions for object management
 *   - Create (for new items) or Add (for existing items)
 *   - Edit
 *   - Delete (if the object itself is deleted) or Remove (if the reference to an item is removed)
 *   - Paste
 *
 *  The order of actions in this group is not "fixed". Place all the business actions, except for Paste, in the order of their importance for the use case. Always keep Paste as the last business action in the group.
 *
 *  Try to keep Create/Add, Edit, and Delete/Remove together, but only if this is meaningful in your app.
 *
 * - Actions for content management (view settings)
 *   - Show Details / Hide Details
 *   - Sort
 *   - Filter
 *   - Group
 *   - Column Settings
 * - Generic actions
 *   - Export to Spreadsheet
 *   - Print
 * - Maximize / Minimize
 * - View switch (for example, to switch between table and chart view)
 *
 * ### Empty areas collapse by themselves
 *
 * The middle and the action area are removed from the layout when nothing is slotted into them, and the
 * start column stops claiming the free space when there is no middle area. The component tracks this on
 * `slotchange` and mirrors it onto itself as the read-only `has-middle` / `has-action` attributes, which
 * are what the internal stylesheet keys off. Do not set them by hand.
 *
 * This is not doable in CSS alone: `:has()` is invalid inside `:host()`, and `:host:has(...)`, while it
 * parses, never matches -- a selector in a shadow stylesheet cannot reach across the shadow boundary to
 * the host's light-DOM children.
 *
 * ### ES6 Module Import
 *
 * `import '@furo/ui5/table-toolbar'`
 *
 * `import '@furo/ui5/table-toolbar-separator'`
 *
 * @slot {HTMLElement[]} - Defines the content in the start column. Typically a `furo-ui5-title`.
 * @slot {HTMLElement[]} middle - Defines the content in the middle column, like a search field or a variant switch.
 * @slot {HTMLElement[]} action - Defines the content in the action area (on the right).
 *
 * @csspart default - Use this to format the start container `div` inside the shadow root of the component, which surrounds the default slot.
 * @csspart middle - Use this to format the middle container `div` inside the shadow root of the component, which surrounds the `middle` slot.
 * @csspart action - Use this to format the action container `div` inside the shadow root of the component, which surrounds the `action` slot.
 *
 * @cssprop [--sapToolbar_Background=--sapGroup_ContentBackground] - the background of the toolbar
 * @cssprop [--sapToolbar_SeparatorColor] - the color of the bottom border
 * @cssprop [--sapFontHeader5Size] - the font size of a slotted `furo-ui5-title` or `ui5-title`
 *
 * @author Furo
 *
 * @summary Toolbar specifically designed for table actions and controls.
 * @keywords table-toolbar, toolbar, actions, filter, sort, controls, table
 * @category Table
 * @usecase Use above tables for table-specific actions like filter and sort.
 * @related furo-ui5-table-toolbar-separator, furo-ui5-toolbar, furo-ui5-toolbar-button, furo-ui5-title
 * @tagname furo-ui5-table-toolbar
 * @public
 */
export class FuroUi5TableToolbar extends LitElement {
  /**
   * Mirrors "the middle slot has content" onto the host as the `has-middle` attribute.
   *
   * @private
   */
  private readonly _checkMiddleSlotContent: (e: Event) => void = (e: Event) => {
    this.toggleAttribute("has-middle", (e.target as HTMLSlotElement).assignedElements().length > 0);
  };

  /**
   * Mirrors "the action slot has content" onto the host as the `has-action` attribute.
   *
   * @private
   */
  private readonly _checkActionSlotContent: (e: Event) => void = (e: Event) => {
    this.toggleAttribute("has-action", (e.target as HTMLSlotElement).assignedElements().length > 0);
  };

  override render() {
    return html` <div id="wrapper">
      <div id="default" part="default"><slot></slot></div>
      <div id="mid" part="middle">
        <slot name="middle" @slotchange="${this._checkMiddleSlotContent}"></slot>
      </div>
      <div id="action" part="action">
        <slot name="action" @slotchange="${this._checkActionSlotContent}"></slot>
      </div>
    </div>`;
  }

  static override styles: CSSResult | CSSResult[] = css`
    :host {
      display: block;
      padding: 0.25rem 0.5rem 0 1rem;
      border-bottom: var(--sapGroup_TitleBorderWidth) solid var(--sapGroup_TitleBorderColor);
      background-color: var(--sapToolbar_Background, var(--sapGroup_ContentBackground));
      container-type: inline-size;
      box-sizing: border-box;
    }

    :host([hidden]) {
      display: none;
    }

    #wrapper {
      display: inline-flex;
      flex-direction: row;
      width: 100%;
    }

    /* the three areas are centered flex rows, so that a slotted title and a
       furo-ui5-table-toolbar-separator (1px x 1.5rem) line up with the buttons */

    #default,
    #mid,
    #action {
      align-items: center;
      gap: 0.25rem;
    }

    #default {
      display: flex;
      flex-basis: 100%;
      overflow-x: hidden;
    }

    #mid {
      display: none;
      flex-basis: 100%;
    }

    #action {
      display: none;
      flex-basis: 100%;
      overflow-x: hidden;
      justify-content: flex-end;
    }

    /* an area only takes part in the layout when something is slotted into it.
       has-middle / has-action are set by the slotchange handlers above. */

    :host([has-middle]) #mid {
      display: flex;
    }

    :host([has-action]) #action {
      display: flex;
    }

    ::slotted(furo-ui5-toolbar) {
      border-bottom: unset;
      padding: unset;
    }

    ::slotted(furo-ui5-title),
    ::slotted(ui5-title) {
      font-size: var(--sapFontHeader5Size);
      align-self: center;
      margin: 6px 0;
    }

    /* stacked */
    @container (max-width: 375px) {
      #wrapper {
        flex-wrap: wrap;
      }
    }

    /* one row, the start column takes the slack */
    @container (min-width: 376px) {
      #default {
        flex: 1;
        overflow: hidden;
        flex-basis: unset;
      }

      #mid {
        flex-basis: unset;
      }

      #action {
        flex-basis: unset;
      }

      /* without a middle area the start column hugs its content and the actions take the slack */
      :host(:not([has-middle])) #default {
        flex: unset;
      }

      :host(:not([has-middle])) #action {
        flex: 1;
      }
    }

    /* one row, start column and actions share the slack */
    @container (min-width: 540px) {
      #default,
      #action {
        flex: 1;
        overflow: hidden;
      }
    }
  `;
}
