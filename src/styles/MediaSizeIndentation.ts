import { css } from "lit";
// language=CSS
export default css`
  :root {
    /* Cozy sizes are defined here, compact is in line 110+ */

    /* Colors */
    color: var(--sapTextColor);
    /*font-size: 16px;*/
    /* Typography */
    font-family: var(--sapFontFamily, "72"), "72full", Arial, sans-serif;
    background-color: var(--sapBackgroundColor);

    /* Forms "cell padding" */
    --furo-ui5-responsive-layout-row-gap: 1rem;
    --furo-ui5-responsive-layout-column-gap: 1rem;

    /* Base sizes*/
    --FuroUi5Base_min_width: 2.5rem;
    --FuroUi5Icon_font_size: 1.375rem;
    --FuroUi5Base_padding: 0.5625rem;
    --FuroUi5GridGapSize: 1rem;

    /* Table */
    --_ui5_load_more_text_height: 2.75rem;
    --_ui5_load_more_text_font_size: var(--sapFontMediumSize);
    --_ui5_load_more_desc_padding: 0.375rem 2rem 0.875rem 2rem;
    --ui5_table_header_row_height: 2.75rem;
    --ui5_table_row_height: 2.75rem;
    --ui5_table_focus_outline_offset: -0.125rem;
    --ui5_table_group_row_height: 2rem;

    /* form */
    --FuroUi5FormRowLabelPaddingTop: 0.8125rem;
  }

  .sapUiSizeCompact,
  .ui5-content-density-compact,
  [data-ui5-compact-size] {
    /* Base sizes*/
    --sapElement_Height: var(--sapElement_Compact_Height, 1.625rem);
    --sapElement_LineHeight: var(--sapElement_Compact_LineHeight, 2rem);
    --FuroUi5Base_min_width: 2rem;
    --FuroUi5Icon_font_size: 1rem;
    --FuroUi5Base_padding: 0.4375rem;

    /* Table */
    --_ui5_load_more_text_height: 2.625rem;
    --_ui5_load_more_text_font_size: var(--sapFontSize);
    --_ui5_load_more_desc_padding: 0 2rem 0.875rem 2rem;
    --ui5_table_header_row_height: 2rem;
    --ui5_table_row_height: 2rem;

    /* form */
    --FuroUi5FormRowLabelPaddingTop: 0.5rem;
  }

  body {
    margin: 0;
    font-size: var(--sapFontSize);
  }

  a {
    color: var(--sapLinkColor);
  }

  /* Reset */
  legend {
    font-family: var(--sapFontFamily, "72"), "72full", Arial, sans-serif;
    font-size: var(--sapFontSize, 0.875rem);
    font-weight: 700;
    padding-inline: 0;
  }

  fieldset {
    border: none;
    margin-inline: 0;
    padding-inline: 0;
  }

  /* Extra small devices (phones) */
  @media (max-width: 599px) {
    body {
      --MediaSizeIndentation: 0.625rem 1rem 0.25rem 1rem;
      --MediaSizeIndentationTop: 0.625rem;
      --MediaSizeIndentationEnd: 1rem;
      --MediaSizeIndentationBottom: 0.25rem;
      --MediaSizeIndentationStart: 1rem;

      --furo-ui5-responsive-layout-row-gap: 0.625rem;
      --furo-ui5-responsive-layout-column-gap: 0.625rem;
      --furo-ui5-horizontal-flex-space: 0.25rem;
    }
  }

  /* Small devices (portrait tablets and large phones) */
  @media (min-width: 600px) {
    body {
      --MediaSizeIndentation: 0.625rem 2rem 0.25rem 2rem;
      --MediaSizeIndentationTop: 0.625rem;
      --MediaSizeIndentationEnd: 2rem;
      --MediaSizeIndentationBottom: 0.25rem;
      --MediaSizeIndentationStart: 2rem;
      --FuroUi5pocHeaderPanelPadding: 0.625rem 1rem 0 1rem;
      --furo-ui5-horizontal-flex-space: 0.25rem;
    }
  }

  /* Medium devices (landscape tablets) */
  @media (min-width: 1024px) {
    body {
      --MediaSizeIndentation: 1rem 2rem 0.5rem 2rem;
      --MediaSizeIndentationTop: 1rem;
      --MediaSizeIndentationEnd: 2rem;
      --MediaSizeIndentationBottom: 0.5rem;
      --MediaSizeIndentationStart: 2rem;
      --furo-ui5-horizontal-flex-space: 0.4rem;
    }
  }

  /* Large devices (laptops/desktops) */
  @media (min-width: 1440px) {
    body {
      --MediaSizeIndentation: 2rem 3rem 1rem 3rem;
      --MediaSizeIndentationTop: 2rem;
      --MediaSizeIndentationEnd: 3rem;
      --MediaSizeIndentationBottom: 0.75rem;
      --MediaSizeIndentationStart: 3rem;
      --furo-ui5-horizontal-flex-space: 0.5rem;
    }
  }

  @media not print {
    .print {
      display: none;
    }
  }

  @media print {
    body {
      width: 1100px;
    }
  }

  @page {
    size: A4 portrait;
    /* you can also specify margins here: */
    margin: 25mm;
  }
`.cssText;
