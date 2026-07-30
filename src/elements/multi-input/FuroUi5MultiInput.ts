import { type FieldConstraints, ARRAY, type FieldNode, STRING, StringValue } from "@furo/open-models";
import MultiInput, { type MultiInputTokenDeleteEventDetail } from "@ui5/webcomponents/dist/MultiInput.js";
import Token from "@ui5/webcomponents/dist/Token.js";

import { FieldNodeValueState } from "@/lib/open-models/FieldNodeValueState";
import { ReadonlyState } from "@/lib/open-models/ReadonlyState";
import { FuroFatString, type IFuroFatString } from "@/models";

/**
 *
 * The 'furo-ui5-multi-input' component lets the user enter and edit a list of strings with data binding.
 *
 * It supports all features from the [SAP ui5 MultiInput element](https://ui5.github.io/webcomponents/components/MultiInput/).
 * Each bound array element is rendered as a deletable `ui5-token`. Typing a value and committing it
 * (Enter / focus-out → `change`) appends an element to the model; deleting a token (`token-delete`)
 * removes the matching element from the model. The model is the single source of truth — tokens are
 * (re)rendered from the array whenever it changes.
 *
 * You can bind a repeated `string` type: an array of `primitives.STRING`, of `furo.fat.String`, or of
 * `google.protobuf.StringValue`.
 *
 * ## supported meta and constraints
 * - **readonly: true** , set the element to readonly
 * - **required: true** , set the element to required
 * - **max:"number"** set the maximum number of characters available in the input field.
 *
 * @summary Text input supporting multiple values displayed as tokens.
 * @keywords multi-input, tokens, tags, multiple, values, input, form
 * @category Form
 * @usecase Use when users need to enter multiple freeform values displayed as tokens.
 * @related furo-ui5-multi-combobox, furo-ui5-text-input
 * @tagname furo-ui5-multi-input
 */
export class FuroUi5MultiInput extends MultiInput {
  private readonly valueStateManager: FieldNodeValueState = new FieldNodeValueState(this);

  private readonlyState: ReadonlyState = new ReadonlyState(this);

  private _model: ARRAY<STRING, string> | ARRAY<FuroFatString, IFuroFatString> | ARRAY<StringValue, string> = ARRAY.Builder(STRING, []);

  /**
   * Maps each rendered `ui5-token` back to its array-element node, so `token-delete`
   * can remove the right element via the node's own `__meta.deleteArrayNode()`.
   */
  private tokenToNode: WeakMap<HTMLElement, FieldNode> = new WeakMap<HTMLElement, FieldNode>();

  /**
   * The token instances we created, in render order. Removal tracks these exact
   * instances rather than querying the DOM: UI5's `tokens` slot uses *individual slots*,
   * so once the MultiInput renders it rewrites each child's `slot` attribute to
   * `tokens-1`, `tokens-2`, … A `querySelectorAll('ui5-token[slot="tokens"]')` therefore
   * matches nothing in a real browser, leaving the old tokens in place and duplicating
   * them on every rebuild.
   */
  private renderedTokens: Token[] = [];

  public get model(): ARRAY<STRING, string> | ARRAY<FuroFatString, IFuroFatString> | ARRAY<StringValue, string> {
    return this._model;
  }

  /**
   * Use this to bind a model field by attribute.
   *
   * @typeref ARRAY - "@furo/open-models/"
   * @typeref STRING - "@furo/open-models/"
   * @typeref StringValue - "@furo/open-models/"
   * @typeref FuroFatString - "@/models/index.js"
   * @typeref IFuroFatString - "@/models/index.js"
   * @public
   */
  public set model(value: ARRAY<STRING, string> | ARRAY<FuroFatString, IFuroFatString> | ARRAY<StringValue, string>) {
    this.bindData(value);
  }

  /**
   * The bound array typed as a single representative `ARRAY<FuroFatString, IFuroFatString>`
   * so the generic array methods (forEach / add / delete) are callable without
   * union-signature errors. Safe across all three element types because each exposes a
   * `string` `value` *setter* (uniform write) and a `value` *getter* whose result
   * stringifies to the element's text (uniform read via `toString()`).
   */
  private get _arr(): ARRAY<FuroFatString, IFuroFatString> {
    return this._model as unknown as ARRAY<FuroFatString, IFuroFatString>;
  }

