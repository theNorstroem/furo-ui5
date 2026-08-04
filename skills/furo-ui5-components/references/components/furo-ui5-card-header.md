---
title: furo-ui5-card-header
tags: [card, header, title, subtitle, avatar, tile]
category: Container
use-when: Use in the header slot of furo-ui5-card to show a title, subtitle and status.
---

# furo-ui5-card-header

> Title area of a card.

**Class:** `FuroUi5CardHeader`
**Import:** `import "@furo/ui5/card-header"`
**Import type:** `import type { FuroUi5CardHeader } from "@furo/ui5/card-header"`
**Extends:** `CardHeader`
**Category:** Container

**Related:** [`furo-ui5-card`](furo-ui5-card.md), [`furo-ui5-title`](furo-ui5-title.md), [`furo-ui5-avatar`](furo-ui5-avatar.md)

## Overview

The header of a `furo-ui5-card`: title, subtitle, status and an optional avatar. Set `interactive` to make it clickable.

```html
<furo-ui5-card style="width:20rem">
  <furo-ui5-card-header
    slot="header"
    title-text="Revenue"
    subtitle-text="Q3 2026"
    status="3 of 5"
    interactive
  ></furo-ui5-card-header>
  <div style="padding:1rem">EUR 1.2 M</div>
</furo-ui5-card>
```

This is a pass-through wrapper around `furo-ui5-card-header`: the UI5 API (properties, events,
slots) is inherited unchanged and no data binding is added.

### Overview

The `furo-ui5-card-header` is a component, meant to be used as a header of the `furo-ui5-card` component.
It displays valuable information, that can be defined with several properties, such as: `titleText`, `subtitleText`, `additionalText`
and two slots: `avatar` and `action`.

### Keyboard handling
In case you enable `interactive` property, you can press the `furo-ui5-card-header` by Space and Enter keys.

## Attributes

| Attribute | Type | Default | Description |
|-----------|------|---------|-------------|
| `additional-text` | `string \| undefined` | undefined | Defines the additional text. |
| `interactive` | `boolean` | false | Defines if the component would be interactive, e.g gets hover effect and `click` event is fired, when pressed. |
| `subtitle-text` | `string \| undefined` | undefined | Defines the subtitle text. |
| `title-text` | `string \| undefined` | undefined | Defines the title text. |

## Properties

| Property | Type | Description |
|----------|------|-------------|
| `additionalText` | `string \| undefined` | Defines the additional text. |
| `interactive` | `boolean` | Defines if the component would be interactive, e.g gets hover effect and `click` event is fired, when pressed. |
| `subtitleText` | `string \| undefined` | Defines the subtitle text. |
| `titleText` | `string \| undefined` | Defines the title text. |

## Slots

### `action`

Defines an action, displayed in the right most part of the header.

### `avatar`

Defines an avatar image, displayed in the left most part of the header.

## Events

| Event | Detail Type | Description |
|-------|-------------|-------------|
| `click` | `CustomEvent` | Fired when the component is activated by mouse/tap or by using the Enter or Space key. |

## CSS Parts

- `additional-text`: Used to style the additional text of the CardHeader
- `root`: Used to style the root DOM element of the CardHeader
- `subtitle`: Used to style the subtitle of the CardHeader
- `title`: Used to style the title of the CardHeader
