import { css } from "lit";

/**
 * Adoptable styles for plain HTML tables
 *
 * Makes an ordinary `<table>` look like the rest of Fiori — list colours and dividers,
 * header and footer treatment, hover, focus and active states. It styles element selectors
 * only (`table`, `caption`, `thead`, `th`, `tr`, `td`, `tfoot`) and contains no class names,
 * so semantic HTML is styled as-is with nothing to add to your markup.
 *
 * In the light DOM you get this for free: `@furo/ui5/Assets` adopts it into `document`.
 * A table inside a shadow root needs the rules adopted there too:
 *
 * ```js
 * // lit
 * static styles = [TableCss, css`:host { display: block; }`];
 *
 * // without lit — the same sheet, ready to adopt
 * this.shadowRoot.adoptedStyleSheets = [...this.shadowRoot.adoptedStyleSheets, GlobalStyles.table];
 * ```
 *
 * A `value-state` attribute on a `<tr>` draws a coloured bar down the row's leading edge.
 * Recognised values are `Positive`, `Negative`, `Critical`, `Information` and
 * `Indication1`–`Indication8`; anything else (including `None`) renders no bar, so the
 * attribute can be bound to a value that is often empty. Each of those rules only sets
 * `--_furo-table-value-state-color`, so setting that property yourself — on the row or any
 * ancestor — colours a state of your own. It is internal by name: an escape hatch, not API.
 *
 * Row height follows `--ui5_table_row_height`, which the UI5 content density drives, and
 * `<caption>` padding follows the responsive `--MediaSizeIndentation`.
 *
 * See the "Using styled plain html tables" how-to for the full picture.
 */
const TableCss = css`
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

  th {
    color: var(--sapList_HeaderTextColor);
    background-color: var(--sapList_Background, #ffffff);
    font-weight: bold;
    box-sizing: border-box;
    padding: 0.5rem;
    text-align: start;
    vertical-align: middle;
    width: inherit;
    min-height: var(--sapElement_LineHeight);
  }

  thead tr {
    border-top: none;
  }

  tr {
    background-color: var(--sapList_Background);
    border-top: 1px solid var(--sapList_BorderColor);
    color: var(--sapList_TextColor);
  }

  tr:has(td:active),
  tr:active {
    background-color: var(--sapList_SelectionBackgroundColor);
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
    min-height: var(--ui5_table_row_height, 2.75rem);
    vertical-align: middle;
    word-break: break-word;
  }

  td furo-ui5-rating-indicator {
    margin: 0;
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

  tr[value-state] td:first-child {
    position: relative;
  }

  /* the indicator bar itself — the per-state rules below only pick its color */
  tr[value-state] td:first-child:before {
    border-left: 0.4rem solid var(--_furo-table-value-state-color, transparent);
    content: "";
    display: block;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
  }

  tr[value-state="Negative"] {
    --_furo-table-value-state-color: var(--sapShell_NegativeColor);
  }

  tr[value-state="Positive"] {
    --_furo-table-value-state-color: var(--sapShell_PositiveColor);
  }

  tr[value-state="Information"] {
    --_furo-table-value-state-color: var(--sapShell_InformativeColor);
  }

  tr[value-state="Critical"] {
    --_furo-table-value-state-color: var(--sapShell_CriticalColor);
  }

  tr[value-state="Indication1"] {
    --_furo-table-value-state-color: var(--sapIndicationColor_1_Background);
  }

  tr[value-state="Indication2"] {
    --_furo-table-value-state-color: var(--sapIndicationColor_2_Background);
  }

  tr[value-state="Indication3"] {
    --_furo-table-value-state-color: var(--sapIndicationColor_3_Background);
  }

  tr[value-state="Indication4"] {
    --_furo-table-value-state-color: var(--sapIndicationColor_4_Background);
  }

  tr[value-state="Indication5"] {
    --_furo-table-value-state-color: var(--sapIndicationColor_5_Background);
  }

  tr[value-state="Indication6"] {
    --_furo-table-value-state-color: var(--sapIndicationColor_6_Background);
  }

  tr[value-state="Indication7"] {
    --_furo-table-value-state-color: var(--sapIndicationColor_7_Background);
  }

  tr[value-state="Indication8"] {
    --_furo-table-value-state-color: var(--sapIndicationColor_8_Background);
  }
`;

export { TableCss };
