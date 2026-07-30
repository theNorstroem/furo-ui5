---
name: content-layouts
description: Content layout patterns (timeline, kanban, sidepanel, worklist). Use for page content blocks.
---

# Content Layouts Skill

Reusable content layout **design patterns** that can be used within pages. These are visual references and building blocks for composing page content.

> **Note**: These layouts are **design patterns with ASCII mockups**, not implementation examples. Use them as visual inspiration and guidance on component composition. For actual component usage, refer to the `furo-ui5-components` skill.

## Available Layouts

See the `references/layouts/` directory for detailed examples:

### Data Display
- [Timeline/Feed](references/layouts/timeline-feed.md) - Activity feed or changelog
- [Comparison](references/layouts/comparison.md) - Side-by-side comparison view
- [Kanban Board](references/layouts/kanban-board.md) - Columns with draggable cards

### Lists & Tables
- [List Report](references/layouts/list-report.md) - Filter bar + table with toolbar
- [Worklist](references/layouts/worklist.md) - Task list with quick actions
- [Search Results](references/layouts/search-results.md) - Search with faceted filters

### Panels & Overlays
- [Sidepanel](references/layouts/sidepanel.md) - Collapsible side panel
- [Drawer/Overlay](references/layouts/drawer-overlay.md) - Slide-in content panel
- [Full-Screen Dialog](references/layouts/fullscreen-dialog.md) - Modal for complex editing

### Page Sections
- [Object Page Section](references/layouts/object-page-section.md) - Anchor-navigated sections
- [KPI Header](references/layouts/kpi-header.md) - Key metrics display row
- [Action Bar](references/layouts/action-bar.md) - Contextual action toolbar

## Quick Reference

| Layout | Use Case | Key Components |
|--------|----------|----------------|
| Timeline | Activity history, changelog | `ui5-timeline`, `ui5-timeline-item` |
| Comparison | Product/version compare | `furo-responsive-layout`, `ui5-table` |
| Kanban | Task boards, workflows | `furo-responsive-layout`, `ui5-card` |
| List Report | Data tables with filters | `ui5-table`, filter components |
| Worklist | Task/approval lists | `furo-ui5-list`, `ui5-li` |
| Search Results | Faceted search | `ui5-side-navigation`, `furo-ui5-list` |
| Sidepanel | Contextual details | `furo-split-view` |
| Drawer | Slide-in forms/details | `furo-ui5-dialog`, `furo-ui5-responsive-popover` |
| Object Section | Grouped form sections | `furo-ui5-section`, `furo-ui5-subsection` |
