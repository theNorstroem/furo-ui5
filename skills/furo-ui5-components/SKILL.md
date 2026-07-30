---
name: furo-ui5-components
description: Use for furo-ui5- components, CSS variables, UI styling. Also for debugging, troubleshooting, and fixing furo-ui5 component issues.
---

# Furo UI5 Design System

Use the @furo/ui5 design system for HTML/CSS rendering with furo-ui5 components.

> ⚠️ **Important**: Always prefer using CSS style variables (e.g., `--sapTextColor`, `--MediaSizeIndentation`) instead of hardcoding colors, sizes, and other "magic numbers". This ensures theme consistency and responsiveness. See [Style Variables Reference](references/style-variables.md) for available variables.

> 🚫 **NEVER hallucinate components!** Before using any `furo-ui5-` component, ALWAYS verify it exists by checking:
> 1. `references/components-index.md` for the component list
> 2. `references/components/<tagname>.md` for component documentation
> 3. Or run: `ls node_modules/@furo/ui5/dist/elements/<kebab-tag-without-the-furo-ui5-prefix>`
>
> If a component is not documented, it does NOT exist. Do not invent component names.

> 🚫 **NEVER use native HTML elements** when an Furo UI5 equivalent exists.
> Before using `<input>`, `<select>`, `<textarea>`, `<button>`, `<a>`, `<progress>`, or any `<input type="...">` variant,
> check `references/components-index.md` for the Furo UI5 equivalent (e.g. `furo-ui5-text-input`, `furo-ui5-select`, `furo-ui5-textarea`, `furo-ui5-button`, `furo-ui5-link`, `furo-ui5-slider`, `furo-ui5-checkbox`).

## Component Documentation

Detailed API documentation for each component is available in the references directory:
- **Index**: See `references/components-index.md` for a categorized list of all 200+ components
- **Per-component docs**: `references/components/<tagname>.md` (e.g., `references/components/furo-ui5-button.md`)
- **Style Variables**: See `references/style-variables.md` for CSS custom properties (colors, spacing, typography)
- **Icons Reference**: See `references/icons-reference.md` for 600+ available SAP icons
- **Recipes & Cookbook**: See `references/recipes-index.md` for available patterns
- **Troubleshooting**: See `references/troubleshooting-index.md` for common mistakes and fixes
- **Accessibility**: See `references/accessibility.md` for a11y best practices

To regenerate docs after package updates, run:
```bash
npm run skills:update
```

## Component Naming

- Data-bound Furo components use the `furo-ui5-` prefix: `<furo-ui5-button>`, `<furo-ui5-text-input>`
- Plain SAP components are used unwrapped, with the `ui5-` prefix: `<ui5-table>`, `<ui5-card>`, `<ui5-bar>`
- Layout primitives come from `@furo/layout` with the `furo-` prefix: `<furo-vertical-flex>`, `<furo-responsive-layout>`
- Attributes use kebab-case: `value-state`, `show-clear-icon`, `accessible-name`

## Flex Layout Attributes

> ⚠️ **Important**: The `flex`, `scroll`, and `padding-inline` attributes only work on **direct children** of `furo-vertical-flex` or `furo-horizontal-flex` containers. These attributes have no effect when used on elements nested inside other components.

**Correct usage:**
```html
<furo-vertical-flex>
  <header-component></header-component>
  <main-content flex scroll></main-content>  <!-- ✓ Direct child -->
  <footer-component></footer-component>
</furo-vertical-flex>
```

**Incorrect usage:**
```html
<furo-ui5-busy-indicator flex>  <!-- ✗ Not a child of flex container -->
  <furo-vertical-flex>
    ...
  </furo-vertical-flex>
</furo-ui5-busy-indicator>
```

## CSS Styling Guidelines for Furo UI5 Components

> ⚠️ **Important**: Furo UI5 components come with built-in styling. Avoid adding custom CSS that overrides their default appearance.

### Do NOT Add Custom CSS For:

