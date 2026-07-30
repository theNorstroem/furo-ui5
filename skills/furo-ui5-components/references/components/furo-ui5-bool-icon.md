---
title: furo-ui5-bool-icon
tags: [bool, boolean, icon, display, indicator, true-false]
category: Display
use-when: Use to visualize a boolean field as an icon (e.g. yes/no, on/off).
---

# furo-ui5-bool-icon

> Display-only icon that reflects a boolean value.

**Class:** `FuroUi5BoolIcon`
**Import:** `import "@furo/ui5/bool-icon"`
**Category:** Display

**Related:** [`furo-ui5-icon`](furo-ui5-icon.md), [`furo-ui5-checkbox`](furo-ui5-checkbox.md)

## Overview

Displays a icon/symbol for a boolean value

This component uses the SAP Ui5 icons.
https://openui5.hana.ondemand.com/test-resources/sap/m/demokit/iconExplorer/webapp/index.html

```html
<furo-ui5-bool-icon fn-bind-data="--dao(FIELDNODE)"></furo-ui5-bool-icon>
```

Only `@ui5/webcomponents-icons/dist/navigation-down-arrow.js` and `@ui5/webcomponents-icons/dist/navigation-right-arrow.js` are auto imported.
If you set other icons, please do not forget to import them.

## Attributes

| Attribute | Type | Default | Description |
|-----------|------|---------|-------------|
| `accesible-name` | `string \| undefined` | "Toggle" |  |
| `design` | `"Contrast" \| "Critical" \| "Default" \| "Information" \| "Negative" \| "Neutral" \| "NonInteractive" \| "Positive"` | "Default" | Defines the component semantic design. |
| `disabled` | `boolean` | false | Disable the pointer interaction |
| `readonly` | `boolean` | false | When true, the icon renders without the `interactive` attribute and clicks no longer toggle the value. |
| `symbolfalse` | `String` | "navigation-right-arrow" | Defines the icon for the false state. |
| `symboltrue` | `String` | "navigation-down-arrow" | Defines the icon for the true state. |
| `value` | `boolean` | false | Set to true or false |

## Properties

| Property | Type | Description |
|----------|------|-------------|
| `model` | `BOOLEAN \| FuroFatBool \| BoolValue` | FieldNode setter |

## Methods

### `bindData(fieldNode: BOOLEAN | FuroFatBool | BoolValue | undefined): void`

Connects your data model to this component.
