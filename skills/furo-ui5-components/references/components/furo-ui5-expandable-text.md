---
title: furo-ui5-expandable-text
tags: [expandable, text, display, show-more, string]
category: Display
use-when: Use to render a long bound string with a show-more / show-less toggle.
---

# furo-ui5-expandable-text

> Display-only collapsible text bound to a string field.

**Class:** `FuroUi5ExpandableText`
**Import:** `import "@furo/ui5/expandable-text"`
**Import type:** `import type { FuroUi5ExpandableText } from "@furo/ui5/expandable-text"`
**Extends:** `ExpandableText`
**Category:** Display

**Related:** [`furo-ui5-text`](furo-ui5-text.md)

## Overview

The 'furo-ui5-expandable-text' is a display-only component which renders a bound `string` value as
collapsible text with a "show more / show less" toggle, with data binding.

It extends the [SAP ui5 ExpandableText element](https://ui5.github.io/webcomponents/components/ExpandableText/).

You can bind any `string` type: `primitives.STRING`, the `furo.fat.String` type or the
`google.protobuf.StringValue` type. Display-only: the component reads from the model but never writes back.

```html
<furo-ui5-expandable-text .model="${fieldNode}"></furo-ui5-expandable-text>
```

### Overview

The `furo-ui5-expandable-text` component allows displaying a large body of text in a small space. It provides an "expand/collapse" functionality, which shows/hides potentially truncated text.

### Usage

#### When to use:
- To accommodate long texts in limited space, for example in list items, table cell texts, or forms

#### When not to use:
- The content is critical for the user. In this case use short descriptions that can fit in
- Strive to provide short and meaningful texts to avoid excessive number of "Show More" links on the page

### Responsive Behavior

On phones, if the component is configured to display the full text in a popover, the popover will appear in full screen.

## Attributes

| Attribute | Type | Default | Description |
|-----------|------|---------|-------------|
| `empty-indicator-mode` | `"On" \| "Off"` | "Off" | Specifies if an empty indicator should be displayed when there is no text. |
| `max-characters` | `number` | 100 | Maximum number of characters to be displayed initially. If the text length exceeds this limit, the text will be truncated with an ellipsis, and the "More" link will be displayed. |
| `overflow-mode` | `"InPlace" \| "Popover"` | "InPlace" | Determines how the full text will be displayed. |
| `text` | `string \| undefined` | undefined | Text of the component. |

## Properties

| Property | Type | Description |
|----------|------|-------------|
| `emptyIndicatorMode` | `TextEmptyIndicatorMode` | Specifies if an empty indicator should be displayed when there is no text. |
| `maxCharacters` | `number` | Maximum number of characters to be displayed initially. If the text length exceeds this limit, the text will be truncated with an ellipsis, and the "More" link will be displayed. |
| `model` | `STRING \| FuroFatString \| StringValue` | Use this to bind a model field by attribute. |
| `overflowMode` | `ExpandableTextOverflowMode` | Determines how the full text will be displayed. |
| `text` | `string \| undefined` | Text of the component. |
| `value` | `string` | The bound value as a string. Populated by the reader from the bound model and mirrored to the inherited `text` property. |

## Methods

### `bindData(fieldNode: STRING | FuroFatString | StringValue | undefined): void`

Connects your data model to this component. Display-only: the component reads from the model but
never writes back.
