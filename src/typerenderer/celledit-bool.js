// eslint-disable-next-line import/no-extraneous-dependencies
import { FuroUi5CheckboxInput } from '../furo-ui5-checkbox-input.js';

/**
 * `celledit-bool` is a `celledit` context renderer.
 *
 * It uses furo-ui5-checkbox-input as the renderer
 *
 * @summary celledit renderer for `bool`
 * @element celledit-bool
 */
export class CelleditBool extends FuroUi5CheckboxInput {
  connectedCallback() {
    // eslint-disable-next-line wc/guard-super-call
    super.connectedCallback();
    this.style.display = 'block';
    this.style.padding = '2px 0';
    this.style.setProperty('--_ui5_checkbox_width_height', '0');
  }

  /**
   * @private
   */
  static get metadata() {
    return { tag: 'celledit-bool' };
  }

  static get styles() {
    return [
      super.styles,
      {
        content:
          '.ui5-checkbox-root:focus:before{top:-1px;height:100%;display:var(--_ui5_checkbox_focus_outline_display)',
      },
    ];
  }
}

CelleditBool.define();
