---
title: Wizard Flow Layout
tags: [wizard, steps, stepper, multi-step, flow, process, guided]
use-when: user asks for wizard, stepper, multi-step form, guided process, or step-by-step flow
---

# Wizard Flow Layout

A step-by-step wizard for guiding users through multi-step processes.

## Use Cases
- Multi-step forms (registration, checkout)
- Setup wizards
- Guided workflows
- Onboarding flows

## Required Components
| Tag | ES Module |
|-----|-----------|
| `furo-vertical-flex` | `@furo/layout/furo-vertical-flex` |
| `ui5-wizard` | `@ui5/webcomponents-fiori/dist/Wizard.js` |
| `ui5-wizard-step` | `@ui5/webcomponents-fiori/dist/WizardStep.js` |
| `ui5-bar` | `@ui5/webcomponents/dist/Bar.js` |
| `furo-ui5-button` | `@furo/ui5/button` |
| `furo-ui5-title` | `@furo/ui5/title` |
| `furo-ui5-form-layout` | `@furo/ui5/form-layout` |
| `furo-ui5-form-group` | `@furo/ui5/form-group` |
| `furo-ui5-form-row` | `@furo/ui5/form-row` |
| `furo-ui5-label` | `@furo/ui5/label` |
| `furo-ui5-text-input` | `@furo/ui5/text-input` |
| `furo-ui5-textarea` | `@furo/ui5/textarea` |
| `furo-ui5-select` | `@furo/ui5/select` |
| `furo-ui5-option` | `@furo/ui5/option` |
| `furo-ui5-message-strip` | `@furo/ui5/message-strip` |

