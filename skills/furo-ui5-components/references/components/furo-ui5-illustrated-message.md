---
title: furo-ui5-illustrated-message
tags: [illustration, empty, error, message, placeholder, no-data, illustrated]
category: Feedback
use-when: Use to explain an empty list, a failed search or an error, with an optional recovery action.
---

# furo-ui5-illustrated-message

> Illustration with title and description for empty or error states.

**Class:** `FuroUi5IllustratedMessage`
**Import:** `import "@furo/ui5/illustrated-message"`
**Import type:** `import type { FuroUi5IllustratedMessage } from "@furo/ui5/illustrated-message"`
**Extends:** `IllustratedMessage`
**Category:** Feedback

**Related:** [`furo-ui5-message-strip`](furo-ui5-message-strip.md), [`furo-ui5-busy-indicator`](furo-ui5-busy-indicator.md), [`furo-ui5-toast`](furo-ui5-toast.md)

## Overview

Pairs an SAP illustration with a title, description and optional actions. Import the illustration you reference, e.g. `@furo/ui5/dist/illustrations/NoData.js`.

```html
<furo-ui5-illustrated-message name="NoData">
  <furo-ui5-button slot="actions" design="Emphasized">Create entry</furo-ui5-button>
</furo-ui5-illustrated-message>
```

This is a pass-through wrapper around `furo-ui5-illustrated-message`: the UI5 API (properties, events,
slots) is inherited unchanged and no data binding is added.

### Overview
An IllustratedMessage is a recommended combination of a solution-oriented message, an engaging
illustration, and conversational tone to better communicate an empty or a success state than just show
a message alone.

Each illustration has default internationalised title and subtitle texts. Also they can be managed with
`titleText` and `subtitleText` properties.

To display the desired illustration, use the `name` property, where you can find the list of all available illustrations.

**Note:** By default the “BeforeSearch” illustration is loaded. To use other illustrations, make sure you import them in addition, for example:

**Note:** Illustrations starting with the “Tnt” prefix are part of another illustration set. For example to use the “TntSuccess” illustration, add the following import::

### Structure
The IllustratedMessage consists of the following elements, which are displayed below each other in the following order:

- Illustration
- Title
- Subtitle
- Actions

### Usage
`furo-ui5-illustrated-message` is meant to be used inside container component, for example a `furo-ui5-card`,
a `furo-ui5-dialog` or a `furo-ui5-page`

## Attributes

| Attribute | Type | Default | Description |
|-----------|------|---------|-------------|
| `accessible-name-ref` | `string \| undefined` | undefined | Receives id(or many ids) of the elements that label the component. |
| `decorative` | `boolean` | false | Defines whether the illustration is decorative. |
| `design` | `"Auto" \| "Base" \| "Dot" \| "Spot" \| "Dialog" \| "Scene" \| "ExtraSmall" \| "Small" \| "Medium" \| "Large"` | "Auto" | Determines which illustration breakpoint variant is used. |
| `name` | `string` | "BeforeSearch" | Defines the illustration name that will be displayed in the component. |
| `subtitle-text` | `string \| undefined` | undefined | Defines the subtitle of the component. |
| `title-text` | `string \| undefined` | undefined | Defines the title of the component. |

## Properties

| Property | Type | Description |
|----------|------|-------------|
| `accessibleNameRef` | `string \| undefined` | Receives id(or many ids) of the elements that label the component. |
| `decorative` | `boolean` | Defines whether the illustration is decorative. |
| `design` | `IllustrationMessageDesign` | Determines which illustration breakpoint variant is used. |
| `name` | `string` | Defines the illustration name that will be displayed in the component. |
| `subtitleText` | `string \| undefined` | Defines the subtitle of the component. |
| `titleText` | `string \| undefined` | Defines the title of the component. |

## Slots

### Default Slot (unnamed)

> **Usage:** Place content directly inside the component without a `slot` attribute.

Defines the component actions.

**Note:** Not displayed when the `design` property is set to `Base`.

### `subtitle`

Defines the subtitle of the component.

**Note:** Using this slot, the default subtitle text of illustration and the value of `subtitleText` property will be overwritten.

### `title`

Defines the title of the component.

**Note:** Using this slot, the default title text of illustration and the value of `title` property will be overwritten.

## CSS Parts

- `subtitle`: Used to style the subtitle wrapper of the `ui5-illustrated-message`
