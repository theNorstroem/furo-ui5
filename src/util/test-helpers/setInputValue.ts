/**
 * Sets an input element's `.value` and dispatches the `input` and `change` events
 * that binding elements listen for. Mirrors what a real user produces by typing.
 *
 * Use it in element specs to deterministically drive UI → model writes.
 */
export const setInputValue = (el: HTMLElement & { value: string }, value: string): void => {
  el.value = value;
  el.dispatchEvent(new Event("input", { bubbles: true, composed: true }));
  el.dispatchEvent(new Event("change", { bubbles: true, composed: true }));
};
