---
booksearchexclude: false
bookToc: false
bookHidden: true
---
#### Example

<furo-demo-snippet>
<template>
<furo-ui5-button  design="Negative" @-click="--hideClicked">Hide</furo-ui5-button>
<furo-ui5-button  design="Transparent" @-click="--showClicked">Show</furo-ui5-button>
<furo-ui5-button @-click="--disableClicked">Disable</furo-ui5-button>
<furo-ui5-button design="Positive"  @-click="--enableClicked">Enable</furo-ui5-button>
<br><br><br>
<furo-ui5-button
 design="Emphasized"
 fn-hide="--hideClicked"
 fn-show="--showClicked"
 fn-disable="--disableClicked"
 fn-enable="--enableClicked"
>Button</furo-ui5-button>
</template>
</furo-demo-snippet>
