---
title: furo-ui5-suggestion-item-custom
tags: [suggestion, autocomplete, custom, input, item]
category: Form
use-when: Use inside furo-ui5-text-input when a suggestion needs richer markup than plain text.
---

# furo-ui5-suggestion-item-custom

> Input suggestion with fully custom content.

**Class:** `FuroUi5SuggestionItemCustom`
**Import:** `import "@furo/ui5/suggestion-item-custom"`
**Extends:** `SuggestionItemCustom`
**Category:** Form

**Related:** [`furo-ui5-text-input`](furo-ui5-text-input.md), [`furo-ui5-suggestion-item`](furo-ui5-suggestion-item.md), [`furo-ui5-suggestion-item-group`](furo-ui5-suggestion-item-group.md)

## Overview

A suggestion whose content is projected from the default slot instead of the `text` property.

```html
<furo-ui5-text-input show-suggestions placeholder="Type 'Z'">
  <furo-ui5-suggestion-item-custom text="Zurich">
    <div style="display:flex;gap:.5rem;align-items:center">
      <furo-ui5-icon name="building"></furo-ui5-icon><span>Zurich, CH</span>
    </div>
  </furo-ui5-suggestion-item-custom>
</furo-ui5-text-input>
```

This is a pass-through wrapper around `furo-ui5-suggestion-item-custom`: the UI5 API (properties, events,
slots) is inherited unchanged and no data binding is added.

The `furo-ui5-suggestion-item-custom` is type of suggestion item,
that can be used to place suggestion items with custom content in the input.
The text property is considered only for autocomplete.
In case the user needs highlighting functionality, check "@ui5/webcomponents-base/dist/util/generateHighlightedMarkup.js"

## Attributes

| Attribute | Type | Default | Description |
|-----------|------|---------|-------------|
| `text` | `string \| undefined` | undefined | Defines the text of the `furo-ui5-suggestion-item-custom`. **Note:** The text property is considered only for autocomplete. |

## Properties

| Property | Type | Description |
|----------|------|-------------|
| `text` | `string \| undefined` | Defines the text of the `furo-ui5-suggestion-item-custom`. **Note:** The text property is considered only for autocomplete. |

## Slots

### Default Slot (unnamed)

> **Usage:** Place content directly inside the component without a `slot` attribute.

Defines the content of the component.

## Events

| Event | Detail Type | Description |
|-------|-------------|-------------|
| `click` | `CustomEvent<ListItemBaseClickEventDetail>` | Fired when the component is activated either with a mouse/tap or by using the Enter or Space key. |
