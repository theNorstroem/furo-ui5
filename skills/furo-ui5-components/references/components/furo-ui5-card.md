---
title: furo-ui5-card
tags: [card, tile, container, box, dashboard, panel]
category: Container
use-when: Use on overview pages to group content about one topic into a tile.
---

# furo-ui5-card

> Rectangular container for a single topic.

**Class:** `FuroUi5Card`
**Import:** `import "@furo/ui5/card"`
**Extends:** `Card`
**Category:** Container

**Related:** [`furo-ui5-card-header`](furo-ui5-card-header.md), [`furo-ui5-panel`](furo-ui5-panel.md), [`furo-ui5-list`](furo-ui5-list.md)

## Overview

A container that visually groups content belonging to a single topic. Put a `furo-ui5-card-header` in its `header` slot.

```html
<furo-ui5-card style="width:20rem">
  <furo-ui5-card-header slot="header" title-text="Revenue" subtitle-text="Q3"></furo-ui5-card-header>
  <div style="padding:1rem">EUR 1.2 M</div>
</furo-ui5-card>
```

This is a pass-through wrapper around `furo-ui5-card`: the UI5 API (properties, events,
slots) is inherited unchanged and no data binding is added.

### Overview

The `furo-ui5-card` is a component that represents information in the form of a
tile with separate header and content areas.
The content area of a `furo-ui5-card` can be arbitrary HTML content.
The header can be used through slot `header`. For which there is a `furo-ui5-card-header` component to achieve the card look and feel.

Note: We recommend the usage of `furo-ui5-card-header` for the header slot, so advantage can be taken for keyboard handling, styling and accessibility.

)

## Attributes

| Attribute | Type | Default | Description |
|-----------|------|---------|-------------|
| `accessible-name` | `string \| undefined` | undefined | Defines the accessible name of the component, which is used as the name of the card region and should be unique per card. |
| `accessible-name-ref` | `string \| undefined` | undefined | Defines the IDs of the elements that label the component. |
| `loading` | `boolean` | false | Defines if a loading indicator would be displayed over the card. |
| `loading-delay` | `number` | 1000 | Defines the delay in milliseconds, after which the loading indicator will show up for this card. |

## Properties

| Property | Type | Description |
|----------|------|-------------|
| `accessibleName` | `string \| undefined` | Defines the accessible name of the component, which is used as the name of the card region and should be unique per card. |
| `accessibleNameRef` | `string \| undefined` | Defines the IDs of the elements that label the component. |
| `loading` | `boolean` | Defines if a loading indicator would be displayed over the card. |
| `loadingDelay` | `number` | Defines the delay in milliseconds, after which the loading indicator will show up for this card. |

## Slots

### Default Slot (unnamed)

> **Usage:** Place content directly inside the component without a `slot` attribute.

Defines the content of the component.

### `header`

Defines the header of the component.

**Note:** Use `ui5-card-header` for the intended design.

## CSS Parts

- `content`: Used to style the content of the card
- `root`: Used to style the root DOM element of the card component
