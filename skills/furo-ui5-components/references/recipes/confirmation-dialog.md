# Confirmation Dialog

A reusable confirmation dialog pattern with a promise-based API.

> **Note:** CSS is shown in `<style>` blocks for illustration. In your framework, use the appropriate styling approach (e.g., `static styles` in Lit, scoped styles in Angular, CSS modules in React).

## HTML Structure

```html
<style>
  *:not(:defined) { display: none; }
  .message { padding: 1rem; min-width: 300px; }
</style>

<furo-ui5-dialog id="confirmDialog" header-text="Confirm">
  <div class="message">Are you sure you want to delete this item? This action cannot be undone.</div>
  <ui5-bar slot="footer" design="Footer">
    <!-- Handle "click" event to cancel -->
    <furo-ui5-button slot="endContent">Cancel</furo-ui5-button>
    <!-- Handle "click" event to confirm — use design="Negative" for destructive actions -->
    <furo-ui5-button slot="endContent" design="Negative">Delete</furo-ui5-button>
  </ui5-bar>
</furo-ui5-dialog>
```

## Pattern

The confirmation dialog uses a **promise-based API**: calling a `confirm()` method opens the dialog and returns a `Promise<boolean>` that resolves when the user clicks Confirm (`true`) or Cancel (`false`).

**Key behavior:**
- Obtain a reference to the `furo-ui5-dialog` element (e.g., via `Ref` utility or `querySelector`)
- Call `.open()` to show the dialog
- On Confirm click: close the dialog, resolve the promise with `true`
- On Cancel click: close the dialog, resolve the promise with `false`

**Customizable options:**
- `title` — Dialog header text (default: "Confirm")
- `message` — Body text to display
- `confirmText` / `cancelText` — Button labels
- `destructive` — When `true`, use `design="Negative"` on the confirm button

**Usage:**
```
const confirmed = await confirmDialog.confirm({
  title: "Delete Item",
  message: "Are you sure? This cannot be undone.",
  confirmText: "Delete",
  destructive: true
});
if (confirmed) { /* proceed with delete */ }
```
