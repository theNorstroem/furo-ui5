# Form with Progressive Disclosure (Show More)

Use `furo-ui5-subsection` with `show-more-text` attribute and `slot="more"` to hide optional form fields behind an expandable toggle.

> **Note:** CSS is shown in `<style>` blocks for illustration. In your framework, use the appropriate styling approach (e.g., `static styles` in Lit, scoped styles in Angular, CSS modules in React).

## HTML Structure

```html
<style>
  :host { display: block; }
  *:not(:defined) { display: none; }
</style>

<furo-ui5-section heading="Product Details">
  <furo-ui5-subsection
    show-more-text="Show advanced options"
    show-less-text="Hide advanced options"
  >
    <!-- Default slot: always-visible fields -->
    <furo-ui5-form-layout form-title="Basic Information" heading-level="H4">
      <furo-ui5-form-group label="Required">
        <furo-ui5-form-row>
          <furo-ui5-text-input label="Name" required></furo-ui5-text-input>
        </furo-ui5-form-row>
        <furo-ui5-form-row>
          <furo-ui5-text-input label="Description"></furo-ui5-text-input>
        </furo-ui5-form-row>
      </furo-ui5-form-group>
    </furo-ui5-form-layout>

    <!-- slot="more": hidden until user clicks "Show advanced options" -->
    <furo-ui5-form-layout slot="more" heading-level="H4">
      <furo-ui5-form-group label="Appearance">
        <furo-ui5-form-row>
          <furo-ui5-color-picker color="rgba(0,0,0,1)"></furo-ui5-color-picker>
        </furo-ui5-form-row>
        <furo-ui5-form-row>
          <furo-ui5-text-input label="Custom CSS Class"></furo-ui5-text-input>
        </furo-ui5-form-row>
      </furo-ui5-form-group>
    </furo-ui5-form-layout>
  </furo-ui5-subsection>
</furo-ui5-section>
```

**Key points:**
- `show-more-text` — Text for expand toggle (default: "show more")
- `show-less-text` — Text for collapse toggle (default: "show less")
- `expanded` — Boolean attribute to start in expanded state
- `slot="more"` — Content in this slot is hidden until the user expands
- Use for optional settings, advanced configuration, or secondary fields most users won't need on every visit
