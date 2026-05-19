/**
 * Sets a checkbox-like element's `.checked` and dispatches the `change` event
 * that binding elements listen for. Mirrors what a real user produces by
 * toggling a UI5 Switch / CheckBox.
 *
 * Use it in element specs to deterministically drive UI → model writes.
 */
export const setCheckboxValue = (el: HTMLElement & { checked: boolean }, value: boolean): void => {
  el.checked = value;
  el.dispatchEvent(new Event("change", { bubbles: true, composed: true }));
};
