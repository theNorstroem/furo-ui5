# Accessibility Guidelines

Best practices for building accessible applications.

## General Principles

### 1. Semantic HTML
Use appropriate HTML elements for their intended purpose:

```html
<!-- Use heading elements for headings -->
<furo-ui5-title level="H1">Page Title</furo-ui5-title>

<!-- Don't use styled divs for headings -->
<!-- BAD: <div style="font-size: 2rem; font-weight: bold;">Page Title</div> -->
```

### 2. Keyboard Navigation
Ensure all interactive elements are keyboard accessible. All Furo UI5 components support keyboard navigation by default. Custom interactive elements should handle keyboard events for Enter, Space (activation), and Escape (cancel/close).

```html
<!-- Custom interactive element with keyboard support -->
<div
  role="button"
  tabindex="0"
  aria-label="Custom Interactive Element">
  <!-- Handle "click" event for mouse activation -->
  <!-- Handle "keydown" event for Enter/Space activation and Escape to cancel -->
  Custom Interactive Element
</div>
```

### 3. Focus Management
Manage focus appropriately, especially in dialogs and dynamic content. Use Lit's `ref` directive (`createRef` / `ref` from `lit/directives/ref.js`) to obtain references to dialog and input elements. When opening a dialog, focus the first interactive element after the dialog opens (e.g., using `requestAnimationFrame`).

```html
<furo-ui5-dialog id="myDialog" header-text="Edit Item">
  <!-- First input receives focus when dialog opens -->
  <furo-ui5-text-input id="firstInput" label="Name"></furo-ui5-text-input>
</furo-ui5-dialog>
```

## ARIA Attributes

### Required ARIA Labels
Always provide accessible names for interactive elements:

```html
<!-- Buttons with icons need accessible names -->
<furo-ui5-button icon="delete" accessible-name="Delete item"></furo-ui5-button>

<!-- Icon-only buttons -->
<furo-ui5-button icon="settings" tooltip="Settings" accessible-name="Open settings"></furo-ui5-button>

<!-- Inputs should have labels -->
<furo-ui5-text-input label="Email Address" required></furo-ui5-text-input>

<!-- Or use accessible-name for visually hidden labels -->
<furo-ui5-text-input accessible-name="Search" placeholder="Search..." show-clear-icon></furo-ui5-text-input>
```

### ARIA for Custom Components
Add appropriate ARIA attributes to custom components:

```html
<!-- Custom list with ARIA -->
<div role="listbox" aria-label="Select an option">
  <!-- Handle "click" event on each option to select it -->
  <div role="option" aria-selected="true" tabindex="0">Option A</div>
  <div role="option" aria-selected="false" tabindex="-1">Option B</div>
  <div role="option" aria-selected="false" tabindex="-1">Option C</div>
</div>

<!-- Expandable section -->
<!-- Handle "click" event to toggle expanded state -->
<div role="button" aria-expanded="false" aria-controls="content-section">
  Section Title
</div>
<div id="content-section" hidden>
  Section content here
</div>

<!-- Loading state -->
<div role="status" aria-live="polite">
  <!-- Content updated dynamically, e.g., "Loading..." or empty when done -->
</div>
```

### ARIA Live Regions
Announce dynamic content changes to screen readers:

```html
<!-- Status announcements (polite — waits for user to finish current task) -->
<div role="status" aria-live="polite" class="visually-hidden">
  <!-- Update text content dynamically: "Saving...", "Changes saved successfully", etc. -->
</div>

<!-- Error messages should be assertive (interrupts immediately) -->
<div role="alert" aria-live="assertive">
  <!-- Update with error message text when an error occurs -->
</div>
```

```css
/* Visually hidden but accessible to screen readers */
.visually-hidden {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}
```

## Component-Specific Guidelines

### Tables
```html
<ui5-table accessible-name="Order list" accessible-name-ref="tableTitle">
  <span id="tableTitle" hidden>List of orders with status and amounts</span>
  <ui5-table-header-cell slot="columns">Order ID</ui5-table-header-cell>
  <ui5-table-header-cell slot="columns">Status</ui5-table-header-cell>
  <!-- ... -->
</ui5-table>
```

### Forms
```html
<furo-ui5-form-layout>
  <furo-ui5-form-group label="Personal Information">
    <furo-ui5-form-row>
      <!-- Required fields -->
      <furo-ui5-text-input
        label="First Name"
        required
        accessible-name="First name (required)">
      </furo-ui5-text-input>
    </furo-ui5-form-row>
    <furo-ui5-form-row>
      <!-- Error states -->
      <furo-ui5-text-input
        label="Email"
        value-state="Negative"
        value-state-message="Please enter a valid email address"
        aria-invalid="true">
      </furo-ui5-text-input>
    </furo-ui5-form-row>
  </furo-ui5-form-group>
</furo-ui5-form-layout>
```

