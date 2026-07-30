# Button Placement Conventions

## Dialog Buttons

```html
<!-- Buttons in dialogs: Cancel left, Primary action right -->
<furo-ui5-dialog header-text="Confirm Action">
  <p>Are you sure you want to proceed?</p>

  <ui5-bar slot="footer" design="Footer">
    <furo-ui5-button slot="endContent">Cancel</furo-ui5-button>
    <furo-ui5-button slot="endContent" design="Emphasized">Confirm</furo-ui5-button>
  </ui5-bar>
</furo-ui5-dialog>
```

## Form Buttons

```html
<!-- Form actions: Secondary left, Primary right -->
<ui5-bar design="Footer">
  <furo-ui5-button slot="startContent" design="Transparent">Reset</furo-ui5-button>
  <furo-ui5-button slot="endContent">Cancel</furo-ui5-button>
  <furo-ui5-button slot="endContent" design="Emphasized">Save</furo-ui5-button>
</ui5-bar>
```

## Button Order Convention

| Position | Button Type | Design |
|----------|-------------|--------|
| Far left | Destructive/Reset | `Transparent` or `Negative` |
| Left | Secondary actions | `Transparent` |
| Right | Cancel/Close | `Default` |
| Far right | Primary action | `Emphasized` |

## Button Design Usage

| Design | Usage | Example |
|--------|-------|---------|
| `Emphasized` | Primary action, one per view | Save, Submit, Create |
| `Default` | Standard actions | Cancel, Close, Edit |
| `Transparent` | Toolbar actions, less prominent | Filter, Sort, Options |
| `Positive` | Confirm positive action | Approve, Accept |
| `Negative` | Destructive action | Delete, Reject |
| `Attention` | Warning/caution action | Override, Force |

```html
<!-- Button design examples -->
<furo-ui5-button design="Emphasized">Save Changes</furo-ui5-button>
<furo-ui5-button>Cancel</furo-ui5-button>
<furo-ui5-button design="Transparent" icon="filter">Filter</furo-ui5-button>
<furo-ui5-button design="Positive">Approve</furo-ui5-button>
<furo-ui5-button design="Negative">Delete</furo-ui5-button>
```

## Icon Buttons

```html
<!-- Icon-only buttons need accessible names -->
<furo-ui5-button icon="edit" design="Transparent" accessible-name="Edit item"></furo-ui5-button>
<furo-ui5-button icon="delete" design="Transparent" accessible-name="Delete item"></furo-ui5-button>

<!-- Icon with text -->
<furo-ui5-button icon="add">Add Item</furo-ui5-button>
<furo-ui5-button end-icon="slim-arrow-down">Options</furo-ui5-button>
```
