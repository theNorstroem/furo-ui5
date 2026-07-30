---
title: furo-ui5-section
tags: [section, page, object-page, content, area]
category: Container
use-when: Use within object pages to define major content sections.
---

# furo-ui5-section

> Major content section within object pages.

**Class:** `FuroUi5Section`
**Import:** `import "@furo/ui5/section"`
**Category:** Container

**Related:** [`furo-ui5-subsection`](furo-ui5-subsection.md), [`furo-ui5-page`](furo-ui5-page.md)

## Overview

`furo-ui5-section`
The object page content according to the SAP Design System Fiori guidelines consists of sections and subsections
arranged in a column layout.
The furo-ui5-section is basically a layout manager component to structure object pages. Sections can only
contain subsections, not content.

```html
<furo-ui5-section heading="STRING">
   <furo-ui5-subsection></furo-ui5-subsection>
   <furo-ui5-subsection></furo-ui5-subsection>
 </furo-ui5-section>
```

If a section contains only one subsection, the title of the subsection is used as the name of the section. In this case, there is no subsection submenu in the anchor bar.

Sections can only contain subsections, not content. Because of this, the object page only provides toolbars for local actions at the subsection level.

## Attributes

| Attribute | Type | Default | Description |
|-----------|------|---------|-------------|
| `heading` | `string` | "" | Heading title of the section |
| `heading-level` | `string` | "H3" | Defines the heading level. Available options are: "H6" to "H1". |