| Property | Reason | Alternative |
|----------|--------|-------------|
| **Borders & Shadows** | Built-in. Components like `furo-ui5-shellbar`, `ui5-dynamic-page-header` have correct borders/shadows | Use component attributes if available |
| **Colors** | Handled by `design` or `value-state` attributes | Set `design="Emphasized"`, `value-state="Error"`, etc. |
| **Font Weight & Fonts** | Theme-controlled typography | Use semantic components (`furo-ui5-title`, `furo-ui5-label`) |

### When Custom CSS IS Appropriate:

| Property | Use Case | Example |
|----------|----------|---------|
| **`height`** | Container sizing | `ui5-side-navigation { height: 100%; }` |
| **`overflow`** | Scroll behavior | `.content { overflow: auto; }` |
| **`padding: 0`** | Full-width content (tables, lists) | Remove padding in header/footer slots |

### Using `::part()` Selectors

Some components expose parts for styling. Check component documentation for available parts when needed:

```css
/* Example: styling a dialog's content area */
furo-ui5-dialog::part(content) {
  padding: 0;
}
```

### Common CSS Patterns

**Full-width table in a container:**
```css
ui5-card::part(content) {
  padding: 0;
}
```

**Side navigation with full height:**
```css
ui5-side-navigation {
  height: 100%;
}
```

## Table Rendering

> ⚠️ **Prefer regular HTML `<table>` over `<ui5-table>`** for better performance and flexibility.

**HTML Table Example:**
```html
<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Value</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Item 1</td>
      <td>100</td>
    </tr>
  </tbody>
</table>
```

> **Note**: For web components with shadowRoot, import `FuroUi5TableCss` for styling. In Angular/React without shadowRoot, table styles are included globally.

**ui5-table (use only when specific features are required):**
```html
<ui5-table>
  <ui5-table-header-cell slot="columns">Name</ui5-table-header-cell>
  <ui5-table-header-cell slot="columns">Value</ui5-table-header-cell>
  <ui5-table-row>
    <ui5-table-cell>Item 1</ui5-table-cell>
    <ui5-table-cell>100</ui5-table-cell>
  </ui5-table-row>
</ui5-table>
```

## Commonly Used Components Quick Reference

### Actions & Navigation

| Component | Purpose | Key Attributes |
|-----------|---------|----------------|
| `furo-ui5-button` | Actions | `design`, `icon`, `end-icon`, `disabled`, `loading` |
| `furo-ui5-link` | Hyperlink | `href`, `target`, `design`, `disabled` |
| `ui5-side-navigation` | Side nav | `@selection-change`, contains `ui5-side-navigation-item` |
| `furo-ui5-tabcontainer` | Tabs | `@tab-select`, `collapsed`, `fixed` |

### Form Inputs

| Component | Purpose | Key Attributes |
|-----------|---------|----------------|
| `furo-ui5-text-input` | Text input | `value`, `label`, `type`, `required`, `value-state` |
| `furo-ui5-textarea` | Multi-line text | `value`, `rows`, `maxlength`, `value-state` |
| `furo-ui5-label` | Form field label | `for`, `required`, `show-colon`                                   |
| `furo-ui5-select` | Dropdown | `@change`, contains `furo-ui5-option` |
| `furo-ui5-combobox` | Searchable dropdown | `value`, `placeholder`, `filter`, `show-clear-icon` |
| `furo-ui5-multi-combobox` | Multi-select dropdown | `value`, `placeholder`, `filter`, `show-select-all` |
| `furo-ui5-multi-input` | Multi-value input | `value`, `placeholder`, `show-suggestions`, `show-value-help-icon` |
| `ui5-search` | Search field | `value`, `placeholder`, `loading`, `show-clear-icon` |
| `furo-ui5-checkbox` | Boolean toggle | `checked`, `text`, `value-state`, `indeterminate` |
| `furo-ui5-radio-button` | Exclusive choice | `name`, `value`, `checked`, `text` |
| `furo-ui5-switch` | On/off toggle | `checked`, `text-on`, `text-off`, `design` |
| `furo-ui5-slider` | Numeric range | `value`, `min`, `max`, `step`, `show-tooltip` |
| `furo-ui5-range-slider` | Dual-handle range | `start-value`, `end-value`, `min`, `max`, `step` |
| `furo-ui5-step-input` | Numeric spinner | `value`, `min`, `max`, `step`, `value-state` |
| `furo-ui5-rating-indicator` | Star rating | `value`, `max`, `readonly`, `disabled` |
| `furo-ui5-file-uploader` | File upload | `accept`, `multiple`, `max-file-size`, `placeholder` |
| `furo-ui5-color-picker` | Color selection | `value`, `name`, `simplified` |

