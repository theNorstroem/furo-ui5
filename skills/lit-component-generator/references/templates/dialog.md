# Dialog Templates

## Dialog with Form

```typescript
import "@furo/ui5/dialog";
import "@ui5/webcomponents/dist/Bar.js";
import "@furo/ui5/button";
import type { FuroUi5Dialog } from "@furo/ui5/dialog";
import { createRef, ref, type Ref } from "lit/directives/ref.js";

private dialogRef: Ref<FuroUi5Dialog> = createRef();

openDialog() { this.dialogRef.value?.open(); }
closeDialog() { this.dialogRef.value?.close(); }

render() {
  return html`
    <furo-ui5-dialog ${ref(this.dialogRef)} header-text="Edit Item">
      <furo-ui5-form-layout><!-- form content --></furo-ui5-form-layout>
      <ui5-bar slot="footer" design="Footer">
        <furo-ui5-button slot="endContent" @click="${this.closeDialog}">Cancel</furo-ui5-button>
        <furo-ui5-button slot="endContent" design="Emphasized" @click="${this.save}">Save</furo-ui5-button>
      </ui5-bar>
    </furo-ui5-dialog>
  `;
}
```

## Confirmation Dialog

```typescript
import "@furo/ui5/dialog";
import "@ui5/webcomponents/dist/Bar.js";
import "@furo/ui5/button";
import "@furo/ui5/text";

render() {
  return html`
    <furo-ui5-dialog id="confirmDialog" header-text="Confirm Action">
      <furo-ui5-text>Are you sure you want to proceed?</furo-ui5-text>
      <ui5-bar slot="footer" design="Footer">
        <furo-ui5-button slot="endContent" @click="${this.closeDialog}">Cancel</furo-ui5-button>
        <furo-ui5-button slot="endContent" design="Negative" @click="${this.confirm}">Delete</furo-ui5-button>
      </ui5-bar>
    </furo-ui5-dialog>
  `;
}
```
