---
title: Object Page Section Layout
tags: [section, anchor-navigation, object-page, grouped-content, subsection]
use-when: user asks for page sections, anchor navigation, grouped content sections, or object page sections
---

# Object Page Section Layout

Anchor-navigated sections for organizing complex object detail pages.

## Use Cases
- Product detail pages
- Customer profiles
- Employee records
- Asset management
- Configuration pages

## Preview

### Object Page with Anchor Navigation
```
┌─────────────────────────────────────────────────────────────────────────┐
│ Product: Widget Pro 3000                            [Edit] [Delete]     │
├─────────────────────────────────────────────────────────────────────────┤
│ [Overview] [Specifications] [Pricing] [Inventory] [History]    ← anchors│
├─────────────────────────────────────────────────────────────────────────┤
│                                                                         │
│ ┌─────────────────────────────────────────────────────────────────────┐ │
│ │ Overview                                                        [▲] │ │
│ ├─────────────────────────────────────────────────────────────────────┤ │
│ │                                                                     │ │
│ │  Status: 🟢 Active    SKU: WP-3000    Category: Electronics        │ │
│ │                                                                     │ │
│ │  Description:                                                       │ │
│ │  The Widget Pro 3000 is our flagship product featuring advanced    │ │
│ │  technology and premium materials...                                │ │
│ │                                                                     │ │
│ └─────────────────────────────────────────────────────────────────────┘ │
│                                                                         │
│ ┌─────────────────────────────────────────────────────────────────────┐ │
│ │ Specifications                                                  [▲] │ │
│ ├─────────────────────────────────────────────────────────────────────┤ │
│ │                                                                     │ │
│ │  ┌─ Dimensions ────────────┐  ┌─ Technical ────────────┐           │ │
│ │  │ Width:   150 mm         │  │ Power:    120V AC      │           │ │
│ │  │ Height:  100 mm         │  │ Wattage:  45W          │           │ │
│ │  │ Depth:   50 mm          │  │ Frequency: 50-60 Hz    │           │ │
│ │  │ Weight:  1.2 kg         │  │ Warranty:  2 years     │           │ │
│ │  └─────────────────────────┘  └────────────────────────┘           │ │
│ │                                                                     │ │
│ └─────────────────────────────────────────────────────────────────────┘ │
│                                                                         │
│ ┌─────────────────────────────────────────────────────────────────────┐ │
│ │ Pricing                                                         [▲] │ │
│ ├─────────────────────────────────────────────────────────────────────┤ │
│ │                                                                     │ │
│ │  Base Price:     $299.99                                            │ │
│ │  Discount:       -$30.00 (10%)                                      │ │
│ │  ─────────────────────────                                          │ │
│ │  Final Price:    $269.99                                            │ │
│ │                                                                     │ │
│ └─────────────────────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────────────────┘
```

### With Sub-Sections
```
┌─────────────────────────────────────────────────────────────────────────┐
│ ▼ Customer Information                                                  │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                         │
│   ─── Personal Details ───────────────────────────────────────          │
│   Name:        John Doe                                                 │
│   Email:       john.doe@email.com                                       │
│   Phone:       +1 555-1234                                              │
│                                                                         │
│   ─── Address ────────────────────────────────────────────────          │
│   Street:      123 Main Street                                          │
│   City:        New York                                                 │
│   Country:     United States                                            │
│                                                                         │
└─────────────────────────────────────────────────────────────────────────┘
```

### Collapsible Sections
```
┌─────────────────────────────────────────────────────────────────────────┐
│ ▼ Basic Information                                              [Edit] │
│   Name: John Doe | Email: john@email.com | Status: Active              │
├─────────────────────────────────────────────────────────────────────────┤
│ ▶ Employment History (3 entries)                                        │
├─────────────────────────────────────────────────────────────────────────┤
│ ▶ Education (2 entries)                                                 │
├─────────────────────────────────────────────────────────────────────────┤
│ ▼ Skills & Certifications                                        [Edit] │
│   • JavaScript (Expert)                                                 │
│   • TypeScript (Advanced)                                               │
│   • AWS Certified Developer                                             │
└─────────────────────────────────────────────────────────────────────────┘
```

### With Section Actions
```
┌─────────────────────────────────────────────────────────────────────────┐
│ Documents                                    [Upload] [+ New Folder]    │
├─────────────────────────────────────────────────────────────────────────┤
│ │ Name                    │ Type     │ Size    │ Modified    │         │
│ ├─────────────────────────┼──────────┼─────────┼─────────────┼─────────┤
│ │ 📄 Contract.pdf         │ PDF      │ 2.4 MB  │ Mar 1, 2024 │ [...]   │
│ │ 📊 Report.xlsx          │ Excel    │ 1.1 MB  │ Feb 28, 2024│ [...]   │
│ │ 📁 Archives             │ Folder   │ --      │ Feb 15, 2024│ [...]   │
└─────────────────────────────────────────────────────────────────────────┘
```

## Implementation

<!-- TODO: Add full implementation -->

## Related Components
- `furo-ui5-section` - [Component docs](../furo-ui5-components/components/furo-ui5-section.md)
- `furo-ui5-subsection` - [Component docs](../furo-ui5-components/components/furo-ui5-subsection.md)
- Anchor bar: compose from `furo-ui5-tabcontainer` or in-page links — there is no dedicated anchor-bar component
- `furo-ui5-form-layout` - [Component docs](../furo-ui5-components/components/furo-ui5-form-layout.md)
