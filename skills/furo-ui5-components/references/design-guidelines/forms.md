# Form Layout Best Practices

## Form Structure

```html
<furo-ui5-section heading="Form Section" scroll>
  <furo-ui5-subsection>
    <furo-ui5-form-layout form-title="Group Title" heading-level="H4">
      <furo-ui5-form-group label="Field Group">
        <furo-ui5-form-row>
          <furo-ui5-text-input label="Field 1" required></furo-ui5-text-input>
        </furo-ui5-form-row>
        <furo-ui5-form-row>
          <furo-ui5-text-input label="Field 2"></furo-ui5-text-input>
        </furo-ui5-form-row>
      </furo-ui5-form-group>
    </furo-ui5-form-layout>
  </furo-ui5-subsection>
</furo-ui5-section>
```

## Field Grouping Guidelines

| Group Related Fields | Examples |
|---------------------|----------|
| Contact information | Name, Email, Phone |
| Address | Street, City, Postal Code, Country |
| Date range | Start Date, End Date |
| Amount | Value, Currency |
| Dimensions | Width, Height, Depth |

```html
<!-- Group related fields together -->
<furo-ui5-form-group label="Contact Information">
  <furo-ui5-form-row>
    <furo-ui5-text-input label="First Name" required></furo-ui5-text-input>
  </furo-ui5-form-row>
  <furo-ui5-form-row>
    <furo-ui5-text-input label="Last Name" required></furo-ui5-text-input>
  </furo-ui5-form-row>
  <furo-ui5-form-row>
    <furo-ui5-text-input label="Email" type="Email" required></furo-ui5-text-input>
  </furo-ui5-form-row>
  <furo-ui5-form-row>
    <furo-ui5-text-input label="Phone" type="Tel"></furo-ui5-text-input>
  </furo-ui5-form-row>
</furo-ui5-form-group>

<furo-ui5-form-group label="Address">
  <furo-ui5-form-row>
    <furo-ui5-text-input label="Street"></furo-ui5-text-input>
  </furo-ui5-form-row>
  <furo-ui5-form-row>
    <furo-ui5-text-input label="City"></furo-ui5-text-input>
  </furo-ui5-form-row>
  <!-- ... -->
</furo-ui5-form-group>
```

## Label Guidelines

| Guideline | Example |
|-----------|---------|
| Use sentence case | "First name" not "First Name" |
| Be concise | "Email" not "Email address of the user" |
| Indicate required fields | Use `required` attribute |
| Provide help text when needed | Use `value-state-message` |

```html
<!-- Clear, concise labels -->
<furo-ui5-text-input label="Email" required placeholder="user@example.com"></furo-ui5-text-input>

<!-- With help text -->
<furo-ui5-text-input
  label="Password"
  type="Password"
  required
  value-state="Information"
  value-state-message="Must be at least 8 characters">
</furo-ui5-text-input>
```

## Form Layout Patterns

```html
<!-- Single column form (default, recommended) -->
<furo-ui5-form-layout>
  <furo-ui5-form-row><furo-ui5-text-input label="Field 1"></furo-ui5-text-input></furo-ui5-form-row>
  <furo-ui5-form-row><furo-ui5-text-input label="Field 2"></furo-ui5-text-input></furo-ui5-form-row>
</furo-ui5-form-layout>

<!-- Multi-column form (use sparingly) -->
<furo-ui5-form-layout columns-l="2" columns-xl="3">
  <furo-ui5-form-row><furo-ui5-text-input label="Field 1"></furo-ui5-text-input></furo-ui5-form-row>
  <furo-ui5-form-row><furo-ui5-text-input label="Field 2"></furo-ui5-text-input></furo-ui5-form-row>
  <furo-ui5-form-row><furo-ui5-text-input label="Field 3"></furo-ui5-text-input></furo-ui5-form-row>
</furo-ui5-form-layout>

<!-- Read-only display -->
<furo-ui5-form-layout>
  <furo-ui5-form-row>
    <furo-ui5-label show-colon>Status</furo-ui5-label><furo-ui5-text>Active</furo-ui5-text>
  </furo-ui5-form-row>
  <furo-ui5-form-row>
    <furo-ui5-label show-colon>Created</furo-ui5-label><furo-ui5-text>2024-01-15</furo-ui5-text>
  </furo-ui5-form-row>
</furo-ui5-form-layout>
```

## Field Width Guidelines

| Field Type | Recommended Width |
|------------|-------------------|
| Short text (name, code) | 200-300px |
| Medium text (email, title) | 300-400px |
| Long text (description) | Full width |
| Numbers | 100-150px |
| Dates | 150-200px |
| Dropdowns | Match expected content |
