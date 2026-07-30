---
title: furo-ui5-file-uploader
tags: [file, upload, uploader, attachment, input]
category: Form
use-when: Use to let users pick one or more files; handle the `change` event yourself.
---

# furo-ui5-file-uploader

> File selection control (no data binding).

**Class:** `FuroUi5FileUploader`
**Import:** `import "@furo/ui5/file-uploader"`
**Extends:** `FileUploader`
**Category:** Form

**Related:** [`furo-ui5-text-input`](furo-ui5-text-input.md)

## Overview

The 'furo-ui5-file-uploader' is a thin wrapper around the
[SAP ui5 FileUploader element](https://ui5.github.io/webcomponents/components/FileUploader/).

It exposes the full UI5 FileUploader API unchanged. There is intentionally **no data binding** —
read the selected files from the inherited `files` / `value` API and the `change` event.

### Overview

The `furo-ui5-file-uploader` opens a file explorer dialog and enables users to upload files.
The component consists of input field, but you can provide an HTML element by your choice
to trigger the file upload, by using the default slot.
Furthermore, you can set the property "hideInput" to "true" to hide the input field.

To get all selected files, you can simply use the read-only "files" property.
To restrict the types of files the user can select, you can use the "accept" property.

And, similar to all input based components, the FileUploader supports "valueState", "placeholder", "name", and "disabled" properties.

For the `furo-ui5-file-uploader`

## Attributes

| Attribute | Type | Default | Description |
|-----------|------|---------|-------------|
| `accept` | `string \| undefined` | undefined | Comma-separated list of file types that the component should accept. |
| `accessible-description` | `string \| undefined` | undefined | Defines the accessible description of the component. |
| `accessible-description-ref` | `string \| undefined` | undefined | Receives id(or many ids) of the elements that describe the input. |
| `accessible-name` | `string \| undefined` | undefined | Defines the accessible ARIA name of the component. |
| `accessible-name-ref` | `string \| undefined` | undefined | Receives id(or many ids) of the elements that label the input. |
| `disabled` | `boolean` | false | Defines whether the component is in disabled state. |
| `files` | `any` | null | FileList of all selected files. |
| `hide-input` | `boolean` | false | If set to "true", the input field of component will not be rendered. Only the default slot that is passed will be rendered. |
| `max-file-size` | `number \| undefined` | undefined | Defines the maximum file size in megabytes which prevents the upload if at least one file exceeds it. |
| `multiple` | `boolean` | false | Allows multiple files to be chosen. |
| `name` | `string \| undefined` | undefined | Determines the name by which the component will be identified upon submission in an HTML form. |
| `placeholder` | `string \| undefined` | undefined | Defines a short hint intended to aid the user with data entry when the component has no value. |
| `required` | `boolean` | false | Defines whether the component is required. |
| `value` | `string` | "" | Defines the name/names of the file/files to upload. |
| `value-state` | `"None" \| "Positive" \| "Critical" \| "Negative" \| "Information"` | "None" | Defines the value state of the component. |

## Properties

| Property | Type | Description |
|----------|------|-------------|
| `accept` | `string \| undefined` | Comma-separated list of file types that the component should accept. |
| `accessibleDescription` | `string \| undefined` | Defines the accessible description of the component. |
| `accessibleDescriptionRef` | `string \| undefined` | Receives id(or many ids) of the elements that describe the input. |
| `accessibleName` | `string \| undefined` | Defines the accessible ARIA name of the component. |
| `accessibleNameRef` | `string \| undefined` | Receives id(or many ids) of the elements that label the input. |
| `disabled` | `boolean` | Defines whether the component is in disabled state. |
| `files` | `FileList \| null` | FileList of all selected files. |
| `hideInput` | `boolean` | If set to "true", the input field of component will not be rendered. Only the default slot that is passed will be rendered. |
| `maxFileSize` | `number \| undefined` | Defines the maximum file size in megabytes which prevents the upload if at least one file exceeds it. |
| `multiple` | `boolean` | Allows multiple files to be chosen. |
| `name` | `string \| undefined` | Determines the name by which the component will be identified upon submission in an HTML form. |
| `placeholder` | `string \| undefined` | Defines a short hint intended to aid the user with data entry when the component has no value. |
| `required` | `boolean` | Defines whether the component is required. |
| `value` | `string` | Defines the name/names of the file/files to upload. |
| `valueState` | `ValueState` | Defines the value state of the component. |

## Slots

### Default Slot (unnamed)

> **Usage:** Place content directly inside the component without a `slot` attribute.

This slot allows you to add custom content to the component, such as a button or any other interactive element to trigger the file selection dialog.

**Note:** For best accessibility experience, set a `tabindex` of "-1" on your interactive element, or it will be set automatically.
This slot is intended for use cases where you want a button-only file uploader.
It is recommended to set `hideInput` property to "true" when using this slot.
Not setting `hideInput` may negatively impact the screen reader users.

### `valueStateMessage`

Defines the value state message that will be displayed as pop up under the component.

**Note:** If not specified, a default text (in the respective language) will be displayed.

**Note:** The `valueStateMessage` would be displayed,
when the component is in `Information`, `Critical` or `Negative` value state.

## Events

| Event | Detail Type | Description |
|-------|-------------|-------------|
| `change` | `CustomEvent<FileUploaderChangeEventDetail>` | Event is fired when the value of the file path has been changed. |
| `file-size-exceed` | `CustomEvent<FileUploaderFileSizeExceedEventDetail>` | Event is fired when the size of a file is above the `maxFileSize` property value. |
