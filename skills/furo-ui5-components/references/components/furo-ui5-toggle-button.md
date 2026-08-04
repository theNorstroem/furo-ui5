---
title: furo-ui5-toggle-button
tags: [toggle, switch, on-off, pressed, state, button]
category: Button
use-when: Use when action has two states (active/inactive) that persist after click.
---

# furo-ui5-toggle-button

> Button that maintains an on/off pressed state.

**Class:** `FuroUi5ToggleButton`
**Import:** `import "@furo/ui5/toggle-button"`
**Import type:** `import type { FuroUi5ToggleButton } from "@furo/ui5/toggle-button"`
**Extends:** `ToggleButton`
**Category:** Button

**Related:** [`furo-ui5-button`](furo-ui5-button.md), [`furo-ui5-switch`](furo-ui5-switch.md), [`furo-ui5-segmented-button`](furo-ui5-segmented-button.md)

## Overview

The 'furo-ui5-toggle-button' component allows the user to switch true and false for Bool with data binding.

You can bind  `bool` type, `furo.fat.Bool` type or the `google.wrapper.BoolValue`  type.

## supported FAT labels
 - **"disabled":"true"** set the element to disabled

## supported FAT attributes
 - **"icon":""** set the icon
 - **"iconEnd":""** set the icon
 - **"design":""** set the design

### Overview

The `furo-ui5-toggle-button` component is an enhanced `furo-ui5-button`
that can be toggled between pressed and normal states.
Users can use the `furo-ui5-toggle-button` as a switch to turn a setting on or off.
It can also be used to represent an independent choice similar to a check box.

Clicking or tapping on a `furo-ui5-toggle-button` changes its state to `pressed`. The button returns to
its initial state when the user clicks or taps on it again.
By applying additional custom CSS-styling classes, apps can give a different style to any `furo-ui5-toggle-button`.

## Attributes

| Attribute | Type | Default | Description |
|-----------|------|---------|-------------|
| `accessibility-attributes` | `ButtonAccessibilityAttributes` | {} | Defines the additional accessibility attributes that will be applied to the component. The following fields are supported: |
| `accessible-description` | `string \| undefined` | undefined | Defines the accessible description of the component. |
| `accessible-name` | `string \| undefined` | undefined | Defines the accessible ARIA name of the component. |
| `accessible-name-ref` | `string \| undefined` | undefined | Receives id(or many ids) of the elements that label the component. |
| `accessible-role` | `"Button" \| "Link"` | "Button" | Describes the accessibility role of the button. |
| `design` | `"Transparent" \| "Positive" \| "Negative" \| "Default" \| "Emphasized" \| "Attention"` | "Default" | Defines the component design. |
| `disabled` | `boolean` | false | Defines whether the component is disabled. A disabled component can't be pressed or focused, and it is not in the tab chain. |
| `end-icon` | `string \| undefined` | undefined | Defines the icon, displayed as graphical element within the component after the button text. |
| `form` | `string \| undefined` | undefined | Associates the button with a form element by the form's `id` attribute. When set, the button can submit or reset the specified form even if the button is not a descendant of that form. |
| `icon` | `string \| undefined` | undefined | Defines the icon, displayed as graphical element within the component. The SAP-icons font provides numerous options. |
| `loading` | `boolean` | false | Defines whether the button shows a loading indicator. |
| `loading-delay` | `number` | 1000 | Specifies the delay in milliseconds before the loading indicator appears within the associated button. |
| `pressed` | `boolean` | false | Determines whether the component is displayed as pressed. |
| `submits` | `boolean` | false | When set to `true`, the component will automatically submit the nearest HTML form element on `press`. |
| `tooltip` | `string \| undefined` | undefined | Defines the tooltip of the component. |
| `type` | `"Button" \| "Submit" \| "Reset"` | "Button" | Defines whether the button has special form-related functionality. |

## Properties

| Property | Type | Description |
|----------|------|-------------|
| `accessibilityAttributes` | `ButtonAccessibilityAttributes` | Defines the additional accessibility attributes that will be applied to the component. The following fields are supported: |
| `accessibleDescription` | `string \| undefined` | Defines the accessible description of the component. |
| `accessibleName` | `string \| undefined` | Defines the accessible ARIA name of the component. |
| `accessibleNameRef` | `string \| undefined` | Receives id(or many ids) of the elements that label the component. |
| `accessibleRole` | `ButtonAccessibleRole` | Describes the accessibility role of the button. |
| `design` | `ButtonDesign` | Defines the component design. |
| `disabled` | `boolean` | Defines whether the component is disabled. A disabled component can't be pressed or focused, and it is not in the tab chain. |
| `endIcon` | `string \| undefined` | Defines the icon, displayed as graphical element within the component after the button text. |
| `form` | `string \| undefined` | Associates the button with a form element by the form's `id` attribute. When set, the button can submit or reset the specified form even if the button is not a descendant of that form. |
| `icon` | `string \| undefined` | Defines the icon, displayed as graphical element within the component. The SAP-icons font provides numerous options. |
| `loading` | `boolean` | Defines whether the button shows a loading indicator. |
| `loadingDelay` | `number` | Specifies the delay in milliseconds before the loading indicator appears within the associated button. |
| `model` | `BOOLEAN \| FuroFatBool \| BoolValue` | FieldNode setter |
| `pressed` | `boolean` | Determines whether the component is displayed as pressed. |
| `submits` | `boolean` | When set to `true`, the component will automatically submit the nearest HTML form element on `press`. |
| `tooltip` | `string \| undefined` | Defines the tooltip of the component. |
| `type` | `ButtonType` | Defines whether the button has special form-related functionality. |

## Slots

### `badge`

Adds a badge to the button.

### Default Slot (unnamed)

> **Usage:** Place content directly inside the component without a `slot` attribute.

Defines the text of the component.

**Note:** Although this slot accepts HTML Elements, it is strongly recommended that you only use text in order to preserve the intended design.

## Events

| Event | Detail Type | Description |
|-------|-------------|-------------|
| `click` | `CustomEvent<ButtonClickEventDetail>` | Fired when the component is activated either with a mouse/tap or by using the Enter or Space key. |

## Methods

### `bindData(fieldNode: BOOLEAN | FuroFatBool | BoolValue | undefined): void`

### `check(): void`

Checks the checkbox and updates the value

### `uncheck(): void`

Unhecks the checkbox and updates the value

## CSS Parts

- `button`: Used to style the native button element
- `endIcon`: Used to style the end icon in the native button element
- `icon`: Used to style the icon in the native button element
