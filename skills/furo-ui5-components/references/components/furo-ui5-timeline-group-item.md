---
title: furo-ui5-timeline-group-item
tags: [timeline, group, collapse, events, section, history, item]
category: Display
use-when: Use inside furo-ui5-timeline to fold a run of events under one heading.
---

# furo-ui5-timeline-group-item

> Collapsible group of timeline events.

**Class:** `FuroUi5TimelineGroupItem`
**Import:** `import "@furo/ui5/timeline-group-item"`
**Import type:** `import type { FuroUi5TimelineGroupItem } from "@furo/ui5/timeline-group-item"`
**Extends:** `TimelineGroupItem`
**Category:** Display

**Related:** [`furo-ui5-timeline`](furo-ui5-timeline.md), [`furo-ui5-timeline-item`](furo-ui5-timeline-item.md)

## Overview

Groups `furo-ui5-timeline-item` children under a collapsible heading, for example one per day.

```html
<furo-ui5-timeline>
  <furo-ui5-timeline-group-item item-name="Yesterday">
    <furo-ui5-timeline-item title-text="Created" icon="add">Order created.</furo-ui5-timeline-item>
    <furo-ui5-timeline-item title-text="Paid" icon="money-bills">Payment received.</furo-ui5-timeline-item>
  </furo-ui5-timeline-group-item>
</furo-ui5-timeline>
```

This is a pass-through wrapper around `furo-ui5-timeline-group-item`: the UI5 API (properties, events,
slots) is inherited unchanged and no data binding is added.

### Overview

An entry posted on the timeline.
It is intented to represent a group of ``s.

**Note**: Please do not use empty groups in order to preserve the intended design.

## Attributes

| Attribute | Type | Default | Description |
|-----------|------|---------|-------------|
| `collapsed` | `boolean` | false | Determines if the group is collapsed or expanded. |
| `group-name` | `string \| undefined` | undefined | Defines the text of the button that expands and collapses the group. |

## Properties

| Property | Type | Description |
|----------|------|-------------|
| `collapsed` | `boolean` | Determines if the group is collapsed or expanded. |
| `groupName` | `string \| undefined` | Defines the text of the button that expands and collapses the group. |

## Slots

### Default Slot (unnamed)

> **Usage:** Place content directly inside the component without a `slot` attribute.

Determines the content of the `ui5-timeline-group-item`.

## Events

| Event | Detail Type | Description |
|-------|-------------|-------------|
| `toggle` | `CustomEvent` | Fired when the group item is expanded or collapsed. |
