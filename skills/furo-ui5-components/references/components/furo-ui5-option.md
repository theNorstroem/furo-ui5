---
title: furo-ui5-option
tags: [option, item, select, dropdown, choice]
category: Form
use-when: Use as children of furo-ui5-select.
---

# furo-ui5-option

> Option item for use within Select components.

**Class:** `FuroUi5Option`
**Import:** `import "@furo/ui5/option"`
**Extends:** `Option`
**Category:** Form

**Related:** [`furo-ui5-select`](furo-ui5-select.md)

## Overview

The `furo-ui5-option` is meant to be used inside a `furo-ui5-select`. It is also automatically used by the `furo-ui5-select-enum`.

You can bind any OptionLike field to it.

```js
export interface OptionLike extends FieldNode {
  id: STRING;
  displayName: STRING;
  icon?: STRING;
  additionalText?: STRING;
  tooltip?: STRING;
}
```

### Overview

The `furo-ui5-option` component defines the content of an option in the `furo-ui5-select`.

## Attributes

| Attribute | Type | Default | Description |
|-----------|------|---------|-------------|
| `additional-text` | `string \| undefined` | undefined | Defines the `additionalText`, displayed in the end of the option. |
| `icon` | `string \| undefined` | undefined | Defines the `icon` source URI. |
| `selected` | `boolean` | false | Defines the selected state of the component. |
| `tooltip` | `string \| undefined` | undefined | Defines the tooltip of the option. |
| `value` | `string \| undefined` | undefined | Defines the value of the `furo-ui5-select` inside an HTML Form element when this component is selected. For more information on HTML Form support, see the `name` property of `furo-ui5-select`. |

## Properties

| Property | Type | Description |
|----------|------|-------------|
| `additionalText` | `string \| undefined` | Defines the `additionalText`, displayed in the end of the option. |
| `icon` | `string \| undefined` | Defines the `icon` source URI. |
| `model` | `OptionLike \| undefined` | Use this to bind a options field by attribute. |
| `selected` | `boolean` | Defines the selected state of the component. |
| `tooltip` | `string \| undefined` | Defines the tooltip of the option. |
| `value` | `string \| undefined` | Defines the value of the `furo-ui5-select` inside an HTML Form element when this component is selected. For more information on HTML Form support, see the `name` property of `furo-ui5-select`. |

## Slots

### Default Slot (unnamed)

> **Usage:** Place content directly inside the component without a `slot` attribute.

Defines the text of the component.

**Note:** Although this slot accepts HTML Elements, it is strongly recommended that you only use text in order to preserve the intended design.

## Events

| Event | Detail Type | Description |
|-------|-------------|-------------|
| `click` | `CustomEvent<ListItemBaseClickEventDetail>` | Fired when the component is activated either with a mouse/tap or by using the Enter or Space key. |

## Methods

### `bindData(fieldNode: OptionLike | undefined): void`

Connects your data model to this component.

## CSS Parts

- `native-li`: Use this to format the `li` inside the shadow root of the component.
- `content`: Use this to format the content `div` inside the shadow root of the component, which surrounds the title and the additional-text `spans`.
- `title`: Use this to format the "title" `span` inside the shadow root of the component, which surrounds the default slot.
- `additional-text`: Use this to format the additional-text `span` inside the shadow root of the component.
