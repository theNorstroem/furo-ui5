---
booksearchexclude: false
bookToc: false
bookHidden: true
---
#### Example

<furo-demo-snippet>
<template>
<furo-ui5-busy-indicator
  active 
  size="Small" 
  fn-activate="--start"
  fn-deactivate="--stop"
></furo-ui5-busy-indicator><br>
<furo-ui5-busy-indicator
  active 
  size="Medium" 
  fn-activate="--start"
  fn-deactivate="--stop"
></furo-ui5-busy-indicator><br>
<furo-ui5-busy-indicator
  active 
  size="Large" 
  fn-activate="--start"
  fn-deactivate="--stop"
></furo-ui5-busy-indicator>
<hr>
<button @-click="--start">activate</button>
<button @-click="--stop">deactivate</button>
</template>
</furo-demo-snippet>

