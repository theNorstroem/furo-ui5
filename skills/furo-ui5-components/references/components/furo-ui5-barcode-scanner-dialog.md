---
title: furo-ui5-barcode-scanner-dialog
tags: [barcode, scanner, camera, qr-code, dialog, scan]
category: Form
use-when: Use for mobile barcode/QR code scanning functionality.
---

# furo-ui5-barcode-scanner-dialog

> Dialog with camera integration for barcode scanning.

**Class:** `FuroUi5BarcodeScannerDialog`
**Import:** `import "@furo/ui5/barcode-scanner-dialog"`
**Extends:** `BarcodeScannerDialog`
**Category:** Form

**Related:** [`furo-ui5-dialog`](furo-ui5-dialog.md)

## Overview

The 'furo-ui5-barcode-scanner-dialog' component  provides barcode scanning functionality for all devices that
support the MediaDevices.getUserMedia() native API. Opening the dialog launches the device camera and scans for known barcode formats.
Internally, the component uses the zxing-js/library third party OSS. For a list of supported barcode formats, see the
zxing-js/library documentation. https://github.com/zxing-js/library

It supports all features from the [SAP ui5 Barcode Scanner Dialog element](https://ui5.github.io/webcomponents/components/fiori/BarcodeScannerDialog/).

You can bind any `string` type, like `furo.fat.String` type or the `google.protobuf.StringValue` type.

```html
<furo-ui5-button at-click=--openClicked>Open Scanner</furo-ui5-button>
 <furo-ui5-barcode-scanner-dialog fn-show="--openClicked"
                                  fn-bind-data="--dao(*.field)"></furo-ui5-barcode-scanner-dialog>
```

## Methods
**bindData(fieldNode)**
Bind an entity field. You can use the entity even when no data was received.

When you use at-object-ready from a furo-data-object which emits a EntityNode, just bind the field with --entity(*.fields.fieldname)

### Overview

The `BarcodeScannerDialog` component provides barcode scanning functionality for all devices that support the `MediaDevices.getUserMedia()` native API.
Opening the dialog launches the device camera and scans for known barcode formats.

A `scanSuccess` event fires whenever a barcode is identified
and a `scanError` event fires when the scan failed (for example, due to missing permisions).

Internally, the component  uses the zxing-js/library third party OSS.

For a list of supported barcode formats, see the [zxing-js/library](https://github.com/zxing-js/library) documentation.

## Attributes

| Attribute | Type | Default | Description |
|-----------|------|---------|-------------|
| `open` | `boolean` | false | Indicates whether the dialog is open. |

## Properties

| Property | Type | Description |
|----------|------|-------------|
| `code` | `string` |  |
| `model` | `STRING \| FuroFatString \| StringValue` | Use this to bind a model field by attribute. |
| `open` | `boolean` | Indicates whether the dialog is open. |

## Slots

### `footer`

Defines the footer HTML Element.

**Note:** When you provide custom content for the `footer` slot, the default close button is not rendered.
This means you need to include your own mechanism within the custom `footer` to close the dialog,
such as a button with an event listener that closes the dialog.

**Note:** If the `footer` slot is not provided, a default footer with a close button is rendered automatically,
allowing users to close the dialog without any additional implementation.

### `header`

Defines the header HTML Element.

**Note:** If `header` slot is provided, the labelling of the dialog is a responsibility of the application developer.
`accessibleName` should be used.

## Events

| Event | Detail Type | Description |
|-------|-------------|-------------|
| `close` | `CustomEvent` | Fired when the user closes the component. |
| `furo-value-changed` | `String` | Fires the field value when it changes. |
| `scan-error` | `CustomEvent<BarcodeScannerDialogScanErrorEventDetail>` | Fires when the scan fails with error. |
| `scan-success` | `CustomEvent<BarcodeScannerDialogScanSuccessEventDetail>` | Fires when the scan is completed successfuuly. |

## Methods

### `bindData(fieldNode: STRING | FuroFatString | StringValue | undefined): void`

Connects your data model to this component.

### `close(): void`

Closes the popup.

### `show(): void`

Shows the popover at the opener position defined with attribute opener.
