import { css } from "lit";

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

  tr[value-state="Negative"] td:first-child:before {
    border-left: 0.4rem solid var(--sapShell_NegativeColor);
    content: "";
    display: block;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
  }

  tr[value-state="Positive"] td:first-child:before {
    border-left: 0.4rem solid var(--sapShell_PositiveColor);
    content: "";
    display: block;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
  }

  tr[value-state="Information"] td:first-child:before {
    border-left: 0.4rem solid var(--sapShell_InformativeColor);
    content: "";
    display: block;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
  }

  tr[value-state="Critical"] td:first-child:before {
    border-left: 0.4rem solid var(--sapShell_CriticalColor);
    content: "";
    display: block;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
  }
`;

export { TableCss };
