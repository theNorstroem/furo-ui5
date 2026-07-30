---
title: furo-ui5-tokenizer
tags: [tokenizer, tokens, chips, tags, overflow]
category: Form
use-when: Use standalone to display a removable set of tokens outside a multi-input.
---

# furo-ui5-tokenizer

> Container that lays out and overflows a set of tokens.

**Class:** `FuroUi5Tokenizer`
**Import:** `import "@furo/ui5/tokenizer"`
**Extends:** `Tokenizer`
**Category:** Form

**Related:** [`furo-ui5-multi-input`](furo-ui5-multi-input.md), [`furo-ui5-multi-combobox`](furo-ui5-multi-combobox.md), [`furo-ui5-tag`](furo-ui5-tag.md)

## Overview

Lays out a set of tokens and moves the ones that do not fit into an overflow popover.

```html
<furo-ui5-tokenizer style="width:20rem">
  <ui5-token text="Zurich"></ui5-token>
  <ui5-token text="Berlin"></ui5-token>
  <ui5-token text="Tokyo"></ui5-token>
</furo-ui5-tokenizer>
```

This is a pass-through wrapper around `furo-ui5-tokenizer`: the UI5 API (properties, events,
slots) is inherited unchanged and no data binding is added.

### Overview

A `furo-ui5-tokenizer` is an invisible container for `furo-ui5-token`s that supports keyboard navigation and token selection.

The `furo-ui5-tokenizer` consists of two parts:
- Tokens - displays the available tokens.
- N-more indicator - contains the number of the remaining tokens that cannot be displayed due to the limited space.

### Keyboard Handling

#### Basic Navigation
The `furo-ui5-tokenizer` provides advanced keyboard handling.
When a token is focused the user can use the following keyboard
shortcuts in order to perform a navigation:

- [Left] or [Right] / [Up] or [Down] - Navigates left and right through the tokens.
- [Home] - Navigates to the first token.
- [End] - Navigates to the last token.

The user can use the following keyboard shortcuts to perform actions (such as select, delete):

- [Space] - Selects a token.
- [Backspace] / [Delete] - Deletes a token.
**Note:** The deletion of a token is handled by the application with the use of the `token-delete` event.

## Attributes

| Attribute | Type | Default | Description |
|-----------|------|---------|-------------|
| `accessible-name` | `string \| undefined` | undefined | Defines the accessible ARIA name of the component. |
| `accessible-name-ref` | `string \| undefined` | undefined | Receives id(or many ids) of the elements that label the component. |
| `disabled` | `boolean` | false | Defines whether the component is disabled. |
| `multi-line` | `boolean` | false | Defines whether tokens are displayed on multiple lines. |
| `name` | `string \| undefined` | undefined | Determines the name by which the component will be identified upon submission in an HTML form. |
| `readonly` | `boolean` | false | Defines whether the component is read-only. |
| `show-clear-all` | `boolean` | false | Defines whether "Clear All" button is present. Ensure `multiLine` is enabled, otherwise `showClearAll` will have no effect. |

## Properties

| Property | Type | Description |
|----------|------|-------------|
| `accessibleName` | `string \| undefined` | Defines the accessible ARIA name of the component. |
| `accessibleNameRef` | `string \| undefined` | Receives id(or many ids) of the elements that label the component. |
| `disabled` | `boolean` | Defines whether the component is disabled. |
| `multiLine` | `boolean` | Defines whether tokens are displayed on multiple lines. |
| `name` | `string \| undefined` | Determines the name by which the component will be identified upon submission in an HTML form. |
| `readonly` | `boolean` | Defines whether the component is read-only. |
| `showClearAll` | `boolean` | Defines whether "Clear All" button is present. Ensure `multiLine` is enabled, otherwise `showClearAll` will have no effect. |

## Slots

### Default Slot (unnamed)

> **Usage:** Place content directly inside the component without a `slot` attribute.

Defines the tokens to be displayed.

## Events

| Event | Detail Type | Description |
|-------|-------------|-------------|
| `selection-change` | `CustomEvent<TokenizerSelectionChangeEventDetail>` | Fired when token selection is changed by user interaction |
| `token-delete` | `CustomEvent<TokenizerTokenDeleteEventDetail>` | Fired when tokens are being deleted (delete icon, delete or backspace is pressed) |
