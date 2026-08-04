---
title: furo-ui5-money-input
tags: [money, currency, amount, price, input, decimal, form]
category: Form
use-when: Use for entering a monetary value together with its currency.
---

# furo-ui5-money-input

> Composite input for a monetary amount together with its currency.

**Class:** `FuroUi5MoneyInput`
**Import:** `import "@furo/ui5/money-input"`
**Import type:** `import type { FuroUi5MoneyInput } from "@furo/ui5/money-input"`
**Category:** Form

**Related:** [`furo-ui5-number-input`](furo-ui5-number-input.md), [`furo-ui5-combobox`](furo-ui5-combobox.md)

## Overview

The `furo-ui5-money-input` binds a `google.type.Money` or `furo.type.Money` field to a
composition of an amount input (`furo-ui5-input` type Number) and a currency
`furo-ui5-combobox`. The amount round-trips through the model's `units` (INT64) and
`nanos` (INT32) fields; the currency is bound to the model's `currencyCode` field.

You can offer a fixed currency list with the `currencies` attribute:

```html
<furo-ui5-money-input currencies="CHF,EUR,USD"></furo-ui5-money-input>
```

## supported meta and constraints
- **readonly: true** — set the element to readonly
- **required: true** — mark the element as required

## Attributes

| Attribute | Type | Default | Description |
|-----------|------|---------|-------------|
| `accessible-name` | `string \| undefined` | - |  |
| `currencies` | `string` | "" |  |
| `disabled` | `boolean` | false |  |
| `placeholder` | `string \| undefined` | - |  |
| `readonly` | `boolean` | false |  |
| `required` | `boolean` | false |  |

## Properties

| Property | Type | Description |
|----------|------|-------------|
| `amountValue` | `string` |  |
| `model` | `GoogleMoney \| FuroMoney` | Use this to bind a model field by attribute. |

## Methods

### `bindData(fieldNode: GoogleMoney | FuroMoney | undefined): void`

Connects your data model to this component.
