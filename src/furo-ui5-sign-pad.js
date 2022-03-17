import { LitElement, html, css } from 'lit';
import { FBP } from '@furo/fbp';
import SignaturePad from 'signature_pad/dist/signature_pad.js';

/**
 * `furo-sign-pad`
 *  Simple pad to sign or draw something
 *
 *
 * @fires {Base64} sign-updated - Fired when sign gets new painting, with base encoded image.
 *
 * @summary draw or sign
 * @element furo-ui5-sign-pad
 * @appliesMixin FBP
 */
export class FuroUi5SignPad extends FBP(LitElement) {
  constructor() {
    super();
    /**
     * @private
     */
    this._field = {}; // ensure that field is available
  }

  /**
   * flow is ready lifecycle method
   * @private
   */
  _FBPReady() {
    super._FBPReady();

    this.canvas = this.shadowRoot.querySelector('canvas');

    this.signaturePad = new SignaturePad(this.canvas, {});

    this.signaturePad.addEventListener('afterUpdateStroke', () => {
      this.encodeImage();
    });

    setTimeout(() => {
      this.resize();
      if (this.getAttribute('image')) {
        this.setImage(this.getAttribute('image'));
      }
    }, 1);

    this.signaturePad.clear();
  }

  /**
   * Trigger this method after a resize.
   *
   */
  resize() {
    if (this.canvas) {
      const ratio = 1;
      this.canvas.width = this.canvas.offsetWidth * ratio;
      this.canvas.height = this.canvas.offsetHeight * ratio;
      this.canvas.getContext('2d').scale(ratio, ratio);
    }
  }

  /**
   *
   * @private
   * @return {CSSResult}
   */
  static get styles() {
    // language=CSS
    return css`
      :host {
        display: block;
        box-sizing: border-box;
        height: 184px;
        width: 300px;
        cursor: pointer;
        position: relative;
      }

      canvas {
        width: 100%;
        height: 100%;
      }

      div.dots {
        position: absolute;
        top: 24px;
        bottom: 24px;
        left: 24px;
        right: 24px;
        pointer-events: none;
        border: 1px dashed var(--sapField_BorderColor, #89919a);
      }
    `;
  }

  /**
   * @private
   * @returns {TemplateResult}
   */
  render() {
    // language=HTML
    return html`
      <canvas></canvas>
      <div class="dots"></div>
    `;
  }

  /**
   * Disables the pad
   */
  disable() {
    this.signaturePad.off();
  }

  /**
   * Enables the pad
   */
  enable() {
    this.signaturePad.on();
  }

  /**
   * @private
   */
  _setEmpty(b) {
    this.empty = b;
  }

  /**
   * Clears the image. This also updates the bound field.
   */
  clear() {
    this.signaturePad.clear();
    this.encodeImage();

    // super.clear();
    this._field._value = '';
  }

  /**
   * Adds the encoded image to the canvas.
   *
   * Maybe you want to clear first.
   *
   * @param encodedImage {imageURL}
   */
  putImage(encodedImage) {
    const img = new Image();
    img.src = encodedImage;
    const ctx = this.canvas.getContext('2d');

    img.onload = () => {
      ctx.drawImage(img, 0, 0); // Or at whatever offset you like
    };
    img.src = encodedImage;
  }

  /**
   * Encodes the image using the type and encodingOptions (quality) defined.
   * The encoded image is available in the `image` property.
   */
  encodeImage() {
    this.image = this.canvas.toDataURL(this.type, this.encodingOptions);
    this._setEmpty(this.signaturePad.isEmpty());

    const customEvent = new Event('sign-updated', {
      composed: true,
      bubbles: true,
    });
    customEvent.detail = this.image;
    this.dispatchEvent(customEvent);

    this._field._value = this.image;
    return this._field._value;
  }

  /**
   * bind a entity field
   * @param entityField
   */
  bindData(entityField) {
    this._field = entityField;
    if (this._field._value) {
      this.putImage(this._field._value);
    }
    // update drawing on changes from outside
    this._field.addEventListener('this-field-value-changed', () => {
      this.signaturePad.clear();
      this.putImage(this._field._value);
    });
  }
}

window.customElements.define('furo-ui5-sign-pad', FuroUi5SignPad);
