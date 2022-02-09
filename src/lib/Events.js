/**
 * Event Builder Class
 */

// todo: @maltenorstroem this can cause collisions with ui5 packages, should switch to furo-value-changedd
const VALUE_CHANGED = 'value-changed';

export class Events {
  /**
   * Creates an universal `value-changed` event
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
