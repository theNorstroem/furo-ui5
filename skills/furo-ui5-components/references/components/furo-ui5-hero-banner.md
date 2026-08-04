---
title: furo-ui5-hero-banner
tags: [hero, banner, landing, header, promo, highlight]
category: Display
use-when: Use at the top of a launchpad or landing page to highlight one message.
---

# furo-ui5-hero-banner

> Full-width banner for the top of a landing page.

**Class:** `FuroUi5HeroBanner`
**Import:** `import "@furo/ui5/hero-banner"`
**Extends:** `HeroBanner`
**Category:** Display

**Related:** [`furo-ui5-card`](furo-ui5-card.md), [`furo-ui5-illustrated-message`](furo-ui5-illustrated-message.md), [`furo-ui5-title`](furo-ui5-title.md)

## Overview

A prominent, full-width banner combining a headline, supporting text and an optional background image.

```html
<furo-ui5-hero-banner header-text="Welcome" overline-text="Everything you need, in one place.">
</furo-ui5-hero-banner>
```

This is a pass-through wrapper around `furo-ui5-hero-banner`: the UI5 API (properties, events,
slots) is inherited unchanged and no data binding is added.

### Overview

The `furo-ui5-hero-banner` is a flexible, full-width banner designed for placement at the top of a page.
It provides a personalized greeting and quick access to key information or actions.

### Structure

The HeroBanner consists of the following building blocks:

- **Banner Canvas** - the visual base with a background color, optional background image and shadow.
- **Overline** (optional) - contextual text at the top, e.g. the current date or a status message.
- **Header** (optional) - the main greeting header below the overline, e.g. "Hello, John".
- **Free Slots** (optional) - customizable content areas that can contain KPI cards, search components, text, buttons, etc.

The banner is not sticky — it scrolls away with the page content when the user scrolls down.

### Usage

Place the `furo-ui5-hero-banner` at the top of a page to welcome the user and surface relevant
information or shortcuts at a glance.

The hero banner itself is non-interactive. However, interactive elements such as buttons, cards,
or search fields can be placed inside the free content slots and will follow their own
interactive states.

### Responsive Behavior

The hero banner adapts to different screen sizes:
- On smaller screens, split layouts (Equal, FirstWider) collapse to a single stacked column.
- The heading text wraps to multiple lines as needed.
- Buttons in the headerAction slot will wrap.
- On screens ≤1024px, the header text is wrapped to a maximum of 3 lines.

## Attributes

| Attribute | Type | Default | Description |
|-----------|------|---------|-------------|
| `actions-placement` | `"TopEnd" \| "BottomStart"` | "TopEnd" | Defines the placement of the actions slot within the hero banner header. |
| `columns-ratio` | `"Equal" \| "FirstWider"` | "FirstWider" | Defines the ratio between the two content columns inside the hero banner. |
| `header-block-placement` | `"Top" \| "Bottom"` | "Top" | Defines the vertical placement of the header block within the content area. |
| `header-text` | `string \| undefined` | undefined | Defines the header text displayed in the hero banner. |
| `overline-text` | `string \| undefined` | undefined | Defines text displayed above the heading as an overline. Can be used to show the current date, a status message, or any other relevant contextual information. |

## Properties

| Property | Type | Description |
|----------|------|-------------|
| `actionsPlacement` | `HeroBannerActionsPlacement` | Defines the placement of the actions slot within the hero banner header. |
| `columnsRatio` | `HeroBannerColumnsRatio` | Defines the ratio between the two content columns inside the hero banner. |
| `headerBlockPlacement` | `HeroBannerHeaderBlockPlacement` | Defines the vertical placement of the header block within the content area. |
| `headerText` | `string \| undefined` | Defines the header text displayed in the hero banner. |
| `overlineText` | `string \| undefined` | Defines text displayed above the heading as an overline. Can be used to show the current date, a status message, or any other relevant contextual information. |

## Slots

### `actions`

Defines action buttons displayed to the right of the header area.
Typically used to display actions buttons in the top right corner.

Can contain buttons, links, or other interactive elements that provide
quick access to relevant actions directly from the hero banner header.

### Default Slot (unnamed)

> **Usage:** Place content directly inside the component without a `slot` attribute.

Defines the first (default) free content block of the hero banner.

This is the default slot — content placed directly inside ``
without a slot attribute lands here.
Can contain KPI cards, search input fields, text, buttons, and more.

### `endContent`

Defines the second free content block of the hero banner.

Used alongside `startContent` when `columnsRatio` is set (`Equal`, `FirstWider`).
Can contain cards, buttons, and other interactive elements.

## CSS Parts

- `canvas`: Used to style the banner canvas container
- `content`: Used to style the content area of the banner
- `endContent`: Used to style the end content block
- `header`: Used to style the header area (salutation, date, header actions)
- `startContent`: Used to style the start (default) content block
