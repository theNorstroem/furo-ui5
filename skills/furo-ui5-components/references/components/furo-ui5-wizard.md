---
title: furo-ui5-wizard
tags: [wizard, steps, guided, process, flow, stepper]
category: Container
use-when: Use to guide the user through a long task split into ordered steps.
---

# furo-ui5-wizard

> Multi-step guided process with a progress bar.

**Class:** `FuroUi5Wizard`
**Import:** `import "@furo/ui5/wizard"`
**Import type:** `import type { FuroUi5Wizard } from "@furo/ui5/wizard"`
**Extends:** `Wizard`
**Category:** Container

**Related:** [`furo-ui5-wizard-step`](furo-ui5-wizard-step.md), [`furo-ui5-tabcontainer`](furo-ui5-tabcontainer.md), [`furo-ui5-form-layout`](furo-ui5-form-layout.md)

## Overview

Guides the user through an ordered set of `furo-ui5-wizard-step` children, showing progress in a header navigation bar.

```html
<furo-ui5-wizard style="height:280px">
  <furo-ui5-wizard-step title-text="Product" selected>
    <div style="padding:1rem">Pick a product.</div>
  </furo-ui5-wizard-step>
  <furo-ui5-wizard-step title-text="Payment" disabled>
    <div style="padding:1rem">Enter payment details.</div>
  </furo-ui5-wizard-step>
</furo-ui5-wizard>
```

This is a pass-through wrapper around `furo-ui5-wizard`: the UI5 API (properties, events,
slots) is inherited unchanged and no data binding is added.

### Overview

The `furo-ui5-wizard` helps users to complete a complex task by dividing it into sections and guiding them through it.
It has two main areas - a navigation area at the top showing the step sequence and a content area below it.

### Structure
#### Navigation area
The top most area of the `furo-ui5-wizard` is occupied by the navigation area.
It shows the sequence of steps, where the recommended number of steps is between 3 and 8 steps.

-  Steps can have different visual representations - numbers or icons.
-  Steps might have labels for better readability - titleText and subTitleText.
-  Steps are defined by using the `furo-ui5-wizard-step` as slotted element within the `furo-ui5-wizard`.

**Note:** If no selected step is defined, the first step will be auto selected.

**Note:** If multiple selected steps are defined, the last step will be selected.

### Keyboard Handling
The user can navigate using the following keyboard shortcuts:

#### Wizard Progress Navigation

	- [Left] or [Down] - Focus moves backward to the WizardProgressNavAnchors.
	- [Up] or [Right] - Focus moves forward to the WizardProgressNavAnchor.
	- [Space] / [Enter] or [Return] - Selects an active step
	- [Home] or [PAGE UP] - Focus goes to the first step
	- [End] or [PAGE DOWN] - Focus goes to the last step

#### Fast Navigation
This component provides a build in fast navigation group which can be used via [F6] / [Shift] + [F6] / [Ctrl] + [Alt/Option] / [Down] or [Ctrl] + [Alt/Option] + [Up].
In order to use this functionality, you need to import the following module:

#### Content
The content occupies the main part of the page. It can hold any type of HTML elements.
It's defined by using the `furo-ui5-wizard-step` as slotted element within the `furo-ui5-wizard`.

### Scrolling
The component handles user scrolling by selecting the closest step, based on the current scroll position
and scrolls to particular place, when the user clicks on the step within the navigation area.

**Important:** In order the component's scrolling behaviour to work, it has to be limited from the outside parent element in terms of height.
The component or its parent has to be given percentage or absolute height. Otherwise, the component will be scrolled out with the entire page.

**For example:**

```html
<ui5-dialog style="height: 80%">
	<ui5-wizard></ui5-wizard>
</ui5-dialog>
```

#### Moving to next step
The `furo-ui5-wizard-step` provides the necessary API and it's up to the user of the component to use it to move to the next step.
You have to set its `selected` property (and remove the `disabled` one if set) to `true`.
The `furo-ui5-wizard` will automatically scroll to the content of the newly selected step.

The Fiori 3 guidelines recommends having a "nextStep" button in the content area.
You can place a button, or any other type of element to trigger step change, inside the `furo-ui5-wizard-step`,
and show/hide it when certain fields are filled or user defined criteria is met.

### Usage
#### When to use:
When the user has to accomplish a long or unfamiliar task.

#### When not to use:
When the task has less than 3 steps.

### Responsive Behavior
On small widths the step's titleText, subtitleText and separators in the navigation area shrink and from particular point the steps are grouped together and overlap.
Tapping on them will show a popover to select the step to navigate to. On mobile device, the grouped steps are presented within a dialog.

 (includes )

## Attributes

| Attribute | Type | Default | Description |
|-----------|------|---------|-------------|
| `content-layout` | `"MultipleSteps" \| "SingleStep"` | "MultipleSteps" | Defines how the content of the `furo-ui5-wizard` would be visualized. |

## Properties

| Property | Type | Description |
|----------|------|-------------|
| `contentLayout` | `WizardContentLayout` | Defines how the content of the `furo-ui5-wizard` would be visualized. |

## Slots

### Default Slot (unnamed)

> **Usage:** Place content directly inside the component without a `slot` attribute.

Defines the steps.

**Note:** Use the available `ui5-wizard-step` component.

## Events

| Event | Detail Type | Description |
|-------|-------------|-------------|
| `step-change` | `CustomEvent<WizardStepChangeEventDetail>` | Fired when the step is changed by user interaction - either with scrolling, or by clicking on the steps within the component header. |

## CSS Parts

- `navigator`: Used to style the progress navigator of the `ui5-wizard`.
- `step-content`: Used to style a `ui5-wizard-step` container.
