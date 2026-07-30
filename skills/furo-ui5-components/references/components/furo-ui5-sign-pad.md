---
title: furo-ui5-sign-pad
tags: [signature, sign, draw, canvas, pad, input]
category: Form
use-when: Use to capture a handwritten signature or freehand drawing.
---

# furo-ui5-sign-pad

> Canvas pad for drawing or capturing a signature.

**Class:** `FuroUi5SignPad`
**Import:** `import "@furo/ui5/sign-pad"`
**Category:** Form

**Related:** [`furo-ui5-button`](furo-ui5-button.md)

## Overview

`furo-sign-pad`
 Simple pad to sign or draw something

## Attributes

| Attribute | Type | Default | Description |
|-----------|------|---------|-------------|
| `disabled` | `boolean` | - | Set to true to disable the drawing features. |

## Properties

| Property | Type | Description |
|----------|------|-------------|
| `image` | `string` | Read this to get the image data-url. |

## Events

| Event | Detail Type | Description |
|-------|-------------|-------------|
| `sign-updated` | `string` | Fired when sign gets new painting, with base encoded image. |

## Methods

### `clear(): void`

Clears the image. This also updates the bound field.

### `disable(): void`

Disables the pad

### `enable(): void`

Enables the pad

### `putImage(encodedImage: imageURL): void`

Adds the encoded image to the canvas.

Maybe you want to clear first.
