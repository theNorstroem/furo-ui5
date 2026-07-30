# Report Template

## Format

```markdown
# Structure Validation Report

**Target:** `src/pages/page-{name}/`
**Date:** YYYY-MM-DD

## Summary

| Category | Status | Issues |
|----------|--------|--------|
| Folder Structure | Pass/Fail | 0 |
| Page Pattern | Pass/Fail | 0 |
| Component Structure | Pass/Fail | 0 |
| Data Layer | Pass/Fail | 0 |
| Import Conventions | Pass/Fail | 0 |
| CSS Standards | Pass/Fail | 0 |
| Naming Conventions | Pass/Fail | 0 |
| Tab Structure | Pass/Fail | 0 |
| Header Structure | Pass/Fail | 0 |

**Overall:** X/9 categories fully compliant

## Detailed Findings

### Category: [Name] [Status]

**Critical Issues:**
1. `File.ts:line` - Description
   ```typescript
   // Found:
   code
   // Should be:
   code
   ```

**Minor Issues:**
1. Description

## Recommendations

1. [High Priority] Description
2. [Low Priority] Description
```

## Severity Levels

- **Compliant** - Follows guidelines correctly
- **Minor** - Suggestions for improvement (won't break functionality)
- **Critical** - Violations that should be fixed
