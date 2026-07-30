---
title: Sidepanel Layout
tags: [sidepanel, side-panel, collapsible, contextual, details, drawer]
use-when: user asks for side panel, collapsible panel, contextual details panel, or auxiliary content area
---

# Sidepanel Layout

Collapsible side panel for contextual details or additional information.

## Use Cases
- Detail view alongside list
- Property inspector
- Help/documentation panel
- Chat/comments panel
- Preview panel

## Preview

### Standard Sidepanel
```
┌─────────────────────────────────────────────────────────────────────────┐
│ Main Content Area                          │ ◀ │ Details               │
│                                            │   ├───────────────────────┤
│ ┌─────────────────────────────────────┐    │   │ Order #12345          │
│ │ Item 1                         [>]  │    │   │                       │
│ ├─────────────────────────────────────┤    │   │ Customer: Acme Corp   │
│ │ Item 2 (selected)              [>]  │◄───│   │ Date: 2024-03-01      │
│ ├─────────────────────────────────────┤    │   │ Status: Pending       │
│ │ Item 3                         [>]  │    │   │                       │
│ ├─────────────────────────────────────┤    │   │ ─────────────────     │
│ │ Item 4                         [>]  │    │   │ Items:                │
│ └─────────────────────────────────────┘    │   │ • Product A ($100)    │
│                                            │   │ • Product B ($200)    │
│                                            │   │                       │
│                                            │   │ Total: $300           │
│                                            │   │                       │
│                                            │   │ [Edit] [Delete]       │
└────────────────────────────────────────────┴───┴───────────────────────┘
```

### Collapsed State
```
┌─────────────────────────────────────────────────────────────────────────┐
│ Main Content Area                                                   │ ▶ │
│                                                                     │   │
│ Full width when panel is collapsed                                  │   │
│                                                                     │   │
└─────────────────────────────────────────────────────────────────────┴───┘
```

### With Tabs in Panel
```
┌───────────────────────────────────┬─────────────────────────────────────┐
│ Main Content                      │ [Details] [History] [Comments]      │
│                                   ├─────────────────────────────────────┤
│                                   │                                     │
│                                   │ Tab content here...                 │
│                                   │                                     │
└───────────────────────────────────┴─────────────────────────────────────┘
```

### Resizable Panel
```
┌────────────────────────────────┬──║──────────────────────────────────────┐
│ Main Content                   │◄─║─►│ Sidepanel (resizable)             │
│                                │  ║  │                                   │
│                                │  ║  │ Drag the handle to resize         │
│                                │  ║  │                                   │
└────────────────────────────────┴──║──┴───────────────────────────────────┘
```

## Panel Positions

### Right Panel (Default)
```
┌──────────────────────────┬───────────────┐
│ Main Content             │ Side Panel    │
└──────────────────────────┴───────────────┘
```

### Left Panel
```
┌───────────────┬──────────────────────────┐
│ Side Panel    │ Main Content             │
└───────────────┴──────────────────────────┘
```

### Bottom Panel
```
┌─────────────────────────────────────────┐
│ Main Content                            │
├─────────────────────────────────────────┤
│ Bottom Panel                            │
└─────────────────────────────────────────┘
```

## Implementation

<!-- TODO: Add full implementation -->

## Related Components
- `furo-split-view` - import `@furo/layout/furo-split-view`
- `furo-resizer` - import `@furo/layout/furo-resizer`
- `furo-ui5-tabcontainer` - [Component docs](../furo-ui5-components/components/furo-ui5-tabcontainer.md)
