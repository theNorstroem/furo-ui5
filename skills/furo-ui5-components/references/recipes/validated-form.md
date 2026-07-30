# Form with Validation and Submit

A complete form with client-side validation and submission handling.

> **Note:** CSS is shown in `<style>` blocks for illustration. In your framework, use the appropriate styling approach (e.g., `static styles` in Lit, scoped styles in Angular, CSS modules in React).

## HTML Structure

```html
<style>
  :host { display: block; }
  *:not(:defined) { display: none; }
  .form-container { max-width: 600px; padding: var(--MediaSizeIndentation); }
  furo-ui5-message-strip { margin-bottom: 1rem; }
</style>

<furo-ui5-busy-indicator>
  <div class="form-container">
    <!-- Success message (shown after successful submit) -->
    <furo-ui5-message-strip design="Positive" hide-close-button>
      Form submitted successfully!
    </furo-ui5-message-strip>

    <!-- Error message (shown on submit failure) -->
    <furo-ui5-message-strip design="Negative" hide-close-button>
      Failed to submit. Please try again.
    </furo-ui5-message-strip>

    <furo-ui5-form-layout form-title="Contact Form" heading-level="H3">
      <furo-ui5-form-group label="Personal Information">
        <furo-ui5-form-row>
          <!-- Handle "input" event to update field value and clear error -->
          <furo-ui5-text-input
            label="Name"
            required
            value-state="None"
            value-state-message="">
          </furo-ui5-text-input>
        </furo-ui5-form-row>
        <furo-ui5-form-row>
          <furo-ui5-text-input
            label="Email"
            type="Email"
            required
            value-state="None"
            value-state-message="">
          </furo-ui5-text-input>
        </furo-ui5-form-row>
        <furo-ui5-form-row>
          <furo-ui5-text-input
            label="Phone"
            type="Tel"
            value-state="None"
            value-state-message="">
          </furo-ui5-text-input>
        </furo-ui5-form-row>
      </furo-ui5-form-group>

      <furo-ui5-form-group label="Inquiry">
        <furo-ui5-form-row>
          <!-- Handle "change" event to update category -->
          <furo-ui5-select label="Category" required value-state="None">
            <furo-ui5-option value="">Select a category</furo-ui5-option>
            <furo-ui5-option value="general">General Inquiry</furo-ui5-option>
            <furo-ui5-option value="support">Support</furo-ui5-option>
            <furo-ui5-option value="sales">Sales</furo-ui5-option>
            <furo-ui5-option value="feedback">Feedback</furo-ui5-option>
          </furo-ui5-select>
        </furo-ui5-form-row>
        <furo-ui5-form-row>
          <!-- Handle "input" event to update message -->
          <furo-ui5-textarea
            label="Message"
            required
            rows="4"
            value-state="None"
            value-state-message="">
          </furo-ui5-textarea>
        </furo-ui5-form-row>
      </furo-ui5-form-group>
    </furo-ui5-form-layout>

    <ui5-bar design="Footer">
      <!-- Handle "click" event to reset form -->
      <furo-ui5-button slot="endContent">Reset</furo-ui5-button>
      <!-- Handle "click" event to validate and submit -->
      <furo-ui5-button slot="endContent" design="Emphasized">Submit</furo-ui5-button>
    </ui5-bar>
  </div>
</furo-ui5-busy-indicator>
```

## Pattern

**Validation rules:**
- Name: required, non-empty
- Email: required, must match email pattern
- Phone: optional, must match phone pattern if provided
- Category: required, must be selected
- Message: required, minimum 10 characters

**Validation states:**
- Set `value-state="Negative"` and `value-state-message="Error text"` on fields that fail validation
- Set `value-state="None"` to clear errors
- Clear a field's error when the user starts typing in it

**Submit flow:**
1. Validate all fields
2. If invalid: set error states on failing fields, stop
3. If valid: show busy indicator, perform API call
4. On success: show success message strip, reset form
5. On error: show error message strip

**Reset:** Clear all field values and validation states.
