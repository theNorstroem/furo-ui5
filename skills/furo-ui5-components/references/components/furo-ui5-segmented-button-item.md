---
title: furo-ui5-segmented-button-item
tags: [segmented-button-item, item, toggle, selection, segmented, button]
category: Button
use-when: Use as children of furo-ui5-segmented-button.
---

# furo-ui5-segmented-button-item

> Item button for use within SegmentedButton components.

**Class:** `FuroUi5SegmentedButtonItem`
**Import:** `import "@furo/ui5/segmented-button-item"`
**Extends:** `SegmentedButtonItem`
**Category:** Button

**Related:** [`furo-ui5-segmented-button`](furo-ui5-segmented-button.md)

## Overview

The `furo-ui5-segmented-button-item` is meant to be used inside a `furo-ui5-segmented-button`. It is also
automatically used by the `furo-ui5-segmented-button` when you bind an `optionsModel`, an `optionList` or
an `ENUM`.

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

The bound `id` is written to the `data-id` attribute and is used by the parent `furo-ui5-segmented-button`
to map the selection back to the model.

### Overview

Users can use the `furo-ui5-segmented-button-item` as part of a `furo-ui5-segmented-button`.

Clicking or tapping on a `furo-ui5-segmented-button-item` changes its state to `selected`.
The item returns to its initial state when the user clicks or taps on it again.
By applying additional custom CSS-styling classes, apps can give a different style to any
`furo-ui5-segmented-button-item`.

## Attributes

| Attribute | Type | Default | Description |
|-----------|------|---------|-------------|
| `accessible-description` | `string \| undefined` | undefined | Defines the accessible description of the component. |
| `accessible-description-ref` | `string \| undefined` | undefined | Defines the IDs of the HTML Elements that describe the component. |
| `accessible-name` | `string \| undefined` | undefined | Defines the accessible ARIA name of the component. |
| `accessible-name-ref` | `string \| undefined` | undefined | Receives id(or many ids) of the elements that label the component. |
| `disabled` | `boolean` | false | Defines whether the component is disabled. A disabled component can't be selected or focused, and it is not in the tab chain. |
| `icon` | `string \| undefined` | undefined | Defines the icon, displayed as graphical element within the component. The SAP-icons font provides numerous options. |
| `selected` | `boolean` | false | Determines whether the component is displayed as selected. |
| `tooltip` | `string \| undefined` | undefined | Defines the tooltip of the component. |

## Properties

| Property | Type | Description |
|----------|------|-------------|
| `accessibleDescription` | `string \| undefined` | Defines the accessible description of the component. |
| `accessibleDescriptionRef` | `string \| undefined` | Defines the IDs of the HTML Elements that describe the component. |
| `accessibleName` | `string \| undefined` | Defines the accessible ARIA name of the component. |
| `accessibleNameRef` | `string \| undefined` | Receives id(or many ids) of the elements that label the component. |
| `disabled` | `boolean` | Defines whether the component is disabled. A disabled component can't be selected or focused, and it is not in the tab chain. |
| `icon` | `string \| undefined` | Defines the icon, displayed as graphical element within the component. The SAP-icons font provides numerous options. |
| `model` | `OptionLike \| undefined` | Use this to bind an options field by attribute. |
| `selected` | `boolean` | Determines whether the component is displayed as selected. |
| `tooltip` | `string \| undefined` | Defines the tooltip of the component. |

## Slots

### Default Slot (unnamed)

> **Usage:** Place content directly inside the component without a `slot` attribute.

Defines the text of the component.

**Note:** Although this slot accepts HTML Elements, it is strongly recommended that you only use text in order to preserve the intended design.

## Events

| Event | Detail Type | Description |
|-------|-------------|-------------|
| `click` | `CustomEvent<SegmentedButtonItemClickEventDetail>` | Fired when the component is activated either with a mouse/tap or by using the Enter or Space key. |

## Methods

### `bindData(fieldNode: OptionLike | undefined): void`

Connects your data model to this component.
