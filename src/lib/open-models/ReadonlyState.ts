import { FieldNode } from "@furo/open-models";

interface FieldNodeWithReadonly extends HTMLElement {
  readonly: boolean;
}

interface FieldNodeWithDisabledOnly extends HTMLElement {
  disabled: boolean;
}

/**
 * Manage readonly state for your bindable playground-web-components
 */
export class ReadonlyState {
  private inputElement: FieldNodeWithReadonly | FieldNodeWithDisabledOnly;

  private fieldNode: FieldNode | undefined;

  constructor(inputElement: FieldNodeWithReadonly | FieldNodeWithDisabledOnly) {
    this.inputElement = inputElement;
  }

  listenToStateChanged(fieldNode: FieldNode) {
    this.fieldNode = fieldNode;
    this.fieldNode.__addEventListener("parent-readonly-set", this.handleParentReadonlySet());
    this.fieldNode.__addEventListener("parent-readonly-unset", this.handleParentReadonlyUnset());
    // initial readonly check
    if (this.fieldNode.__isLogicalReadonly()) {
      if ("readonly" in this.inputElement) {
        this.inputElement.readonly = true;
      } else {
        this.inputElement.disabled = true;
      }
    }
  }

  /**
   * removes the listeners from "old" FieldNodes
   */
  detach(): void {
    this.fieldNode?.__removeEventListener("parent-readonly-set", this.handleParentReadonlySet());
    this.fieldNode?.__removeEventListener("parent-readonly-unset", this.handleParentReadonlyUnset());
  }

  private handleParentReadonlyUnset() {
    return () => {
      if (!this.fieldNode!.__isLogicalReadonly()) {
        if ("readonly" in this.inputElement) {
          this.inputElement.readonly = false;
        } else {
          this.inputElement.disabled = false;
        }
      }
    };
  }

  private handleParentReadonlySet() {
    return () => {
      if ("readonly" in this.inputElement) {
        this.inputElement.readonly = true;
      } else {
        this.inputElement.disabled = true;
      }
    };
  }
}
