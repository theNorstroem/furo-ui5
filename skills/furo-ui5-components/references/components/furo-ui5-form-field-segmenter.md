---
title: furo-ui5-form-field-segmenter
tags: [segmenter, split, field, unit, compound, paired, form]
category: FormLayout
use-when: Use for compound fields like amount-currency or value-unit pairs.
---

# furo-ui5-form-field-segmenter

> Splits form field space for segmented layouts like value-unit pairs.

**Class:** `FuroUi5FormFieldSegmenter`
**Import:** `import "@furo/ui5/form-field-segmenter"`
**Category:** FormLayout

**Related:** [`furo-ui5-form-row`](furo-ui5-form-row.md)

## Overview

### Description
If you need to place some units for the fields or want to have a small field followed by a large field, you should use this component.

### ES6 Module Import

## Attributes

| Attribute | Type | Default | Description |
|-----------|------|---------|-------------|
| `pattern` | `"Full" \| "SmallBig" \| "BigSmall"` | - | Field patterns, defaults to a single field with optional value. |
| `unit` | `string` | "" | Optional unit for the form field. |

## Slots

### `slot-name`
**Type:** `HTMLElement[]`

slot description
