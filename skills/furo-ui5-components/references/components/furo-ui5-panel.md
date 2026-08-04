---
title: furo-ui5-panel
tags: [panel, collapsible, expand, container, accordion, section]
category: Container
use-when: Use to group related content under a heading the user can collapse.
---

# furo-ui5-panel

> Collapsible container with a header.

**Class:** `FuroUi5Panel`
**Import:** `import "@furo/ui5/panel"`
**Import type:** `import type { FuroUi5Panel } from "@furo/ui5/panel"`
**Extends:** `Panel`
**Category:** Container

**Related:** [`furo-ui5-section`](furo-ui5-section.md), [`furo-ui5-show-hide`](furo-ui5-show-hide.md), [`furo-ui5-card`](furo-ui5-card.md)

## Overview

A container with a header that can be expanded and collapsed. For object-page layout use `furo-ui5-section` / `furo-ui5-subsection` instead.

```html
<furo-ui5-panel header-text="Details">
  <div style="padding:.5rem">Collapsible content.</div>
</furo-ui5-panel>
```

This is a pass-through wrapper around `furo-ui5-panel`: the UI5 API (properties, events,
slots) is inherited unchanged and no data binding is added.

### Overview

The `furo-ui5-panel` component is a container which has a header and a
content area and is used
for grouping and displaying information. It can be collapsed to save space on the screen.

### Guidelines:

- Nesting two or more panels is not recommended.
- Do not stack too many panels on one page.

### Structure
The panel's header area consists of a title bar with a header text or custom header.

The header is clickable and can be used to toggle between the expanded and collapsed state. It includes an icon which rotates depending on the state.

The custom header can be set through the `header` slot and it may contain arbitraray content, such as: title, buttons or any other HTML elements.

The content area can contain an arbitrary set of controls.

**Note:** The custom header is not clickable out of the box, but in this case the icon is interactive and allows to show/hide the content area.

### Responsive Behavior

- If the width of the panel is set to 100% (default), the panel and its children are
resized responsively,
depending on its parent container.
- If the panel has a fixed height, it will take up the space even if the panel is
collapsed.
- When the panel is expandable (the `fixed` property is set to `false`),
an arrow icon (pointing to the right) appears in front of the header.
- When the animation is activated, expand/collapse uses a smooth animation to open or
close the content area.
- When the panel expands/collapses, the arrow icon rotates 90 degrees
clockwise/counter-clockwise.

### Keyboard Handling

#### Fast Navigation
This component provides a build in fast navigation group which can be used via [F6] / [Shift] + [F6] / [Ctrl] + [Alt/Option] / [Down] or [Ctrl] + [Alt/Option] + [Up].
In order to use this functionality, you need to import the following module:

## Attributes

| Attribute | Type | Default | Description |
|-----------|------|---------|-------------|
| `accessible-name` | `string \| undefined` | undefined | Defines the accessible ARIA name of the component. |
| `accessible-role` | `"Complementary" \| "Form" \| "Region"` | "Form" | Sets the accessible ARIA role of the component. Depending on the usage, you can change the role from the default `Form` to `Region` or `Complementary`. |
| `collapsed` | `boolean` | false | Indicates whether the component is collapsed and only the header is displayed. |
| `fixed` | `boolean` | false | Determines whether the component is in a fixed state that is not expandable/collapsible by user interaction. |
| `header-level` | `"H1" \| "H2" \| "H3" \| "H4" \| "H5" \| "H6"` | "H2" | Defines the "aria-level" of component heading, set by the `headerText`. |
| `header-text` | `string \| undefined` | undefined | This property is used to set the header text of the component. The text is visible in both expanded and collapsed states. |
| `no-animation` | `boolean` | false | Indicates whether the transition between the expanded and the collapsed state of the component is animated. By default the animation is enabled. |
| `sticky-header` | `boolean` | false | Indicates whether the Panel header is sticky or not. |

## Properties

| Property | Type | Description |
|----------|------|-------------|
| `accessibleName` | `string \| undefined` | Defines the accessible ARIA name of the component. |
| `accessibleRole` | `PanelAccessibleRole` | Sets the accessible ARIA role of the component. Depending on the usage, you can change the role from the default `Form` to `Region` or `Complementary`. |
| `collapsed` | `boolean` | Indicates whether the component is collapsed and only the header is displayed. |
| `fixed` | `boolean` | Determines whether the component is in a fixed state that is not expandable/collapsible by user interaction. |
| `headerLevel` | `TitleLevel` | Defines the "aria-level" of component heading, set by the `headerText`. |
| `headerText` | `string \| undefined` | This property is used to set the header text of the component. The text is visible in both expanded and collapsed states. |
| `noAnimation` | `boolean` | Indicates whether the transition between the expanded and the collapsed state of the component is animated. By default the animation is enabled. |
| `stickyHeader` | `boolean` | Indicates whether the Panel header is sticky or not. |

## Slots

### Default Slot (unnamed)

> **Usage:** Place content directly inside the component without a `slot` attribute.

Defines the content of the component. The content is visible only when the component is expanded.

### `header`

Defines the component header area.

**Note:** When a header is provided, the `headerText` property is ignored.

## Events

| Event | Detail Type | Description |
|-------|-------------|-------------|
| `toggle` | `CustomEvent` | Fired when the component is expanded/collapsed by user interaction. |

## CSS Parts

- `content`: Used to style the wrapper of the content.
- `header`: Used to style the header.
- `header-wrapper`: Used to style the outermost header wrapper, useful for adjusting sticky header position.
