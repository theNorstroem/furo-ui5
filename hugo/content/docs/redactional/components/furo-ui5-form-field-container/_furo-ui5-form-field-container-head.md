---
booksearchexclude: false
bookToc: false
bookHidden: true
---

#### Sample

 <furo-ui5-form-field-container>
     <ui5-label label slot="label" for="Custom" show-colon>Currency / Units (custom)</ui5-label>
    <furo-horizontal-flex id="Custom" content space>
    <furo-ui5-text-input flex ƒ-bind-data="--entity(*.data.furo_data_money_input.currency_code)"></furo-ui5-text-input>
     <furo-ui5-number-input flex ƒ-bind-data="--entity(*.data.furo_data_money_input.units)"></furo-ui5-number-input>
    </furo-horizontal-flex>
  </furo-ui5-form-field-container>
