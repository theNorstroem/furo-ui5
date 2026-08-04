---
title: furo-ui5-timeline-item
tags: [timeline, item, event, entry, history, activity]
category: Display
use-when: Use as a child of furo-ui5-timeline to describe one event.
---

# furo-ui5-timeline-item

> Single event on a timeline.

**Class:** `FuroUi5TimelineItem`
**Import:** `import "@furo/ui5/timeline-item"`
**Import type:** `import type { FuroUi5TimelineItem } from "@furo/ui5/timeline-item"`
**Extends:** `TimelineItem`
**Category:** Display

**Related:** [`furo-ui5-timeline`](furo-ui5-timeline.md), [`furo-ui5-timeline-group-item`](furo-ui5-timeline-group-item.md), [`furo-ui5-relative-time-display`](furo-ui5-relative-time-display.md)

## Overview

One event of a `furo-ui5-timeline`, with a title, subtitle, icon and free content in the default slot.

```html
<furo-ui5-timeline>
  <furo-ui5-timeline-item title-text="Approved" subtitle-text="2 days ago" icon="accept" name="Jane Doe">
    Budget approved without changes.
  </furo-ui5-timeline-item>
</furo-ui5-timeline>
```

This is a pass-through wrapper around `furo-ui5-timeline-item`: the UI5 API (properties, events,
slots) is inherited unchanged and no data binding is added.

### Overview

An entry posted on the timeline.

## Attributes

| Attribute | Type | Default | Description |
|-----------|------|---------|-------------|
| `icon` | `string \| undefined` | undefined | Defines the icon to be displayed as graphical element within the `furo-ui5-timeline-item`. SAP-icons font provides numerous options. |
| `icon-tooltip` | `string \| undefined` | undefined | Defines the tooltip of the graphical icon. |
| `name` | `string \| undefined` | undefined | Defines the name of the item, displayed before the `title-text`. |
| `name-clickable` | `boolean` | false | Defines if the `name` is clickable. |
| `state` | `"None" \| "Positive" \| "Critical" \| "Negative" \| "Information"` | "None" | Defines the state of the icon displayed in the `furo-ui5-timeline-item`. |
| `subtitle-text` | `string \| undefined` | undefined | Defines the subtitle text of the component. |
| `title-text` | `string \| undefined` | undefined | Defines the title text of the component. |

## Properties

| Property | Type | Description |
|----------|------|-------------|
| `icon` | `string \| undefined` | Defines the icon to be displayed as graphical element within the `furo-ui5-timeline-item`. SAP-icons font provides numerous options. |
| `iconTooltip` | `string \| undefined` | Defines the tooltip of the graphical icon. |
| `name` | `string \| undefined` | Defines the name of the item, displayed before the `title-text`. |
| `nameClickable` | `boolean` | Defines if the `name` is clickable. |
| `state` | `ValueState` | Defines the state of the icon displayed in the `furo-ui5-timeline-item`. |
| `subtitleText` | `string \| undefined` | Defines the subtitle text of the component. |
| `titleText` | `string \| undefined` | Defines the title text of the component. |

## Slots

### Default Slot (unnamed)

> **Usage:** Place content directly inside the component without a `slot` attribute.

Defines the content of the `ui5-timeline-item`.

## Events

| Event | Detail Type | Description |
|-------|-------------|-------------|
| `name-click` | `CustomEvent` | Fired when the item name is pressed either with a click/tap or by using the Enter or Space key. |
