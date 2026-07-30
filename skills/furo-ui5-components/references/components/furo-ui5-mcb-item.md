---
title: furo-ui5-mcb-item
tags: [multi-combobox-item, option, selection, token, mcb, item]
category: Form
use-when: Use as children of furo-ui5-multi-combobox.
---

# furo-ui5-mcb-item

> Item option for MultiComboBox selection lists.

**Class:** `FuroUi5McbItem`
**Import:** `import "@furo/ui5/mcb-item"`
**Extends:** `MultiComboBoxItem`
**Category:** Form

**Related:** [`furo-ui5-multi-combobox`](furo-ui5-multi-combobox.md)

## Overview

The `furo-ui5-mcb-item` is meant to be used inside a `furo-ui5-multi-combobox`.

The `furo-ui5-mcb-item` represents the item for a `furo-ui5-multi-combobox`.

## Attributes

| Attribute | Type | Default | Description |
|-----------|------|---------|-------------|
| `additional-text` | `string \| undefined` | undefined | Defines the additional text of the component. |
| `selected` | `boolean` | false | Defines the selected state of the component. |
| `text` | `string \| undefined` | undefined | Defines the text of the component. |
| `value` | `string \| undefined` | undefined | Defines the value of the component. |

## Properties

| Property | Type | Description |
|----------|------|-------------|
| `additionalText` | `string \| undefined` | Defines the additional text of the component. |
| `model` | `MultiComboBoxItemLike \| undefined` | Use this to bind a multiComboBoxItems field by attribute. |
| `selected` | `boolean` | Defines the selected state of the component. |
| `text` | `string \| undefined` | Defines the text of the component. |
| `value` | `string \| undefined` | Defines the value of the component. |

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
