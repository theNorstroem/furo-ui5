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
  ƒ-activate="--start"
  ƒ-deactivate="--stop"
></furo-ui5-busy-indicator><br>
<furo-ui5-busy-indicator
  active 
  size="Medium" 
  ƒ-activate="--start"
  ƒ-deactivate="--stop"
></furo-ui5-busy-indicator><br>
<furo-ui5-busy-indicator
  active 
  size="Large" 
  ƒ-activate="--start"
  ƒ-deactivate="--stop"
></furo-ui5-busy-indicator>
<hr>
<button @-click="--start">activate</button>
<button @-click="--stop">deactivate</button>
</template>
</furo-demo-snippet>

