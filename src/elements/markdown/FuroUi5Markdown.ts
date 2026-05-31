import { STRING } from "@furo/open-models";
import { css, html, LitElement, nothing, type TemplateResult } from "lit";
import { property } from "lit/decorators.js";
import { unsafeHTML } from "lit/directives/unsafe-html.js";
import MarkdownIt from "markdown-it";

import { TableCss } from "@/styles/table.css";

/**
 * `furo-ui5-markdown`
 *
 *  Renders given md data directly to html.
 *
 *  #### Stream rendering
 *  The stream rendering mode renders the pure markdown while the stream is running and makes a final render with all added plugins.
 *  This save a lot of resources by not rendering incomplete mermaid, svg or any other custom renderers.
 *
 *  ##### In combination with field nodes
 *  - To notify the stream started, send a `FieldNode` event `stream-begins`.
 *  - To notify the stream has ended send a `FieldNode` event `stream-ends`.
 *
 *  ##### When using the properties directly (html with js)
 *  - Enable the streaming mode with setting the attribute `streaming` to true.
 *  - To notify the stream has ended set the attribute `streaming` to false and the final markdown to the property `markdown`
 *
 * #### Adding custom renderers
 *
 * @summary renders markdown data
 * @tagname furo-ui5-markdown
 * @appliesMixin FBP
 */
export class FuroUi5Markdown extends LitElement {
  private mdFinal: MarkdownIt = MarkdownIt({
    html: true,
    linkify: true,
    typographer: true,
    breaks: true,
  });

  private mdStream: MarkdownIt = MarkdownIt({
    html: true,
    linkify: true,
    typographer: false,
    breaks: true,
  });

  private _model: STRING = new STRING();

  // used to decide which md renderer we use
  private streaming = false;

  get model(): STRING {
    return this._model;
  }

  /**
   * Connect the model
   * @param value
   */
  set model(value: STRING) {
    this.bindData(value);
  }

  override disconnectedCallback(): void {
    super.disconnectedCallback();
    this._model.__removeEventListener("update", this.readFromModel);
    this._model.__removeCustomEventListener("stream-begins", this.setStreamBegins);
    this._model.__removeCustomEventListener("stream-ends", this.setStreamEnds);
  }

  bindData(fieldNode: STRING | undefined) {
    if (fieldNode === undefined || fieldNode === this._model) {
      return;
    }

    /**
     * remove existing listeners
     * - from model: "update"
     * - from model custom: stream-begins, stream-ends
     */
    this._model.__removeEventListener("update", this.readFromModel);
    this._model.__removeCustomEventListener("stream-begins", this.setStreamBegins);
    this._model.__removeCustomEventListener("stream-ends", this.setStreamEnds);

    // connect the model
    this._model = fieldNode;

    // listen on changes from the model
    this._model.__addEventListener("update", this.readFromModel);
    this._model.__addCustomEventListener("stream-begins", this.setStreamBegins);
    this._model.__addCustomEventListener("stream-ends", this.setStreamEnds);

    // initial read
    this.readFromModel();
  }

  /**
   * Notify that a stream has started
   */
  private setStreamBegins = () => {
    this.streaming = true;
  };

  /**
   * Notify that a stream is completed.
   * This will trigger the final render.
   */
  private setStreamEnds = () => {
    this.streaming = false;
    // final non streaming render
    this.readFromModel();
  };

  private readFromModel = (): void => {
    this.markdown = this._model.value;
  };

  private _renderedMarkdown: TemplateResult | typeof nothing = nothing;

  private _markdown = "";

  /**
   * The markdown string to render
   *
   */
  @property({ type: String })
  public set markdown(markdown: string) {
    this._markdown = markdown;
    if (this.streaming) {
      this._renderedMarkdown = html`${unsafeHTML(this.mdStream.render(markdown))}`;
    } else {
      this._renderedMarkdown = html`${unsafeHTML(this.mdFinal.render(markdown))}`;
    }

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

        /* do not show components which are not defined */
        *:not(:defined) {
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
          font-size: var(--sapFontHeader6Size);
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
