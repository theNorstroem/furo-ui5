---
title: furo-ui5-token
tags: [token, chip, tag, item, multi-input, tokenizer, removable]
category: Form
use-when: Use inside furo-ui5-tokenizer or furo-ui5-multi-input to display a selected value.
---

# furo-ui5-token

> Small removable item of information, displayed inside a tokenizer.

**Class:** `FuroUi5Token`
**Import:** `import "@furo/ui5/token"`
**Import type:** `import type { FuroUi5Token } from "@furo/ui5/token"`
**Extends:** `Token`
**Category:** Form

**Related:** [`furo-ui5-tokenizer`](furo-ui5-tokenizer.md), [`furo-ui5-multi-input`](furo-ui5-multi-input.md), [`furo-ui5-multi-combobox`](furo-ui5-multi-combobox.md), [`furo-ui5-tag`](furo-ui5-tag.md)

## Overview

A small, removable item of information (similar to a tag), mainly used to visualize previously
selected values. Place tokens inside a `furo-ui5-tokenizer` or a `furo-ui5-multi-input`.

```html
<furo-ui5-tokenizer style="width:20rem">
  <furo-ui5-token text="Zurich"></furo-ui5-token>
  <furo-ui5-token text="Berlin" selected></furo-ui5-token>
</furo-ui5-tokenizer>
```

This is a pass-through wrapper around `furo-ui5-token`: the UI5 API (properties, events,
slots) is inherited unchanged and no data binding is added.

### Overview

Tokens are small items of information (similar to tags) that mainly serve to visualize previously selected items.

## Attributes

| Attribute | Type | Default | Description |
|-----------|------|---------|-------------|
| `selected` | `boolean` | false | Defines whether the component is selected or not. |
| `text` | `string \| undefined` | undefined | Defines the text of the token. |

## Properties

| Property | Type | Description |
|----------|------|-------------|
| `selected` | `boolean` | Defines whether the component is selected or not. |
| `text` | `string \| undefined` | Defines the text of the token. |

## Slots

### `closeIcon`

Defines the close icon for the token. If nothing is provided to this slot, the default close icon will be used.
Accepts `ui5-icon`.
