// language=CSS
import { css } from "lit";

const TreeTableCSS = css`
  /* cursor for SingleSelect */
  *[furo-ui5-tree-table][mode="SingleSelect"] tbody tr {
    cursor: pointer;
  }

  /* head sticky  */
  *[furo-ui5-tree-table][sticky-column-header] {
    --column_shadow_inset: -0.0625rem;
    --sticky_top_height: calc(-1px + var(--ui5_table_header_row_height, 0));
  }

  /* head sticky with mode="MultiSelect" */
  *[furo-ui5-tree-table][sticky-column-header][mode="MultiSelect"] {
    --sticky_top_height: calc(3px + var(--ui5_table_header_row_height, 0));
  }

  *[furo-ui5-tree-table] tr[group-header],
  *[furo-ui5-tree-table] tr.group-header {
    border-color: var(--sapList_TableGroupHeaderBorderColor);
    border-width: 1px 0 1px 0;
  }

  *[furo-ui5-tree-table] tr[group-header] td,
  *[furo-ui5-tree-table] tr.group-header td {
    background-color: var(--sapList_TableGroupHeaderBackground);
    color: var(--sapList_TableGroupHeaderTextColor);
    font-family: "72override", var(--sapFontFamily);
    font-size: var(--sapFontSize);
    font-weight: bold;
  }

  *[furo-ui5-tree-table] th[sticky-right],
  *[furo-ui5-tree-table] td[sticky-right] {
    position: sticky;
    right: 0;
    background-color: var(--sapList_HeaderBackground);
  }

  *[furo-ui5-tree-table] th:hover td[sticky-right],
  *[furo-ui5-tree-table] tr:hover td[sticky-right] {
    background-color: var(--sapList_Hover_Background);
  }

  *[furo-ui5-tree-table] tr:focus {
    outline: 0.125rem var(--sapContent_FocusStyle) var(--sapContent_FocusColor);
    outline-offset: -0.125rem;
  }

  *[furo-ui5-tree-table] th[sticky-left],
  *[furo-ui5-tree-table] td[sticky-left] {
    position: sticky;
    left: 0;
    z-index: 88;
    background-color: var(--sapList_HeaderBackground);
  }

  *[furo-ui5-tree-table] th:hover td[sticky-left],
  *[furo-ui5-tree-table] tr:hover td[sticky-left] {
    background-color: var(--sapList_Hover_Background);
  }

  *[furo-ui5-tree-table][sticky-column-header] thead {
    position: sticky;
    top: 0;
    z-index: 98;
    border: none;
  }

  *[furo-ui5-tree-table] tr:focus:hover th,
  *[furo-ui5-tree-table] tr:focus:hover td {
    box-shadow: unset;
    background: linear-gradient(var(--sapList_Hover_SelectionBackground), var(--sapList_Hover_SelectionBackground));
    background-size: calc(100% - 2px) calc(100% - 4px);
    background-repeat: no-repeat;
    background-position: right;
  }

  *[furo-ui5-tree-table][show-selected-row] tr[selected] td {
    background: linear-gradient(var(--sapList_SelectionBackgroundColor), var(--sapList_SelectionBackgroundColor));
  }

  /* increase the specifity because otherwise the selected will always be used*/
  *[furo-ui5-tree-table][furo-ui5-tree-table] tr:focus th,
  *[furo-ui5-tree-table][furo-ui5-tree-table] tr:focus td {
    box-shadow: unset;
    background: linear-gradient(var(--sapList_SelectionBackgroundColor), var(--sapList_SelectionBackgroundColor));
    background-size: calc(100% - 2px) calc(100% - 4px);
    background-repeat: no-repeat;
    background-position: right;
  }

  *[furo-ui5-tree-table] tr[sticky-top] {
    position: sticky;
    top: var(--sticky_top_height, 0);
    z-index: 98;
  }

  *[furo-ui5-tree-table] tr[sticky-bottom] {
    position: sticky;
    bottom: var(--sticky_bottom_height, 0);
    z-index: 98;
  }

  *[furo-ui5-tree-table] tr {
    position: relative;
    border: none;
  }

  *[furo-ui5-tree-table] th {
    border: none;
    box-shadow: inset -1px -1px 0 0 var(--sapGroup_ContentBorderColor);
  }

  *[furo-ui5-tree-table] td {
    border: none;
    white-space: nowrap;
    box-shadow: inset -1px -1px 0 0 var(--sapGroup_ContentBorderColor);
  }

  *[furo-ui5-tree-table] th:last-child,
  *[furo-ui5-tree-table] td:last-child {
    box-shadow: inset 1px -1px 0 0 var(--sapGroup_ContentBorderColor);
  }

  *[furo-ui5-tree-table] tr[aria-level="1"] td:first-child {
    padding-left: 0.5rem;
  }

  *[furo-ui5-tree-table] tr[aria-level="1"] td:first-child:not(:has(furo-ui5-icon)) {
    padding-left: 2.5rem;
  }

  *[furo-ui5-tree-table] tr[aria-level="2"] td:first-child {
    padding-left: 1.5rem;
  }

  *[furo-ui5-tree-table] tr[aria-level="2"] td:first-child:not(:has(furo-ui5-icon)) {
    padding-left: 3.5rem;
  }

  *[furo-ui5-tree-table] tr[aria-level="3"] td:first-child {
    padding-left: 2.5rem;
  }

  *[furo-ui5-tree-table] tr[aria-level="3"] td:first-child:not(:has(furo-ui5-icon)) {
    padding-left: 4.5rem;
  }

  *[furo-ui5-tree-table] tr[aria-level="4"] td:first-child {
    padding-left: 3.5rem;
  }

  *[furo-ui5-tree-table] tr[aria-level="4"] td:first-child:not(:has(furo-ui5-icon)) {
    padding-left: 5.5rem;
  }

  *[furo-ui5-tree-table] tr[aria-level="5"] td:first-child {
    padding-left: 4.5rem;
  }

  *[furo-ui5-tree-table] tr[aria-level="5"] td:first-child:not(:has(furo-ui5-icon)) {
    padding-left: 6.5rem;
  }

  *[furo-ui5-tree-table] tr[aria-level="6"] td:first-child {
    padding-left: 5.5rem;
  }

  *[furo-ui5-tree-table] tr[aria-level="6"] td:first-child:not(:has(furo-ui5-icon)) {
    padding-left: 7.5rem;
  }

  *[furo-ui5-tree-table] furo-ui5-icon[tree-icon] {
    cursor: pointer;
    margin-inline: 0.5rem;
    color: var(--sapHighlightColor);
    width: 1rem;
    height: 1rem;
    vertical-align: middle;
  }

  *[furo-ui5-tree-table] tr[value-state="Negative"] td:first-child:before,
  *[furo-ui5-tree-table] tr[value-state="Danger"] td:first-child:before {
    border-left: 0.4rem solid var(--sapShell_NegativeColor);
    content: "";
    display: block;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
  }

  *[furo-ui5-tree-table] tr[value-state="Positive"] td:first-child:before,
  *[furo-ui5-tree-table] tr[value-state="Success"] td:first-child:before {
    border-left: 0.4rem solid var(--sapShell_PositiveColor);
    content: "";
    display: block;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
  }

  *[furo-ui5-tree-table] tr[value-state="Information"] td:first-child:before,
  *[furo-ui5-tree-table] tr[value-state="Informative"] td:first-child:before {
    border-left: 0.4rem solid var(--sapShell_InformativeColor);
    content: "";
    display: block;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
  }

  *[furo-ui5-tree-table] tr[value-state="Warning"] td:first-child:before,
  *[furo-ui5-tree-table] tr[value-state="Critical"] td:first-child:before {
    border-left: 0.4rem solid var(--sapShell_CriticalColor);
    content: "";
    display: block;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
  }

  *[furo-ui5-tree-table] tr[industry-color="Equities"] td:first-child:before {
    border-left: 0.4rem solid var(--Color_Equities);
    content: "";
    display: block;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
  }

  /* raw HTML tables */
  table {
    width: 100%;
    border-collapse: collapse;
    border-spacing: 0;
    border-bottom: 1px solid var(--sapList_BorderColor);
    position: relative;
    background-color: var(--sapList_Background, #ffffff);
    font-family: "72override", var(--sapFontFamily);
    font-size: var(--sapFontSize);
  }

  th:first-child {
    padding-left: 1rem;
  }
  th {
    color: var(--sapList_HeaderTextColor);
    background-color: var(--sapList_Background, #ffffff);
    font-weight: bold;
    box-sizing: border-box;
    padding: 0.5rem;
    text-align: start;
    vertical-align: middle;
    width: inherit;
    height: var(--ui5_table_header_row_height, 2.5rem);
  }

  tr {
    background-color: var(--sapList_Background);
    border-top: 1px solid var(--sapList_BorderColor);
    color: var(--sapList_TextColor);
  }

  tr:active {
    background-color: var(--sapList_Active_Background);
  }

  tr:focus {
    outline: 0.125rem var(--sapContent_FocusStyle) var(--sapContent_FocusColor);
    outline-offset: -0.125rem;
  }

  td:not(table td) {
    padding: 1px;
  }

  td {
    display: table-cell;
    padding: 0.25rem 0.5rem;
    box-sizing: border-box;
    color: var(--sapList_TextColor);
    height: var(--ui5_table_row_height, 2.75rem);
    vertical-align: middle;
    word-break: break-word;
  }

  tfoot > tr {
    background-color: var(--sapList_FooterBackground);
    color: var(--sapList_FooterTextColor);
  }

  tr:hover {
    background-color: var(--sapList_Hover_Background);
    color: var(--sapList_Active_TextColor);
  }

  caption {
    color: var(--sapGroup_TitleTextColor);
    font-size: var(--sapFontHeader3Size);
    padding: var(--MediaSizeIndentation, 1rem 2rem 0.5rem 2rem);
  }
`;

const sheet = new CSSStyleSheet();
sheet.replaceSync(TreeTableCSS.cssText);
document.adoptedStyleSheets = [...document.adoptedStyleSheets, sheet];

/**
 * Adoptable styles for `furo-ui5-tree-table`
 *
 * The tree table styles the consumer's light-DOM `<table>`, so this sheet is adopted into
 * `document` on import. If you render a `furo-ui5-tree-table` (and its table) inside the
 * shadow DOM of another web-component, adopt the same sheet into that shadow root:
 *
 * ```js
 * //Adopt the same sheet into the shadow DOM
 * YourComponent.shadowRoot.adoptedStyleSheets = [...YourComponent.shadowRoot.adoptedStyleSheets, TreeTableSheet];
 * ```
 */
export { TreeTableCSS };
