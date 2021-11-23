---
booksearchexclude: false
bookToc: false
bookHidden: true
---
#### Example

<script type="module" src="/init.js"></script>
<furo-demo-snippet>
<template>
<furo-ui5-context-menu ƒ-trigger="--menuClkd" ƒ-bind-data="--menuDO" @-menu-item-selected="--menuItemSelected"
><ui5-icon name="meal" @-click="--menuClkd">open menu</ui5-icon>
</furo-ui5-context-menu>
<!-- data for the menu -->
<furo-data-object
  type="menu.Menuitem"
  ƒ-inject-raw="--data"
  @-object-ready="--menuDO"
></furo-data-object>
<furo-fetch-json
  ƒ-fetch="--menuClkd"
  src="/mockdata/menu/samplectxmenu.json"
  @-data="--data"
></furo-fetch-json>
</template>
</furo-demo-snippet>
