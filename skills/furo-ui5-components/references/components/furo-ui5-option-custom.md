---
title: furo-ui5-option-custom
tags: [select, option, custom, dropdown, choice]
category: Form
use-when: Use inside furo-ui5-select when an option needs richer markup than plain text.
---

# furo-ui5-option-custom

> Select option with fully custom content.

**Class:** `FuroUi5OptionCustom`
**Import:** `import "@furo/ui5/option-custom"`
**Extends:** `OptionCustom`
**Category:** Form

**Related:** [`furo-ui5-select`](furo-ui5-select.md), [`furo-ui5-option`](furo-ui5-option.md), [`furo-ui5-select-enum`](furo-ui5-select-enum.md)

## Overview

A select option whose content is projected from the default slot instead of the `text` property.

```html
<furo-ui5-select>
  <furo-ui5-option-custom>
    <div style="display:flex;gap:.5rem;align-items:center">
      <furo-ui5-icon name="accept"></furo-ui5-icon><span>Approved</span>
    </div>
  </furo-ui5-option-custom>
  <furo-ui5-option-custom>
    <div style="display:flex;gap:.5rem;align-items:center">
      <furo-ui5-icon name="decline"></furo-ui5-icon><span>Rejected</span>
    </div>
  </furo-ui5-option-custom>
</furo-ui5-select>
```

This is a pass-through wrapper around `furo-ui5-option-custom`: the UI5 API (properties, events,
slots) is inherited unchanged and no data binding is added.

### Overview

The `furo-ui5-option-custom` component defines a custom content of an option in the `furo-ui5-select`.
A component to be the same way as the standard `furo-ui5-option`.
The component accepts arbitrary HTML content to allow full customization.

## Attributes

| Attribute | Type | Default | Description |
|-----------|------|---------|-------------|
| `display-text` | `string \| undefined` | undefined | Defines the text, displayed inside the `furo-ui5-select` input filed when the option gets selected. |
| `selected` | `boolean` | false | Defines the selected state of the component. |
| `tooltip` | `string \| undefined` | undefined | Defines the tooltip of the option. |
| `value` | `string \| undefined` | undefined | Defines the value of the `furo-ui5-select` inside an HTML Form element when this component is selected. For more information on HTML Form support, see the `name` property of `furo-ui5-select`. |

## Properties

| Property | Type | Description |
|----------|------|-------------|
| `displayText` | `string \| undefined` | Defines the text, displayed inside the `furo-ui5-select` input filed when the option gets selected. |
| `selected` | `boolean` | Defines the selected state of the component. |
| `tooltip` | `string \| undefined` | Defines the tooltip of the option. |
| `value` | `string \| undefined` | Defines the value of the `furo-ui5-select` inside an HTML Form element when this component is selected. For more information on HTML Form support, see the `name` property of `furo-ui5-select`. |

## Slots

### Default Slot (unnamed)

> **Usage:** Place content directly inside the component without a `slot` attribute.

Defines the content of the component.

## Events

| Event | Detail Type | Description |
|-------|-------------|-------------|
| `click` | `CustomEvent<ListItemBaseClickEventDetail>` | Fired when the component is activated either with a mouse/tap or by using the Enter or Space key. |
