---
title: furo-ui5-rating-indicator
tags: [rating, stars, feedback, score, review, indicator]
category: Form
use-when: Use for collecting user ratings or displaying scores.
---

# furo-ui5-rating-indicator

> Star-based rating input for feedback collection.

**Class:** `FuroUi5RatingIndicator`
**Import:** `import "@furo/ui5/rating-indicator"`
**Extends:** `RatingIndicator`
**Category:** Form

**Related:** [`furo-ui5-slider`](furo-ui5-slider.md)

## Overview

The furo-ui5-rating-indicator  is used to display a specific number of icons that are used to rate an item.
Additionally, it is also used to display the average and overall ratings.
https://ui5.github.io/webcomponents/components/RatingIndicator/

You can bind any `number` type, any `furo.fat.xxx` number type, `furo.BigDecimal` or the `google.wrapper.xxx` number types.

```html
<furo-ui5-rating-indicator
    fn-bind-data="--dao(FIELDNODE)"
 ></furo-ui5-rating-indicator>
```

## supported FAT attributes
 - **"readonly":"true"** set the element to readonly
 - **"disabled":"true"** set the element to disabled

## supported meta and constraints
- **readonly: true** , set the element to readonly

## Methods
**bind-data(fieldNode)**
Bind aa entity field. You can use the entity even when no data was received.

When you use at-object-ready from a furo-data-object which emits a EntityNode, just bind the field with --entity(*.fields.fieldname)

### Overview
The Rating Indicator is used to display a specific number of icons that are used to rate an item.
Additionally, it is also used to display the average and overall ratings.

### Usage
The recommended number of icons is between 5 and 7.

### Responsive Behavior
You can change the size of the Rating Indicator by changing its `font-size` CSS property.

Example: ``

### Keyboard Handling
When the `furo-ui5-rating-indicator` is focused, the user can change the rating
with the following keyboard shortcuts:

- [RIGHT/UP] - Increases the value of the rating by one step. If the highest value is reached, does nothing
- [LEFT/DOWN] - Decreases the value of the rating by one step. If the lowest value is reached, does nothing.
- [Home] - Sets the lowest value.
- [End] - Sets the highest value.
- [SPACE/ENTER/RETURN] - Increases the value of the rating by one step. If the highest value is reached, sets the rating to the lowest value.
- Any number - Changes value to the corresponding number. If typed number is larger than the number of values, sets the highest value.

## Attributes

| Attribute | Type | Default | Description |
|-----------|------|---------|-------------|
| `accessible-name` | `string \| undefined` | undefined | Defines the accessible ARIA name of the component. |
| `accessible-name-ref` | `string \| undefined` | undefined | Receives id(or many ids) of the elements that label the component. |
| `disabled` | `boolean` | false | Defines whether the component is disabled. |
| `max` | `number` | 5 | The number of displayed rating symbols. |
| `rated-icon` | `string` | "favorite" | Defines the icon to be displayed for the selected (filled) rating symbol. |
| `readonly` | `boolean` | false | Defines whether the component is read-only. |
| `required` | `boolean` | false | Defines whether the component is required. |
| `size` | `"S" \| "M" \| "L"` | "M" | Defines the size of the component. |
| `tooltip` | `string \| undefined` | undefined | Defines the tooltip of the component. |
| `unrated-icon` | `string` | "unfavorite" | Defines the icon to be displayed for the unselected (empty) rating symbol. |
| `value` | `number` | 0 | The indicated value of the rating. |
| `value-state` | `"Positive" \| "Negative" \| "Critical" \| "Information" \| "None"` | - | Set the value state |

## Properties

| Property | Type | Description |
|----------|------|-------------|
| `accessibleName` | `string \| undefined` | Defines the accessible ARIA name of the component. |
| `accessibleNameRef` | `string \| undefined` | Receives id(or many ids) of the elements that label the component. |
| `disabled` | `boolean` | Defines whether the component is disabled. |
| `max` | `number` | The number of displayed rating symbols. |
| `model` | `\| INT32     \| INT64     \| UINT32     \| UINT64     \| DOUBLE     \| FLOAT     \| FuroFatFloat     \| FuroFatInt32     \| FuroFatInt64     \| FuroFatUint32     \| FuroFatUint64     \| FloatValue     \| Int32Value     \| Int64Value     \| UInt32Value     \| UInt64Value` | Use this to bind a model field by attribute. |
| `ratedIcon` | `string` | Defines the icon to be displayed for the selected (filled) rating symbol. |
| `readonly` | `boolean` | Defines whether the component is read-only. |
| `required` | `boolean` | Defines whether the component is required. |
| `size` | `RatingIndicatorSize` | Defines the size of the component. |
| `tooltip` | `string \| undefined` | Defines the tooltip of the component. |
| `unratedIcon` | `string` | Defines the icon to be displayed for the unselected (empty) rating symbol. |
| `value` | `number` | The indicated value of the rating. |
| `valueState` | `ValueState` | Set the Value state |

## Events

| Event | Detail Type | Description |
|-------|-------------|-------------|
| `change` | `CustomEvent` | Fired when the values change. |
| `furo-value-changed` | ``number`` | Fires the field value when it changes. |

## Methods

### `bindData(fieldNode: | INT32
      | INT64
      | UINT32
      | UINT64
      | DOUBLE
      | FLOAT
      | FuroFatFloat
      | FuroFatInt32
      | FuroFatInt64
      | FuroFatUint32
      | FuroFatUint64
      | FloatValue
      | Int32Value
      | Int64Value
      | UInt32Value
      | UInt64Value
      | undefined): void`

Connects your data model to this component.
