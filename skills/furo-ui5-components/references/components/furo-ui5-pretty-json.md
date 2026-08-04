---
title: furo-ui5-pretty-json
tags: [json, pretty-print, debug, display, format, code, pretty]
category: Display
use-when: Use to render JSON data in a readable, indented form.
---

# furo-ui5-pretty-json

> Display-only pretty printer for JSON data.

**Class:** `FuroUi5PrettyJson`
**Import:** `import "@furo/ui5/pretty-json"`
**Import type:** `import type { FuroUi5PrettyJson } from "@furo/ui5/pretty-json"`
**Category:** Display

**Related:** [`furo-ui5-markdown`](furo-ui5-markdown.md)

## Overview

`furo-ui5-pretty-json`
Pretty json with highlighting

```html
<furo-ui5-pretty-json .model="${this.someFieldNode}"></furo-ui5-pretty-json>
```

## Properties

| Property | Type | Description |
|----------|------|-------------|
| `json` | `object` | Set the json |
| `model` | `FieldNode` | Use this to bind a model field by attribute. |

## Methods

### `bindData(fieldNode: FieldNode | undefined): void`
