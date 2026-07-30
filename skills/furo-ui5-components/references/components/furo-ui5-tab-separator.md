---
title: furo-ui5-tab-separator
tags: [tab, separator, divider, rule, group]
category: Container
use-when: Use between furo-ui5-tab elements to visually separate groups of tabs.
---

# furo-ui5-tab-separator

> Vertical rule between tabs in a tab container.

**Class:** `FuroUi5TabSeparator`
**Import:** `import "@furo/ui5/tab-separator"`
**Extends:** `TabSeparator`
**Category:** Container

**Related:** [`furo-ui5-tabcontainer`](furo-ui5-tabcontainer.md), [`furo-ui5-tab`](furo-ui5-tab.md)

## Overview

A thin divider placed between tabs of a `furo-ui5-tabcontainer`.

```html
<furo-ui5-tabcontainer>
  <furo-ui5-tab text="Overview" selected>Overview content</furo-ui5-tab>
  <furo-ui5-tab-separator></furo-ui5-tab-separator>
  <furo-ui5-tab text="Settings">Settings content</furo-ui5-tab>
</furo-ui5-tabcontainer>
```

This is a pass-through wrapper around `furo-ui5-tab-separator`: the UI5 API (properties, events,
slots) is inherited unchanged and no data binding is added.

The `furo-ui5-tab-separator` represents a vertical line to separate tabs inside a `furo-ui5-tabcontainer`.

## Methods

### `getDomRefInStrip(): HTMLElement | undefined`

Returns the DOM reference of the separator that is placed in the header.

**Note:** Separators, placed in the `items` slot of other tabs are not shown in the header. Calling this method on such separators will return `undefined`.
