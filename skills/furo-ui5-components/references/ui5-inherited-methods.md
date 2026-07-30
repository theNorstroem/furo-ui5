# UI5Element Inherited Methods

All Furo UI5 Furo UI5 components inherit from UI5Element and have access to these methods:

## `getDomRef(): HTMLElement | undefined`
Returns the DOM Element inside the Shadow Root that corresponds to the opening tag in the UI5 Web Component's template.
*Note:* For logical (abstract) elements (items, options, etc...), returns the part of the parent's DOM that represents this option.
Use this method instead of "this.shadowRoot" to read the Shadow DOM, if ever necessary.

## `getFocusDomRef(): HTMLElement | undefined`
Returns the DOM Element marked with "data-sap-focus-ref" inside the template.
This is the element that will receive the focus by default.

## `getFocusDomRefAsync(): Promise<HTMLElement | undefined>`
Waits for dom ref and then returns the DOM Element marked with "data-sap-focus-ref" inside the template.
This is the element that will receive the focus by default.

## `focus(focusOptions?: FocusOptions): Promise<void>`
Set the focus to the element, returned by "getFocusDomRef()" (marked by "data-sap-focus-ref").
