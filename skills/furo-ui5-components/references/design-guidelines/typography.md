# Typography Hierarchy

## Heading Levels

| Level | Component | Usage |
|-------|-----------|-------|
| H1 | `<furo-ui5-title level="H1">` | Page title (one per page) |
| H2 | `<furo-ui5-title level="H2">` | Major sections |
| H3 | `<furo-ui5-title level="H3">` | Subsections |
| H4 | `<furo-ui5-title level="H4">` | Card headers, form groups |
| H5 | `<furo-ui5-title level="H5">` | Minor headings |
| H6 | `<furo-ui5-title level="H6">` | Smallest headings |

## Typography Usage

```html
<!-- Page structure example -->
<ui5-dynamic-page-header secondary-text="Order #12345" header-text="Order Details">  <!-- H1 equivalent -->

</ui5-dynamic-page-header>

<furo-ui5-section heading="Customer Information">  <!-- H2 equivalent -->
  <furo-ui5-subsection>
    <furo-ui5-form-layout form-title="Contact" heading-level="H4">  <!-- H4 -->
      <!-- Form content -->
    </furo-ui5-form-layout>
  </furo-ui5-subsection>
</furo-ui5-section>

<furo-ui5-section heading="Order Items">  <!-- H2 equivalent -->
  <!-- Table content -->
</furo-ui5-section>
```

## Text Styles

| Style | CSS Variable | Usage |
|-------|--------------|-------|
| Primary text | `--sapTextColor` | Main content |
| Secondary text | `--sapContent_LabelColor` | Labels, descriptions |
| Placeholder | `--sapField_PlaceholderTextColor` | Input placeholders |
| Link | `--sapLinkColor` | Clickable links |

```css
/* Text style examples */
.primary { color: var(--sapTextColor); }
.secondary { color: var(--sapContent_LabelColor); }
.emphasized { font-weight: bold; }
.small { font-size: var(--sapFontSmallSize); }
```

## Font Sizes

| Variable | Typical Use |
|----------|-------------|
| `--sapFontSmallSize` | Helper text, timestamps |
| `--sapFontSize` | Body text (default) |
| `--sapFontLargeSize` | Emphasized content |
| `--sapFontHeader1Size` | Page titles |
| `--sapFontHeader2Size` | Section headers |
