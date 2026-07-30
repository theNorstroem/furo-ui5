---
title: furo-ui5-label
tags: [label, form, text, field, caption, description]
category: Display
use-when: Use to label form fields or display short descriptive text.
---

# furo-ui5-label

> Text label for form fields and descriptive text.

**Class:** `FuroUi5Label`
**Import:** `import "@furo/ui5/label"`
**Extends:** `Label`
**Category:** Display

**Related:** [`furo-ui5-text`](furo-ui5-text.md), [`furo-ui5-title`](furo-ui5-title.md), [`furo-ui5-form-row`](furo-ui5-form-row.md)

## Overview

### Overview

The `furo-ui5-label` is a component used to represent a label for elements like input, textarea, select.
The `for` property of the `furo-ui5-label` must be the same as the id attribute of the related input element.
Screen readers read out the label, when the user focuses the labelled control.

The `furo-ui5-label` appearance can be influenced by properties,
such as `required` and `wrappingType`.
The appearance of the Label can be configured in a limited way by using the design property.
For a broader choice of designs, you can use custom styles.

## Attributes

| Attribute | Type | Default | Description |
|-----------|------|---------|-------------|
| `for` | `string \| undefined` | undefined | Defines the labeled input by providing its ID. |
| `required` | `boolean` | false | Defines whether an asterisk character is added to the component text. |
| `show-colon` | `boolean` | false | Defines whether colon is added to the component text. |
| `wrapping-type` | `"None" \| "Normal"` | "Normal" | Defines how the text of a component will be displayed when there is not enough space. |

## Properties

| Property | Type | Description |
|----------|------|-------------|
| `for` | `string \| undefined` | Defines the labeled input by providing its ID. |
| `required` | `boolean` | Defines whether an asterisk character is added to the component text. |
| `showColon` | `boolean` | Defines whether colon is added to the component text. |
| `wrappingType` | `WrappingType` | Defines how the text of a component will be displayed when there is not enough space. |

## Slots

### Default Slot (unnamed)

> **Usage:** Place content directly inside the component without a `slot` attribute.

Defines the text of the component.

**Note:** Although this slot accepts HTML Elements, it is strongly recommended that you only use text in order to preserve the intended design.
