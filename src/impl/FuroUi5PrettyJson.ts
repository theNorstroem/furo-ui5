import { STRING } from "@furo/open-models";
import type { FieldNode } from "@furo/open-models/dist";
import { css, html, LitElement } from "lit";
import { state } from "lit/decorators.js";
import { unsafeHTML } from "lit/directives/unsafe-html.js";

/**
 * `furo-pretty-json`
 * Pretty json with highlighting
 *
 * ```html
 * <furo-pretty-json
 *   fn-inject-json="--data"></furo-pretty-json>
 * ```
 *
 * @summary pretty prints json data
 * @customElement
 */
export class FuroUi5PrettyJson extends LitElement {
  private _model: FieldNode = new STRING("");

  @state()
  private content: string = "";

  public get model(): FieldNode {
    return this._model;
  }

  /**
   * Use this to bind a model field by attribute.
   *
   * @typeref FieldNode - "@furo/open-models/dist/index.js"
   * @public
   */
  public set model(value: FieldNode) {
    this.bindData(value);
  }

  public bindData(fieldNode: FieldNode) {
    if (fieldNode === undefined || fieldNode === this._model) {
      return;
    }

    /**
     * remove existing listeners
     * - from readonly watcher
     * - from model: "this-field-value-changed",listenToStateChanged
     * - from ui: input, change
     */

    this._model.__removeEventListener("field-value-changed", this.readFromModel.bind(this));

    // connect the model
    this._model = fieldNode;
    // init model

    // listen on state changes on the model

    // listen on changes from the model
    this._model.__addEventListener("field-value-changed", this.readFromModel.bind(this));

    // listen on changes from UI

    // initial read
    this.readFromModel();

    // constraints

    // set the placeholder from model if none was set before

    // a11y
  }

  readFromModel(): void {
    this.injectData(this._model.__toLiteral());
  }

  /**
   * Inject JSON data
   * @param {JSON} json - Json literal
   */
  injectData(json: object) {
    if (json) {
      this.content = FuroUi5PrettyJson._syntaxHighlight(JSON.stringify(json, null, 2));
    } else {
      // clear innerHTML content
      this.content = "";
    }
  }

  set json(json: object) {
    this.injectData(json);
  }

  static override get styles() {
    // language=CSS
    return css`
      :host {
        display: block;
        font-family: "Benton Sans", "Helvetica Neue", helvetica, arial, sans-serif;
        background-color: var(--surface);
        padding: 0;
      }

      .string {
        color: #080;
      }

      .number {
        color: darkorange;
      }

      .boolean {
        color: blue;
      }

      .null {
        color: magenta;
      }

      .key {
        color: #606;
      }
    `;
  }

  /**
   *
   * @param json
   * @return {string}
   * @private
   */
  static _syntaxHighlight(json: string) {
    return json
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+-]?\d+)?)/g, match => {
        let cls = "number";
        if (/^"/.test(match)) {
          if (/:$/.test(match)) {
            cls = "key";
          } else {
            cls = "string";
          }
        } else if (/true|false/.test(match)) {
          cls = "boolean";
        } else if (/null/.test(match)) {
          cls = "null";
        }
        return `<span class="${cls}">${match}</span>`;
      });
  }

  override render() {
    // language=HTML
    return html` <pre id="content">${unsafeHTML(this.content)}</pre> `;
  }
}
