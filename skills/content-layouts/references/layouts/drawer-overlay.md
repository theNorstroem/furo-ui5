---
title: Drawer/Overlay Layout
tags: [drawer, overlay, slide-in, panel, modal, sheet]
use-when: user asks for drawer, slide-in panel, overlay content, or bottom sheet
---

# Drawer/Overlay Layout

Slide-in content panel that overlays the main content.

## Use Cases
- Quick edit forms
- Detail previews
- Shopping cart
- Notifications panel
- Mobile navigation menu

## Preview

### Right Drawer
```
┌─────────────────────────────────────────────────────────────────────────┐
│ Main Page Content                                                       │
│                                           ┌─────────────────────────────┤
│ (dimmed/inactive when drawer open)        │ ✕  Edit Order               │
│                                           ├─────────────────────────────┤
│                                           │                             │
│                                           │ Order #: [12345        ]    │
│                                           │ Customer: [Acme Corp ▼ ]    │
│                                           │ Status:   [Pending ▼   ]    │
│                                           │                             │
│                                           │ Notes:                      │
│                                           │ [                      ]    │
│                                           │ [                      ]    │
│                                           │                             │
│                                           ├─────────────────────────────┤
│                                           │       [Cancel] [Save]       │
└───────────────────────────────────────────┴─────────────────────────────┘
```

### Bottom Sheet (Mobile)
```
┌─────────────────────────────────────┐
│ Main Content                        │
│ (dimmed)                            │
│                                     │
├─────────────────────────────────────┤
│ ════════════════                    │  ← drag handle
│ Select Payment Method               │
├─────────────────────────────────────┤
│ ○ Credit Card ending in 4242        │
│ ○ PayPal (john@email.com)           │
│ ○ Bank Transfer                     │
│ ─────────────────────────────────── │
│ [+ Add New Payment Method]          │
└─────────────────────────────────────┘
```

### Full Height Drawer with Sections
```
┌────────────────────────┬────────────────────────────────────────────────┐
│                        │ ✕  Customer Details                            │
│                        ├────────────────────────────────────────────────┤
│                        │ ┌────────────────────────────────────────────┐ │
│  Main Content          │ │ 👤 John Doe                                │ │
│  (dimmed)              │ │    Senior Developer                        │ │
│                        │ │    john.doe@company.com                    │ │
│                        │ └────────────────────────────────────────────┘ │
│                        │                                                │
│                        │ ▼ Contact Information                          │
│                        │   Phone: +1 555-1234                          │
│                        │   Email: john.doe@company.com                 │
│                        │                                                │
│                        │ ▼ Recent Orders                                │
│                        │   • Order #123 - $500 - Completed             │
│                        │   • Order #124 - $300 - Pending               │
│                        │                                                │
│                        │ ▶ Notes (3)                                    │
│                        │                                                │
│                        ├────────────────────────────────────────────────┤
│                        │ [View Full Profile]            [Edit] [Delete] │
└────────────────────────┴────────────────────────────────────────────────┘
```

## Drawer Sizes

### Small (320px)
```
┌────────────────────────────────────────────┬────────────────┐
│                                            │ Small Drawer   │
│                                            │ (320px)        │
└────────────────────────────────────────────┴────────────────┘
```

### Medium (480px)
```
┌──────────────────────────────────┬─────────────────────────┐
│                                  │ Medium Drawer           │
│                                  │ (480px)                 │
└──────────────────────────────────┴─────────────────────────┘
```

### Large (640px)
```
┌────────────────────────┬────────────────────────────────────┐
│                        │ Large Drawer                       │
│                        │ (640px)                            │
└────────────────────────┴────────────────────────────────────┘
```

## Implementation

<!-- TODO: Add full implementation -->

## Related Components
- `furo-ui5-dialog` - [Component docs](../furo-ui5-components/components/furo-ui5-dialog.md)
- `furo-ui5-responsive-popover` - [Component docs](../furo-ui5-components/components/furo-ui5-responsive-popover.md)
- `ui5-bar` - import `@ui5/webcomponents/dist/Bar.js`
