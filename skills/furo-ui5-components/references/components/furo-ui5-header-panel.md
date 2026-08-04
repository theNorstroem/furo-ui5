---
title: furo-ui5-header-panel
tags: [header, panel, collapsible, group, container, expand]
category: Container
use-when: Use to group related content under a collapsible header.
---

# furo-ui5-header-panel

> Collapsible panel with a header for grouping content.

**Class:** `FuroUi5HeaderPanel`
**Import:** `import "@furo/ui5/header-panel"`
**Import type:** `import type { FuroUi5HeaderPanel } from "@furo/ui5/header-panel"`
**Category:** Container

**Related:** [`furo-ui5-section`](furo-ui5-section.md), [`furo-ui5-subsection`](furo-ui5-subsection.md)

## Overview

### Overview
 The dynamic page header contains key information about the object and provides the user with the necessary context. The header initially expands in display mode. It also contains global actions for the object, such as Edit or Delete.

### Usage
#### Header Content (default slot)
The header content displays app-specific contextual information. You build the content using containers, called facets.

The facets are arranged inline with a left float. Each facet adapts its size to the content and makes optimal use of the space without truncating the texts. If the facets do not all fit on one line, those on the right wrap to the line below.

**Note:** The Breadcrumb and the TabContainer is not part of the DynamicHeader component.

 [Read more about the DynamicHeader in the DynamicPage page layout.](https://experience.sap.com/fiori-design-web/dynamic-page-layout/#components)

 [Read more about the DynamicHeader in the ObjectPage floor plan.](https://experience.sap.com/fiori-design-web/object-page/#dynamic-page-header-mandatory)

## Attributes

| Attribute | Type | Default | Description |
|-----------|------|---------|-------------|
| `big-action` | `boolean` | false | Set this attribute to get a bigger action slot. |
| `collapse-on-scroll` | `boolean` | true | Flag to disable/enable collapsing/expanding on scroll |
| `collapsed` | `boolean` | false | Set the collapsed attribute to start in a collapsed state. Header which are pinned by the user in collapsed or expanded state, will override this attribute. |
| `fixed` | `boolean` | false | Fixes the header as it is. This will remove the collapse and expand buttons. |
| `header-text` | `string` | "" | Defines the headerText of the component. |
| `header-text-level` | `string` | "H2" | Defines the headerTextLevel of the component. |
| `icon` | `string` | - | Defines the icon of the component. |
| `icon-shape` | `"Circle" \| "Square"` | - | Defines the icon-shape of the icon / image. Square \| Circle |
| `icon-size` | `"XS" \| "S" \| "M" \| "L" \| "XL"` | - | Defines the icon-size of the icon / image. |
| `image` | `string` | - | Defines the image of the component. In the case that an image and an icon are set, only the icon is displayed. |
| `is-favorite` | `boolean` | false | Shows the fovorite icon when set. |
| `is-pinned` | `boolean` | false | Set the is-pinned attribute to disable collapse and expand before unpin. |
| `object-icon` | `string` | "" | Set this value to display an object icon. |
| `secondary-text` | `string` | "" | The secondary text is something like a subtitle, it is placed below the header text and KPI slot. If the secondary text is empty, the label is removed. |
| `shadow` | `boolean` | false | Draw a shadow, this is useful when you do not have a `tab-container` after your `dynamic-header` |
| `show-dropdown` | `boolean` | false | Show the dropdown button icon after the header text. |

## Slots

### `search`
**Type:** `HTMLElement[]`

Place your search input field here.

### `kpi`
**Type:** `HTMLElement[]`

Place kpi tags here, do not use more than 3 if possible.

### `action`
**Type:** `HTMLElement[]`

Place action items here. If you need more space, set `big-action`.
Use a `HorizontalFlex` to align the contents to the end.

### `summary`
**Type:** `HTMLElement[]`

Shows when the panel is collapsed.

### `secondary`
**Type:** `HTMLElement[]`

Only for special cases. Place additional content here. This slot is always visible (not part of the collapse area).

### `badges`
**Type:** `HTMLElement[]`

Place badges here.

## Events

| Event | Detail Type | Description |
|-------|-------------|-------------|
| `favorite-icon-clicked` | `CustomEvent<HTMLElement>` | fired when the favorite icon is clicked, sends the node ref of the icon. |
| `hid` | `CustomEvent<Boolean>` | hid will be fired when the header is collapsed. |
| `object-icon-clicked` | `CustomEvent<HTMLElement>` | fired when the object icon is clicked, sends the node ref of the icon. |
| `pinned` | `CustomEvent` | Fired when pin was set. |
| `showed` | `CustomEvent<Boolean>` | showed will be fired when the header is expanded. |
| `unpinned` | `CustomEvent` | Fired when pin was removed. |
| `variant-icon-clicked` | `CustomEvent<HTMLElement>` | fired when the variant dropdown is clicked or the [arrow down] key is pressed, sends the node ref of the icon. |

## Methods

### `collapse(): void`

Collapses the header content.
This method will do nothing, if the header is "pinned".

### `expand(): void`

Expands the header content.
This method will do nothing, if the header is "pinned".