> How you load these modules depends on your framework. See [Framework References](#framework-specific-syntax) below.

## Preview
```
+-----------------------------------------------------------------------+
| Create New Order                                                       |
+-----------------------------------------------------------------------+
|                                                                        |
|    *-----------o-----------o-----------o                               |
|    1           2           3           4                               |
|  Customer    Products    Shipping    Review                            |
|                                                                        |
+-----------------------------------------------------------------------+
|                                                                        |
|  Step 1: Customer Information                                          |
|                                                                        |
|  +---------------------------------------------------------------+    |
|  | Customer Name: [________________________]                      |    |
|  | Email:         [________________________]                      |    |
|  | Phone:         [________________________]                      |    |
|  +---------------------------------------------------------------+    |
|                                                                        |
+-----------------------------------------------------------------------+
|                                                     [Cancel]   [Next] |
+-----------------------------------------------------------------------+
```

## Styles

```css
:host {
  display: block;
  height: 100%;
}

*:not(:defined) {
  display: none;
}
```

## Implementation

Handle the `step-change` event on `ui5-wizard` to track the current step. Use the wizard's `next()`, `previous()`, and `goToStep()` methods for programmatic navigation.

```html
<furo-vertical-flex style="height: 100%">
  <!-- Page Header -->
  <ui5-bar design="Header">
    <furo-ui5-title slot="startContent" level="H4">Create New Order</furo-ui5-title>
  </ui5-bar>

  <!-- Wizard -->
  <ui5-wizard id="wizard" flex> <!-- Handle "step-change" event to track current step -->
    <!-- Step 1: Customer -->
    <ui5-wizard-step
      title-text="Customer"
      subtitle-text="Enter customer information"
      icon="customer"
      selected>
      <div class="step-content">
        <furo-ui5-form-layout form-title="Customer Information">
          <furo-ui5-form-group label="Contact">
            <furo-ui5-form-row>
              <furo-ui5-label slot="label" for="customerName" show-colon required>
                Customer Name
              </furo-ui5-label>
              <furo-ui5-text-input
                id="customerName"
                required>
              </furo-ui5-text-input> <!-- Handle "change" event to capture value and validate -->
            </furo-ui5-form-row>
            <furo-ui5-form-row>
              <furo-ui5-label slot="label" for="email" show-colon required>
                Email
              </furo-ui5-label>
              <furo-ui5-text-input
                id="email"
                type="Email"
                required>
              </furo-ui5-text-input> <!-- Handle "change" event to capture value and validate -->
            </furo-ui5-form-row>
            <furo-ui5-form-row>
              <furo-ui5-label slot="label" for="phone" show-colon>
                Phone
              </furo-ui5-label>
              <furo-ui5-text-input
                id="phone"
                type="Tel">
              </furo-ui5-text-input> <!-- Handle "change" event to capture value -->
            </furo-ui5-form-row>
          </furo-ui5-form-group>
        </furo-ui5-form-layout>
      </div>
    </ui5-wizard-step>

    <!-- Step 2: Products -->
    <ui5-wizard-step
      title-text="Products"
      subtitle-text="Select products"
      icon="product">
      <div class="step-content">
        <furo-ui5-form-layout form-title="Select Products">
          <furo-ui5-message-strip design="Information">
            Select at least one product to continue.
          </furo-ui5-message-strip>
          <!-- Product selection UI -->
          <p>Product selection component here...</p>
        </furo-ui5-form-layout>
      </div>
    </ui5-wizard-step>

    <!-- Step 3: Shipping -->
    <ui5-wizard-step
      title-text="Shipping"
      subtitle-text="Delivery options"
      icon="shipping-status">
      <div class="step-content">
        <furo-ui5-form-layout form-title="Shipping Details">
          <furo-ui5-form-group label="Address">
            <furo-ui5-form-row>
              <furo-ui5-label slot="label" for="shippingAddress" show-colon required>
                Shipping Address
              </furo-ui5-label>
              <furo-ui5-textarea
                id="shippingAddress"
                required
                rows="3">
              </furo-ui5-textarea> <!-- Handle "change" event to capture value and validate -->
            </furo-ui5-form-row>
          </furo-ui5-form-group>
          <furo-ui5-form-group label="Method">
            <furo-ui5-form-row>
              <furo-ui5-label slot="label" for="shippingMethod" show-colon>
                Shipping Method
              </furo-ui5-label>
              <furo-ui5-select id="shippingMethod"> <!-- Handle "change" event to capture selected value -->
                <furo-ui5-option value="standard" selected>Standard (5-7 days)</furo-ui5-option>
                <furo-ui5-option value="express">Express (2-3 days)</furo-ui5-option>
                <furo-ui5-option value="overnight">Overnight</furo-ui5-option>
              </furo-ui5-select>
            </furo-ui5-form-row>
          </furo-ui5-form-group>
        </furo-ui5-form-layout>
      </div>
    </ui5-wizard-step>

    <!-- Step 4: Review -->
    <ui5-wizard-step
      title-text="Review"
      subtitle-text="Confirm order"
      icon="accept">
      <div class="step-content">
        <furo-ui5-title level="H5">Order Summary</furo-ui5-title>

        <div class="review-section">
          <h4>Customer</h4>
          <p><!-- Display collected customer name --></p>
          <p><!-- Display collected email --></p>
        </div>

        <div class="review-section">
          <h4>Shipping</h4>
          <p><!-- Display collected shipping address --></p>
          <p><!-- Display selected shipping method --></p>
        </div>
      </div>
    </ui5-wizard-step>
  </ui5-wizard>

  <!-- Footer with Navigation -->
  <ui5-bar design="Footer">
    <furo-ui5-button slot="startContent" design="Transparent">Cancel</furo-ui5-button>
    <furo-ui5-button
      slot="endContent"
      hidden> <!-- Show when not on first step -->
      Previous
    </furo-ui5-button> <!-- Handle click to call wizard.previous() -->
    <furo-ui5-button
      slot="endContent"
      design="Emphasized"> <!-- Toggle "disabled" when validation fails -->
      Next <!-- Change text to "Submit Order" on last step -->
    </furo-ui5-button> <!-- Handle click to call wizard.next() or submit on last step -->
  </ui5-bar>
</furo-vertical-flex>
```

## Wizard Step States

### Step Attributes
```html
<ui5-wizard-step
  title-text="Step Title"
  subtitle-text="Step description"
  icon="icon-name"
  selected           <!-- Currently active -->
  disabled           <!-- Cannot be selected -->
  branching>         <!-- Has sub-steps -->
</ui5-wizard-step>
```

### Programmatic Navigation

Access the `ui5-wizard` element and call its methods:

| Method | Description |
|--------|-------------|
| `next()` | Go to next step |
| `previous()` | Go to previous step |
| `goToStep(index)` | Go to specific step (0-indexed) |
| `selectedStep` | Get current step element |

## Branching Wizard

For conditional steps based on user input, dynamically include or exclude wizard steps based on state. For example, show a "Personal Info" step or a "Company Info" step depending on user selection in the first step.

```html
<ui5-wizard>
  <ui5-wizard-step title-text="Type" icon="question-mark" selected>
    <!-- User selects type -->
  </ui5-wizard-step>

  <!-- Conditionally include one of these based on selected type -->
  <ui5-wizard-step title-text="Personal Info" icon="employee">
    <!-- Personal fields -->
  </ui5-wizard-step>
  <!-- OR -->
  <ui5-wizard-step title-text="Company Info" icon="building">
    <!-- Company fields -->
  </ui5-wizard-step>

  <ui5-wizard-step title-text="Review" icon="accept">
    <!-- Review -->
  </ui5-wizard-step>
</ui5-wizard>
```

## Validation Pattern

Validate each step before allowing navigation to the next:

1. On `step-change` event, validate the current step's required fields
2. Enable/disable the "Next" button based on validation result
3. On "Next" click, run validation and only call `wizard.next()` if valid
4. Show error messages using `furo-ui5-message-strip` with `design="Negative"`

## Related Components
- `ui5-wizard` - import `@ui5/webcomponents-fiori/dist/Wizard.js`
- `ui5-wizard-step` - import `@ui5/webcomponents-fiori/dist/WizardStep.js`
- `furo-ui5-form-layout` - [Component docs](../furo-ui5-components/components/furo-ui5-form-layout.md)

## Framework-Specific Syntax
For event handling, boolean attributes, and property binding syntax in your framework:
- [Lit](../frameworks/lit.md)
- [Angular](../frameworks/angular.md)
- [React](../frameworks/react.md)
