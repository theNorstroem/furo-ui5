---
title: furo-ui5-cb-item
tags: [combobox-item, option, selection, dropdown, item]
category: Form
use-when: Use as children of furo-ui5-combobox.
---

# furo-ui5-cb-item

> Item option for ComboBox selection lists.

**Class:** `FuroUi5CbItem`
**Import:** `import "@furo/ui5/cb-item"`
**Extends:** `ComboBoxItem`
**Category:** Form

**Related:** [`furo-ui5-combobox`](furo-ui5-combobox.md), [`furo-ui5-cb-item-group`](furo-ui5-cb-item-group.md)

## Overview

The `furo-ui5-cb-item` is meant to be used inside a `furo-ui5-combobox`.

The `furo-ui5-cb-item` represents the item for a `furo-ui5-combobox`.

## Attributes

| Attribute | Type | Default | Description |
|-----------|------|---------|-------------|
| `additional-text` | `string \| undefined` | undefined | Defines the additional text of the component. |
| `text` | `string \| undefined` | undefined | Defines the text of the component. |
| `value` | `string \| undefined` | undefined | Defines the value of the `furo-ui5-cb-item`. |

## Properties

| Property | Type | Description |
|----------|------|-------------|
| `additionalText` | `string \| undefined` | Defines the additional text of the component. |
| `model` | `MultiComboBoxItemLike \| undefined` | Use this to bind a multiComboBoxItems field by attribute. |
| `text` | `string \| undefined` | Defines the text of the component. |
| `value` | `string \| undefined` | Defines the value of the `furo-ui5-cb-item`. |

## Events

| Event | Detail Type | Description |
|-------|-------------|-------------|
| `click` | `CustomEvent<ListItemBaseClickEventDetail>` | Fired when the component is activated either with a mouse/tap or by using the Enter or Space key. |

## Methods

### `bindData(fieldNode: MultiComboBoxItemLike | undefined): void`

Connects your data model to this component.

## CSS Parts

- `native-li`: Use this to format the `li` inside the shadow root of the component.
- `content`: Use this to format the content `div` inside the shadow root of the component, which surrounds the title and the additional-text `spans`.
- `title`: Use this to format the "title" `span` inside the shadow root of the component, which surrounds the default slot.
- `additional-text`: Use this to format the additional-text `span` inside the shadow root of the component.
