import { LitFBP } from "@furo/fbp/dist/LitFBP";
import { css, html, LitElement } from "lit";
import { property, query } from "lit/decorators.js";
import SignaturePad from "signature_pad";

import DebounceBuilder from "@/util/Debounce";

/**
 * `furo-sign-pad`
 *  Simple pad to sign or draw something
 *
 *
 * @fires {string} sign-updated - Fired when sign gets new painting, with base encoded image.
 *
 * @summary draw or sign
 * @tagname furo-ui5-sign-pad

 */
export class FuroUi5SignPad extends LitFBP(LitElement) {
  @query("canvas") private canvas!: HTMLCanvasElement;

  private signaturePad: SignaturePad | undefined;

  private _field = { _value: "" };

  /**
   * Read this to get the image data-url.
   */
  public image = "";

  private _disabled = false;

  get disabled(): boolean {
    return this._disabled;
  }

  /**
   * Set to true to disable the drawing features.
   *
   * Tipp: You can also use the `disable()` and `enable()` methods.
   */
  @property({ type: Boolean, reflect: true })
  set disabled(value: boolean) {
    if (value) {
      this.signaturePad?.off();
    } else {
      this.signaturePad?.on();
    }
    this._disabled = value;
  }

  /**
   * flow is ready lifecycle method
   * @private
   */
  override _FBPReady() {
    super._FBPReady();

    this.signaturePad = new SignaturePad(this.canvas, {});
    const processChanges = DebounceBuilder(() => {
      this.encodeImage();
    }, 250);
    this.signaturePad.addEventListener("afterUpdateStroke", () => {
      processChanges();
    });

    // Observe resizes
    const debouncedResize = DebounceBuilder(this.handleResize, 100);
    const ro = new ResizeObserver((_) => {
      debouncedResize();
    });
    ro.observe(this);

    if (this.disabled) {
      this.signaturePad.off();
    }
    this.signaturePad.clear();
  }

  /**
   * Trigger this method after a resize.
   *
   */
  private handleResize = (): void => {
    const ratio = Math.max(window.devicePixelRatio || 1, 1);
    this.canvas.width = this.canvas.offsetWidth * ratio;
    this.canvas.height = this.canvas.offsetHeight * ratio;
    this.canvas.getContext("2d")?.scale(ratio, ratio);
    this.signaturePad?.redraw();
  };

  /**
   *
   * @private
   * @return {CSSResult}
   */
  static override get styles() {
    // language=CSS
    return css`
      :host {
        display: block;
        box-sizing: border-box;
        height: 184px;
        width: 300px;
        cursor: crosshair;
        position: relative;
      }

      :host([disabled]) div.dots {
        border-color: var(--sapField_ReadOnly_BorderColor, #89919a);
        border-style: dotted;
      }
      :host(:active) div.dots {
        border-color: var(--sapField_Active_BorderColor, 0854a0);
      }

      :host([disabled]) {
        cursor: unset;
      }

      canvas {
        width: 100%;
        height: 100%;
      }

      div.dots {
        position: absolute;
        top: 1.5rem;
        bottom: 1.5rem;
        left: 1.5rem;
        right: 1.5rem;
        pointer-events: none;
        border: 1px dashed var(--sapField_BorderColor, #89919a);
      }
    `;
  }

  /**
   * @private
   * @returns {TemplateResult}
   */
  override render() {
    // language=HTML
    return html`
      <canvas></canvas>
      <div class="dots"></div>
    `;
  }

  /**
   * Disables the pad
   */
  public disable() {
    this.disabled = true;
  }

  /**
   * Enables the pad
   */
  public enable() {
    this.disabled = false;
  }

  /**
   * Clears the image. This also updates the bound field.
   */
  public clear() {
    this.signaturePad?.clear();
    this.encodeImage();

    // super.clear();
    this._field._value = "";
  }

  /**
   * Adds the encoded image to the canvas.
   *
   * Maybe you want to clear first.
   *
   * @param encodedImage {imageURL}
   */
  public putImage(encodedImage: string) {
    const ctx = this.canvas.getContext("2d");
    if (!ctx) return;

    const img = new Image();
    img.src = encodedImage;

    img.onload = () => {
      ctx.drawImage(img, 0, 0);
    };
    img.src = encodedImage;
    this.encodeImage();
  }

  /**
   * Encodes the image using the type and encodingOptions (quality) defined.
   * The encoded image is available in the `image` property.
   */
  encodeImage() {
    this.image = this.canvas.toDataURL();
    const customEvent = new CustomEvent<string>("sign-updated", {
      composed: true,
      bubbles: true,
      detail: this.image,
    });

    this.dispatchEvent(customEvent);
  }
}
