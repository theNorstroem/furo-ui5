import { FieldNode, ValueState } from "@furo/open-models";

interface ComponentWithValueState extends HTMLElement {
  valueState: string;
}

export class FieldNodeValueState {
  private inputElement: ComponentWithValueState;

  private doNotAddToVsSlot: boolean | undefined;

  private _previousValueState: { state: string; slotted: HTMLElement | null } = { state: "None", slotted: null };

  constructor(inputElement: ComponentWithValueState, doNotAddToVsSlot?: boolean) {
    this.inputElement = inputElement;
    this.doNotAddToVsSlot = doNotAddToVsSlot;
  }

  listenToStateChanges(fieldNode: FieldNode) {
    const state = this.inputElement.getAttribute("value-state");
    if (state) {
      this._previousValueState.state = state;
    }
    this._previousValueState.slotted = this.inputElement.querySelector('*[slot="valueStateMessage"]');

    fieldNode.__addEventListener("state-changed", (e) => {
      // restore previous if it exists
      if (e.detail.__meta.valueState === "None" && this._previousValueState.slotted) {
        this.inputElement.querySelector('div[slot="valueStateMessage"].vse')?.remove();
        this.inputElement.valueState = this._previousValueState.state;
        this.inputElement.appendChild(this._previousValueState.slotted);
      } else if (e.detail.__meta.valueState === "None" && this._previousValueState.state) {
        this.inputElement.valueState = this._previousValueState.state;
      } else {
        this.setValueStateMessage(e.detail.__meta.valueState, e.detail.__meta.stateMessage);
      }
    });

    // set initial state
    if (fieldNode.__meta.valueState !== "None") {
      this.setValueStateMessage(fieldNode.__meta.valueState, fieldNode.__meta.stateMessage);
    }
  }

  /**
   * updates the value state and the value state message on demand
   *
   * @param valueState
   * @param message
   * @public
   */
  setValueStateMessage(valueState: ValueState, message: string) {
    this.inputElement.valueState = valueState;
    if (this.doNotAddToVsSlot) {
      return;
    }
    this._previousValueState.slotted?.remove();

    const VSE = this.createValueStateMessageDiv();
    if (VSE !== null) {
      VSE.innerText = message || "";
    }
  }

  /**
   * Adds a div with slot="valueStateMessage" to show
   * field related information if the attribute value-state is set.
   * @returns {HTMLDivElement}
   * @public
   */
  createValueStateMessageDiv(): HTMLElement {
    const EXISTING_VSE = this.inputElement.querySelector('div[slot="valueStateMessage"].vse');
    if (EXISTING_VSE !== null) {
      return EXISTING_VSE as HTMLElement;
    }
    // we only create the ValueStateContainer if none already exists.
    const VALUE_STATE_MESSAGE_ELEMENT = document.createElement("div");
    VALUE_STATE_MESSAGE_ELEMENT.setAttribute("slot", "valueStateMessage");
    VALUE_STATE_MESSAGE_ELEMENT.setAttribute("class", "vse");

    this.inputElement.appendChild(VALUE_STATE_MESSAGE_ELEMENT);
    return VALUE_STATE_MESSAGE_ELEMENT;
  }
}
