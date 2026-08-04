---
title: furo-ui5-cb-item-custom
tags: [combobox, item, custom, suggestion, option]
category: Form
use-when: Use inside furo-ui5-combobox when a suggestion needs richer markup than plain text.
---

# furo-ui5-cb-item-custom

> Combobox suggestion with fully custom content.

**Class:** `FuroUi5CbItemCustom`
**Import:** `import "@furo/ui5/cb-item-custom"`
**Import type:** `import type { FuroUi5CbItemCustom } from "@furo/ui5/cb-item-custom"`
**Extends:** `ComboBoxItemCustom`
**Category:** Form

**Related:** [`furo-ui5-combobox`](furo-ui5-combobox.md), [`furo-ui5-cb-item`](furo-ui5-cb-item.md), [`furo-ui5-cb-item-group`](furo-ui5-cb-item-group.md)

## Overview

A combobox item whose content comes from the default slot instead of the `text` property.

```html
<furo-ui5-combobox placeholder="Pick a city">
  <furo-ui5-cb-item-custom text="Zurich">
    <div style="display:flex;gap:.5rem;align-items:center">
      <furo-ui5-icon name="building"></furo-ui5-icon><span>Zurich</span>
    </div>
  </furo-ui5-cb-item-custom>
</furo-ui5-combobox>
```

This is a pass-through wrapper around `furo-ui5-cb-item-custom`: the UI5 API (properties, events,
slots) is inherited unchanged and no data binding is added.

The `furo-ui5-cb-item-custom` is a combobox item component
that allows placing custom content inside a combobox item.
The `text` property is used for filtering and auto-complete.
For highlighting functionality, see `@ui5/webcomponents-base/dist/util/generateHighlightedMarkup.js`.

## Attributes

| Attribute | Type | Default | Description |
|-----------|------|---------|-------------|
| `text` | `string \| undefined` | undefined | Defines the text of the component. Used for filtering, autocomplete, and mobile rendering. |
| `value` | `string \| undefined` | undefined | Defines the value of the component. Used for programmatic selection via the `selectedValue` property. |

## Properties

| Property | Type | Description |
|----------|------|-------------|
| `text` | `string \| undefined` | Defines the text of the component. Used for filtering, autocomplete, and mobile rendering. |
| `value` | `string \| undefined` | Defines the value of the component. Used for programmatic selection via the `selectedValue` property. |

## Slots

### Default Slot (unnamed)

> **Usage:** Place content directly inside the component without a `slot` attribute.

Defines the content of the component.

## Events

| Event | Detail Type | Description |
|-------|-------------|-------------|
| `click` | `CustomEvent<ListItemBaseClickEventDetail>` | Fired when the component is activated either with a mouse/tap or by using the Enter or Space key. |
