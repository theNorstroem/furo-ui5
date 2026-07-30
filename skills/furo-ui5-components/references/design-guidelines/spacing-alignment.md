# Spacing & Alignment

## Spacing Scale

Use consistent spacing values from the design system:

| Variable | Value | Usage |
|----------|-------|-------|
| `--sapElement_Compact_Height` | 1.625rem | Compact mode element height |
| `--sapElement_Height` | 2.75rem | Standard element height |
| `--MediaSizeIndentation` | 0.5rem - 2rem | Responsive page margins (auto-adjusts) |

## Spacing Guidelines

```css
/* Use these patterns for consistent spacing */

/* Tight spacing - between related items */
gap: 0.25rem;  /* 4px - icons next to text */
gap: 0.5rem;   /* 8px - items in a group */

/* Standard spacing - between components */
gap: 1rem;     /* 16px - form fields, list items */
padding: 1rem; /* 16px - card content, sections */

/* Loose spacing - between sections */
gap: 1.5rem;   /* 24px - form groups */
gap: 2rem;     /* 32px - page sections */
```

## Alignment Rules

```html
<!-- Use flex utilities for alignment -->
<furo-horizontal-flex>
  <!-- Left-aligned content (default) -->
  <div>Primary content</div>

  <!-- Right-aligned with flex spacer -->
  <div flex></div>
  <div>Secondary content</div>
</furo-horizontal-flex>

<!-- Vertical centering -->
<furo-horizontal-flex style="align-items: center;">
  <furo-ui5-icon name="info"></furo-ui5-icon>
  <span>Vertically centered text</span>
</furo-horizontal-flex>
```

## Content Alignment Conventions

| Content Type | Alignment |
|--------------|-----------|
| Text, labels | Left |
| Numbers, amounts | Right |
| Status indicators | Center |
| Action buttons | Right |
| Icons with text | Left (icon before text) |
