---
title: Action Bar Layout
tags: [action-bar, toolbar, contextual-actions, selection-actions, buttons]
use-when: user asks for action bar, contextual toolbar, selection actions, or floating action bar
---

# Action Bar Layout

Contextual action toolbar that appears based on selection or context.

## Use Cases
- Table row selection actions
- Document editing toolbar
- Multi-select operations
- Contextual menus
- Floating action bars

## Preview

### Selection Action Bar
```
┌─────────────────────────────────────────────────────────────────────────┐
│ ┌─────────────────────────────────────────────────────────────────────┐ │
│ │ ✓ 5 items selected                [Delete] [Export] [Move To ▼] [✕] │ │
│ └─────────────────────────────────────────────────────────────────────┘ │
├─────────────────────────────────────────────────────────────────────────┤
│ ✓ │ Item 1                                                              │
│ ✓ │ Item 2                                                              │
│ □ │ Item 3                                                              │
│ ✓ │ Item 4                                                              │
│ ✓ │ Item 5                                                              │
│ ✓ │ Item 6                                                              │
└─────────────────────────────────────────────────────────────────────────┘
```

### Page Header Action Bar
```
┌─────────────────────────────────────────────────────────────────────────┐
│ Orders                                                                  │
│ Manage and track all customer orders                                    │
├─────────────────────────────────────────────────────────────────────────┤
│ [+ New Order]  [Import]  [Export ▼]           [Filter ▼]  [⚙ Settings] │
└─────────────────────────────────────────────────────────────────────────┘
```

### Floating Action Bar (Fixed Bottom)
```
┌─────────────────────────────────────────────────────────────────────────┐
│                                                                         │
│                         Page Content                                    │
│                                                                         │
│                                                                         │
├─────────────────────────────────────────────────────────────────────────┤
│                         [Cancel]  [Save Draft]  [Publish]               │
└─────────────────────────────────────────────────────────────────────────┘
```

### Toolbar with Overflow Menu
```
┌─────────────────────────────────────────────────────────────────────────┐
│ [📄 New] [📂 Open] [💾 Save] [↩️ Undo] [↪️ Redo] │ [Cut] [Copy] [Paste] [⋮]│
└─────────────────────────────────────────────────────────────────────────┘

Overflow menu (⋮):
┌─────────────────┐
│ 🔍 Find         │
│ ↔️ Replace      │
│ ─────────────── │
│ ⚙️ Preferences  │
│ ❓ Help         │
└─────────────────┘
```

### Contextual Mode Switch
```
Default mode:
┌─────────────────────────────────────────────────────────────────────────┐
│ Documents                              [+ Upload] [📁 New Folder] [⋮]   │
└─────────────────────────────────────────────────────────────────────────┘

Selection mode (when items selected):
┌─────────────────────────────────────────────────────────────────────────┐
│ 3 selected    [Download] [Move] [Share] [Delete]              [Cancel] │
└─────────────────────────────────────────────────────────────────────────┘
```

### Segmented Action Bar
```
┌─────────────────────────────────────────────────────────────────────────┐
│ ┌─────────────────────────┐ │ ┌─────────────────────────────────────┐  │
│ │ View: [List][Grid][Map] │ │ │ Sort: [Name ▼]  Filter: [All ▼]    │  │
│ └─────────────────────────┘ │ └─────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────────────────┘
```

### Sticky Action Bar (Scrolls with Content)
```
┌─────────────────────────────────────────────────────────────────────────┐
│ ════════════════════════════════════════════════════════════════════════│
│ │ [Bold] [Italic] [Underline] │ [H1] [H2] [H3] │ [•] [1.] │ [Link] [📷]│← sticky
│ ════════════════════════════════════════════════════════════════════════│
│                                                                         │
│ Document content area...                                                │
│                                                                         │
│ Lorem ipsum dolor sit amet, consectetur adipiscing elit.                │
│ Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.      │
│                                                                         │
└─────────────────────────────────────────────────────────────────────────┘
```

### Mobile-Friendly Action Bar
```
Desktop:
┌─────────────────────────────────────────────────────────────────────────┐
│ [+ Add] [Edit] [Delete] [Export] [Print] [Settings]           [Filter] │
└─────────────────────────────────────────────────────────────────────────┘

Mobile (collapsed):
┌─────────────────────────────────────────┐
│ [+ Add] [Edit]            [⋮ More]      │
└─────────────────────────────────────────┘
```

## Implementation

<!-- TODO: Add full implementation -->

## Related Components
- `ui5-bar` - import `@ui5/webcomponents/dist/Bar.js`
- `ui5-toolbar` - import `@ui5/webcomponents/dist/Toolbar.js`
- `furo-ui5-button` - [Component docs](../furo-ui5-components/components/furo-ui5-button.md)
- `ui5-menu` - import `@ui5/webcomponents/dist/Menu.js`
- `ui5-split-button` - import `@ui5/webcomponents/dist/SplitButton.js`
