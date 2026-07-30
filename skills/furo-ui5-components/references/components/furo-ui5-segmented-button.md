---
title: furo-ui5-segmented-button
tags: [segmented, toggle, group, selection, tabs, enum, multiselect, button]
category: Button
use-when: Use for switching between related views or selecting one/several values in place.
---

# furo-ui5-segmented-button

> Group of toggle buttons for single or multiple selection.

**Class:** `FuroUi5SegmentedButton`
**Import:** `import "@furo/ui5/segmented-button"`
**Extends:** `SegmentedButton`
**Category:** Button

**Related:** [`furo-ui5-segmented-button-item`](furo-ui5-segmented-button-item.md), [`furo-ui5-select`](furo-ui5-select.md), [`furo-ui5-select-enum`](furo-ui5-select-enum.md), [`furo-ui5-multi-combobox`](furo-ui5-multi-combobox.md)

## Overview

The furo-ui5-segmented-button component shows a group of items. When the user clicks an item it stays
pressed. It extends the UI5 SegmentedButton and adds `bindData()` support for several model shapes:

- **ENUM** — single selection; the items are generated from the enum descriptor (like `furo-ui5-select-enum`).
- **STRING | FuroFatString | StringValue** — single selection (`selectionMode="Single"`, like `furo-ui5-select`).
- **ARRAY<STRING> | ARRAY<FuroFatString> | IdentifiableList** — multiple selection
  (`selectionMode="Multiple"`, like `furo-ui5-multi-combobox`).

It also works without any data binding — just declare `furo-ui5-segmented-button-item` children yourself.

### Possible ways to set the item list (for STRING / ARRAY bindings)
- Use `bindOptions()` or `optionsModel=` to bind a RepeaterNode as an item list.
- Add the items manually to the html.

The bound value is mapped to the item's `data-id` attribute.

```html
<furo-ui5-segmented-button
   .model="${this.model.choice}"
   .optionsModel="${this.options}">
</furo-ui5-segmented-button>
```

### Overview

The `furo-ui5-segmented-button` shows a group of items. When the user clicks or taps
one of the items, it stays in a pressed state. It automatically resizes the items
to fit proportionally within the component. When no width is set, the component uses the available width.

## Attributes

| Attribute | Type | Default | Description |
|-----------|------|---------|-------------|
| `accessible-description` | `string \| undefined` | undefined | Defines the accessible description of the component. |
| `accessible-description-ref` | `string \| undefined` | undefined | Defines the IDs of the HTML Elements that describe the component. |
| `accessible-name` | `string \| undefined` | undefined | Defines the accessible ARIA name of the component. |
| `accessible-name-ref` | `string \| undefined` | undefined | Defines the IDs of the HTML Elements that label the component. |
| `items-fit-content` | `boolean` | false | Determines whether the segmented button items should be sized to fit their content. |
| `selected-items` | `any` | [] | Returns an array of the currently selected items. |
| `selection-mode` | `"Single" \| "Multiple"` | "Single" | Defines the component selection mode. |
| `show-unspecified` | `boolean` | false | Allows you to select the `unspecified` option of an enum. |

## Properties

| Property | Type | Description |
|----------|------|-------------|
| `accessibleDescription` | `string \| undefined` | Defines the accessible description of the component. |
| `accessibleDescriptionRef` | `string \| undefined` | Defines the IDs of the HTML Elements that describe the component. |
| `accessibleName` | `string \| undefined` | Defines the accessible ARIA name of the component. |
| `accessibleNameRef` | `string \| undefined` | Defines the IDs of the HTML Elements that label the component. |
| `itemsFitContent` | `boolean` | Determines whether the segmented button items should be sized to fit their content. |
| `model` | `ENUM<unknown> \| STRING \| FuroFatString \| StringValue \| ARRAY<STRING, string> \| ARRAY<FuroFatString, IFuroFatString> \| IdentifiableList` | Use this to bind a model field by attribute. |
| `optionList` | `SelectOption[] \| undefined` | Use this to set and render the optionList as an attribute. |
| `optionsModel` | `OptionLikeList \| undefined` | Use this to bind an options field by attribute. |
| `selectedId` | `string` | The id (`data-id`) of the currently selected item — drives the single-selection bindings. |
| `selectedItems` | `Array<ISegmentedButtonItem>` | Returns an array of the currently selected items. |
| `selectionMode` | `SegmentedButtonSelectionMode` | Defines the component selection mode. |

## Slots

### Default Slot (unnamed)

> **Usage:** Place content directly inside the component without a `slot` attribute.

Defines the items of `ui5-segmented-button`.

**Note:** Multiple items are allowed.

**Note:** Use the `ui5-segmented-button-item` for the intended design.

## Events

| Event | Detail Type | Description |
|-------|-------------|-------------|
| `selection-change` | `CustomEvent<SegmentedButtonSelectionChangeEventDetail>` | Fired when the selected item changes. |

## Methods

### `bindData(fieldNode: ENUM<unknown> | STRING | FuroFatString | StringValue | ARRAY<STRING, string> | ARRAY<FuroFatString, IFuroFatString> | IdentifiableList | undefined): void`

Connects your data model to this component.

### `bindOptions(fieldNode: OptionLikeList | undefined): void`

Connects your options data model to this component.

### `clear(): void`

Clears the selection of the segmented button.
