---
name: validate-structure
description: Validate Lit pages/components against project structure. Use when checking compliance with lit-component-generator patterns.
---

# Structure Validator

Validate Lit pages and components against project structural guidelines.

## Usage

```
/validate-structure src/pages/page-cube-object
```

Provide a path to a page or component folder. The validator checks compliance against all structural rules and generates a report.

## Output Format

- **Summary table** - Pass/fail for each category
- **Detailed findings** - Organized by category with specific issues
- **Severity levels:**
  - Compliant - Follows guidelines
  - Minor - Suggestions (won't break functionality)
  - Critical - Should be fixed

## Categories Checked

1. **Folder Structure** - Required folders exist
2. **Page Pattern** - Thin orchestrator, FuroPage lifecycle
3. **Component Structure** - Folder + index.ts pattern
4. **Data Layer** - Model, Service, Decorators files
5. **Import Conventions** - dist paths, aliases
6. **CSS Standards** - :host rules, CSS variables
7. **Naming Conventions** - Tags, classes, files
8. **Tab Structure** - tab- prefix, TabController
9. **Header Structure** - Extracted header component

## References

- **[Validation Rules](references/rules.md)** - Detailed rules for each category
- **[Report Template](references/report-template.md)** - Output format

## Validation Process

1. Identify target type (page, component, data folder)
2. Check folder structure
3. Scan files for pattern compliance
4. Check imports
5. Review CSS
6. Verify naming
7. Generate report
