---
title: furo-ui5-avatar
tags: [avatar, initials, person, display, string]
category: Display
use-when: Use to render a person's initials from a bound string value.
---

# furo-ui5-avatar

> Display-only avatar whose initials are bound to a string field.

**Class:** `FuroUi5Avatar`
**Import:** `import "@furo/ui5/avatar"`
**Import type:** `import type { FuroUi5Avatar } from "@furo/ui5/avatar"`
**Extends:** `Avatar`
**Category:** Display

**Related:** [`furo-ui5-avatar-group`](furo-ui5-avatar-group.md)

## Overview

The 'furo-ui5-avatar' is a display-only component which renders a bound `string` value as the
avatar's initials, with data binding.

It extends the [SAP ui5 Avatar element](https://ui5.github.io/webcomponents/components/main/Avatar/).
Use the inherited `icon` / `colorScheme` / `shape` / `size` properties for styling.

You can bind any `string` type: `primitives.STRING`, the `furo.fat.String` type or the
`google.protobuf.StringValue` type. Display-only: the component reads from the model but never writes back.

```html
<furo-ui5-avatar .model="${fieldNode}"></furo-ui5-avatar>
```

### Overview

An image-like component that has different display options for representing images and icons
in different shapes and sizes, depending on the use case.

The shape can be circular or square. There are several predefined sizes, as well as an option to
set a custom size.

### Keyboard Handling

- [Space] / [Enter] or [Return] - Fires the `click` event if the `mode` is set to `Interactive` or the deprecated `interactive` property is set to true.
- [Shift] - If [Space] is pressed, pressing [Shift] releases the component without triggering the click event.

## Attributes

| Attribute | Type | Default | Description |
|-----------|------|---------|-------------|
| `accessibility-attributes` | `AvatarAccessibilityAttributes` | {} | Defines the additional accessibility attributes that will be applied to the component. The following field is supported: |
| `accessible-name` | `string \| undefined` | undefined | Defines the text alternative of the component. If not provided a default text alternative will be set, if present. |
| `color-scheme` | `"Auto" \| "Accent1" \| "Accent2" \| "Accent3" \| "Accent4" \| "Accent5" \| "Accent6" \| "Accent7" \| "Accent8" \| "Accent9" \| "Accent10" \| "Placeholder" \| "Transparent"` | "Auto" | Defines the background color of the desired image. If `colorScheme` is set to `Auto`, the avatar will be displayed with the `Accent6` color. |
| `disabled` | `boolean` | false | Defines whether the component is disabled. A disabled component can't be pressed or focused, and it is not in the tab chain. |
| `fallback-icon` | `string` | "employee" | Defines the name of the fallback icon, which should be displayed in the following cases: |
| `icon` | `string \| undefined` | undefined | Defines the name of the UI5 Icon, that will be displayed. |
| `initials` | `string \| undefined` | undefined | Defines the displayed initials. |
| `interactive` | `boolean` | false | Defines if the avatar is interactive (focusable and pressable). |
| `mode` | `"Image" \| "Decorative" \| "Interactive"` | "Image" | Defines the mode of the component. |
| `shape` | `"Circle" \| "Square"` | "Circle" | Defines the shape of the component. |
| `size` | `"XS" \| "S" \| "M" \| "L" \| "XL"` | "S" | Defines predefined size of the component. |

## Properties

| Property | Type | Description |
|----------|------|-------------|
| `accessibilityAttributes` | `AvatarAccessibilityAttributes` | Defines the additional accessibility attributes that will be applied to the component. The following field is supported: |
| `accessibleName` | `string \| undefined` | Defines the text alternative of the component. If not provided a default text alternative will be set, if present. |
| `colorScheme` | `AvatarColorScheme` | Defines the background color of the desired image. If `colorScheme` is set to `Auto`, the avatar will be displayed with the `Accent6` color. |
| `disabled` | `boolean` | Defines whether the component is disabled. A disabled component can't be pressed or focused, and it is not in the tab chain. |
| `fallbackIcon` | `string` | Defines the name of the fallback icon, which should be displayed in the following cases: |
| `icon` | `string \| undefined` | Defines the name of the UI5 Icon, that will be displayed. |
| `initials` | `string \| undefined` | Defines the displayed initials. |
| `interactive` | `boolean` | Defines if the avatar is interactive (focusable and pressable). |
| `mode` | `AvatarMode` | Defines the mode of the component. |
| `model` | `STRING \| FuroFatString \| StringValue` | Use this to bind a model field by attribute. |
| `shape` | `AvatarShape` | Defines the shape of the component. |
| `size` | `AvatarSize` | Defines predefined size of the component. |
| `value` | `string` | The bound value as a string. Populated by the reader from the bound model and mirrored to the inherited `initials` property. |

## Slots

### `badge`

Defines the optional badge that will be used for visual affordance.

**Recommendation:** While badges are supported on all avatars, it is recommended
to use them with interactive avatars (via `mode="Interactive"` or `interactive` attribute)
to provide better user experience and accessibility.

**Note:** While the slot allows for custom badges, to achieve
the Fiori design, use the `ui5-avatar-badge` component.

### Default Slot (unnamed)

> **Usage:** Place content directly inside the component without a `slot` attribute.

Receives the desired `` tag

**Note:** If you experience flickering of the provided image, you can hide the component until it is defined with the following CSS:

`ui5-avatar:not(:defined) {`

    `visibility: hidden;`

`}`

## Events

| Event | Detail Type | Description |
|-------|-------------|-------------|
| `click` | `CustomEvent` | Fired on mouseup, space and enter if avatar is interactive |

## Methods

### `bindData(fieldNode: STRING | FuroFatString | StringValue | undefined): void`

Connects your data model to this component. Display-only: the component reads from the model but
never writes back.
