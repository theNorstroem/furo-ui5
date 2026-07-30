---
title: furo-ui5-shellbar-branding
tags: [shellbar, branding, logo, product, title]
category: PageStructure
use-when: Use inside furo-ui5-shellbar to render the app logo and name as a clickable brand area.
---

# furo-ui5-shellbar-branding

> Logo and product name area of the shellbar.

**Class:** `FuroUi5ShellBarBranding`
**Import:** `import "@furo/ui5/shellbar-branding"`
**Extends:** `ShellBarBranding`
**Category:** PageStructure

**Related:** [`furo-ui5-shellbar`](furo-ui5-shellbar.md), [`furo-ui5-shellbar-item`](furo-ui5-shellbar-item.md), [`furo-ui5-shellbar-spacer`](furo-ui5-shellbar-spacer.md)

## Overview

The branding area of a `furo-ui5-shellbar`: a logo slot plus the product name, rendered as one link.

```html
<furo-ui5-shellbar>
  <furo-ui5-shellbar-branding slot="branding" href="#">
    <img slot="logo" src="https://sdk.openui5.org/resources/sap/ui/documentation/sdk/images/logo_ui5.png" alt="UI5" />
    My Product
  </furo-ui5-shellbar-branding>
</furo-ui5-shellbar>
```

This is a pass-through wrapper around `furo-ui5-shellbar-branding`: the UI5 API (properties, events,
slots) is inherited unchanged and no data binding is added.

### Overview
The `furo-ui5-shellbar-branding` component is intended to be placed inside the branding slot of the
`furo-ui5-shellbar` component. Its content has higher priority than the `primaryTitle` property
and the `logo` slot of `furo-ui5-shellbar`.

## Attributes

| Attribute | Type | Default | Description |
|-----------|------|---------|-------------|
| `accessible-name` | `string \| undefined` | undefined | Defines the text alternative of the component. If not provided a default text alternative will be set, if present. |
| `href` | `string \| undefined` | undefined | Defines the component href. |
| `target` | `string \| undefined` | undefined | Defines the component target. |

## Properties

| Property | Type | Description |
|----------|------|-------------|
| `accessibleName` | `string \| undefined` | Defines the text alternative of the component. If not provided a default text alternative will be set, if present. |
| `href` | `string \| undefined` | Defines the component href. |
| `target` | `string \| undefined` | Defines the component target. |

## Slots

### Default Slot (unnamed)

> **Usage:** Place content directly inside the component without a `slot` attribute.

Defines the title for the ui5-shellbar-branding component.

**Note:** Although this slot accepts HTML Elements, it is strongly recommended that you only use text in order to preserve the intended design.

### `logo`

Defines the logo of the `ui5-shellbar`.
For example, you can use `ui5-avatar` or `img` elements as logo.

## Events

| Event | Detail Type | Description |
|-------|-------------|-------------|
| `click` | `CustomEvent` | Fired, when the logo is activated. |
