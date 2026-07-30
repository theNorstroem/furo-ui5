# Color Semantics

## Semantic Colors

| State | Color Variable | Usage |
|-------|----------------|-------|
| Positive | `--sapPositiveColor` | Success, approved, complete |
| Negative | `--sapNegativeColor` | Error, rejected, failed |
| Critical | `--sapCriticalColor` | Warning, attention needed |
| Informative | `--sapInformativeColor` | Info, neutral highlight |
| Neutral | `--sapNeutralColor` | Default, no special meaning |

## Value States for Inputs

```html
<!-- Input validation states -->
<furo-ui5-text-input value-state="None" label="Default"></furo-ui5-text-input>
<furo-ui5-text-input value-state="Success" label="Valid input"></furo-ui5-text-input>
<furo-ui5-text-input value-state="Warning" label="Needs attention"></furo-ui5-text-input>
<furo-ui5-text-input value-state="Error" label="Invalid input"></furo-ui5-text-input>
<furo-ui5-text-input value-state="Information" label="Additional info"></furo-ui5-text-input>
```

## Status Indicators

```html
<!-- Object status for displaying states -->
<furo-ui5-tag state="Positive" icon="complete">Completed</furo-ui5-tag>
<furo-ui5-tag state="Negative" icon="error">Failed</furo-ui5-tag>
<furo-ui5-tag state="Critical" icon="warning">Pending Review</furo-ui5-tag>
<furo-ui5-tag state="Information" icon="information">In Progress</furo-ui5-tag>
<furo-ui5-tag state="None">Draft</furo-ui5-tag>

<!-- Tags for categorical status -->
<furo-ui5-tag design="Positive">Active</furo-ui5-tag>
<furo-ui5-tag design="Negative">Inactive</furo-ui5-tag>
<furo-ui5-tag design="Critical">Expiring</furo-ui5-tag>
<furo-ui5-tag design="Information">New</furo-ui5-tag>
<furo-ui5-tag>Default</furo-ui5-tag>
```

## Message Strips

```html
<!-- Inline messages -->
<furo-ui5-message-strip design="Information">
  This is an informational message.
</furo-ui5-message-strip>

<furo-ui5-message-strip design="Positive">
  Changes saved successfully.
</furo-ui5-message-strip>

<furo-ui5-message-strip design="Warning">
  Your session will expire in 5 minutes.
</furo-ui5-message-strip>

<furo-ui5-message-strip design="Negative">
  Failed to load data. Please try again.
</furo-ui5-message-strip>
```

## When to Use Each Color

| Color | Use When |
|-------|----------|
| **Positive (Green)** | Action succeeded, item approved, goal met, status active |
| **Negative (Red)** | Action failed, validation error, item rejected, critical issue |
| **Critical (Orange)** | Needs attention, approaching limit, partial issue, warning |
| **Information (Blue)** | Neutral highlight, new item, informational note |
| **Neutral (Grey)** | Default state, no special status, inactive |

## Don't Rely on Color Alone

Always provide additional indicators:

```html
<!-- Good: Icon + Color + Text -->
<furo-ui5-tag state="Negative" icon="error">
  Payment Failed
</furo-ui5-tag>

<!-- Bad: Color only -->
<span style="color: red;">Payment Failed</span>
```
