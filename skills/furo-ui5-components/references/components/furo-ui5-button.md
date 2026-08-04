---
title: furo-ui5-button
tags: [button, action, click, submit, primary, trigger, call-to-action]
category: Button
use-when: Use for primary and secondary actions in forms, toolbars, and dialogs.
---

# furo-ui5-button

> Primary interactive button for triggering actions and navigation.

**Class:** `FuroUi5Button`
**Import:** `import "@furo/ui5/button"`
**Import type:** `import type { FuroUi5Button } from "@furo/ui5/button"`
**Extends:** `Button`
**Category:** Button

**Related:** [`furo-ui5-toggle-button`](furo-ui5-toggle-button.md), [`furo-ui5-split-button`](furo-ui5-split-button.md), [`furo-ui5-segmented-button`](furo-ui5-segmented-button.md), [`furo-ui5-button-badge`](furo-ui5-button-badge.md)

## Overview

### Overview

The `furo-ui5-button` component represents a simple push button.
It enables users to trigger actions by clicking or tapping the `furo-ui5-button`, or by pressing
certain keyboard keys, such as Enter.

### Usage

For the `furo-ui5-button` UI, you can define text, icon, or both. You can also specify
whether the text or the icon is displayed first.

You can choose from a set of predefined types that offer different
styling to correspond to the triggered action.

You can set the `furo-ui5-button` as enabled or disabled. An enabled
`furo-ui5-button` can be pressed by clicking or tapping it. The button changes
its style to provide visual feedback to the user that it is pressed or hovered over with
the mouse cursor. A disabled `furo-ui5-button` appears inactive and cannot be pressed.

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

### `disable(): void`

disables the button

### `enable(): void`

enables the button

### `hide(): void`

disables the button

### `show(): void`

enables the button

## CSS Parts

- `button`: Used to style the native button element
- `endIcon`: Used to style the end icon in the native button element
- `icon`: Used to style the icon in the native button element