### Date & Time

| Component | Purpose | Key Attributes |
|-----------|---------|----------------|
| `furo-ui5-date-picker` | Date selection | `value`, `format-pattern`, `min-date`, `max-date` |
| `furo-ui5-date-time-picker` | Date + time selection | `value`, `format-pattern`, `min-date`, `max-date` |
| `furo-ui5-daterange-picker` | Date range selection | `value`, `delimiter`, `format-pattern` |
| `furo-ui5-time-picker` | Time selection | `value`, `format-pattern`, `placeholder` |

### Layout & Display

| Component | Purpose | Key Attributes |
|-----------|---------|----------------|
| `furo-ui5-label` | Form field label | `for`, `required`, `wrapping-type`, `design` |
| `furo-ui5-form-layout` | Form container | `form-title`, `heading-level` |
| `ui5-dynamic-page-header` | Page header | `header-text`, `collapsed`, slots: `summary`, `action` |
| `ui5-table` | Data table | `mode`, contains `ui5-table-header-cell`, `ui5-table-row` |
| `furo-ui5-dialog` | Modal | `header-text`, `.open()`, `.close()` |
| `furo-ui5-toast` | Notifications | `placement`, `.showMessage(text)` |
| `furo-ui5-tag` | Status badge | `design` (Positive/Negative/Warning/Information) |
| `furo-ui5-progress-indicator` | Progress bar | `value`, `value-state`, `display-value`, `hide-value` |
| `furo-ui5-busy-indicator` | Loading overlay | `active` |

## Form Layout Structure

```html
<furo-ui5-form-layout form-title="Form Title" heading-level="H4">
  <furo-ui5-form-group label="Group Label">
    <furo-ui5-form-row>
      <furo-ui5-text-input label="Field Label" required></furo-ui5-text-input>
    </furo-ui5-form-row>
  </furo-ui5-form-group>
</furo-ui5-form-layout>
```

## Dialog Structure

```html
<furo-ui5-dialog id="myDialog" header-text="Dialog Title">
  <!-- Dialog content -->
  <ui5-bar slot="footer" design="Footer">
    <furo-ui5-button slot="endContent">Cancel</furo-ui5-button>
    <furo-ui5-button slot="endContent" design="Emphasized">Save</furo-ui5-button>
  </ui5-bar>
</furo-ui5-dialog>
```

## Documentation Resources

- **Storybook**: https://ui5.furo.pro/
- **Component API (JSON)**: `node_modules/@furo/ui5/custom-elements.json`
- **Generated Docs**: `skills/furo-ui5-components/references/components/`

## Additional Documentation

| Document | Description |
|----------|-------------|
| [Design Guidelines](references/design-guidelines-index.md) | Spacing, typography, colors, forms, responsive patterns |
| [Style Variables](references/style-variables.md) | CSS custom properties for theming |
| [Icons Reference](references/icons-reference.md) | 600+ SAP icons + Furo UI5 custom icons |
| [Recipes & Cookbook](references/recipes-index.md) | Complete working code examples |
| [Troubleshooting](references/troubleshooting-index.md) | Common mistakes and solutions |
| [Accessibility](references/accessibility.md) | WCAG guidelines and ARIA patterns |
