---
title: furo-ui5-message-strip
tags: [message, strip, banner, notification, display, string]
category: Display
use-when: Use to render a bound string value as an inline status / info message.
---

# furo-ui5-message-strip

> Display-only inline message bound to a string field.

**Class:** `FuroUi5MessageStrip`
**Import:** `import "@furo/ui5/message-strip"`
**Import type:** `import type { FuroUi5MessageStrip } from "@furo/ui5/message-strip"`
**Extends:** `MessageStrip`
**Category:** Display

**Related:** [`furo-ui5-toast`](furo-ui5-toast.md)

## Overview

The 'furo-ui5-message-strip' is a display-only component which renders a bound `string` value as an
inline message, with data binding.

It extends the [SAP ui5 MessageStrip element](https://ui5.github.io/webcomponents/components/MessageStrip/).
Use the inherited `design` (`Information` | `Positive` | `Negative` | `Critical`) and `hideIcon` /
`hideCloseButton` properties to control the appearance.

You can bind any `string` type: `primitives.STRING`, the `furo.fat.String` type or the
`google.protobuf.StringValue` type. Display-only: the component reads from the model but never writes back.

```html
<furo-ui5-message-strip design="Negative" .model="${fieldNode}"></furo-ui5-message-strip>
```

### Overview

The furo-ui5-message-strip component allows for the embedding of application-related messages.
It supports four semantic designs, each with its own color and icon: "Information", "Positive", "Critical", and "Negative".
Additionally, users can choose from two color sets ("ColorSet1" and "ColorSet2"), each containing 10 predefined color schemes.
Each message shows a "Close" button, so that it can be removed from the UI, if needed.

### Usage

For the `furo-ui5-message-strip` component, you can define whether it displays
an icon in the beginning and a close button. Moreover, its size and background
can be controlled with CSS.

### Keyboard Handling

#### Fast Navigation
This component provides a build in fast navigation group which can be used via [F6] / [Shift] + [F6] / [Ctrl] + [Alt/Option] / [Down] or [Ctrl] + [Alt/Option] + [Up].
In order to use this functionality, you need to import the following module:

## Attributes

| Attribute | Type | Default | Description |
|-----------|------|---------|-------------|
| `color-scheme` | `string` | "1" | Defines the color scheme of the component. There are 10 predefined schemes. To use one you can set a number from `"1"` to `"10"`. The `colorScheme` `"1"` will be set by default. |
| `design` | `"Positive" \| "Critical" \| "Negative" \| "Information" \| "ColorSet1" \| "ColorSet2"` | "Information" | Defines the component type. |
| `hide-close-button` | `boolean` | false | Defines whether the MessageStrip renders close button. |
| `hide-icon` | `boolean` | false | Defines whether the MessageStrip will show an icon in the beginning. You can directly provide an icon with the `icon` slot. Otherwise, the default icon for the type will be used. |

## Properties

| Property | Type | Description |
|----------|------|-------------|
| `colorScheme` | `string` | Defines the color scheme of the component. There are 10 predefined schemes. To use one you can set a number from `"1"` to `"10"`. The `colorScheme` `"1"` will be set by default. |
| `design` | `MessageStripDesign` | Defines the component type. |
| `hideCloseButton` | `boolean` | Defines whether the MessageStrip renders close button. |
| `hideIcon` | `boolean` | Defines whether the MessageStrip will show an icon in the beginning. You can directly provide an icon with the `icon` slot. Otherwise, the default icon for the type will be used. |
| `model` | `STRING \| FuroFatString \| StringValue` | Use this to bind a model field by attribute. |
| `value` | `string` | The bound value as a string. Populated by the reader from the bound model and mirrored to the slotted text content. |

## Slots

### Default Slot (unnamed)

> **Usage:** Place content directly inside the component without a `slot` attribute.

Defines the text of the component.

**Note:** Although this slot accepts HTML Elements, it is strongly recommended that you only use text in order to preserve the intended design.

### `icon`

Defines the content to be displayed as graphical element within the component.

**Note:** If no icon is given, the default icon for the component type will be used.
The SAP-icons font provides numerous options.

See all the available icons in the [Icon Explorer](https://sdk.openui5.org/test-resources/sap/m/demokit/iconExplorer/webapp/index.html).

## Events

| Event | Detail Type | Description |
|-------|-------------|-------------|
| `close` | `CustomEvent` | Fired when the close button is pressed either with a click/tap or by using the Enter or Space key. |

## Methods

### `bindData(fieldNode: STRING | FuroFatString | StringValue | undefined): void`

Connects your data model to this component. Display-only: the component reads from the model but
never writes back.
