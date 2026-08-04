---
title: furo-ui5-dynamic-side-content
tags: [side, content, responsive, aside, layout, split, dynamic]
category: PageStructure
use-when: Use to show supporting content beside the main content that folds away on small screens.
---

# furo-ui5-dynamic-side-content

> Main area with responsive, collapsible side content.

**Class:** `FuroUi5DynamicSideContent`
**Import:** `import "@furo/ui5/dynamic-side-content"`
**Import type:** `import type { FuroUi5DynamicSideContent } from "@furo/ui5/dynamic-side-content"`
**Extends:** `DynamicSideContent`
**Category:** PageStructure

**Related:** [`furo-ui5-flexible-column-layout`](furo-ui5-flexible-column-layout.md)

## Overview

Places additional content next to the main content and repositions or hides it as the screen gets narrower.

```html
<furo-ui5-dynamic-side-content>
  <div style="padding:1rem">Main content</div>
  <div slot="sideContent" style="padding:1rem">Side content</div>
</furo-ui5-dynamic-side-content>
```

This is a pass-through wrapper around `furo-ui5-dynamic-side-content`: the UI5 API (properties, events,
slots) is inherited unchanged and no data binding is added.

### Overview

The DynamicSideContent (`furo-ui5-dynamic-side-content`) is a layout component that allows additional content
to be displayed in a way that flexibly adapts to different screen sizes. The side
content appears in a container next to or directly below the main content
(it doesn't overlay). When the side content is triggered, the main content becomes
narrower (if appearing side-by-side). The side content contains a separate scrollbar
when appearing next to the main content.

### Usage

*When to use?*

Use this component if you want to display relevant information that is not critical
for users to complete a task. Users should have access to all the key functions and
critical information in the app even if they do not see the side content. This is
important because on smaller screen sizes it may be difficult to display the side
content in a way that is easily accessible for the user.

*When not to use?*

Don't use it if you want to display navigation or critical information that prevents
users from completing a task when they have no access to the side content.

### Responsive Behavior

Screen width \> 1440px

- Main vs. side content ratio is 75 vs. 25 percent (with a minimum of 320px
each).
- If the application defines a trigger, the side content can be hidden.

Screen width \ 1024px

- Main vs. side content ratio is 66.666 vs. 33.333 percent (with a minimum of
320px each). If the side content width falls below 320 px, it automatically slides
under the main content, unless the app development team specifies that it should
disappear.

Screen width \ 720px

- The side content ratio is fixed to 340px, and the main content takes the rest
of the width. Only if the `sideContentFallDown` is set to `OnMinimumWidth`
and screen width is \ 720px the side content falls below the main content.

Screen width \<\= 720px (for example on a mobile device)

- In this case, the side content automatically disappears from the screen (unless
specified to stay under the content by setting of `sideContentVisibility`
property to `AlwaysShow`) and can be triggered from a pre-set trigger
(specified within the app). When the side content is triggered, it replaces the main
content. We recommend that you always place the trigger for the side content in the
same location, such as in the app footer.

A special case allows switching the comparison mode between the main and side content.
In this case, the screen is split into 50:50 percent for main vs. side content. The
responsive behavior of the equal split is the same as in the standard view - the
side content disappears on screen widths of less than 720 px and can only be
viewed by triggering it.

## Attributes

| Attribute | Type | Default | Description |
|-----------|------|---------|-------------|
| `accessibility-attributes` | `DynamicSideContentAccessibilityAttributes` | {} | Defines additional accessibility attributes on different areas of the component. |
| `equal-split` | `boolean` | false | Defines whether the component is in equal split mode. |
| `hide-main-content` | `boolean` | false | Defines the visibility of the main content. |
| `hide-side-content` | `boolean` | false | Defines the visibility of the side content. |
| `side-content-fall-down` | `"BelowXL" \| "BelowL" \| "BelowM" \| "OnMinimumWidth"` | "OnMinimumWidth" | Defines on which breakpoints the side content falls down below the main content. |
| `side-content-position` | `"End" \| "Start"` | "End" | Defines whether the side content is positioned before the main content (left side in LTR mode), or after the the main content (right side in LTR mode). |
| `side-content-visibility` | `"AlwaysShow" \| "ShowAboveL" \| "ShowAboveM" \| "ShowAboveS" \| "NeverShow"` | "ShowAboveS" | Defines on which breakpoints the side content is visible. |

## Properties

| Property | Type | Description |
|----------|------|-------------|
| `accessibilityAttributes` | `DynamicSideContentAccessibilityAttributes` | Defines additional accessibility attributes on different areas of the component. |
| `equalSplit` | `boolean` | Defines whether the component is in equal split mode. |
| `hideMainContent` | `boolean` | Defines the visibility of the main content. |
| `hideSideContent` | `boolean` | Defines the visibility of the side content. |
| `sideContentFallDown` | `SideContentFallDown` | Defines on which breakpoints the side content falls down below the main content. |
| `sideContentPosition` | `SideContentPosition` | Defines whether the side content is positioned before the main content (left side in LTR mode), or after the the main content (right side in LTR mode). |
| `sideContentVisibility` | `SideContentVisibility` | Defines on which breakpoints the side content is visible. |

## Slots

### Default Slot (unnamed)

> **Usage:** Place content directly inside the component without a `slot` attribute.

Defines the main content.

### `sideContent`

Defines the side content.

## Events

| Event | Detail Type | Description |
|-------|-------------|-------------|
| `layout-change` | `CustomEvent<DynamicSideContentLayoutChangeEventDetail>` | Fires when the current breakpoint has been changed. |

## Methods

### `toggleContents(): void`

Toggles visibility of main and side contents on S screen size (mobile device).
