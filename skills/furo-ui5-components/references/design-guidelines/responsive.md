# Responsive Design Breakpoints

## SAP Fiori Breakpoints

| Size | Width | CSS Variable Check |
|------|-------|-------------------|
| S (Phone) | < 600px | Small screens |
| M (Tablet) | 600px - 1023px | Medium screens |
| L (Desktop) | 1024px - 1439px | Large screens |
| XL (Wide) | >= 1440px | Extra large screens |

## Responsive Spacing

The `--MediaSizeIndentation` variable automatically adjusts:

| Screen Size | Indentation Value |
|-------------|-------------------|
| Phone (S) | 0.5rem |
| Tablet (M) | 1rem |
| Desktop (L) | 2rem |
| Wide (XL) | 2rem |

```css
/* Use responsive spacing */
.page-content {
  padding: var(--MediaSizeIndentation);
}
```

## Responsive Component Patterns

```html
<!-- FlexibleColumnLayout adapts to screen size -->
<ui5-flexible-column-layout layout="${this.getResponsiveLayout()}">
  <div slot="startColumn">Master</div>
  <div slot="midColumn">Detail</div>
</ui5-flexible-column-layout>
```

```typescript
private getResponsiveLayout(): string {
  // On small screens, show one column at a time
  if (window.innerWidth < 600) {
    return this.selectedItem ? "MidColumnFullScreen" : "OneColumn";
  }
  // On larger screens, show both columns
  return this.selectedItem ? "TwoColumnsMidExpanded" : "OneColumn";
}
```

## Responsive Form Columns

```html
<!-- Form layout adjusts columns by screen size -->
<furo-ui5-form-layout
  columns-s="1"
  columns-m="1"
  columns-l="2"
  columns-xl="3">
  <!-- Fields will stack on small screens, spread on large -->
</furo-ui5-form-layout>
```

## Responsive Tables

```html
<!-- Table with growing columns -->
<ui5-table>
  <ui5-table-header-cell slot="columns" min-width="150">Name</ui5-table-header-cell>
  <ui5-table-header-cell slot="columns" min-width="100" demand-popin popin-text="Status">Status</ui5-table-header-cell>
  <ui5-table-header-cell slot="columns" min-width="120" demand-popin popin-text="Date">Date</ui5-table-header-cell>
</ui5-table>
```

## Hide/Show Based on Screen Size

```css
/* Utility classes for responsive visibility */
@media (max-width: 599px) {
  .hide-on-phone { display: none !important; }
}

@media (min-width: 600px) and (max-width: 1023px) {
  .hide-on-tablet { display: none !important; }
}

@media (min-width: 1024px) {
  .hide-on-desktop { display: none !important; }
}
```
