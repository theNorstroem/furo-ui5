---
title: furo-ui5-responsive-popover
tags: [responsive, popover, dialog, mobile, adaptive, overlay]
category: Container
use-when: Use when you need popover on desktop but fullscreen dialog on mobile.
---

# furo-ui5-responsive-popover

> Popover that adapts between desktop popover and mobile fullscreen dialog.

**Class:** `FuroUi5ResponsivePopover`
**Import:** `import "@furo/ui5/responsive-popover"`
**Extends:** `ResponsivePopover`
**Category:** Container

**Related:** [`furo-ui5-popover`](furo-ui5-popover.md), [`furo-ui5-dialog`](furo-ui5-dialog.md)

## Overview

### Overview
The `furo-ui5-responsive-popover` acts as a Popover on desktop and tablet, while on phone it acts as a Dialog.
The component improves tremendously the user experience on mobile.

### Usage
Use it when you want to make sure that all the content is visible on any device.

## Attributes

| Attribute | Type | Default | Description |
|-----------|------|---------|-------------|
| `accessible-description` | `string \| undefined` | undefined | Defines the accessible description of the component. |
| `accessible-description-ref` | `string \| undefined` | undefined | Receives id(or many ids) of the elements that describe the component. |
| `accessible-name` | `string \| undefined` | undefined | Defines the accessible name of the component. |
| `accessible-name-ref` | `string \| undefined` | undefined | Defines the IDs of the elements that label the component. |
| `accessible-role` | `"None" \| "Dialog" \| "AlertDialog"` | "Dialog" | Allows setting a custom role. |
| `allow-target-overlap` | `boolean` | false | Determines if there is no enough space, the component can be placed over the target. |
| `header-text` | `string \| undefined` | undefined | Defines the header text. |
| `hide-arrow` | `boolean` | false | Determines whether the component arrow is hidden. |
| `horizontal-align` | `"Start" \| "End" \| "Center" \| "Stretch"` | "Center" | Determines the horizontal alignment of the component. |
| `initial-focus` | `string \| undefined` | undefined | Defines the ID of the HTML Element, which will get the initial focus. |
| `modal` | `boolean` | false | Defines whether the component should close when clicking/tapping outside the popover. If enabled, it blocks any interaction with the background. |
| `open` | `any` | false | Indicates if the element is open |
| `opener` | `any` | undefined | Defines the ID or DOM Reference of the element at which the popover is shown. |
| `placement` | `"Top" \| "Bottom" \| "Start" \| "End"` | "End" | Determines on which side the component is placed at. |
| `prevent-focus-restore` | `boolean` | false | Defines if the focus should be returned to the previously focused element, when the popup closes. |
| `prevent-initial-focus` | `boolean` | false | Indicates whether initial focus should be prevented. |
| `resizable` | `boolean` | false | Determines whether the component is resizable. **Note:** This property is effective only on desktop devices. |
| `vertical-align` | `"Top" \| "Bottom" \| "Center" \| "Stretch"` | "Center" | Determines the vertical alignment of the component. |

## Properties

| Property | Type | Description |
|----------|------|-------------|
| `accessibleDescription` | `string \| undefined` | Defines the accessible description of the component. |
| `accessibleDescriptionRef` | `string \| undefined` | Receives id(or many ids) of the elements that describe the component. |
| `accessibleName` | `string \| undefined` | Defines the accessible name of the component. |
| `accessibleNameRef` | `string \| undefined` | Defines the IDs of the elements that label the component. |
| `accessibleRole` | `PopupAccessibleRole` | Allows setting a custom role. |
| `allowTargetOverlap` | `boolean` | Determines if there is no enough space, the component can be placed over the target. |
| `headerText` | `string \| undefined` | Defines the header text. |
| `hideArrow` | `boolean` | Determines whether the component arrow is hidden. |
| `horizontalAlign` | `PopoverHorizontalAlign` | Determines the horizontal alignment of the component. |
| `initialFocus` | `string \| undefined` | Defines the ID of the HTML Element, which will get the initial focus. |
| `modal` | `boolean` | Defines whether the component should close when clicking/tapping outside the popover. If enabled, it blocks any interaction with the background. |
| `open` | `boolean` | Indicates if the element is open |
| `opener` | `HTMLElement \| string \| null \| undefined` | Defines the ID or DOM Reference of the element at which the popover is shown. |
| `placement` | `PopoverPlacement` | Determines on which side the component is placed at. |
| `preventFocusRestore` | `boolean` | Defines if the focus should be returned to the previously focused element, when the popup closes. |
| `preventInitialFocus` | `boolean` | Indicates whether initial focus should be prevented. |
| `resizable` | `boolean` | Determines whether the component is resizable. **Note:** This property is effective only on desktop devices. |
| `verticalAlign` | `PopoverVerticalAlign` | Determines the vertical alignment of the component. |

## Slots

### Default Slot (unnamed)

> **Usage:** Place content directly inside the component without a `slot` attribute.

Defines the content of the Popup.

### `footer`

Defines the footer HTML Element.

### `header`

Defines the header HTML Element.

## Events

| Event | Detail Type | Description |
|-------|-------------|-------------|
| `before-close` | `CustomEvent<PopupBeforeCloseEventDetail>` | Fired before the component is closed. This event can be cancelled, which will prevent the popup from closing. |
| `before-open` | `CustomEvent` | Fired before the component is opened. This event can be cancelled, which will prevent the popup from opening. |
| `close` | `CustomEvent` | Fired after the component is closed. |
| `open` | `CustomEvent` | Fired after the component is opened. |

## Methods

### `applyFocus(): Promise<void>`

Focuses the element denoted by `initialFocus`, if provided,
or the first focusable element otherwise.

### `close(): void`

Closes the popup.

### `show(): void`

Shows the popover at the opener position defined with attribute opener.

### `showAt(opener: HTMLElement | string): void`

Shows the popover at the opener position.
Alternatively, you can work with the attributes `opener` and `open` to achieve the same.

## CSS Parts

- `content`: Used to style the content of the component
- `footer`: Used to style the footer of the component
- `header`: Used to style the header of the component
