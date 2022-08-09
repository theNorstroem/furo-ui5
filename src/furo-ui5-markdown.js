import { LitElement, html, css } from 'lit';

import 'markdown-it/dist/markdown-it.js';

import 'prismjs/prism.js';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';

// do not convert every code block on the page!
// eslint-disable-next-line no-undef
Prism.manual = true;

/**
 * `furo-markdown`
 *  Renders given md data with parseMarkdown or loads a md file with `mdsrc="source.md"`
 *
 *
 * @summary renders markdown data
 * @customElement
 * @appliesMixin FBP
 */
class FuroUi5Markdown extends LitElement {
  constructor() {
    super();

    this.markdownRendered = undefined;
  }

  /**
   * @private
   * @return {Object}
   */
  static get properties() {
    return {
      /**
       * allow unsafe md. (writing html, components,...)
       *
       *
       * @type Boolean
       */
      unsafe: { type: Boolean },
      /**
       * source of the md
       *
       * @type String
       */
      mdsrc: { type: String },
      /**
       * markdown string
       *
       * @type String
       */
      markdown: { type: String },
    };
  }

  set mdsrc(src) {
    this.fetchMd(src);
  }

  set markdown(markdown) {
    this.markdownRendered = this._parseMarkdown(markdown);
    this.requestUpdate();
  }

  /**
   * fetch markdown from a url or path
   * @param src
   * @return {Promise<string | never>}
   */
  fetchMd(src) {
    return fetch(src)
      .then(res => res.text())
      .then(markdown => {
        this.markdown = markdown;
      });
  }

  /**
   * Parse markdown string to html content
   * @param markdown
   */
  parseMarkdown(markdown) {
    if (typeof markdown === 'string') {
      this.markdown = markdown;
    }
  }

  bindData(stringField) {
    stringField.addEventListener('field-value-changed', () => {
      this.parseMarkdown(stringField._value);
    });
    this.parseMarkdown(stringField._value);
  }

  /**
   * parse markdown string to html content
   * @param markdown
   * @return {TemplateResult | TemplateResult}
   * @private
   */
  _parseMarkdown(markdown) {
    const md = window.markdownit({
      html: this.unsafe,
      linkify: true,
      typographer: true,
    });

    return html` ${unsafeHTML(md.render(markdown))} `;
  }

  updated() {
    // code highlighter
    // eslint-disable-next-line no-undef
    Prism.highlightAllUnder(this.shadowRoot);
  }

  /**
   * Themable Styles
   * @private
   * @return {CSSResult}
   */
  static get styles() {
    // language=CSS
    return css`
      :host {
        display: block;
        font-family: '72override', var(--sapFontFamily);
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
        display: inline-block;
        position: relative;
        font-weight: normal;
        font-size: inherit;
        box-sizing: border-box;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        max-width: 100%;
        vertical-align: bottom;
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
        font-family: '72override', var(--sapFontFamily);
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
      /**
     * prism.js default theme for JavaScript, CSS and HTML
     * Based on dabblet (http://dabblet.com)
     * @author Lea Verou
     */
      code[class*='language-'],
      pre[class*='language-'] {
        color: black;
        background: none;

        font-family: Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
        font-size: 1em;
        text-align: left;
        white-space: pre;
        word-spacing: normal;
        word-break: normal;
        word-wrap: normal;
        line-height: 1.5;

        -moz-tab-size: 4;
        tab-size: 4;

        -webkit-hyphens: none;
        -moz-hyphens: none;
        -ms-hyphens: none;
        hyphens: none;
      }

      pre[class*='language-']::-moz-selection,
      pre[class*='language-'] ::-moz-selection,
      code[class*='language-']::-moz-selection,
      code[class*='language-'] ::-moz-selection {
        text-shadow: none;
        background: #b3d4fc;
      }

      pre[class*='language-']::selection,
      pre[class*='language-'] ::selection,
      code[class*='language-']::selection,
      code[class*='language-'] ::selection {
        text-shadow: none;
        background: #b3d4fc;
      }

      @media print {
        code[class*='language-'],
        pre[class*='language-'] {
          text-shadow: none;
        }
      }

      /* Code blocks */
      pre[class*='language-'] {
        padding: 1em;
        margin: 0;
        overflow: auto;
      }

      :not(pre) > code[class*='language-'],
      pre[class*='language-'] {
        background: #f5f2f0;
      }

      /* Inline code */
      :not(pre) > code[class*='language-'] {
        padding: 0.1em;
        border-radius: 0.3em;
        white-space: normal;
      }

      .token.comment,
      .token.prolog,
      .token.doctype,
      .token.cdata {
        color: slategray;
      }

      .token.punctuation {
        color: #999;
      }

      .namespace {
        opacity: 0.7;
      }

      .token.property,
      .token.tag,
      .token.boolean,
      .token.number,
      .token.constant,
      .token.symbol,
      .token.deleted {
        color: #905;
      }

      .token.selector,
      .token.attr-name,
      .token.string,
      .token.char,
      .token.builtin,
      .token.inserted {
        color: #690;
      }

      .token.operator,
      .token.entity,
      .token.url,
      .language-css .token.string,
      .style .token.string {
        color: #9a6e3a;
        background: hsla(0, 0%, 100%, 0.5);
      }

      .token.atrule,
      .token.attr-value,
      .token.keyword {
        color: #07a;
      }

      .token.function,
      .token.class-name {
        color: #dd4a68;
      }

      .token.regex,
      .token.important,
      .token.variable {
        color: #e90;
      }

      .token.important,
      .token.bold {
        font-weight: bold;
      }

      .token.italic {
        font-style: italic;
      }

      .token.entity {
        cursor: help;
      }

      ul {
        padding-left: 1rem;
      }
    `;
  }

  render() {
    return html` ${this.markdownRendered} `;
  }
}

window.customElements.define('furo-ui5-markdown', FuroUi5Markdown);