  /**
   * Connects your data model to this component.
   *
   * @paramref fieldNode - ARRAY - "@furo/open-models/"
   * @paramref fieldNode - STRING - "@furo/open-models/"
   * @paramref fieldNode - StringValue - "@furo/open-models/"
   * @paramref fieldNode - FuroFatString - "@/models/index.js"
   * @paramref fieldNode - IFuroFatString - "@/models/index.js"
   * @public
   */
  public bindData(fieldNode: ARRAY<STRING, string> | ARRAY<FuroFatString, IFuroFatString> | ARRAY<StringValue, string> | undefined) {
    if (fieldNode === undefined || fieldNode === this._model) {
      return;
    }

    /**
     * remove existing listeners
     * - from readonly watcher
     * - from model: "array-changed", "update"
     * - from ui: change, token-delete
     */
    this.readonlyState.detach();
    this.detachModelListeners();
    this.removeEventListener("change", this.writeToModel);
    this.removeEventListener("token-delete", this.onTokenDelete);

    // connect the model
    this._model = fieldNode;

    // listen on state changes on the model
    this.valueStateManager.listenToStateChanges(fieldNode);
    this.readonlyState.listenToStateChanged(fieldNode);

    // listen on changes from the model (structure add/delete + element value edits)
    this.attachModelListeners();

    // listen on changes from UI
    this.addEventListener("change", this.writeToModel);
    this.addEventListener("token-delete", this.onTokenDelete);

    // initial read
    this.readFromModel();

    // constraints
    this.handleConstraints(this._model.__getConstraints());

    // set the placeholder from model if none was set before
    this.placeholder ??= this._model.__placeholder;

    // a11y
    this.accessibleName ??= this._model.__label;
  }

  private handleConstraints(fieldConstraints: FieldConstraints | undefined) {
    if (fieldConstraints !== undefined) {
      // for a11y
      if (fieldConstraints.required) {
        this.required = true;
      }
      if (fieldConstraints.read_only) {
        this.readonly = true;
      }
      if (fieldConstraints.max_length) {
        this.maxlength = fieldConstraints.max_length;
      }
    }
  }

  private attachModelListeners() {
    this._model.__addEventListener("array-changed", this.readFromModel);
    this._model.__addEventListener("update", this.readFromModel);
  }

  private detachModelListeners() {
    this._model.__removeEventListener("array-changed", this.readFromModel);
    this._model.__removeEventListener("update", this.readFromModel);
  }

  /**
   * Renders the tokens from the bound array (model → UI). The array is the single
   * source of truth: the tokens we previously created are removed by instance (not by
   * tag selector — see `renderedTokens`) and recreated in array order.
   */
  private readFromModel = (): void => {
    this.renderedTokens.forEach(token => {
      token.remove();
    });
    this.renderedTokens = [];
    this.tokenToNode = new WeakMap<HTMLElement, FieldNode>();

    this._arr.forEach(element => {
      const token = new Token();
      // `element.value` is a STRING node for FuroFatString and a primitive string for
      // STRING / StringValue — toString() yields the text uniformly for all three.
      token.text = element.value.toString();
      token.slot = "tokens";
      this.appendChild(token);
      this.renderedTokens.push(token);
      this.tokenToNode.set(token, element);
    });
  };

  /**
   * Commits the typed value as a new array element (UI → model). Model listeners are
   * detached around the mutation so the `array-changed` / `update` events
   * it emits don't trigger a cascade of rebuilds — we rebuild once, explicitly.
   */
  private writeToModel = (): void => {
    const typed = this.value;
    if (typed === "") {
      return;
    }
    this.detachModelListeners();
    const element = this._arr.add();
    element.value = typed;
    this.attachModelListeners();
    this.value = "";
    this.readFromModel();
  };

  /**
   * Removes the array elements behind the deleted tokens. All target indices are
   * resolved up front, then deleted highest-index-first so the lower indices stay valid
   * across a multi-token delete. Model listeners are detached around the mutation (the
   * deletes re-index survivors and would otherwise fire a storm of rebuilds); we rebuild
   * once at the end.
   */
  private onTokenDelete = (event: Event): void => {
    const { tokens } = (event as CustomEvent<MultiInputTokenDeleteEventDetail>).detail;
    const indices = tokens
      .map(token => this.tokenToNode.get(token)?.__meta.index)
      .filter((index): index is number => index !== undefined)
      .sort((a, b) => b - a);
    if (indices.length === 0) {
      return;
    }
    this.detachModelListeners();
    indices.forEach(index => {
      this._arr.delete(index);
    });
    this.attachModelListeners();
    this.readFromModel();
  };

  /**
   * @private
   */
  static override get metadata() {
    return { ...super.metadata, tag: "furo-ui5-multi-input" };
  }
}
