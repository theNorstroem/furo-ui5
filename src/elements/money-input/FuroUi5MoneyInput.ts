import "@ui5/webcomponents/dist/Input.js";
import "@/elements/combobox";

import { type FieldConstraints } from "@furo/open-models";
import { css, type CSSResult, html, LitElement, type PropertyValues } from "lit";

import type { FuroUi5Combobox } from "@/elements/combobox/FuroUi5Combobox";
import { FieldNodeValueState } from "@/lib/open-models/FieldNodeValueState";
import { ModelReaderWriter } from "@/lib/open-models/ModelReaderWriter";
import { MoneyReaderWriters } from "@/lib/open-models/MoneyReaderWriter";
import { ReadonlyState } from "@/lib/open-models/ReadonlyState";
import type { SelectOption } from "@/lib/open-models/signatures";
import { Money as FuroMoney } from "@/models/furo/type/Money";
import { Money as GoogleMoney } from "@/models/google/type/Money";

/**
 * The inner amount control is a plain `ui5-input` (type Number). We only need its
 * `value` (string) and `valueState` for the value-state helper.
 */
interface AmountInput extends HTMLElement {
  value: string;
  valueState: string;
}

/**
 *
 * The `furo-ui5-money-input` binds a `google.type.Money` or `furo.type.Money` field to a
 * composition of an amount input (`ui5-input` type Number) and a currency
 * `furo-ui5-combobox`. The amount round-trips through the model's `units` (INT64) and
 * `nanos` (INT32) fields; the currency is bound to the model's `currencyCode` field.
 *
 * You can offer a fixed currency list with the `currencies` attribute:
 *
 * ```html
 *  <furo-ui5-money-input currencies="CHF,EUR,USD"></furo-ui5-money-input>
 * ```
 *
 * ## supported meta and constraints
 * - **readonly: true** — set the element to readonly
 * - **required: true** — mark the element as required
 *
 * @summary Composite input for a monetary amount together with its currency.
 * @keywords money, currency, amount, price, input, decimal, form
 * @category Form
 * @usecase Use for entering a monetary value together with its currency.
 * @related furo-ui5-number-input, furo-ui5-combobox
 * @tagname furo-ui5-money-input
 */
export class FuroUi5MoneyInput extends LitElement {
  static override properties = {
    amountValue: { type: String, attribute: false },
    readonly: { type: Boolean },
    disabled: { type: Boolean },
    required: { type: Boolean },
    currencies: { type: String },
    placeholder: { type: String },
    accessibleName: { type: String, attribute: "accessible-name" },
  };

  // decimal amount mirrored between the inner amount input and the money reader/writer
  declare amountValue: string;

  declare readonly: boolean;

  declare disabled: boolean;

  declare required: boolean;

  // comma separated ISO 4217 currency codes, e.g. "CHF,EUR,USD"
  declare currencies: string;

  declare placeholder?: string;

  // a11y label, mirrored onto both inner controls (falls back to the model label)
  declare accessibleName?: string;

  constructor() {
    super();
    this.amountValue = "";
    this.readonly = false;
    this.disabled = false;
    this.required = false;
    this.currencies = "";
  }

  private modelReaderWriter: ModelReaderWriter | undefined;

  private moneyReaderWriters: MoneyReaderWriters<FuroUi5MoneyInput> | undefined;

  private valueStateManager: FieldNodeValueState | undefined;

  private readonly readonlyState: ReadonlyState = new ReadonlyState(this);

  // the model currently wired up (kept so a rebind can detach the previous one)
  private _wiredModel: GoogleMoney | FuroMoney | undefined;

  private _model: GoogleMoney | FuroMoney = new GoogleMoney();

  public get model(): GoogleMoney | FuroMoney {
    return this._model;
  }

  /**
   * Use this to bind a model field by attribute.
   *
   * @typeref GoogleMoney - "@/models/google/type/Money"
   * @typeref FuroMoney - "@/models/furo/type/Money"
   * @public
   */
  public set model(value: GoogleMoney | FuroMoney) {
    this.bindData(value);
  }

  private get _amountEl(): AmountInput | null {
    return (this.shadowRoot?.getElementById("amount") ?? null) as AmountInput | null;
  }

  private get _currencyEl(): FuroUi5Combobox | null {
    return (this.shadowRoot?.getElementById("currency") ?? null) as FuroUi5Combobox | null;
  }

