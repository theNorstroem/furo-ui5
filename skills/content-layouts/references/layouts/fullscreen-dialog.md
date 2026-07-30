---
title: Full-Screen Dialog Layout
tags: [fullscreen-dialog, modal, full-screen, editing, form-dialog]
use-when: user asks for full-screen dialog, full-screen modal, or complex editing dialog
---

# Full-Screen Dialog Layout

Modal dialog that takes over the full screen for complex editing tasks.

## Use Cases
- Complex form editing
- Document editing
- Image/media editing
- Multi-step wizards
- Configuration screens

## Preview

### Standard Full-Screen Dialog
```
┌─────────────────────────────────────────────────────────────────────────┐
│ ✕  Edit Document                                   [Cancel] [Save]      │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                         │
│ ┌─────────────────────────────────────────────────────────────────────┐ │
│ │ Document Title                                                      │ │
│ │ [Annual Report 2024                                            ]    │ │
│ └─────────────────────────────────────────────────────────────────────┘ │
│                                                                         │
│ ┌─────────────────────────────────────────────────────────────────────┐ │
│ │ ▼ General Information                                               │ │
│ │   Author:     [John Doe                    ]                        │ │
│ │   Department: [Finance ▼                   ]                        │ │
│ │   Category:   [Reports ▼                   ]                        │ │
│ └─────────────────────────────────────────────────────────────────────┘ │
│                                                                         │
│ ┌─────────────────────────────────────────────────────────────────────┐ │
│ │ ▼ Content                                                           │ │
│ │   ┌───────────────────────────────────────────────────────────────┐ │ │
│ │   │ [B] [I] [U] | [≡] [•] | [🔗] [📷] | [¶]                       │ │ │
│ │   ├───────────────────────────────────────────────────────────────┤ │ │
│ │   │                                                               │ │ │
│ │   │ Rich text editor content...                                   │ │ │
│ │   │                                                               │ │ │
│ │   └───────────────────────────────────────────────────────────────┘ │ │
│ └─────────────────────────────────────────────────────────────────────┘ │
│                                                                         │
└─────────────────────────────────────────────────────────────────────────┘
```

### With Side Panel
```
┌─────────────────────────────────────────────────────────────────────────┐
│ ✕  Configure Dashboard                             [Cancel] [Apply]     │
├─────────────────────────────────────────────────────────────────────────┤
│ ┌───────────────────┬─────────────────────────────────────────────────┐ │
│ │ Components        │ Preview                                         │ │
│ │                   │                                                 │ │
│ │ ▼ Charts          │ ┌─────────┐ ┌─────────┐ ┌─────────┐            │ │
│ │   • Bar Chart     │ │ Chart 1 │ │ Chart 2 │ │ KPI     │            │ │
│ │   • Line Chart    │ └─────────┘ └─────────┘ └─────────┘            │ │
│ │   • Pie Chart     │                                                 │ │
│ │                   │ ┌─────────────────────┐ ┌─────────────────────┐ │ │
│ │ ▼ Widgets         │ │ Table               │ │ Activity Feed       │ │
│ │   • KPI Card      │ │                     │ │                     │ │
│ │   • Stat Counter  │ └─────────────────────┘ └─────────────────────┘ │ │
│ │                   │                                                 │ │
│ │ ▼ Lists           │                                                 │ │
│ │   • Data Table    │                                                 │ │
│ │   • Activity Feed │                                                 │ │
│ └───────────────────┴─────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────────────────┘
```

### Image Editor Style
```
┌─────────────────────────────────────────────────────────────────────────┐
│ ✕  Edit Image                                                [Done]     │
├────────────┬────────────────────────────────────────────────┬───────────┤
│ Tools      │                                                │ Properties│
│            │                                                │           │
│ [✂️ Crop]   │         ┌─────────────────────────┐           │ Width:    │
│ [🔄 Rotate] │         │                         │           │ [800] px  │
│ [📏 Resize] │         │     Image Preview       │           │           │
│ [🎨 Filter] │         │                         │           │ Height:   │
│ [✏️ Draw]   │         │                         │           │ [600] px  │
│ [T Text]   │         └─────────────────────────┘           │           │
│            │                                                │ Format:   │
│            │  [◀]  100%  [▶]   [Fit] [1:1]                 │ [PNG ▼]   │
└────────────┴────────────────────────────────────────────────┴───────────┘
```

### With Tabs
```
┌─────────────────────────────────────────────────────────────────────────┐
│ ✕  Settings                                                             │
├─────────────────────────────────────────────────────────────────────────┤
│ [General] [Appearance] [Security] [Integrations] [Advanced]             │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                         │
│ General Settings                                                        │
│ ─────────────────                                                       │
│                                                                         │
│ Language:        [English (US) ▼        ]                               │
│ Time Zone:       [UTC-05:00 Eastern ▼   ]                               │
│ Date Format:     [MM/DD/YYYY ▼          ]                               │
│                                                                         │
│ Notifications                                                           │
│ ─────────────────                                                       │
│ ☑ Email notifications                                                   │
│ ☑ Push notifications                                                    │
│ □ SMS notifications                                                     │
│                                                                         │
├─────────────────────────────────────────────────────────────────────────┤
│                                              [Reset Defaults] [Save]    │
└─────────────────────────────────────────────────────────────────────────┘
```

## Implementation

<!-- TODO: Add full implementation -->

## Related Components
- `furo-ui5-dialog` - [Component docs](../furo-ui5-components/components/furo-ui5-dialog.md)
- `ui5-bar` - import `@ui5/webcomponents/dist/Bar.js`
- `furo-ui5-tabcontainer` - [Component docs](../furo-ui5-components/components/furo-ui5-tabcontainer.md)
- `furo-ui5-form-layout` - [Component docs](../furo-ui5-components/components/furo-ui5-form-layout.md)
