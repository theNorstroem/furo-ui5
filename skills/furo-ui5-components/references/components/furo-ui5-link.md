---
title: furo-ui5-link
tags: [link, anchor, hyperlink, navigation, url, href]
category: Navigation
use-when: Use for text-based navigation or triggering actions.
---

# furo-ui5-link

> Clickable text link for navigation or actions.

**Class:** `FuroUi5Link`
**Import:** `import "@furo/ui5/link"`
**Extends:** `Link`
**Category:** Navigation

**Related:** [`furo-ui5-button`](furo-ui5-button.md), [`furo-ui5-breadcrumbs-item`](furo-ui5-breadcrumbs-item.md)

## Overview

### Overview
The `furo-ui5-link` is a hyperlink component that is used to navigate to other
apps and web pages, or to trigger actions.
It is a clickable text element, visualized in such a way that it stands out
from the standard text.
On hover, it changes its style to an underlined text to provide additional feedback to the user.

### Usage

You can set the `furo-ui5-link` to be enabled or disabled.

To create a visual hierarchy in large lists of links, you can set the less important links as
`Subtle` or the more important ones as `Emphasized`,
by using the `design` property.

If the `href` property is set, the link behaves as the HTML
anchor tag (``) and opens the specified URL in the given target frame (`target` property).
To specify where the linked content is opened, you can use the `target` property.

### Responsive behavior

If there is not enough space, the text of the `furo-ui5-link` becomes truncated.
If the `wrappingType` property is set to `"Normal"`, the text is displayed
on several lines instead of being truncated.

## Attributes

| Attribute | Type | Default | Description |
|-----------|------|---------|-------------|
| `accessibility-attributes` | `LinkAccessibilityAttributes` | {} | Defines the additional accessibility attributes that will be applied to the component. The following fields are supported: |
| `accessible-description` | `string \| undefined` | undefined | Defines the accessible description of the component. |
| `accessible-name` | `string \| undefined` | undefined | Defines the accessible ARIA name of the component. |
| `accessible-name-ref` | `string \| undefined` | undefined | Receives id(or many ids) of the elements that label the input |
| `accessible-role` | `"Button" \| "Link"` | "Link" | Defines the ARIA role of the component. |
| `design` | `"Default" \| "Emphasized" \| "Subtle"` | "Default" | Defines the component design. |
| `disabled` | `boolean` | false | Defines whether the component is disabled. |
| `end-icon` | `string \| undefined` | undefined | Defines the icon, displayed as graphical element within the component after the link's text. The SAP-icons font provides numerous options. |
| `href` | `string \| undefined` | undefined | Defines the component href. |
| `icon` | `string \| undefined` | undefined | Defines the icon, displayed as graphical element within the component before the link's text. The SAP-icons font provides numerous options. |
| `interactive-area-size` | `"Normal" \| "Large"` | "Normal" | Defines the target area size of the link: - **InteractiveAreaSize.Normal**: The default target area size. - **InteractiveAreaSize.Large**: The target area size is enlarged to 24px in height. |
| `target` | `string \| undefined` | undefined | Defines the component target. |
| `tooltip` | `string \| undefined` | undefined | Defines the tooltip of the component. |
| `wrapping-type` | `"None" \| "Normal"` | "Normal" | Defines how the text of a component will be displayed when there is not enough space. |

## Properties

| Property | Type | Description |
|----------|------|-------------|
| `accessibilityAttributes` | `LinkAccessibilityAttributes` | Defines the additional accessibility attributes that will be applied to the component. The following fields are supported: |
| `accessibleDescription` | `string \| undefined` | Defines the accessible description of the component. |
| `accessibleName` | `string \| undefined` | Defines the accessible ARIA name of the component. |
| `accessibleNameRef` | `string \| undefined` | Receives id(or many ids) of the elements that label the input |
| `accessibleRole` | `LinkAccessibleRole` | Defines the ARIA role of the component. |
| `design` | `LinkDesign` | Defines the component design. |
| `disabled` | `boolean` | Defines whether the component is disabled. |
| `endIcon` | `string \| undefined` | Defines the icon, displayed as graphical element within the component after the link's text. The SAP-icons font provides numerous options. |
| `href` | `string \| undefined` | Defines the component href. |
| `icon` | `string \| undefined` | Defines the icon, displayed as graphical element within the component before the link's text. The SAP-icons font provides numerous options. |
| `interactiveAreaSize` | `InteractiveAreaSize` | Defines the target area size of the link: - **InteractiveAreaSize.Normal**: The default target area size. - **InteractiveAreaSize.Large**: The target area size is enlarged to 24px in height. |
| `target` | `string \| undefined` | Defines the component target. |
| `tooltip` | `string \| undefined` | Defines the tooltip of the component. |
| `wrappingType` | `WrappingType` | Defines how the text of a component will be displayed when there is not enough space. |

## Slots

### Default Slot (unnamed)

> **Usage:** Place content directly inside the component without a `slot` attribute.

Defines the text of the component.

**Note:** Although this slot accepts HTML Elements, it is strongly recommended that you only use text in order to preserve the intended design.

## Events

| Event | Detail Type | Description |
|-------|-------------|-------------|
| `click` | `CustomEvent<LinkClickEventDetail>` | Fired when the component is triggered either with a mouse/tap or by using the Enter key. |

## CSS Parts

- `endIcon`: Used to style the provided endIcon within the link
- `icon`: Used to style the provided icon within the link