  /**
   * Connects your data model to this component.
   *
   * @paramref fieldNode - GoogleMoney - "@/models/google/type/Money"
   * @public
   */
  public bindData(fieldNode: GoogleMoney | FuroMoney | undefined) {
    if (fieldNode === undefined || fieldNode === this._model) {
      return;
    }
    this._model = fieldNode;
    // wiring needs the inner controls; defer until the shadow DOM exists
    if (this.hasUpdated) {
      this._wire();
    }
  }

  override firstUpdated() {
    this._wire();
  }

  override updated(changed: PropertyValues) {
    if (changed.has("currencies")) {
      this._applyCurrencies();
    }
  }

  override disconnectedCallback() {
    super.disconnectedCallback();
    this._wiredModel?.__removeEventListener("update", this.readFromModel);
    this.readonlyState.detach();
    this._amountEl?.removeEventListener("change", this.writeAmount);
  }

  private _wire(): void {
    const amountEl = this._amountEl;
    const currencyEl = this._currencyEl;
    if (amountEl === null || currencyEl === null) {
      return;
    }

    /**
     * remove existing listeners
     * - from readonly watcher
     * - from previously wired model: "update"
     * - from ui: change
     */
    this._wiredModel?.__removeEventListener("update", this.readFromModel);
    this.readonlyState.detach();
    amountEl.removeEventListener("change", this.writeAmount);

    // init the amount reader/writer
    this.moneyReaderWriters = new MoneyReaderWriters<FuroUi5MoneyInput>(this, "amountValue", this._model);
    this.modelReaderWriter = new ModelReaderWriter(this._model, this.moneyReaderWriters.getWriters(), this.moneyReaderWriters.getReaders());

    // value-state goes on the amount input
    this.valueStateManager = new FieldNodeValueState(amountEl);
    this.valueStateManager.listenToStateChanges(this._model);

    // readonly is handled on the host and reflected to both inner controls
    this.readonlyState.listenToStateChanged(this._model);

    // listen on changes from the model
    this._model.__addEventListener("update", this.readFromModel);

    // listen on changes from UI (commit on enter / focusout)
    amountEl.addEventListener("change", this.writeAmount);

    // bind the currency child to the reused combobox
    currencyEl.bindData(this._model.currencyCode);
    this._applyCurrencies();

    // initial read
    this.readFromModel();

    // constraints
    this.handleConstraints(this._model.__getConstraints());

    // a11y
    this.accessibleName ??= this._model.__label;

    this._wiredModel = this._model;
  }

  private _applyCurrencies(): void {
    const currencyEl = this._currencyEl;
    if (currencyEl === null || this.currencies.trim() === "") {
      return;
    }
    const options: SelectOption[] = this.currencies
      .split(",")
      .map((c) => c.trim())
      .filter((id) => id !== "")
      .map((id) => ({ id, displayName: id }));
    currencyEl.optionList = options;
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
    }
  }

  private readFromModel = (): void => {
    this.modelReaderWriter?.readModel();
  };

  private writeAmount = (): void => {
    const amountEl = this._amountEl;
    if (amountEl === null) {
      return;
    }
    this.amountValue = amountEl.value;
    this.modelReaderWriter?.writeModel();
    this.dispatchEvent(new CustomEvent("change", { bubbles: true, composed: true }));
  };

  static override styles: CSSResult | CSSResult[] = css`
    :host {
      display: inline-flex;
      align-items: center;
      gap: var(--spacing-xs, 4px);
      width: 190px;
    }

    #amount {
      flex: 1 1 auto;
      min-width: 0;
    }

    #currency {
      flex: 0 0 90px;
      width: 90px;
      min-width: 90px;
    }
  `;

  override render() {
    return html`
      <ui5-input
        id="amount"
        type="Number"
        accessible-name="${this.accessibleName ?? "amount"}"
        .value="${this.amountValue}"
        placeholder="${this.placeholder ?? ""}"
        ?readonly="${this.readonly}"
        ?disabled="${this.disabled}"
        ?required="${this.required}"
      ></ui5-input>
      <furo-ui5-combobox
        id="currency"
        accessible-name="${this.accessibleName ? `${this.accessibleName} currency` : "currency"}"
        ?readonly="${this.readonly}"
        ?disabled="${this.disabled}"
        ?required="${this.required}"
      ></furo-ui5-combobox>
    `;
  }
}
