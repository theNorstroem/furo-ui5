---
title: Furo UI5
type: docs
bookToc: false
description: フロー Furo UI5 components
---

# フロー Furo UI5 components
For seamless integration into the Eclipse Furo Web Stack, the SAP UI5 web components were extended with the Furo data-bind interface.

![](https://sap.github.io/ui5-webcomponents/assets/images/Frame.png)

{{< columns >}}
## Data Bind Interface (Class FieldNodeAdapter)
The extension of the UI5 components with the data-bind interface makes it possible to work with the UI5 components as usual. **As a sugar on top**, each Furo UI5 component can be directly bound to a data model with 

  ```
  furoUi5Select.bindData(dataModel.field) (imperative)
  or
  <furo-ui5-select ƒ-bind-data="" (declarative)
  ```
<--->


## [SAP UI5](https://sap.github.io/ui5-webcomponents/)
UI5 Web Components keep our focus on delivering product features instead of re-implementing UI primitives while staying consistent with Fiori design system.

{{< /columns >}}
