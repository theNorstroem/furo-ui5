---
title: Blank Page Layout
tags: [blank, minimal, starter, template, basic, empty]
use-when: user asks for blank page, minimal layout, starter template, or basic page structure
---

# Blank Page Layout

A minimal page layout with just a header and content area. Use this as a starting point for custom pages or when other layouts don't fit your needs.

## Use Cases
- Simple content pages
- Landing pages
- Custom layouts that don't fit standard patterns
- Prototyping new page types
- Full-screen content (maps, charts, editors)

## Required Components
| Tag | ES Module |
|-----|-----------|
| `furo-vertical-flex` | `@furo/layout/furo-vertical-flex` |
| `ui5-dynamic-page-header` | `@ui5/webcomponents-fiori/dist/DynamicPageHeader.js` |
| `ui5-bar` | `@ui5/webcomponents/dist/Bar.js` |
| `furo-ui5-button` | `@furo/ui5/button` |
| `furo-ui5-busy-indicator` | `@furo/ui5/busy-indicator` |

> How you load these modules depends on your framework. See [Framework References](#framework-specific-syntax) below.

## Preview
```
+-------------------------------------------------------------+
| Dynamic Header                                    [Actions]  |
+-------------------------------------------------------------+
|                                                              |
|                                                              |
|                    Content Area                              |
|                                                              |
|                    (scrollable)                              |
|                                                              |
|                                                              |
+-------------------------------------------------------------+
| Footer (optional)                          [Cancel] [Save]   |
+-------------------------------------------------------------+
```

## Styles

```css
:host {
  display: block;
  height: 100%;
}

*:not(:defined) {
  display: none;
}

.content {
  padding: var(--MediaSizeIndentation);
}
```

## Implementation

### Basic Blank Page
```html
<furo-ui5-busy-indicator> <!-- Toggle "active" when loading -->
  <furo-vertical-flex style="height: 100%">
    <!-- Header -->
    <ui5-dynamic-page-header header-text="Page Title" secondary-text="Optional subtitle" collapsed>
    </ui5-dynamic-page-header>

    <!-- Content -->
    <div flex scroll class="content">
      <!-- Your content here -->
    </div>
  </furo-vertical-flex>
</furo-ui5-busy-indicator>
```

### Blank Page with Footer
```html
<furo-ui5-busy-indicator> <!-- Toggle "active" when loading -->
  <furo-vertical-flex style="height: 100%">
    <!-- Header -->
    <ui5-dynamic-page-header header-text="Page Title">
    </ui5-dynamic-page-header>

    <!-- Content -->
    <div flex scroll class="content">
      <!-- Your content here -->
    </div>

    <!-- Footer -->
    <ui5-bar design="Footer">
      <furo-ui5-button slot="endContent">Cancel</furo-ui5-button> <!-- Handle click event -->
      <furo-ui5-button slot="endContent" design="Emphasized">Save</furo-ui5-button> <!-- Handle click event -->
    </ui5-bar>
  </furo-vertical-flex>
</furo-ui5-busy-indicator>
```

### Blank Page with Header Actions
```html
<furo-ui5-busy-indicator> <!-- Toggle "active" when loading -->
  <furo-vertical-flex style="height: 100%">
    <!-- Header with actions -->
    <ui5-dynamic-page-header header-text="Page Title">
      <furo-ui5-button slot="action" icon="refresh" design="Transparent">
        Refresh
      </furo-ui5-button> <!-- Handle click event -->
      <furo-ui5-button slot="action" icon="add" design="Emphasized">
        Create
      </furo-ui5-button> <!-- Handle click event -->
    </ui5-dynamic-page-header>

    <!-- Content -->
    <div flex scroll class="content">
      <!-- Your content here -->
    </div>
  </furo-vertical-flex>
</furo-ui5-busy-indicator>
```

### Full-Screen Blank Page (No Header)
```html
<furo-ui5-busy-indicator> <!-- Toggle "active" when loading -->
  <div class="full-screen-content">
    <!-- Full screen content: map, chart, editor, etc. -->
  </div>
</furo-ui5-busy-indicator>
```

With additional styles:
```css
.full-screen-content {
  height: 100%;
  width: 100%;
}
```

## Variants

| Variant | Header | Footer | Use Case |
|---------|--------|--------|----------|
| Basic | Yes | No | Simple content display |
| With Footer | Yes | Yes | Forms, editable content |
| With Actions | Yes (actions) | No | Lists, dashboards |
| Full Screen | No | No | Maps, charts, editors |

## Customization

### Adding a Summary Section
```html
<ui5-dynamic-page-header collapsed header-text="Page Title" secondary-text="Subtitle here">
  <!-- Summary content below header -->
  <div slot="summary">
    <furo-horizontal-flex style="gap: 2rem;">
      <furo-ui5-label show-colon>Status</furo-ui5-label><furo-ui5-text>Active</furo-ui5-text>
      <furo-ui5-label show-colon>Created</furo-ui5-label><furo-ui5-text>2024-01-15</furo-ui5-text>
      <furo-ui5-label show-colon>Items</furo-ui5-label><furo-ui5-text>42</furo-ui5-text>
    </furo-horizontal-flex>
  </div>

  <!-- Actions -->
  <furo-ui5-button slot="action" design="Emphasized">Action</furo-ui5-button>
</ui5-dynamic-page-header>
```

### Adding Breadcrumbs
```html
<furo-vertical-flex style="height: 100%">
  <!-- Breadcrumbs -->
  <furo-ui5-breadcrumbs>
    <furo-ui5-breadcrumbs-item href="/">Home</furo-ui5-breadcrumbs-item>
    <furo-ui5-breadcrumbs-item href="/items">Items</furo-ui5-breadcrumbs-item>
    <furo-ui5-breadcrumbs-item>Current Page</furo-ui5-breadcrumbs-item>
  </furo-ui5-breadcrumbs>

  <!-- Header -->
  <ui5-dynamic-page-header header-text="Page Title"></ui5-dynamic-page-header>

  <!-- Content -->
  <div flex scroll class="content">
    <!-- Content here -->
  </div>
</furo-vertical-flex>
```

### Centered Content Layout
```html
<div class="centered-content">
  <div class="content-box">
    <!-- Centered content: login form, confirmation, etc. -->
  </div>
</div>
```

With styles:
```css
.centered-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding: var(--MediaSizeIndentation);
}

.content-box {
  max-width: 600px;
  width: 100%;
}
```

## Related Components
- `ui5-dynamic-page-header` - import `@ui5/webcomponents-fiori/dist/DynamicPageHeader.js`
- `ui5-bar` - import `@ui5/webcomponents/dist/Bar.js`
- `furo-vertical-flex` - import `@furo/layout/furo-vertical-flex`
- `furo-ui5-breadcrumbs` - [Component docs](../furo-ui5-components/components/furo-ui5-breadcrumbs.md)

## Framework-Specific Syntax
For event handling, boolean attributes, and property binding syntax in your framework:
- [Lit](../frameworks/lit.md)
- [Angular](../frameworks/angular.md)
- [React](../frameworks/react.md)