### Dialogs
```html
<furo-ui5-dialog
  header-text="Confirm Delete"
  accessible-name="Confirm delete dialog"
  accessible-role="AlertDialog">
  <p>Are you sure you want to delete this item?</p>
  <ui5-bar slot="footer">
    <furo-ui5-button slot="endContent">Cancel</furo-ui5-button>
    <furo-ui5-button slot="endContent" design="Negative">Delete</furo-ui5-button>
  </ui5-bar>
</furo-ui5-dialog>
```

### Navigation
```html
<ui5-side-navigation accessible-name="Main navigation">
  <ui5-side-navigation-item
    id="home"
    text="Home"
    icon="home"
    accessible-name="Home page">
  </ui5-side-navigation-item>
  <ui5-side-navigation-item
    id="orders"
    text="Orders"
    icon="product"
    accessible-name="Orders page">
  </ui5-side-navigation-item>
</ui5-side-navigation>
```

### Tabs
```html
<furo-ui5-tabcontainer accessible-name="Product details tabs" collapsed fixed tab-layout="Inline">
  <furo-ui5-tab id="overview" text="Overview" accessible-name="Product overview"></furo-ui5-tab>
  <furo-ui5-tab id="specs" text="Specifications" accessible-name="Product specifications"></furo-ui5-tab>
  <furo-ui5-tab id="reviews" text="Reviews" accessible-name="Customer reviews"></furo-ui5-tab>
</furo-ui5-tabcontainer>
```

## Color and Contrast

### Don't Rely on Color Alone
Always provide additional indicators beyond color:

```html
<!-- Good: Icon + Color + Text -->
<furo-ui5-tag design="Negative">
  <furo-ui5-icon name="error" slot="icon"></furo-ui5-icon>
  Error
</furo-ui5-tag>

<!-- Good: Status with icon -->
<furo-ui5-tag state="Error" icon="error">Payment Failed</furo-ui5-tag>

<!-- Bad: Color only -->
<!-- <span style="color: red;">Error</span> -->
```

### Use Theme Variables
Theme variables ensure proper contrast ratios:

```css
/* Use semantic colors - they're designed for accessibility */
.error { color: var(--sapNegativeColor); }
.success { color: var(--sapPositiveColor); }
.warning { color: var(--sapCriticalColor); }
.info { color: var(--sapInformativeColor); }

/* Text colors maintain proper contrast */
.primary-text { color: var(--sapTextColor); }
.secondary-text { color: var(--sapContent_LabelColor); }
```

## Images and Media

### Alternative Text
```html
<!-- Informative images need alt text -->
<img src="chart.png" alt="Sales chart showing 15% growth in Q1">

<!-- Decorative images should be hidden -->
<img src="decorative-border.png" alt="" role="presentation">
<furo-ui5-icon name="decorator" aria-hidden="true"></furo-ui5-icon>

<!-- Avatar with person's name -->
<furo-ui5-avatar accessible-name="John Doe" initials="JD"></furo-ui5-avatar>
```

## Testing Accessibility

### Keyboard Testing Checklist
- [ ] Can navigate to all interactive elements using Tab
- [ ] Can activate buttons/links with Enter or Space
- [ ] Can close dialogs/popovers with Escape
- [ ] Focus is visible at all times
- [ ] Focus order is logical
- [ ] No keyboard traps

### Screen Reader Testing
- [ ] All interactive elements have accessible names
- [ ] Form fields have labels
- [ ] Error messages are announced
- [ ] Dynamic content changes are announced
- [ ] Headings create logical outline
- [ ] Tables have proper headers

### Automated Tools
```typescript
// In Playwright tests, use axe-core
import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

test("page should have no accessibility violations", async ({ page }) => {
  await page.goto("/my-page");
  const results = await new AxeBuilder({ page }).analyze();
  expect(results.violations).toEqual([]);
});
```

## Common WCAG Requirements

| Criterion | Level | Requirement |
|-----------|-------|-------------|
| 1.1.1 | A | Non-text content has text alternatives |
| 1.3.1 | A | Information and relationships are programmatically determined |
| 1.4.1 | A | Color is not the only visual means of conveying information |
| 1.4.3 | AA | Text has contrast ratio of at least 4.5:1 |
| 2.1.1 | A | All functionality is available from keyboard |
| 2.1.2 | A | No keyboard traps |
| 2.4.1 | A | Skip links are available |
| 2.4.3 | A | Focus order is logical |
| 2.4.4 | A | Link purpose is determinable |
| 2.4.6 | AA | Headings and labels are descriptive |
| 3.3.1 | A | Input errors are identified |
| 3.3.2 | A | Labels or instructions are provided |
| 4.1.2 | A | Name, role, value are available for UI components |

## Resources

- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [WAI-ARIA Authoring Practices](https://www.w3.org/WAI/ARIA/apg/)
- [axe-core for automated testing](https://github.com/dequelabs/axe-core)
