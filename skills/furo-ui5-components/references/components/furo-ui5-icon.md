---
title: furo-ui5-icon
tags: [icon, glyph, symbol, image, sap-icons]
category: Display
use-when: Use to display icons alongside text or as standalone indicators.
---

# furo-ui5-icon

> Scalable icon from the icon font library.

**Class:** `FuroUi5Icon`
**Import:** `import "@furo/ui5/icon"`
**Extends:** `Icon`
**Category:** Display

**Related:** [`furo-ui5-button`](furo-ui5-button.md), [`furo-ui5-avatar`](furo-ui5-avatar.md)

## Overview

### Overview

The `furo-ui5-icon` component represents an SVG icon.
There are two main scenarios how the `furo-ui5-icon` component is used:
as a purely decorative element,
or as an interactive element that can be focused and clicked.

### Usage

1. **Get familiar with the icons collections.**

Before displaying an icon, you need to explore the icons collections to find and import the desired icon.

Currently there are 3 icons collection, available as 3 npm packages:

- [@ui5/webcomponents-icons](https://www.npmjs.com/package/@ui5/webcomponents-icons) represents the "SAP-icons" collection and includes the following
[icons](https://sdk.openui5.org/test-resources/sap/m/demokit/iconExplorer/webapp/index.html#/overview/SAP-icons).
- [@ui5/webcomponents-icons-tnt](https://www.npmjs.com/package/@ui5/webcomponents-icons-tnt) represents the "tnt" collection and includes the following
[icons](https://sdk.openui5.org/test-resources/sap/m/demokit/iconExplorer/webapp/index.html#/overview/SAP-icons-TNT).
- [@ui5/webcomponents-icons-business-suite](https://www.npmjs.com/package/@ui5/webcomponents-icons-business-suite) represents the "business-suite" collection and includes the following
[icons](https://ui5.sap.com/test-resources/sap/m/demokit/iconExplorer/webapp/index.html#/overview/BusinessSuiteInAppSymbols).

2. **After exploring the icons collections, add one or more of the packages as dependencies to your project.**

`npm i @ui5/webcomponents-icons`
`npm i @ui5/webcomponents-icons-tnt`
`npm i @ui5/webcomponents-icons-business-suite`

3. **Then, import the desired icon**.

**For Example**:

For the standard "SAP-icons" icon collection, import an icon from the `@ui5/webcomponents-icons` package:

For the "tnt" (SAP Fiori Tools) icon collection, import an icon from the `@ui5/webcomponents-icons-tnt` package:

For the "business-suite" (SAP Business Suite) icon collection, import an icon from the `@ui5/webcomponents-icons-business-suite` package:

4. **Display the icon using the `furo-ui5-icon` web component.**
Set the icon collection ("SAP-icons", "tnt" or "business-suite" - "SAP-icons" is the default icon collection and can be skipped)
and the icon name to the `name` property.

``
``
``

### Keyboard Handling

- [Space] / [Enter] or [Return] - Fires the `click` event if the `mode` property is set to `Interactive`.

## Attributes

| Attribute | Type | Default | Description |
|-----------|------|---------|-------------|
| `accessible-name` | `string \| undefined` | undefined | Defines the text alternative of the component. If not provided a default text alternative will be set, if present. |
| `design` | `"Positive" \| "Critical" \| "Negative" \| "Information" \| "Default" \| "Contrast" \| "Neutral" \| "NonInteractive"` | "Default" | Defines the component semantic design. |
| `mode` | `"Image" \| "Decorative" \| "Interactive"` | "Decorative" | Defines the mode of the component. |
| `name` | `string \| undefined` | undefined | Defines the unique identifier (icon name) of the component. |
| `show-tooltip` | `boolean` | false | Defines whether the component should have a tooltip. |

## Properties

| Property | Type | Description |
|----------|------|-------------|
| `accessibleName` | `string \| undefined` | Defines the text alternative of the component. If not provided a default text alternative will be set, if present. |
| `design` | `IconDesign` | Defines the component semantic design. |
| `mode` | `IconMode` | Defines the mode of the component. |
| `name` | `string \| undefined` | Defines the unique identifier (icon name) of the component. |
| `showTooltip` | `boolean` | Defines whether the component should have a tooltip. |

## Slots

### `fontIcon`

Defines the font icon to be used as an icon.
Intended for font-based icon libraries where
the application loads the font and provides a slotted element with the unicode character.
When this slot is used, the component renders a `` instead of an ``.
Accessibility is fully delegated to the application — set `accessible-name` and `mode` explicitly.

**Example:**

```html
<ui5-icon mode="Image" accessible-name="Home">
  <i class="fa fa-home" slot="fontIcon"></i>
</ui5-icon>
```

## Events

| Event | Detail Type | Description |
|-------|-------------|-------------|
| `click` | `CustomEvent` | Fired when the component is activated by mouse/touch, keyboard (Enter or Space), or screen reader virtual cursor activation. |

## CSS Parts

- `root`: Used to style the outermost wrapper of the `ui5-icon`.
