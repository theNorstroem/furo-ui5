---
title: furo-ui5-show-hide
tags: [show, hide, visibility, conditional, toggle]
category: Layout
use-when: Use for toggling content visibility.
---

# furo-ui5-show-hide

> Container for conditionally showing or hiding content.

**Class:** `FuroUi5ShowHide`
**Import:** `import "@furo/ui5/show-hide"`
**Category:** Layout

**Related:** [`furo-ui5-expandable-text`](furo-ui5-expandable-text.md)

## Attributes

| Attribute | Type | Default | Description |
|-----------|------|---------|-------------|
| `hide-on-false` | `boolean` | false |  |
| `no-animation` | `boolean` | false | Indicates whether the transition between the expanded and the collapsed state of the component is animated. By default, the animation is enabled. |

## Properties

| Property | Type | Description |
|----------|------|-------------|
| `model` | `BOOLEAN \| FuroFatBool \| BoolValue` | Use this to bind a model field by attribute. |
| `value` | `boolean` | Set is-hiddden to start in a closed state. The name is used by intention, to avoid css trouble with a global `[hidden]{display:none}`. |

## Events

| Event | Detail Type | Description |
|-------|-------------|-------------|
| `hid` | `CustomEvent<Boolean>` | hid will be fired after the animation is completed. |
| `showed` | `CustomEvent<Boolean>` | showed will be fired when the content is visible. |
| `toggled` | `CustomEvent<Boolean>` | Toggled will be fired after the animation is completed. |

## Methods

### `bindData(fieldNode: BOOLEAN | FuroFatBool | BoolValue | undefined): void`

Connects your data model to this component.

### `hide(): void`

Hides the content.

### `show(): void`

Shows the content.

### `toggle(): void`

Toggle the current visibility state..
