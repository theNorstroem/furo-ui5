# Master-Detail with Data Loading

A master list with detail view and async data loading.

> **Note:** CSS is shown in `<style>` blocks for illustration. In your framework, use the appropriate styling approach (e.g., `static styles` in Lit, scoped styles in Angular, CSS modules in React).

## HTML Structure

```html
<style>
  :host { display: block; height: 100%; }
  *:not(:defined) { display: none; }
  .detail-content { padding: var(--MediaSizeIndentation); }
</style>

<ui5-flexible-column-layout id="fcl" layout="TwoColumnsMidExpanded" style="height: 100%">
  <!-- Master Column -->
  <div slot="startColumn">
    <furo-ui5-busy-indicator>
      <ui5-dynamic-page>
        <ui5-dynamic-page-title slot="titleArea">
          <span slot="heading">Orders</span>
        </ui5-dynamic-page-title>
        <furo-ui5-list mode="SingleSelect">
          <!-- Handle "click" event on each item to select and load details -->
          <ui5-li type="Active">
            <span slot="titleText">ORD-001</span>
            <span slot="description">Acme Corp</span>
            <span slot="additionalText">15,000.00 EUR</span>
          </ui5-li>
          <ui5-li type="Active">
            <span slot="titleText">ORD-002</span>
            <span slot="description">TechStart</span>
            <span slot="additionalText">8,500.00 EUR</span>
          </ui5-li>
          <ui5-li type="Active">
            <span slot="titleText">ORD-003</span>
            <span slot="description">Global Inc</span>
            <span slot="additionalText">22,100.00 EUR</span>
          </ui5-li>
        </furo-ui5-list>
      </ui5-dynamic-page>
    </furo-ui5-busy-indicator>
  </div>

  <!-- Detail Column (shown when an item is selected) -->
  <div slot="midColumn">
    <furo-ui5-busy-indicator>
      <ui5-dynamic-page>
        <ui5-dynamic-page-title slot="titleArea">
          <span slot="heading">ORD-001</span>
          <!-- Handle "click" event to close detail and return to OneColumn layout -->
          <furo-ui5-button slot="actions" icon="decline" design="Transparent"></furo-ui5-button>
        </ui5-dynamic-page-title>
        <ui5-dynamic-page-header slot="headerArea">
          <furo-ui5-label show-colon>Customer</furo-ui5-label><furo-ui5-text>Acme Corp</furo-ui5-text>
          <furo-ui5-label show-colon>Date</furo-ui5-label><furo-ui5-text>2024-03-01</furo-ui5-text>
          <furo-ui5-label show-colon>Status</furo-ui5-label>
          <furo-ui5-tag design="Positive">Completed</furo-ui5-tag>
        </ui5-dynamic-page-header>

        <div class="detail-content">
          <h4>Order Items</h4>
          <furo-ui5-list>
            <ui5-li>
              <span slot="titleText">Product A</span>
              <span slot="description">Qty: 10</span>
              <span slot="additionalText">1,000.00 EUR</span>
            </ui5-li>
            <ui5-li>
              <span slot="titleText">Product B</span>
              <span slot="description">Qty: 5</span>
              <span slot="additionalText">1,000.00 EUR</span>
            </ui5-li>
          </furo-ui5-list>
        </div>

        <ui5-bar slot="footerArea" design="Footer">
          <furo-ui5-button slot="endContent">Edit</furo-ui5-button>
          <furo-ui5-button slot="endContent" design="Emphasized">Process</furo-ui5-button>
        </ui5-bar>
      </ui5-dynamic-page>
    </furo-ui5-busy-indicator>
  </div>
</ui5-flexible-column-layout>
```

## Pattern

**Layout transitions:**
- Start with `layout="OneColumn"` showing only the master list
- When an item is selected, switch to `layout="TwoColumnsMidExpanded"` and load the detail data
- Close button switches back to `layout="OneColumn"`

**Data loading:**
1. Load master list on initialization
2. On item selection: show loading indicator, fetch detail data, display in mid column
3. Use `furo-ui5-busy-indicator` with `active` attribute to show/hide loading state

**FCLLayout values:** `OneColumn`, `TwoColumnsMidExpanded`, `TwoColumnsStartExpanded`, `ThreeColumnsStartExpanded`, `ThreeColumnsMidExpanded`, `ThreeColumnsEndExpanded`
