---
title: furo-ui5-tab
tags: [tab, item, navigation, section]
category: Container
use-when: Use as a child of furo-ui5-tabcontainer to represent one tab.
---

# furo-ui5-tab

> A single tab (no data binding).

**Class:** `FuroUi5Tab`
**Import:** `import "@furo/ui5/tab"`
**Import type:** `import type { FuroUi5Tab } from "@furo/ui5/tab"`
**Extends:** `Tab`
**Category:** Container

**Related:** [`furo-ui5-tabcontainer`](furo-ui5-tabcontainer.md)

## Overview

The 'furo-ui5-tab' is a thin wrapper around the
[SAP ui5 Tab element](https://ui5.github.io/webcomponents/components/TabContainer/).

It exposes the full UI5 Tab API unchanged and is meant to be placed inside
`furo-ui5-tabcontainer`. There is intentionally **no data binding**.

The `furo-ui5-tab` represents a selectable item inside a `furo-ui5-tabcontainer`.
It defines both the item in the tab strip (top part of the `furo-ui5-tabcontainer`) and the
content that is presented to the user once the tab is selected.

## Attributes

| Attribute | Type | Default | Description |
|-----------|------|---------|-------------|
| `additional-text` | `string \| undefined` | undefined | Represents the "additionalText" text, which is displayed in the tab. |
| `design` | `"Positive" \| "Critical" \| "Negative" \| "Default" \| "Neutral"` | "Default" | Defines the component's design color. |
| `disabled` | `boolean` | false | Disabled tabs can't be selected. |
| `icon` | `string \| undefined` | undefined | Defines the icon source URI to be displayed as graphical element within the component. |
| `movable` | `boolean` | false | Defines if the tab is movable. |
| `selected` | `boolean` | false | Specifies if the component is selected. |
| `text` | `string \| undefined` | undefined | The text to be displayed for the item. |

## Properties

| Property | Type | Description |
|----------|------|-------------|
| `additionalText` | `string \| undefined` | Represents the "additionalText" text, which is displayed in the tab. |
| `design` | `SemanticColor` | Defines the component's design color. |
| `disabled` | `boolean` | Disabled tabs can't be selected. |
| `icon` | `string \| undefined` | Defines the icon source URI to be displayed as graphical element within the component. |
| `movable` | `boolean` | Defines if the tab is movable. |
| `selected` | `boolean` | Specifies if the component is selected. |
| `text` | `string \| undefined` | The text to be displayed for the item. |

## Slots

### Default Slot (unnamed)

> **Usage:** Place content directly inside the component without a `slot` attribute.

Holds the content associated with this tab.

### `items`

Defines hierarchies with nested sub tabs.

**Note:** Use `ui5-tab` and `ui5-tab-separator` for the intended design.

## Events

| Event | Detail Type | Description |
|-------|-------------|-------------|
| `click` | `CustomEvent<TabClickEventDetail>` | Fired when the tab is selected either with a mouse/tap or by using the Enter or Space key. |

## Methods

### `getDomRefInStrip(): HTMLElement | undefined`

Returns the DOM reference of the tab that is placed in the header.

**Note:** Tabs, placed in the `items` slot of other tabs are not shown in the header. Calling this method on such tabs will return `undefined`.

**Note:** If you need a DOM ref to the tab content please use the `getDomRef` method.
