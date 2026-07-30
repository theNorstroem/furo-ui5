---
title: Kanban Board Layout
tags: [kanban, board, columns, cards, workflow, drag-drop, tasks, pipeline]
use-when: user asks for kanban board, task board, project board, sales pipeline, or workflow columns
---

# Kanban Board Layout

Column-based board view with draggable cards for workflow visualization.

## Use Cases
- Task management boards
- Project status tracking
- Sales pipeline
- Recruitment workflow
- Content publishing workflow

## Preview

### Basic Kanban
```
┌─────────────────────────────────────────────────────────────────────────┐
│ Project Board                                    [+ Add Column] [...]   │
├───────────────┬───────────────┬───────────────┬─────────────────────────┤
│ To Do (3)     │ In Progress(2)│ Review (1)    │ Done (5)                │
├───────────────┼───────────────┼───────────────┼─────────────────────────┤
│ ┌───────────┐ │ ┌───────────┐ │ ┌───────────┐ │ ┌───────────┐           │
│ │ Task 1    │ │ │ Task 4    │ │ │ Task 6    │ │ │ Task 7    │           │
│ │ 🏷️ Bug    │ │ │ 🏷️ Feature│ │ │ 🏷️ Feature│ │ │ ✓ Complete│           │
│ │ 👤 John   │ │ │ 👤 Jane   │ │ │ 👤 Bob    │ │ └───────────┘           │
│ └───────────┘ │ └───────────┘ │ └───────────┘ │ ┌───────────┐           │
│ ┌───────────┐ │ ┌───────────┐ │               │ │ Task 8    │           │
│ │ Task 2    │ │ │ Task 5    │ │               │ │ ✓ Complete│           │
│ │ 🏷️ Feature│ │ │ 🏷️ Bug    │ │               │ └───────────┘           │
│ │ 👤 Jane   │ │ │ 👤 John   │ │               │                         │
│ └───────────┘ │ └───────────┘ │               │                         │
│ ┌───────────┐ │               │               │                         │
│ │ Task 3    │ │               │               │                         │
│ │ 🏷️ Docs   │ │               │               │                         │
│ │ 👤 --     │ │               │               │                         │
│ └───────────┘ │               │               │                         │
│               │               │               │                         │
│ [+ Add Task]  │ [+ Add Task]  │ [+ Add Task]  │                         │
└───────────────┴───────────────┴───────────────┴─────────────────────────┘
```

### Sales Pipeline
```
┌───────────────┬───────────────┬───────────────┬───────────────┐
│ Leads         │ Qualified     │ Proposal      │ Closed        │
│ $50,000       │ $120,000      │ $80,000       │ $200,000      │
├───────────────┼───────────────┼───────────────┼───────────────┤
│ ┌───────────┐ │ ┌───────────┐ │ ┌───────────┐ │ ┌───────────┐ │
│ │ Acme Corp │ │ │ TechStart │ │ │ BigCo     │ │ │ MegaCorp  │ │
│ │ $25,000   │ │ │ $60,000   │ │ │ $80,000   │ │ │ $150,000  │ │
│ │ 🔴 Hot    │ │ │ 🟡 Warm   │ │ │ 🟢 Ready  │ │ │ ✓ Won     │ │
│ └───────────┘ │ └───────────┘ │ └───────────┘ │ └───────────┘ │
└───────────────┴───────────────┴───────────────┴───────────────┘
```

### Swimlanes (Grouped Rows)
```
┌─────────────────────────────────────────────────────────────────┐
│               │ To Do     │ In Progress │ Done                  │
├───────────────┼───────────┼─────────────┼───────────────────────┤
│ Frontend      │ [Card]    │ [Card]      │ [Card] [Card]         │
├───────────────┼───────────┼─────────────┼───────────────────────┤
│ Backend       │ [Card]    │ [Card]      │ [Card]                │
├───────────────┼───────────┼─────────────┼───────────────────────┤
│ Design        │           │ [Card]      │ [Card] [Card] [Card]  │
└───────────────┴───────────┴─────────────┴───────────────────────┘
```

## Card Variants

### Task Card
```
┌─────────────────────────┐
│ 🏷️ Feature   ⋮ Menu     │
├─────────────────────────┤
│ Implement login form    │
│                         │
│ 📎 2  💬 5  ✓ 3/5       │
├─────────────────────────┤
│ 👤 John    📅 Due: Mar 1│
└─────────────────────────┘
```

### Minimal Card
```
┌─────────────────────────┐
│ Fix navigation bug      │
│ 🔴 P1  👤 Jane          │
└─────────────────────────┘
```

## Implementation

<!-- TODO: Add full implementation -->

## Related Components
- `furo-responsive-layout` - import `@furo/layout/furo-responsive-layout`
- `ui5-card` - import `@ui5/webcomponents/dist/Card.js`
- `furo-ui5-tag` - [Component docs](../furo-ui5-components/components/furo-ui5-tag.md)
