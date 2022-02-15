/**
 * Event Builder Class
 */
const VALUE_CHANGED = 'furo-value-changed';

export class Events {
  /**
   * Creates an universal `furo-value-changed` event
   * All extended ui5 components should use this builder function to create
   * the change event
   * @param detail
   * @returns {Event}
   */
  static buildChangeEvent(detail) {
    const customEvent = new Event(VALUE_CHANGED, {
      composed: true,
      bubbles: true,
    });
    customEvent.detail = detail;
    return customEvent;
  }
}
