---
title: Dashboard Grid Layout
tags: [dashboard, kpi, cards, widgets, analytics, grid, responsive]
use-when: user asks for dashboard, KPI display, analytics overview, admin panel, or card-based home page
---

# Dashboard Grid Layout

A card-based dashboard layout with KPIs, charts, and widgets arranged in a responsive grid.

## Use Cases
- Application dashboards
- Analytics overview pages
- Admin control panels
- Home pages with widgets

## Required Components
| Tag | ES Module |
|-----|-----------|
| `furo-vertical-flex` | `@furo/layout/furo-vertical-flex` |
| `furo-horizontal-flex` | `@furo/layout/furo-horizontal-flex` |
| `furo-responsive-layout` | `@furo/layout/furo-responsive-layout` |
| `ui5-card` | `@ui5/webcomponents/dist/Card.js` |
| `ui5-card-header` | `@ui5/webcomponents/dist/CardHeader.js` |
| `ui5-card-header` | `@ui5/webcomponents/dist/CardHeader.js` |
| `ui5-bar` | `@ui5/webcomponents/dist/Bar.js` |
| `furo-ui5-title` | `@furo/ui5/title` |
| `furo-ui5-button` | `@furo/ui5/button` |
| `furo-ui5-list` | `@furo/ui5/list` |
| `ui5-li` | `@ui5/webcomponents/dist/ListItemStandard.js` |
| `furo-ui5-typerenderer` | `@furo/ui5/typerenderer` |
| `furo-ui5-tag` | `@furo/ui5/tag` |

