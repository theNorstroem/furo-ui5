import Option from "@ui5/webcomponents/dist/Option.js";

/**
 * The `furo-ui5-option` is meant to be used inside a `furo-ui5-select`. It is also automatically used by the `furo-ui5-select-enum`.
 *
 * @csspart native-li - Use this to format the `li` inside the shadow root of the component.
 * @csspart content - Use this to format the content `div` inside the shadow root of the component, which surrounds the title and the additional-text `spans`.
 * @csspart title - Use this to format the "title" `span` inside the shadow root of the component, which surrounds the default slot.
 * @csspart additional-text - Use this to format the additional-text `span` inside the shadow root of the component.
 * @tagname furo-ui5-option
 */
export class FuroUi5Option extends Option {
  /**
   * Added for compatibility
   */
  override connectedCallback() {
    this.setAttribute("ui5-option", "");
    return super.connectedCallback();
  }



  /**
   * @private
   */
  static override get metadata() {
    const md = super.metadata;
    md.tag = "furo-ui5-option";
    return md;
  }
}
