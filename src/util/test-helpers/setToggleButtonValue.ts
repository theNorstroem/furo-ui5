/**
 * Sets a UI5 ToggleButton-like element's `.pressed` and dispatches the `change`
 * event that toggle-button binding elements listen for. Mirrors what a real
 * user produces by clicking a UI5 ToggleButton.
 *
 * `click` is intentionally not used here: UI5's internal `_onclick` handler
 * stops immediate propagation and re-toggles `pressed` itself, which clobbers
 * the value set by tests.
 *
 * Use it in element specs to deterministically drive UI → model writes.
 */
export const setToggleButtonValue = (el: HTMLElement & { pressed: boolean }, value: boolean): void => {
  el.pressed = value;
  el.dispatchEvent(new Event("change", { bubbles: true, composed: true }));
};
