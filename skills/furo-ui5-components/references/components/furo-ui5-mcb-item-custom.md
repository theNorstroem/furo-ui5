---
title: furo-ui5-mcb-item-custom
tags: [multi-combobox, item, custom, suggestion, token, mcb]
category: Form
use-when: Use inside furo-ui5-multi-combobox when a suggestion needs richer markup than plain text.
---

# furo-ui5-mcb-item-custom

> Multi-combobox suggestion with fully custom content.

**Class:** `FuroUi5McbItemCustom`
**Import:** `import "@furo/ui5/mcb-item-custom"`
**Import type:** `import type { FuroUi5McbItemCustom } from "@furo/ui5/mcb-item-custom"`
**Extends:** `MultiComboBoxItemCustom`
**Category:** Form

**Related:** [`furo-ui5-multi-combobox`](furo-ui5-multi-combobox.md), [`furo-ui5-mcb-item`](furo-ui5-mcb-item.md), [`furo-ui5-mcb-item-group`](furo-ui5-mcb-item-group.md)

## Overview

A multi-combobox item whose content comes from the default slot instead of the `text` property.

```html
<furo-ui5-multi-combobox placeholder="Pick cities">
  <furo-ui5-mcb-item-custom text="Zurich">
    <div style="display:flex;gap:.5rem;align-items:center">
      <furo-ui5-icon name="building"></furo-ui5-icon><span>Zurich</span>
    </div>
  </furo-ui5-mcb-item-custom>
</furo-ui5-multi-combobox>
```

This is a pass-through wrapper around `furo-ui5-mcb-item-custom`: the UI5 API (properties, events,
slots) is inherited unchanged and no data binding is added.

The `furo-ui5-mcb-item-custom` is a multi-combobox item component
that allows placing custom content inside a multi-combobox item.
The `text` property is used for filtering and token display.
For highlighting functionality, see `@ui5/webcomponents-base/dist/util/generateHighlightedMarkup.js`.

## Attributes

| Attribute | Type | Default | Description |
|-----------|------|---------|-------------|
| `text` | `string \| undefined` | undefined | Defines the text of the component. Used for filtering and token display. |
| `value` | `string \| undefined` | undefined | Defines the value of the component. Used for programmatic selection via selectedValues property. |

## Properties

| Property | Type | Description |
|----------|------|-------------|
| `text` | `string \| undefined` | Defines the text of the component. Used for filtering and token display. |
| `value` | `string \| undefined` | Defines the value of the component. Used for programmatic selection via selectedValues property. |

## Slots

### Default Slot (unnamed)

> **Usage:** Place content directly inside the component without a `slot` attribute.

Defines the content of the component.

## Events

| Event | Detail Type | Description |
|-------|-------------|-------------|
| `click` | `CustomEvent<ListItemBaseClickEventDetail>` | Fired when the component is activated either with a mouse/tap or by using the Enter or Space key. |