> How you load these modules depends on your framework. See [Framework References](#framework-specific-syntax) below.

## Preview
```
+-----------------------------------------------------------------------+
| Shellbar                                                    [User]     |
+-----------------------------------------------------------------------+
| Dashboard                                            [Filter] [Refresh]|
+-----------------------------------------------------------------------+
| +--------------+ +--------------+ +--------------+ +--------------+   |
| | Revenue      | | Orders       | | Customers    | | Returns      |   |
| | $125,000     | | 1,234        | | 5,678        | | 23           |   |
| | +12%         | | +8%          | | +3%          | | -15%         |   |
| +--------------+ +--------------+ +--------------+ +--------------+   |
| +--------------------------------------+ +--------------------------+ |
| | Sales Chart                          | | Recent Orders            | |
| |                                      | | +----------------------+ | |
| |     [Chart Component]               | | | Order #1234  $500    | | |
| |                                      | | | Order #1235  $320    | | |
| |                                      | | | Order #1236  $890    | | |
| +--------------------------------------+ +--------------------------+ |
+-----------------------------------------------------------------------+
```

## Styles

```css
:host {
  display: block;
  height: 100%;
}

*:not(:defined) {
  display: none;
}

.dashboard-content {
  padding: 1rem;
  gap: 1rem;
}

.kpi-section {
  margin-bottom: 1rem;
}

ui5-card {
  height: 100%;
}

.chart-placeholder {
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--sapBackgroundColor);
  border-radius: 4px;
  color: var(--sapContent_LabelColor);
}
```

## Implementation

```html
<furo-vertical-flex style="height: 100%">
  <!-- Page Header -->
  <ui5-bar design="Header">
    <furo-ui5-title slot="startContent" level="H4">Dashboard</furo-ui5-title>
    <furo-ui5-button slot="endContent" icon="filter" design="Transparent">Filter</furo-ui5-button>
    <furo-ui5-button slot="endContent" icon="refresh" design="Transparent">Refresh</furo-ui5-button>
  </ui5-bar>

  <!-- Dashboard Content -->
  <div class="dashboard-content" flex scroll>
    <!-- KPI Cards Row -->
    <div class="kpi-section">
      <furo-responsive-layout layout="four" breakpoint-big="1200" breakpoint-small="600">
        <!-- Repeat for each KPI -->
        <ui5-card>
          <ui5-card-header
            slot="header"
            title-text="Revenue"
            subtitle-text="+12%"
            status="Positive">
            <furo-ui5-typerenderer
              slot="value"
              value="125000"
              display-type="Currency"
              element-currency="USD">
            </furo-ui5-typerenderer>
          </ui5-card-header>
        </ui5-card>

        <ui5-card>
          <ui5-card-header
            slot="header"
            title-text="Orders"
            subtitle-text="+8%"
            status="Positive">
            <furo-ui5-typerenderer slot="value" value="1234">
            </furo-ui5-typerenderer>
          </ui5-card-header>
        </ui5-card>

        <ui5-card>
          <ui5-card-header
            slot="header"
            title-text="Customers"
            subtitle-text="+3%"
            status="None">
            <furo-ui5-typerenderer slot="value" value="5678">
            </furo-ui5-typerenderer>
          </ui5-card-header>
        </ui5-card>

        <ui5-card>
          <ui5-card-header
            slot="header"
            title-text="Returns"
            subtitle-text="-15%"
            status="Negative">
            <furo-ui5-typerenderer slot="value" value="23">
            </furo-ui5-typerenderer>
          </ui5-card-header>
        </ui5-card>
      </furo-responsive-layout>
    </div>

    <!-- Charts and Widgets Row -->
    <furo-responsive-layout layout="two" breakpoint-small="800">
      <!-- Chart Card -->
      <ui5-card>
        <ui5-card-header
          slot="header"
          title-text="Sales Overview"
          subtitle-text="Last 30 days">
          <furo-ui5-button slot="action" icon="overflow" design="Transparent"></furo-ui5-button>
        </ui5-card-header>
        <div style="padding: 1rem;">
          <div class="chart-placeholder">
            Chart Component Here
          </div>
        </div>
      </ui5-card>

      <!-- Recent Orders Card -->
      <ui5-card>
        <ui5-card-header
          slot="header"
          title-text="Recent Orders"
          subtitle-text="Today">
          <furo-ui5-button slot="action" icon="slim-arrow-right" design="Transparent"></furo-ui5-button>
        </ui5-card-header>
        <furo-ui5-list>
          <ui5-li text="Order #1234" description="2 items" additional-text="$500.00">
          </ui5-li>
          <ui5-li text="Order #1235" description="1 item" additional-text="$320.00">
          </ui5-li>
          <ui5-li text="Order #1236" description="5 items" additional-text="$890.00">
          </ui5-li>
        </furo-ui5-list>
      </ui5-card>
    </furo-responsive-layout>

    <!-- Full Width Section -->
    <ui5-card style="margin-top: 1rem;">
      <ui5-card-header
        slot="header"
        title-text="Activity Feed"
        subtitle-text="Recent updates">
      </ui5-card-header>
      <ui5-timeline>
        <ui5-timeline-item title-text="Order #1234 shipped" subtitle-text="2 hours ago" icon="shipping-status">
        </ui5-timeline-item>
        <ui5-timeline-item title-text="New customer registered" subtitle-text="4 hours ago" icon="add-employee">
        </ui5-timeline-item>
        <ui5-timeline-item title-text="Payment received" subtitle-text="6 hours ago" icon="money-bills">
        </ui5-timeline-item>
      </ui5-timeline>
    </ui5-card>
  </div>
</furo-vertical-flex>
```

## KPI Card Variations

### With Trend Arrow
```html
<ui5-card>
  <ui5-card-header
    slot="header"
    title-text="Revenue"
    subtitle-text="+12% vs last month"
    status="Positive">
    <furo-ui5-typerenderer
      slot="value"
      value="125000"
      display-type="Currency"
      element-currency="USD">
    </furo-ui5-typerenderer>
  </ui5-card-header>
</ui5-card>
```

### With Actions
```html
<ui5-card>
  <ui5-card-header
    slot="header"
    title-text="Orders"
    subtitle-text="This week"
    interactive> <!-- Handle click event to navigate -->
    <furo-ui5-button slot="action" icon="slim-arrow-right" design="Transparent"></furo-ui5-button>
  </ui5-card-header>
  <div style="padding: 1rem;">
    <furo-ui5-typerenderer value="1234"></furo-ui5-typerenderer>
  </div>
</ui5-card>
```

### Mini KPI Row
```html
<furo-horizontal-flex space style="padding: 1rem;">
  <furo-ui5-label show-colon>Revenue</furo-ui5-label>
  <furo-ui5-text>125,000 USD</furo-ui5-text>
  <furo-ui5-label show-colon>Orders</furo-ui5-label>
  <furo-ui5-text>1,234</furo-ui5-text>
  <furo-ui5-label show-colon>Customers</furo-ui5-label>
  <furo-ui5-text>5,678</furo-ui5-text>
</furo-horizontal-flex>
```

## Grid Layouts

### 4 Equal Columns (KPIs)
```html
<furo-responsive-layout layout="four" breakpoint-big="1200" breakpoint-small="600">
  <ui5-card>KPI 1</ui5-card>
  <ui5-card>KPI 2</ui5-card>
  <ui5-card>KPI 3</ui5-card>
  <ui5-card>KPI 4</ui5-card>
</furo-responsive-layout>
```

### 2/3 + 1/3 Layout
```html
<furo-responsive-layout layout="three">
  <div layout-double>
    <ui5-card>Main Chart</ui5-card>
  </div>
  <div>
    <ui5-card>Side Widget</ui5-card>
  </div>
</furo-responsive-layout>
```

### 1/3 + 2/3 Layout
```html
<furo-responsive-layout layout="three">
  <div>
    <ui5-card>Sidebar</ui5-card>
  </div>
  <div layout-double>
    <ui5-card>Main Content</ui5-card>
  </div>
</furo-responsive-layout>
```

## Related Components
- `ui5-card` - import `@ui5/webcomponents/dist/Card.js`
- `ui5-card-header` - import `@ui5/webcomponents/dist/CardHeader.js`
- `ui5-card-header` - import `@ui5/webcomponents/dist/CardHeader.js`
- `furo-responsive-layout` - import `@furo/layout/furo-responsive-layout`
- `furo-ui5-typerenderer` - [Component docs](../furo-ui5-components/components/furo-ui5-typerenderer.md)

## Framework-Specific Syntax
For event handling, boolean attributes, and property binding syntax in your framework:
- [Lit](../frameworks/lit.md)
- [Angular](../frameworks/angular.md)
- [React](../frameworks/react.md)
