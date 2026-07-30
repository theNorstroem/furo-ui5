---
title: furo-ui5-carousel
tags: [carousel, slider, pages, gallery, swipe, rotate]
category: Container
use-when: Use to page through a small set of equally important items such as images or cards.
---

# furo-ui5-carousel

> Horizontally paged container with navigation arrows.

**Class:** `FuroUi5Carousel`
**Import:** `import "@furo/ui5/carousel"`
**Extends:** `Carousel`
**Category:** Container

**Related:** [`furo-ui5-card`](furo-ui5-card.md), [`furo-ui5-tabcontainer`](furo-ui5-tabcontainer.md)

## Overview

Shows its children one page at a time with arrows and page indicators. Best for a small, homogeneous set of items.

```html
<furo-ui5-carousel style="height:160px">
  <div style="padding:2rem;text-align:center">Page 1</div>
  <div style="padding:2rem;text-align:center">Page 2</div>
  <div style="padding:2rem;text-align:center">Page 3</div>
</furo-ui5-carousel>
```

This is a pass-through wrapper around `furo-ui5-carousel`: the UI5 API (properties, events,
slots) is inherited unchanged and no data binding is added.

### Overview
The Carousel allows the user to browse through a set of items.
The component is mostly used for showing a gallery of images, but can hold any other HTML element.

There are several ways to perform navigation:

- on desktop - the user can navigate using the navigation arrows or with keyboard shortcuts.
- on touch devices - the user can navigate using the navigation arrows (always visible) or can use swipe gestures.

### Usage

#### When to use:

- The items you want to display are very different from each other.
- You want to display the items one after the other.

#### When not to use:

- The items you want to display need to be visible at the same time.
- The items you want to display are uniform and very similar.

### Hidden Items

Carousel items can be conditionally hidden by adding the `hidden` attribute to any child element.
Hidden items are automatically excluded from carousel navigation and will not be displayed or counted in pagination.
This allows for dynamic showing or hiding of carousel items without affecting the overall carousel behavior.

### Keyboard Handling

#### Basic Navigation
When the `furo-ui5-carousel` is focused the user can navigate between the items
with the following keyboard shortcuts:

- [Up] or [Down] - Navigates to previous and next item
- [Left] or [Right] - Navigates to previous and next item

### Fast Navigation
This component provides a build in fast navigation group which can be used via [F6] / [Shift] + [F6] / [Ctrl] + [Alt/Option] / [Down] or [Ctrl] + [Alt/Option] + [Up].
In order to use this functionality, you need to import the following module:

## Attributes

| Attribute | Type | Default | Description |
|-----------|------|---------|-------------|
| `accessible-name` | `string \| undefined` | undefined | Defines the accessible name of the component. |
| `accessible-name-ref` | `string \| undefined` | undefined | Defines the IDs of the elements that label the input. |
| `arrows-placement` | `"Content" \| "Navigation"` | "Content" | Defines the position of arrows. |
| `background-design` | `"Transparent" \| "Solid" \| "Translucent"` | "Translucent" | Defines the carousel's background design. |
| `cyclic` | `boolean` | false | Defines whether the carousel should loop, i.e show the first page after the last page is reached and vice versa. |
| `hide-navigation-arrows` | `boolean` | false | Defines the visibility of the navigation arrows. If set to true the navigation arrows will be hidden. |
| `hide-page-indicator` | `boolean` | false | Defines the visibility of the page indicator. If set to true the page indicator will be hidden. |
| `items-per-page` | `string` | "S1 M1 L1 XL1" | Defines the number of items per page depending on the carousel width. |
| `page-indicator-background-design` | `"Transparent" \| "Solid" \| "Translucent"` | "Solid" | Defines the page indicator background design. |
| `page-indicator-border-design` | `"None" \| "Solid"` | "Solid" | Defines the page indicator border design. |
| `page-indicator-type` | `"Default" \| "Numeric"` | "Default" | Defines the style of the page indicator. Available options are: |
| `visible-items-indices` | `any` | [] | The indices of the currently visible items of the component. |

## Properties

| Property | Type | Description |
|----------|------|-------------|
| `accessibleName` | `string \| undefined` | Defines the accessible name of the component. |
| `accessibleNameRef` | `string \| undefined` | Defines the IDs of the elements that label the input. |
| `arrowsPlacement` | `CarouselArrowsPlacement` | Defines the position of arrows. |
| `backgroundDesign` | `BackgroundDesign` | Defines the carousel's background design. |
| `cyclic` | `boolean` | Defines whether the carousel should loop, i.e show the first page after the last page is reached and vice versa. |
| `hideNavigationArrows` | `boolean` | Defines the visibility of the navigation arrows. If set to true the navigation arrows will be hidden. |
| `hidePageIndicator` | `boolean` | Defines the visibility of the page indicator. If set to true the page indicator will be hidden. |
| `itemsPerPage` | `string` | Defines the number of items per page depending on the carousel width. |
| `pageIndicatorBackgroundDesign` | `BackgroundDesign` | Defines the page indicator background design. |
| `pageIndicatorBorderDesign` | `BorderDesign` | Defines the page indicator border design. |
| `pageIndicatorType` | `CarouselPageIndicatorType` | Defines the style of the page indicator. Available options are: |
| `visibleItemsIndices` | `Array<number>` | The indices of the currently visible items of the component. |

## Slots

### Default Slot (unnamed)

> **Usage:** Place content directly inside the component without a `slot` attribute.

Defines the content of the component.

**Note:** Items with the `hidden` attribute will be automatically excluded from carousel navigation and page calculations.
They will not be displayed or accessible via keyboard navigation. See [sample](./#carousel-with-hidden-items).

## Events

| Event | Detail Type | Description |
|-------|-------------|-------------|
| `navigate` | `CustomEvent<CarouselNavigateEventDetail>` | Fired whenever the page changes due to user interaction, when the user clicks on the navigation arrows or while resizing, based on the `items-per-page` property. |

## Methods

### `navigateTo(itemIndex: number): void`

Changes the currently displayed page.

## CSS Parts

- `content`: Used to style the content of the component
