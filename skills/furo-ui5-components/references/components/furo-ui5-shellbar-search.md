---
title: furo-ui5-shellbar-search
tags: [search, shellbar, header, find, lookup, global-search]
category: PageStructure
use-when: Use within furo-ui5-shellbar for application-wide search.
---

# furo-ui5-shellbar-search

> Search input integrated into the ShellBar header.

**Class:** `FuroUi5ShellBarSearch`
**Import:** `import "@furo/ui5/shellbar-search"`
**Import type:** `import type { FuroUi5ShellBarSearch } from "@furo/ui5/shellbar-search"`
**Extends:** `ShellBarSearch`
**Category:** PageStructure

**Related:** [`furo-ui5-shellbar`](furo-ui5-shellbar.md)

## Overview

Search field for the ShellBar component.

## Attributes

| Attribute | Type | Default | Description |
|-----------|------|---------|-------------|
| `accessible-description` | `string \| undefined` | undefined | Defines the accessible ARIA description of the field. |
| `accessible-name` | `string \| undefined` | undefined | Defines the accessible ARIA name of the component. |
| `auto-open` | `boolean` | false | Indicates whether the suggestions popover should be opened on focus. |
| `field-loading` | `boolean` | false | Indicates whether a loading indicator should be shown in the input field. |
| `loading` | `boolean` | false | Indicates whether a loading indicator should be shown in the popup. |
| `no-typeahead` | `boolean` | false | Defines whether the value will be autcompleted to match an item. |
| `open` | `boolean` | false | Indicates whether the items picker is open. |
| `placeholder` | `string \| undefined` | undefined | Defines a short hint intended to aid the user with data entry when the component has no value. |
| `scope-value` | `string \| undefined` | "" | Defines the value of the component: |
| `show-clear-icon` | `boolean` | false | Defines whether the clear icon of the search will be shown. |
| `value` | `string` | "" | Defines the value of the component. |

## Properties

| Property | Type | Description |
|----------|------|-------------|
| `accessibleDescription` | `string \| undefined` | Defines the accessible ARIA description of the field. |
| `accessibleName` | `string \| undefined` | Defines the accessible ARIA name of the component. |
| `autoOpen` | `boolean` | Indicates whether the suggestions popover should be opened on focus. |
| `fieldLoading` | `boolean` | Indicates whether a loading indicator should be shown in the input field. |
| `loading` | `boolean` | Indicates whether a loading indicator should be shown in the popup. |
| `noTypeahead` | `boolean` | Defines whether the value will be autcompleted to match an item. |
| `open` | `boolean` | Indicates whether the items picker is open. |
| `placeholder` | `string \| undefined` | Defines a short hint intended to aid the user with data entry when the component has no value. |
| `scopeValue` | `string \| undefined` | Defines the value of the component: |
| `showClearIcon` | `boolean` | Defines whether the clear icon of the search will be shown. |
| `value` | `string` | Defines the value of the component. |

## Slots

### `action`

Defines the popup footer action button.

### Default Slot (unnamed)

> **Usage:** Place content directly inside the component without a `slot` attribute.

Defines the Search suggestion items.

### `filterButton`

Defines the filter button slot, used to display an additional filtering button.
This slot is intended for passing a `ui5-button` with a filter icon to provide extended filtering options.

**Note:** Scope button and Filter button are mutually exclusive.

### `illustration`

Defines the illustrated message to be shown in the popup.

### `messageArea`

Defines the illustrated message to be shown in the popup.

### `scopes`

Defines the component scope options.

## Events

| Event | Detail Type | Description |
|-------|-------------|-------------|
| `close` | `CustomEvent` | Fired when the popup is closed. |
| `input` | `CustomEvent` | Fired when typing in input or clear icon is pressed. |
| `open` | `CustomEvent` | Fired when the popup is opened. |
| `scope-change` | `CustomEvent<SearchFieldScopeSelectionChangeDetails>` | Fired when the scope has changed. |
| `search` | `CustomEvent` | Fired when the user has triggered search with Enter key or Search Button press. |

## CSS Parts

- `popover`: Used to style the suggestions popup
