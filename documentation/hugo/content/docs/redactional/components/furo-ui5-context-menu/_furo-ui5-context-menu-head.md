---
booksearchexclude: false
bookToc: false
bookHidden: true
---
#### Example

> **Note** The demo is a little bit broken, because of the scrolling position of the
> documentation system. Scroll up to see the menu after you opened it.

<script type="module" src="/init.js"></script>
<furo-demo-snippet>
<template>
<furo-ui5-context-menu fn-trigger="--menuClkd" fn-bind-data="--menuDO" @-menu-item-selected="--menuItemSelected"
><ui5-icon name="meal" @-click="--menuClkd">open menu</ui5-icon>
</furo-ui5-context-menu>
<!-- data for the menu -->
<furo-data-object
  type="menu.Menuitem"
  fn-inject-raw="--data"
  @-object-ready="--menuDO"
></furo-data-object>
<furo-fetch-json
  fn-fetch="--menuClkd"
  src="/mockdata/menu/samplectxmenu.json"
  @-data="--data"
></furo-fetch-json>
</template>
</furo-demo-snippet>

```html
<body>
  <!-- The display must be placed in a parent element -->
  <furo-ui5-context-menu-display></furo-ui5-context-menu-display>
  <main>
    <div>
      <article>
        <furo-ui5-context-menu
          fn-trigger="--menuClkd"
          fn-bind-data="--menuDO"
          @-menu-item-selected="--menuItemSelected"
        ><ui5-icon name="meal" @-click="--menuClkd">open menu</ui5-icon>
        </furo-ui5-context-menu>
      </article>
    </div>
  </main>
```
