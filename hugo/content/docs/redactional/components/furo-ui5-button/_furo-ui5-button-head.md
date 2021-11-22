#### Example

<furo-demo-snippet>
<template>
<furo-ui5-button @-click="--hideClicked">Hide</furo-ui5-button>
<furo-ui5-button @-click="--showClicked">Show</furo-ui5-button>
<furo-ui5-button @-click="--disableClicked">Disable</furo-ui5-button>
<furo-ui5-button @-click="--enableClicked">Enable</furo-ui5-button>
<br><br><br>
<furo-ui5-button
 design="Emphasized"
 ƒ-hide="--hideClicked"
 ƒ-show="--showClicked"
 ƒ-disable="--disableClicked"
 ƒ-enable="--enableClicked"
>Button</furo-ui5-button>
</template>
</furo-demo-snippet>
