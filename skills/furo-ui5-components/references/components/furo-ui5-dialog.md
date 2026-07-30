---
title: furo-ui5-dialog
tags: [dialog, modal, popup, overlay, confirmation, alert, lightbox]
category: Container
use-when: Use for confirmations, forms, or content requiring user action before continuing.
---

# furo-ui5-dialog

> Modal dialog for displaying content requiring user attention or action.

**Class:** `FuroUi5Dialog`
**Import:** `import "@furo/ui5/dialog"`
**Extends:** `Dialog`
**Category:** Container

**Related:** [`furo-ui5-popover`](furo-ui5-popover.md), [`furo-ui5-responsive-popover`](furo-ui5-responsive-popover.md), [`furo-ui5-bar`](furo-ui5-bar.md)

## Overview

The furo-ui5-dialog is a extended furo-ui5-dialog which can attach itself to a parent dom element.

This is helpful, when you have used z-indexes in one of the parents, which put the original furo-ui5-dialog behind the backdrop.

Use this component like a regular furo-ui5-dialog and do not forget to place the furo-ui5-dialog-display in one of the parent elements.

It supports all features from the [SAP ui5 Dialog element](https://ui5.github.io/webcomponents/components/Dialog/).

**important:** Place a furo-ui5-dialog-display in any dom parent of the component where you use furo-ui5-dialog. Your app-shell or body is a good place to do that.

```html
<furo-ui5-dialog header-text="Dialog title" fn-show="--openDialogClicked" fn-close="--closeDialogClicked">
  <p>Content</p>
  <div slot="footer"> <button at-click="--closeDialogClicked">close dialog</button></div>
</furo-ui5-dialog>

<button at-click="--openDialogClicked">Open dialog</button>
```

### Overview
The `furo-ui5-dialog` component is used to temporarily display some information in a
size-limited window in front of the regular app screen.
It is used to prompt the user for an action or a confirmation.
The `furo-ui5-dialog` interrupts the current app processing as it is the only focused UI element and
the main screen is dimmed/blocked.
The dialog combines concepts known from other technologies where the windows have
names such as dialog box, dialog window, pop-up, pop-up window, alert box, or message box.

The `furo-ui5-dialog` is modal, which means that a user action is required before it is possible to return to the parent window.
To open multiple dialogs, each dialog element should be separate in the markup. This will ensure the correct modal behavior. Avoid nesting dialogs within each other.
The content of the `furo-ui5-dialog` is fully customizable.

### Structure
A `furo-ui5-dialog` consists of a header, content, and a footer for action buttons.
The `furo-ui5-dialog` is usually displayed at the center of the screen.
Its position can be changed by the user. To enable this, you need to set the property `draggable` accordingly.

### Responsive Behavior
The `stretch` property can be used to stretch the `furo-ui5-dialog` to full screen. For better usability, it's recommended to stretch the dialog to full screen on phone devices.

**Note:** When a `furo-ui5-bar` is used in the header or in the footer, you should remove the default dialog's paddings.

For more information see the sample "Bar in Header/Footer".

### Keyboard Handling

#### Basic Navigation
When the `furo-ui5-dialog` has the `draggable` property set to `true`, the user can move the dialog
with the following keyboard shortcuts:

- [Up] or [Down] arrow keys - Move the dialog up/down.
- [Left] or [Right] arrow keys - Move the dialog left/right.

#### Resizing
When the `furo-ui5-dialog` has the `resizable` property set to `true`, the user can change the size of the dialog
with the following keyboard shortcuts:

- [Shift] + [Up] or [Down] - Decrease/Increase the height of the dialog.
- [Shift] + [Left] or [Right] - Decrease/Increase the width of the dialog.

## Attributes

| Attribute | Type | Default | Description |
|-----------|------|---------|-------------|
| `accessible-description` | `string \| undefined` | undefined | Defines the accessible description of the component. |
| `accessible-description-ref` | `string \| undefined` | undefined | Receives id(or many ids) of the elements that describe the component. |
| `accessible-name` | `string \| undefined` | undefined | Defines the accessible name of the component. |
| `accessible-name-ref` | `string \| undefined` | undefined | Defines the IDs of the elements that label the component. |
| `accessible-role` | `"None" \| "Dialog" \| "AlertDialog"` | "Dialog" | Allows setting a custom role. |
| `draggable` | `boolean` | false | Determines whether the component is draggable. If this property is set to true, the Dialog will be draggable by its header. |
| `header-text` | `string \| undefined` | undefined | Defines the header text. |
| `initial-focus` | `string \| undefined` | undefined | Defines the ID of the HTML Element, which will get the initial focus. |
| `open` | `any` | false | Indicates if the element is open |
| `prevent-focus-restore` | `boolean` | false | Defines if the focus should be returned to the previously focused element, when the popup closes. |
| `prevent-initial-focus` | `boolean` | false | Indicates whether initial focus should be prevented. |
| `resizable` | `boolean` | false | Configures the component to be resizable. |
| `state` | `"None" \| "Positive" \| "Critical" \| "Negative" \| "Information"` | "None" | Defines the state of the `Dialog`. |
| `stretch` | `boolean` | false | Determines if the dialog will be stretched to full screen on mobile. On desktop, the dialog will be stretched to approximately 90% of the viewport. |

## Properties

| Property | Type | Description |
|----------|------|-------------|
| `accessibleDescription` | `string \| undefined` | Defines the accessible description of the component. |
| `accessibleDescriptionRef` | `string \| undefined` | Receives id(or many ids) of the elements that describe the component. |
| `accessibleName` | `string \| undefined` | Defines the accessible name of the component. |
| `accessibleNameRef` | `string \| undefined` | Defines the IDs of the elements that label the component. |
| `accessibleRole` | `PopupAccessibleRole` | Allows setting a custom role. |
| `draggable` | `boolean` | Determines whether the component is draggable. If this property is set to true, the Dialog will be draggable by its header. |
| `headerText` | `string \| undefined` | Defines the header text. |
| `initialFocus` | `string \| undefined` | Defines the ID of the HTML Element, which will get the initial focus. |
| `open` | `boolean` | Indicates if the element is open |
| `preventFocusRestore` | `boolean` | Defines if the focus should be returned to the previously focused element, when the popup closes. |
| `preventInitialFocus` | `boolean` | Indicates whether initial focus should be prevented. |
| `resizable` | `boolean` | Configures the component to be resizable. |
| `state` | `ValueState` | Defines the state of the `Dialog`. |
| `stretch` | `boolean` | Determines if the dialog will be stretched to full screen on mobile. On desktop, the dialog will be stretched to approximately 90% of the viewport. |

## Slots

### Default Slot (unnamed)

> **Usage:** Place content directly inside the component without a `slot` attribute.

Defines the content of the Popup.

### `footer`

Defines the footer HTML Element.

### `header`

Defines the header HTML Element.

**Note:** If `header` slot is provided, the labelling of the dialog is a responsibility of the application developer.
`accessibleName` should be used.

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

### `showAt(): void`

Shows the popover at the opener position.
Alternatively you can work with the attributes `opener` and `open` to achieve the same.

## CSS Parts

- `content`: Used to style the content of the component
- `footer`: Used to style the footer of the component
- `header`: Used to style the header of the component
