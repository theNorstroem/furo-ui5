/**
 * Sets a numeric input element's `.value` and dispatches the `input` and `change`
 * events that binding elements listen for. Mirrors what a real user produces by
 * typing into a UI5 StepInput.
 *
 * Use it in element specs to deterministically drive UI → model writes for
 * number-typed elements (where `setInputValue` would not apply).
 */
export const setNumberInputValue = (el: HTMLElement & { value: number }, value: number): void => {
  el.value = value;
  el.dispatchEvent(new Event("input", { bubbles: true, composed: true }));
  el.dispatchEvent(new Event("change", { bubbles: true, composed: true }));
};
