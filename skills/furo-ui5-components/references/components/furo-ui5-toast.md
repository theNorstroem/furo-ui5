---
title: furo-ui5-toast
tags: [toast, notification, snackbar, message, alert, feedback, temporary]
category: Feedback
use-when: Use for non-blocking confirmations or status updates that auto-dismiss.
---

# furo-ui5-toast

> Brief, auto-dismissing notification message.

**Class:** `FuroUi5Toast`
**Import:** `import "@furo/ui5/toast"`
**Import type:** `import type { FuroUi5Toast } from "@furo/ui5/toast"`
**Extends:** `Toast`
**Category:** Feedback

**Related:** [`furo-ui5-message-strip`](furo-ui5-message-strip.md), [`furo-ui5-busy-indicator`](furo-ui5-busy-indicator.md)

## Overview

The furo-ui5-toast is a extended furo-ui5-toast which can attach itself to a parent dom element.

This is helpful, when you have used z-indexes in one of the parents, which put the original furo-ui5-toast behind the backdrop.

Use this component like a regular furo-ui5-toast and do not forget to place the furo-ui5-toast-display in one of the parent elements.

It supports all features from the [SAP ui5 Toast element](https://ui5.github.io/webcomponents/components/Toast/).

**important:** Place a furo-ui5-toast-display in any dom parent of the component where you use furo-ui5-toast. Your app-shell or body is a good place to do that.

```html
<furo-ui5-toast  fn-show="--openToastClicked" placement="MiddleCenter">Content</furo-ui5-toast>

<button at-click="--openToastClicked">Open toast</button>
```

### Overview

The `furo-ui5-toast` is a small, non-disruptive popup for success or information messages that
disappears automatically after a few seconds.

### Usage

#### When to use:

- You want to display a short success or information message.
- You do not want to interrupt users while they are performing an action.
- You want to confirm a successful action.

#### When not to use:

- You want to display error or warning message.
- You want to interrupt users while they are performing an action.
- You want to make sure that users read the message before they leave the page.
- You want users to be able to copy some part of the message text.

## Attributes

| Attribute | Type | Default | Description |
|-----------|------|---------|-------------|
| `duration` | `number` | 3000 | Defines the duration in milliseconds for which component remains on the screen before it's automatically closed. |
| `open` | `boolean` | false | Indicates whether the component is open (visible). |
| `placement` | `"TopStart" \| "TopCenter" \| "TopEnd" \| "MiddleStart" \| "MiddleCenter" \| "MiddleEnd" \| "BottomStart" \| "BottomCenter" \| "BottomEnd"` | "BottomCenter" | Defines the placement of the component. |

## Properties

| Property | Type | Description |
|----------|------|-------------|
| `duration` | `number` | Defines the duration in milliseconds for which component remains on the screen before it's automatically closed. |
| `open` | `boolean` | Indicates whether the component is open (visible). |
| `placement` | `ToastPlacement` | Defines the placement of the component. |

## Slots

### Default Slot (unnamed)

> **Usage:** Place content directly inside the component without a `slot` attribute.

Defines the text of the component.

**Note:** Although this slot accepts HTML Elements, it is strongly recommended that you only use text in order to preserve the intended design.

## Events

| Event | Detail Type | Description |
|-------|-------------|-------------|
| `close` | `CustomEvent` | Fired after the component is auto closed. |

## Methods

### `show(): void`

shows the toast
