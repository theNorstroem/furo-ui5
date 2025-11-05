import { css, html, LitElement, nothing, type TemplateResult } from "lit";
import { property } from "lit/decorators.js";
import { unsafeHTML } from "lit/directives/unsafe-html.js";
import MarkdownIt from "markdown-it";

import { TableCss } from "@/styles/table.css";

const md: MarkdownIt = MarkdownIt({
  html: true,
  linkify: true,
  typographer: true,
  breaks: true,
  xhtmlOut: false,
});

/**
 * `furo-ui5-markdown`
 *
 *  Renders given md data html.
 *
 *
 * @summary renders markdown data
 * @tagname furo-ui5-markdown
 * @appliesMixin FBP
 */
export class FuroUi5Markdown extends LitElement {
  /**
   * allow unsafe md. (writing html, components,...)
   *
   */
  @property({ type: Boolean })
  public unsafe: boolean = false;

  private _renderedMarkdown: TemplateResult | typeof nothing = nothing;

  private _markdown: string = "";

  /**
   * The markdown string to render
   *
   */
  @property({ type: String })
  public set markdown(markdown: string) {
    this._markdown = markdown;
    this._renderedMarkdown = html`${unsafeHTML(md.render(markdown))}`;
    this.requestUpdate();
  }

  public get markdown(): string {
    return this._markdown;
  }

  /**
   * Parse markdown string to html content.
   * @param markdown
   */
  parseMarkdown(markdown: string) {
    this.markdown = markdown;
  }

  override render() {
    return html`${this._renderedMarkdown}`;
  }

  /**
   * Themable Styles
   * @private
   * @return {CSSResult}
   */
  static override get styles() {
    // language=CSS
    return [
      TableCss,
      css`
        :host {
          display: block;
          font-family: "72override", var(--sapFontFamily);
          font-size: var(--sapFontSize);
        }

        :host([hidden]) {
          display: none;
        }

        img {
          max-width: 100%;
        }

        p:first-of-type {
          margin-top: 0;
        }

        p:last-of-type {
          margin-bottom: 0;
        }

        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
          display: block;
          position: relative;
          font-weight: normal;
          max-width: 100%;
          -webkit-margin-before: 0;
          -webkit-margin-after: 0;
          -webkit-margin-start: 0;
          -webkit-margin-end: 0;
          margin: 0;
          cursor: inherit;
        }

        /* Level H1 */
        h1 {
          font-size: var(--sapFontHeader1Size);
        }

        /* Level H2 */
        h2 {
          font-size: var(--sapFontHeader2Size);
        }

        /* Level H3 */
        h3 {
          font-size: var(--sapFontHeader3Size);
        }

        /* Level H4 */
        h4 {
          font-size: var(--sapFontHeader4Size);
        }

        /* Level H5 */
        h5 {
          font-size: var(--sapFontHeader5Sizee);
        }

        /* Level H6 */
        h6 {
          font-size: var(sapFontHeader6Size);
        }

        a {
          max-width: 100%;
          color: var(--sapLinkColor);
          font-family: "72override", var(--sapFontFamily);
          font-size: var(--sapFontSize);
          cursor: pointer;
          outline: none;
          text-decoration: var(--_ui5_link_text_decoration);
        }

        a:hover {
          text-decoration: var(--_ui5_link_hover_text_decoration);
        }

        blockquote {
          border-left: 3px solid var(--sapScrollBar_FaceColor);
          margin-left: 1rem;
          padding-left: 1rem;
        }

        pre {
          background: rgb(245, 242, 240);
          color: black;
          padding: 1em;
          margin: 0;
          overflow: auto;
        }
      `,
    ];
  }
}
