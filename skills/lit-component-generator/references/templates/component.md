# Component Templates

## Basic Lit Component

```typescript
import "@furo/ui5/button";

import { css, html, LitElement } from "lit";
import { property, state } from "lit/decorators.js";

/**
 * ### ComponentName
 * Description of the component.
 *
 * @author you
 * @tagname component-name
 * @public
 */
export class ComponentName extends LitElement {
  @property({ type: String, attribute: "my-prop" })
  myProp: string = "";

  @state()
  private _internalState: boolean = false;

  private _handleClick() {
    this.dispatchEvent(new CustomEvent("my-event", {
      detail: { value: this.myProp },
      bubbles: true,
      composed: true
    }));
  }

  static styles = css`
    :host { display: block; }
    :host([hidden]) { display: none; }
    *:not(:defined) { display: none; }
    /* Use style variables for colors and spacing */
    .container {
      padding: var(--MediaSizeIndentation);
      color: var(--sapTextColor);
      background: var(--sapBackgroundColor);
    }
  `;

  render() {
    return html`
      <furo-ui5-button @click="${this._handleClick}">Click me</furo-ui5-button>
    `;
  }
}

window.customElements.define("component-name", ComponentName);

declare global {
  interface HTMLElementTagNameMap {
    "component-name": ComponentName;
  }
}
```

## Component Index File (index.ts)

```typescript
import { ComponentName } from "./ComponentName";

window.customElements.define("component-name", ComponentName);

declare global {
  interface HTMLElementTagNameMap {
    "component-name": ComponentName;
  }
}

export { ComponentName };
```

## Form with Sections

```typescript
import "@furo/ui5/section";
import "@furo/ui5/subsection";
import "@furo/ui5/form-layout";
import "@furo/ui5/form-group";
import "@furo/ui5/form-row";
import "@furo/ui5/text-input";
import "@furo/ui5/select";
import "@furo/ui5/option";

render() {
  return html`
    <furo-ui5-section heading="Personal Information" scroll>
      <furo-ui5-subsection>
        <furo-ui5-form-layout form-title="Contact Details" heading-level="H4">
          <furo-ui5-form-group label="Name">
            <furo-ui5-form-row>
              <furo-ui5-text-input label="First Name" value="${this.firstName}" @change="${this.onFirstNameChange}" required></furo-ui5-text-input>
            </furo-ui5-form-row>
            <furo-ui5-form-row>
              <furo-ui5-text-input label="Last Name" value="${this.lastName}" @change="${this.onLastNameChange}" required></furo-ui5-text-input>
            </furo-ui5-form-row>
          </furo-ui5-form-group>
        </furo-ui5-form-layout>
      </furo-ui5-subsection>
    </furo-ui5-section>
  `;
}
```

## Bindable Component with fieldBindings

For reusable components that accept `.model` property and support multiple FieldNode types:

```typescript
import type { STRING } from "@furo/open-models/dist";
import type { BindableComponent } from "@furo/open-models/dist/FieldBindings";
import { fieldBindings } from "@furo/open-models/dist/FieldBindings";
import type { XString } from "@your-org/contract-repo/path/to/...../furo/fat/String";
import { LitElement } from "lit";
import { state } from "lit/decorators.js";

type StringModel = STRING | XString;

export class MyInput extends LitElement implements BindableComponent {
  @fieldBindings.model()
  model: StringModel | undefined;

  declare writeToModel: () => void;

  modelReaders = new Map<string, () => void>([
    ["primitives.STRING", () => { this.value = (this.model as STRING).value ?? ""; }],
    ["furo.fat.String", () => { this.value = (this.model as XString).value.value ?? ""; }],
  ]);

  modelWriters = new Map<string, () => void>([
    ["primitives.STRING", () => { (this.model as STRING).value = this.value; }],
    ["furo.fat.String", () => { (this.model as XString).value.value = this.value; }],
  ]);

  @state()
  value: string = "";

  private _onInput(event: Event): void {
    this.value = (event.target as HTMLInputElement).value;
    this.writeToModel();
  }
}
```

See the **open-models** skill for full documentation on `fieldBindings`.
