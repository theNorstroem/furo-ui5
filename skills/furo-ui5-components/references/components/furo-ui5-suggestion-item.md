---
title: furo-ui5-suggestion-item
tags: [suggestion, autocomplete, input, typeahead, item]
category: Form
use-when: Use inside furo-ui5-text-input or furo-ui5-multi-input to offer an autocomplete suggestion.
---

# furo-ui5-suggestion-item

> Suggestion entry for an input field.

**Class:** `FuroUi5SuggestionItem`
**Import:** `import "@furo/ui5/suggestion-item"`
**Extends:** `SuggestionItem`
**Category:** Form

**Related:** [`furo-ui5-text-input`](furo-ui5-text-input.md), [`furo-ui5-multi-input`](furo-ui5-multi-input.md), [`furo-ui5-suggestion-item-group`](furo-ui5-suggestion-item-group.md)

## Overview

One entry of an input's suggestion popover. Requires the parent input to have `show-suggestions` set.

```html
<furo-ui5-text-input show-suggestions placeholder="Type 'Z'">
  <furo-ui5-suggestion-item text="Zurich"></furo-ui5-suggestion-item>
  <furo-ui5-suggestion-item text="Zug"></furo-ui5-suggestion-item>
</furo-ui5-text-input>
```

This is a pass-through wrapper around `furo-ui5-suggestion-item`: the UI5 API (properties, events,
slots) is inherited unchanged and no data binding is added.

The `furo-ui5-suggestion-item` represents the suggestion item of the `furo-ui5-input`.

## Attributes

| Attribute | Type | Default | Description |
|-----------|------|---------|-------------|
| `additional-text` | `string \| undefined` | undefined | Defines the `additionalText`, displayed in the end of the item. |
| `text` | `string \| undefined` | undefined | Defines the text of the component. |

## Properties

| Property | Type | Description |
|----------|------|-------------|
| `additionalText` | `string \| undefined` | Defines the `additionalText`, displayed in the end of the item. |
| `text` | `string \| undefined` | Defines the text of the component. |

## Events

| Event | Detail Type | Description |
|-------|-------------|-------------|
| `click` | `CustomEvent<ListItemBaseClickEventDetail>` | Fired when the component is activated either with a mouse/tap or by using the Enter or Space key. |
