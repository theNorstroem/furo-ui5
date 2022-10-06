---
title: furo-ui5-barcode-scanner-dialog
description: data barcode scanner dialog
weight: 50
---

# furo-ui5-barcode-scanner-dialog
**@furo/ui5** <small>v1.13.0</small>
<br>`import '@furo/ui5/src/furo-ui5-barcode-scanner-dialog.js';`<small>
<br>exports *FuroUi5BarcodeScannerDialog* js
<br>extends *src/furo-ui5-barcode-scanner-dialog.js*
<br> mixes *FieldNodeAdapter*</small>

> **Summary:** data barcode scanner dialog

## Description

The 'furo-ui5-barcode-scanner-dialog' component  provides barcode scanning functionality for all devices that
support the MediaDevices.getUserMedia() native API. Opening the dialog launches the device camera and scans for known barcode formats.
Internally, the component uses the zxing-js/library third party OSS. For a list of supported barcode formats, see the
zxing-js/library documentation. https://github.com/zxing-js/library

It supports all features from the [SAP ui5 Barcode Scanner Dialog element](https://sap.github.io/ui5-webcomponents/playground/components/BarcodeScannerDialog/).

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

{{% api "_furo-ui5-barcode-scanner-dialog-head.md" %}}

## Attributes and Properties
{{% api "_furo-ui5-barcode-scanner-dialog-properties.md" %}}




## Events
{{% api "_furo-ui5-barcode-scanner-dialog-events.md" %}}

### **scan-success**
<span  style="border-width:2px 10px 2px 2px; border-style: solid;border-color:  rgb(2, 168, 244);font-family:monospace; padding:2px 4px;">at-scan-success</span>
→ <small>`String`</small>

 Fires when the scan is completed successfuuly.
<br><br>
### **scan-error**
<span  style="border-width:2px 10px 2px 2px; border-style: solid;border-color:  rgb(2, 168, 244);font-family:monospace; padding:2px 4px;">at-scan-error</span>
→ <small>`String`</small>

 Fires when the scan fails with error.
<br><br>
### **furo-value-changed**
<span  style="border-width:2px 10px 2px 2px; border-style: solid;border-color:  rgb(2, 168, 244);font-family:monospace; padding:2px 4px;">at-furo-value-changed</span>
→ <small>`String`</small>

Fires the field value when it changes.
<br><br>

## Methods
{{% api "_furo-ui5-barcode-scanner-dialog-methods.md" %}}







{{% api "_furo-ui5-barcode-scanner-dialog-footer.md" %}}
{{% api "_furo-ui5-barcode-scanner-dialog-scripts.md" %}}
