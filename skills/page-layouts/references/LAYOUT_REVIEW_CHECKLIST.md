# Page Layout Review Checklist

Use this checklist to review each layout example for correctness and relevance.

## Review Criteria

For each layout, verify:
1. **Wanted** - Is this layout pattern still needed/relevant?
2. **Components** - Are all component names correct (`furo-ui5-*`, `furo-*` or `ui5-*` prefix)?
3. **Attributes** - Are all attributes valid per furo-ui5-components docs?
4. **Required Components** - Are component tag names and ES module paths listed correctly?
5. **Examples** - Are code examples complete and framework-agnostic (plain HTML)?
6. **Best Practices** - Does it follow principles.md guidelines?
7. **Framework-agnostic** - No Lit/Angular/React-specific syntax in main examples (no `@event`, `?boolean`, `@state()`, `(event)`, `*ngIf`, etc.)?

---

## Generic Layouts

### ✅ blank-page.md
- [x] Wanted: **Yes** - Essential starter template
- [x] Components correct
- [x] Attributes correct - **Fixed 2026-03-02:**
  - ~~`slot="subTitle"`~~ → `secondary-text` attribute
  - ~~`furo-ui5-breadcrumbs-item text="..."`~~ → text in default slot
- [x] Required Components listed correctly
- [x] Examples complete and framework-agnostic
- [x] Framework-agnostic (no Lit/Angular/React syntax)
- Notes: Converted to framework-agnostic HTML on 2026-03-05

### ✅ master-detail.md
- [x] Wanted: **Yes** - Core navigation pattern
- [x] Components correct
- [x] Attributes correct
- [x] Required Components listed correctly
- [x] Examples complete and framework-agnostic
- [x] Framework-agnostic
- Notes: Converted to framework-agnostic HTML on 2026-03-05

### ✅ master-detail-detail.md
- [x] Wanted: **Yes** - Important for 3-level navigation
- [x] Components correct
- [x] Attributes correct
- [x] Required Components listed correctly
- [x] Examples complete and framework-agnostic
- [x] Framework-agnostic
- Notes: Converted to framework-agnostic HTML on 2026-03-05

### ✅ side-navigation-page.md
- [x] Wanted: **Yes** - Common app structure
- [x] Components correct
- [x] Attributes correct
- [x] Required Components listed correctly
- [x] Examples complete and framework-agnostic
- [x] Framework-agnostic
- Notes: Converted to framework-agnostic HTML on 2026-03-05

### ✅ dashboard-grid.md
- [x] Wanted: **Yes** - Common dashboard pattern
- [x] Components correct
- [x] Attributes correct
- [x] Required Components listed correctly
- [x] Examples complete and framework-agnostic
- [x] Framework-agnostic
- Notes: Converted to framework-agnostic HTML on 2026-03-05

### ✅ split-view-resizable.md
- [x] Wanted: **Yes** - Useful for custom layouts
- [x] Components correct
- [x] Attributes correct
- [x] Required Components listed correctly
- [x] Examples complete and framework-agnostic
- [x] Framework-agnostic
- Notes: Converted to framework-agnostic HTML on 2026-03-05

### ✅ tabbed-content.md
- [x] Wanted: **Yes** - Common UI pattern
- [x] Components correct
- [x] Attributes correct
- [x] Required Components listed correctly
- [x] Examples complete and framework-agnostic
- [x] Framework-agnostic
- Notes: Converted to framework-agnostic HTML on 2026-03-05

### ✅ wizard-flow.md
- [x] Wanted: **Yes** - Important for multi-step forms
- [x] Components correct
- [x] Attributes correct
- [x] Required Components listed correctly
- [x] Examples complete and framework-agnostic
- [x] Framework-agnostic
- Notes: Converted to framework-agnostic HTML on 2026-03-05

---

## SAP Fiori Floorplans

**REMOVED** - The following incomplete files were removed on 2026-03-02:
- sap-list-report.md (preview only, no implementation)
- sap-object-page.md (preview only, no implementation)
- sap-worklist.md (preview only, no implementation)
- sap-overview-page.md (preview only, no implementation)
- sap-analytical-list-page.md (preview only, no implementation)
- sap-initial-page.md (preview only, no implementation)
- sap-wizard.md (duplicate of wizard-flow.md)
- sap-flexible-column-layout.md (duplicate of master-detail files)

> For SAP Fiori patterns, refer to [SAP Fiori Design Guidelines](https://experience.sap.com/fiori-design-web/) and compose using available primitives.

---

## Issues Summary

### Critical Issues (Incorrect Attributes)

**ALL RESOLVED** on 2026-03-02:

| File | Issue | Status |
|------|-------|--------|
| blank-page.md | `slot="subTitle"` not valid | ✅ Fixed - uses `secondary-text` |
| blank-page.md | `furo-ui5-breadcrumbs-item text="..."` | ✅ Fixed - text in default slot |
| wizard-flow.md | `furo-ui5-text-input/textarea/select label="..."` | ✅ Fixed - uses `furo-ui5-label` component |

### Incomplete Files (TODO markers)

**RESOLVED** - All incomplete SAP floorplan files were removed on 2026-03-02.

### Duplicate Files (Consider Removing)

**RESOLVED** - Duplicate files removed on 2026-03-02:
- sap-wizard.md (duplicated wizard-flow.md)
- sap-flexible-column-layout.md (duplicated master-detail files)

---

## Recommendations

### Priority 1: Fix Attribute Issues
1. Fix `blank-page.md` - subTitle slot and breadcrumbs-item text
2. Fix `wizard-flow.md` - input/textarea label attributes

### Priority 2: Clean Up Duplicates
1. Remove `sap-wizard.md` (keep wizard-flow.md)
2. Remove `sap-flexible-column-layout.md` (keep master-detail files)

### Priority 3: Complete or Remove Incomplete Files
Either:
- Add full implementations to SAP floorplan files
- Or remove them and reference SAP Fiori Design Guidelines externally

---

## Review Log

| Date | Reviewer | Files Reviewed | Issues Found |
|------|----------|----------------|--------------|
| 2026-03-02 | Claude | All 16 layouts | 3 attribute issues, 8 incomplete files, 2 duplicates |
| 2026-03-05 | Claude | All 8 layouts | Converted to framework-agnostic HTML, added framework references |

---

## Actions After Review

- [x] ~~Fix blank-page.md attribute issues~~ - Fixed 2026-03-02
- [x] ~~Fix wizard-flow.md input label issues~~ - Fixed 2026-03-02
- [x] ~~Decide on SAP floorplan files (complete or remove)~~ - Removed 2026-03-02
- [x] ~~Remove duplicate files (sap-wizard.md, sap-flexible-column-layout.md)~~ - Removed 2026-03-02
- [x] ~~Update SKILL.md if layouts removed~~ - Updated 2026-03-02

- [x] ~~Convert examples to framework-agnostic HTML~~ - Done 2026-03-05
- [x] ~~Add framework reference files (Lit, Angular, React)~~ - Done 2026-03-05
- [x] ~~Update SKILL.md with framework references section~~ - Done 2026-03-05
- [x] ~~Update principles.md to remove Lit-specific syntax~~ - Done 2026-03-05

**All review actions completed!**
