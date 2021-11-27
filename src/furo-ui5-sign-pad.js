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

    this.signaturePad = new SignaturePad(this.canvas, {
      onBegin: this._onBegin.bind(this),
      onEnd: this._onEnd.bind(this),
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
   * This is also needed
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
        border: 1px solid var(--sapField_BorderColor, #89919a);
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

  //  unlock() {
  //   this.signaturePad.on();
  // }

  //  lock() {
  //   this.signaturePad.off();
  // }

  /**
   * @private
   */
  _setEmpty(b) {
    this.empty = b;
  }

  /**
   * @private
   */
  _setActive(b) {
    this.active = b;
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
   * @private
   */
  _onBegin() {
    this._setActive(true);
  }

  /**
   * @private
   */
  _onEnd() {
    this._setActive(false);
    this.encodeImage();
  }

  /**
   * @private
   */
  _dotSizeChanged(newValue) {
    if (!this.signaturePad) return;
    this.signaturePad.dotSize = newValue;
  }

  /**
   * @private
   */
  _minWidthChanged(newValue) {
    if (!this.signaturePad) return;
    this.signaturePad.minWidth = newValue;
  }

  /**
   * @private
   */
  _maxWidthChanged(newValue) {
    if (!this.signaturePad) return;
    this.signaturePad.maxWidth = newValue;
  }

  /**
   * @private
   */
  _backgroundColorChanged(newValue) {
    if (!this.signaturePad) return;
    this.signaturePad.backgroundColor = newValue;
  }

  /**
   * @private
   */
  _penColorChanged(newValue) {
    if (!this.signaturePad) return;
    this.signaturePad.penColor = newValue;
  }

  /**
   * @private
   */
  _velocityFilterWeightChanged(newValue) {
    if (!this.signaturePad) return;
    this.signaturePad.velocityFilterWeight = newValue;
  }

  /**
   * @private
   */
  // todo implement type and encoderOptions
  // eslint-disable-next-line no-unused-vars
  _onEncodingChanged(type, encoderOptions) {
    if (this.signaturePad) {
      this.encodeImage();
    }
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
