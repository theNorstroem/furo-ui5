---
title: furo-ui5-wizard-step
tags: [wizard, step, page, stage, process]
category: Container
use-when: Use as a child of furo-ui5-wizard to define one stage of the process.
---

# furo-ui5-wizard-step

> Single step of a wizard.

**Class:** `FuroUi5WizardStep`
**Import:** `import "@furo/ui5/wizard-step"`
**Import type:** `import type { FuroUi5WizardStep } from "@furo/ui5/wizard-step"`
**Extends:** `WizardStep`
**Category:** Container

**Related:** [`furo-ui5-wizard`](furo-ui5-wizard.md), [`furo-ui5-form-layout`](furo-ui5-form-layout.md), [`furo-ui5-section`](furo-ui5-section.md)

## Overview

One stage of a `furo-ui5-wizard`. Its `title-text` and `icon` feed the wizard's progress navigation.

```html
<furo-ui5-wizard style="height:280px">
  <furo-ui5-wizard-step title-text="Product" icon="product" selected>
    <div style="padding:1rem">Step content.</div>
  </furo-ui5-wizard-step>
  <furo-ui5-wizard-step title-text="Review" icon="accept" disabled>
    <div style="padding:1rem">Review content.</div>
  </furo-ui5-wizard-step>
</furo-ui5-wizard>
```

This is a pass-through wrapper around `furo-ui5-wizard-step`: the UI5 API (properties, events,
slots) is inherited unchanged and no data binding is added.

### Overview

A component that represents a logical step as part of the `furo-ui5-wizard`.
It is meant to aggregate arbitrary HTML elements that form the content of a single step.

### Structure

- Each wizard step has arbitrary content.
- Each wizard step might have texts - defined by the `titleText` and `subtitleText` properties.
- Each wizard step might have an icon - defined by the `icon` property.
- Each wizard step might display a number in place of the `icon`, when it's missing.

### Usage
The `furo-ui5-wizard-step` component should be used only as slot of the `furo-ui5-wizard` component
and should not be used standalone.

## Attributes

| Attribute | Type | Default | Description |
|-----------|------|---------|-------------|
| `branching` | `boolean` | false | When `branching` is enabled a dashed line would be displayed after the step, meant to indicate that the next step is not yet known and depends on user choice in the current step. |
| `disabled` | `boolean` | false | Defines if the step is `disabled`. When disabled the step is displayed, but the user can't select the step by clicking or navigate to it with scrolling. |
| `icon` | `string \| undefined` | undefined | Defines the `icon` of the step. |
| `selected` | `boolean` | false | Defines the step's `selected` state - the step that is currently active. |
| `subtitle-text` | `string \| undefined` | undefined | Defines the `subtitleText` of the step. |
| `title-text` | `string \| undefined` | undefined | Defines the `titleText` of the step. |

## Properties

| Property | Type | Description |
|----------|------|-------------|
| `branching` | `boolean` | When `branching` is enabled a dashed line would be displayed after the step, meant to indicate that the next step is not yet known and depends on user choice in the current step. |
| `disabled` | `boolean` | Defines if the step is `disabled`. When disabled the step is displayed, but the user can't select the step by clicking or navigate to it with scrolling. |
| `icon` | `string \| undefined` | Defines the `icon` of the step. |
| `selected` | `boolean` | Defines the step's `selected` state - the step that is currently active. |
| `subtitleText` | `string \| undefined` | Defines the `subtitleText` of the step. |
| `titleText` | `string \| undefined` | Defines the `titleText` of the step. |

## Slots

### Default Slot (unnamed)

> **Usage:** Place content directly inside the component without a `slot` attribute.

Defines the step content.
