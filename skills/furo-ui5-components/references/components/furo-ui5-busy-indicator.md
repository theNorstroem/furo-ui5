---
title: furo-ui5-busy-indicator
tags: [busy, loading, spinner, progress, wait, indicator]
category: Feedback
use-when: Use to indicate loading or processing state.
---

# furo-ui5-busy-indicator

> Loading spinner overlay indicating ongoing background activity.

**Class:** `FuroUi5BusyIndicator`
**Import:** `import "@furo/ui5/busy-indicator"`
**Extends:** `BusyIndicator`
**Category:** Feedback

**Related:** [`furo-ui5-progress-indicator`](furo-ui5-progress-indicator.md)

## Overview

The furo-ui5-busy-indicator signals that some operation is going on and that the user must wait.

```html
<furo-ui5-busy-indicator></furo-ui5-busy-indicator>
```

https://ui5.github.io/webcomponents/components/BusyIndicator/

### Overview

The `furo-ui5-busy-indicator` signals that some operation is going on and that the
user must wait. It does not block the current UI screen so other operations could be triggered in parallel.
It displays 3 dots and each dot expands and shrinks at a different rate, resulting in a cascading flow of animation.

### Usage
For the `furo-ui5-busy-indicator` you can define the size, the text and whether it is shown or hidden.
In order to hide it, use the "active" property.

In order to show busy state over an HTML element, simply nest the HTML element in a `furo-ui5-busy-indicator` instance.

**Note:** Since `furo-ui5-busy-indicator` has `display: inline-block;` by default and no width of its own,
whenever you need to wrap a block-level element, you should set `display: block` to the busy indicator as well.

#### When to use:

- The user needs to be able to cancel the operation.
- Only part of the application or a particular component is affected.

#### When not to use:

- The operation takes less than one second.
- You need to block the screen and prevent the user from starting another activity.
- Do not show multiple busy indicators at once.

## Attributes

| Attribute | Type | Default | Description |
|-----------|------|---------|-------------|
| `active` | `boolean` | false | Defines if the busy indicator is visible on the screen. By default it is not. |
| `delay` | `number` | 1000 | Defines the delay in milliseconds, after which the busy indicator will be visible on the screen. |
| `size` | `"S" \| "M" \| "L"` | "M" | Defines the size of the component. |
| `text` | `string \| undefined` | undefined | Defines text to be displayed below the component. It can be used to inform the user of the current operation. |
| `text-placement` | `"Top" \| "Bottom"` | "Bottom" | Defines the placement of the text. |

## Properties

| Property | Type | Description |
|----------|------|-------------|
| `active` | `boolean` | Defines if the busy indicator is visible on the screen. By default it is not. |
| `delay` | `number` | Defines the delay in milliseconds, after which the busy indicator will be visible on the screen. |
| `model` | `BOOLEAN \| FuroFatBool \| BoolValue` | FieldNode setter |
| `size` | `BusyIndicatorSize` | Defines the size of the component. |
| `text` | `string \| undefined` | Defines text to be displayed below the component. It can be used to inform the user of the current operation. |
| `textPlacement` | `BusyIndicatorTextPlacement` | Defines the placement of the text. |

## Slots

### Default Slot (unnamed)

> **Usage:** Place content directly inside the component without a `slot` attribute.

Determines the content over which the component will appear.

## Methods

### `bindData(fieldNode: BOOLEAN | FuroFatBool | BoolValue | undefined): void`
