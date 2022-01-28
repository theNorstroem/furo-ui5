# フロー Furo UI5 Web Components

https://ui5.furo.pro/

For seamless integration into the Eclipse Furo Web Stack, the SAP UI5 web components were extended with the Furo data-bind interface.

Compliant to SAP Fiori design language. Rich feature set. Includes all enterprise standards, such as accessibility, i18n, theming, etc 

- [https://sap.github.io/ui5-webcomponents/](https://sap.github.io/ui5-webcomponents/)
- [https://github.com/SAP/ui5-webcomponents](https://github.com/SAP/ui5-webcomponents)


## Data Bind Interface (Class FieldNodeAdapter)
The extension of the UI5 components with the data-bind interface makes it possible to work with the UI5 components as usual. As a sugar on top, each Furo UI5 component can be directly bound to a data model with

```
(imperative JS)
furoUi5Select.bindData(dataModel.field) 

(declarative HTML)
<furo-ui5-select ƒ-bind-data=""></furo-ui5-select>
```

## Basic Usage
```html
<!-- SAP Ui5 input element with Furo extension -->
<furo-ui5-text-input ƒ-bind-data="--dataObject(*.field_name)"></furo-ui5-text-input>
<!-- Furo data model object -->
<furo-data-object type="package.Typename" @-object-ready="--dataObject"></furo-data-object>
```
 
