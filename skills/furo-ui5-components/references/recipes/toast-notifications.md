# Toast Notifications on Actions

Show toast messages for user feedback.

> **Note:** CSS is shown in `<style>` blocks for illustration. In your framework, use the appropriate styling approach (e.g., `static styles` in Lit, scoped styles in Angular, CSS modules in React).

## HTML Structure

```html
<style>
  :host { display: block; }
  *:not(:defined) { display: none; }
  .buttons { display: flex; gap: 0.5rem; }
</style>

<div class="buttons">
  <!-- Handle "click" event to save and show success/error toast -->
  <furo-ui5-button design="Emphasized">Save</furo-ui5-button>
  <!-- Handle "click" event to delete and show success/error toast -->
  <furo-ui5-button design="Negative">Delete</furo-ui5-button>
  <!-- Handle "click" event to show info toast -->
  <furo-ui5-button>Show Info</furo-ui5-button>
  <!-- Handle "click" event to show warning toast -->
  <furo-ui5-button>Show Warning</furo-ui5-button>
</div>

<furo-ui5-toast id="toast" placement="TopCenter" duration="3000"></furo-ui5-toast>
```

## Pattern

**Showing toasts:** Obtain a reference to the `furo-ui5-toast` element and call its `showMessage(message, design)` method.

**Design values for toast messages:**
| Type | Design Value | Use Case |
|------|-------------|----------|
| Success | `Positive` | Save completed, item created |
| Error | `Negative` | Operation failed |
| Warning | `Critical` | Input validation, caution |
| Info | `Information` | General notifications |

**Typical flow:**
1. User clicks an action button (e.g., "Save")
2. Perform the async operation (API call)
3. On success: call `toast.showMessage("Changes saved successfully!", "Positive")`
4. On error: call `toast.showMessage("Failed to save changes.", "Negative")`

**Configuration:**
- `placement` — Position on screen: `TopCenter`, `TopStart`, `TopEnd`, `BottomCenter`, `BottomStart`, `BottomEnd`
- `duration` — Auto-dismiss time in milliseconds (default: 3000)
