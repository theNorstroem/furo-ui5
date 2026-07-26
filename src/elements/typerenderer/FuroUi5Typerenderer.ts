import { ARRAY, type FieldNode, MAP } from "@furo/open-models";
import { LitElement, nothing, type PropertyValues } from "lit";
import { state } from "lit/decorators.js";
import { repeat } from "lit/directives/repeat.js";
import { html, unsafeStatic } from "lit/static-html.js";

/**
 * `primitives.` prefixed type names are open-models internals and must be mapped back to the
 * proto scalar spelling the renderers are named after.
 */
const PRIMITIVE_PREFIX = "primitives.";

/**
 * Attributes that belong to the typerenderer itself and are never forwarded to the renderer.
 */
const NOT_FORWARDED = new Set(["context", "renderer-timeout", "renderer-missing", "class", "style", "id", "slot", "hidden"]);

/**
 * The typerenderer renders into the light DOM and therefore has no `:host` rule of its own, so
 * `display: contents` comes from an adopted stylesheet instead. The document gets it here; a
 * typerenderer inside someone's shadow root adopts the very same sheet into that root on connect
 * (see `_adoptHostStyles`), because a document level sheet does not cross a shadow boundary.
 */
const hostStyles = new CSSStyleSheet();
hostStyles.replaceSync(`
  furo-ui5-typerenderer {
    display: contents;
  }

  furo-ui5-typerenderer[hidden] {
    display: none;
  }
`);
document.adoptedStyleSheets = [...document.adoptedStyleSheets, hostStyles];

/**
 * How a resolved renderer tag is used: bound once to the node itself, or repeated over the
 * items of an ARRAY / the entries of a MAP.
 */
type RenderKind = "single" | "array" | "map";

interface Candidate {
  tag: string;
  kind: RenderKind;
}

type RenderPlan =
  | { kind: "single"; tag: string; node: FieldNode }
  | { kind: "array"; tag: string; items: FieldNode[] }
  | { kind: "map"; tag: string; entries: { key: string; node: FieldNode }[] };

/**
 * The structural part of a `FieldDescriptor` we need. `FieldDescriptor.FieldConstructor` is
 * typed `any` upstream, so it is read through `unknown` here.
 */
interface NodeFieldDescriptor {
  FieldConstructor?: unknown;
  ValueConstructor?: unknown;
}

/**
 * The `furo-ui5-typerenderer` takes **any** field node and renders the type renderer that matches
 * the node's `__meta.typeName` in the requested `context`. Use it wherever the concrete type is
 * not known at authoring time — generic tables, generated forms, `google.protobuf.Any` payloads.
 *
 * ## Naming convention
 *
 * A renderer tag is `<context>-<type-slug>`:
 *
 * ```text
 * display  +  google.protobuf.Timestamp  ->  display-google-protobuf-timestamp
 * cell     +  primitives.INT64           ->  cell-int64
 * ```
 *
 * The type slug is the fully qualified proto type name, lowercased, with `.` and `_` replaced by
 * `-`. Open-models primitives (`primitives.STRING`, `primitives.INT64`, …) lose their
 * `primitives.` prefix, and `primitives.BOOLEAN` maps to `bool` to match the shipped renderers.
 *
 * | field type              | context   | resolved tag                        |
 * | ----------------------- | --------- | ----------------------------------- |
 * | `primitives.STRING`     | `display` | `display-string`                    |
 * | `primitives.BOOLEAN`    | `cell`    | `cell-bool`                         |
 * | `furo.fat.String`       | `celledit`| `celledit-furo-fat-string`          |
 * | `google.protobuf.Timestamp` | `form`| `form-google-protobuf-timestamp`    |
 *
 * ## Contexts
 *
 * `@furo/ui5` ships renderers for **display**, **cell**, **celledit** and **form**. Any other
 * string works too — `context="tile"` resolves `tile-string`, `tile-furo-fat-string`, … — you just
 * have to provide those renderers yourself. The default context is **display**.
 *
 * ## Importing the renderers is up to you
 *
 * This element never imports a renderer. It only resolves a tag name and binds the node to it, so
 * your bundle stays free of the ~120 renderers you do not use. Import what you need:
 *
 * ```js
 * import "@furo/ui5/type-renderers/display-string";
 * import "@furo/ui5/type-renderers/display-furo-fat-string";
 * ```
 *
 * If the resolved tag is not registered within `renderer-timeout` ms (300 by default), the element
 * logs an error, sets a `renderer-missing` attribute listing the tags it tried, and fires a
 * `renderer-missing` event. Nothing is rendered — the surrounding layout stays intact.
 *
 * ## Basic usage
 *
 * ```html
 * <furo-ui5-typerenderer .model="${this.person.displayName}"></furo-ui5-typerenderer>
 * <furo-ui5-typerenderer context="cell" .model="${this.person.age}"></furo-ui5-typerenderer>
 * ```
 *
 * As with every bindable element in this package, `bindData()` is equivalent to setting `model`:
 *
 * ```js
 * document.querySelector("furo-ui5-typerenderer").bindData(person.displayName);
 * ```
 *
 * ## Repeated fields
 *
 * For an `ARRAY<T, I>` the item type decides the tag and `-array` is appended. If that renderer
 * does not exist, the plain item renderer is repeated once per item:
 *
 * ```text
 * ARRAY<STRING, string>, context="display"
 * 1. display-string-array   -> bound to the whole ARRAY node
 * 2. display-string         -> one element per item, bound to the item node
 * 3. neither                -> renderer-missing
 * ```
 *
 * ```html
 * <furo-ui5-typerenderer .model="${this.person.emails}"></furo-ui5-typerenderer>
 * ```
 *
 * ## Map fields
 *
 * A `MAP<K, T, I>` works the same way with a `-map` suffix on the **value** type. In the fallback
 * the map key is put on each rendered element as a `map-key` attribute, so a renderer can display
 * it:
 *
 * ```text
 * MAP<string, STRING, string>, context="display"
 * 1. display-string-map -> bound to the whole MAP node
 * 2. display-string     -> <display-string map-key="de">, <display-string map-key="en">, …
 * 3. neither            -> renderer-missing
 * ```
 *
 * ## Overriding renderers
 *
 * `rendererOverrides` replaces individual renderers for one instance. The key is always the tag
 * the convention would have produced:
 *
 * ```html
 * <furo-ui5-typerenderer .model="${this.person.tags}" .rendererOverrides="${this.myRenderers}"></furo-ui5-typerenderer>
 * ```
 *
 * ```js
 * this.myRenderers = { "display-string": "my-string-display-renderer", "display-string-array": "some-other-component" };
 * ```
 *
 * For app wide overrides set `defaultOverrides` once at bootstrap. Instance overrides win over
 * the app wide ones, which win over the convention:
 *
 * ```js
 * import { FuroUi5Typerenderer } from "@furo/ui5/typerenderer";
 * FuroUi5Typerenderer.defaultOverrides = { "display-string": "my-string-display-renderer", "cell-google-protobuf-timestamp": "my-relative-time-cell" };
 * ```
 *
 * ## Layout
 *
 * The renderer is created in the **light DOM** and the typerenderer itself is `display: contents`.
 * The renderer therefore participates in the surrounding grid, flex or table layout exactly as if
 * you had written it there yourself, and your application CSS still reaches it. The flip side is
 * that the typerenderer has no box of its own — padding, border or width on
 * `furo-ui5-typerenderer` have no effect; style the renderer instead.
 *
 * Every attribute you put on the typerenderer, except its own (`context`, `renderer-timeout`,
 * `renderer-missing`) and `class` / `style` / `id` / `slot` / `hidden`, is copied onto the rendered
 * renderer:
 *
 * ```html
 * <furo-ui5-typerenderer context="cell" value-state="Error" .model="${this.person.age}">
 * </furo-ui5-typerenderer>
 * <!-- renders: <cell-int64 value-state="Error"></cell-int64> -->
 * ```
 *
 * @fires {CustomEvent<{ tags: string[]; context: string; typeName: string }>} renderer-missing - Fired when no renderer was registered for the bound node within `renderer-timeout`.
 * @summary Renders any field node with the type renderer matching its type and the requested context.
 * @keywords typerenderer, dynamic, renderer, any, generic, display, cell, celledit, form
 * @category Data
 * @usecase Use when the type of a field is not known at authoring time.
 * @related furo-ui5-table, furo-ui5-form-row
 * @tagname furo-ui5-typerenderer
 */
export class FuroUi5Typerenderer extends LitElement {
  /**
   * Application wide renderer overrides, keyed by the tag the naming convention produces.
   * Instance level `rendererOverrides` take precedence over these.
   *
   * @public
   */
  static defaultOverrides: Record<string, string> = {};

  static override properties = {
    context: { type: String },
    rendererOverrides: { type: Object, attribute: false },
    rendererTimeout: { type: Number, attribute: "renderer-timeout" },
  };

  /**
   * The render context. `display`, `cell`, `celledit` and `form` are shipped with this package,
   * any other string resolves renderers you provide yourself.
   */
  declare context: string;

  /**
   * Renderer overrides for this instance, keyed by the tag the naming convention produces,
   * e.g. `{ "display-string": "my-string-display-renderer" }`.
   */
  declare rendererOverrides?: Record<string, string>;

  /**
   * How long to wait for an unregistered renderer to show up, in milliseconds.
   */
  declare rendererTimeout: number;

  constructor() {
    super();
    this.context = "display";
    this.rendererTimeout = 300;
  }

  @state()
  private _plan: RenderPlan | undefined = undefined;

  private _model: FieldNode | undefined = undefined;

  // the candidate a plan was built from, so array/map changes can rebuild without resolving again
  private _activeCandidate: Candidate | undefined = undefined;

  // the node whose array/map changes we follow, and whether we are currently attached to it
  private _observedNode: FieldNode | undefined = undefined;

  private _listening = false;

  // discards async resolutions that lost the race against a newer bind
  private _resolveToken = 0;

  // set by bindData, consumed in willUpdate so that model, context and overrides are all applied
  // before the renderer is resolved, regardless of the order they were assigned in
  private _needsResolve = false;

  public get model(): FieldNode | undefined {
    return this._model;
  }

  /**
   * Use this to bind a model field by attribute.
   *
   * @typeref FieldNode - "@furo/open-models/"
   * @public
   */
  public set model(value: FieldNode | undefined) {
    this.bindData(value);
  }

  /**
   * Connects your data model to this component. Accepts a field node of any type, including
   * repeated (`ARRAY`) and map (`MAP`) fields.
   *
   * @paramref fieldNode - FieldNode - "@furo/open-models/"
   * @public
   */
  public bindData(fieldNode: FieldNode | undefined): void {
    if (fieldNode === this._model) {
      return;
    }
    this._model = fieldNode;
    this._needsResolve = true;
    this.requestUpdate();
  }

  /**
   * Forwards the focus to the rendered renderer.
   *
   * @public
   */
  override focus(options?: FocusOptions): void {
    const first = this.firstElementChild;
    if (first instanceof HTMLElement) {
      first.focus(options);
    } else {
      super.focus(options);
    }
  }

  override connectedCallback(): void {
    super.connectedCallback();
    this._adoptHostStyles();
    this._attachListener();
    // the array/map may have changed while we were detached
    if (this._listening) {
      this._rebuildItems();
    }
  }

  override disconnectedCallback(): void {
    super.disconnectedCallback();
    this._detachListener();
  }

  override willUpdate(changed: PropertyValues): void {
    // a different context or override map means a different renderer
    if (this._needsResolve || changed.has("context") || changed.has("rendererOverrides")) {
      this._needsResolve = false;
      this._resolve();
    }
  }

  override updated(): void {
    this._forwardAttributes();
  }

  // the typerenderer renders into the light DOM so application CSS reaches the renderer
  override createRenderRoot(): HTMLElement {
    return this;
  }

  /*
   * The renderer tag is only known at runtime, so the templates below come from `lit/static-html`
   * and interpolate the tag name via `unsafeStatic`. eslint-plugin-lit parses every `html` tag as
   * plain lit-html and cannot model that, hence the two disabled rules.
   */

  /* eslint-disable lit/binding-positions, lit/no-invalid-html */
  override render() {
    const plan = this._plan;
    if (plan === undefined) {
      return nothing;
    }

    const tag = unsafeStatic(plan.tag);

    if (plan.kind === "array") {
      return html`${repeat(
        plan.items,
        item => item,
        item => html`
          <${tag} .model="${item}"></${tag}>`
      )}`;
    }

    if (plan.kind === "map") {
      return html`${repeat(
        plan.entries,
        entry => entry.key,
        entry => html`
          <${tag} map-key="${entry.key}" .model="${entry.node}"></${tag}>`
      )}`;
    }

    return html`
      <${tag} .model="${plan.node}"></${tag}>`;
  }

  /* eslint-enable lit/binding-positions, lit/no-invalid-html */

  /**
   * Resolves the renderer for the currently bound node. Stays synchronous whenever a candidate
   * is already registered, which is the normal case for top level renderer imports.
   *
   * @private
   */
  private _resolve(): void {
    const token = ++this._resolveToken;
    this._detachListener();
    this._observedNode = undefined;

    const node = this._model;
    if (node === undefined) {
      this._commit(undefined, undefined);
      return;
    }

    const candidates = this._candidates(node);
    if (candidates === undefined) {
      console.error("furo-ui5-typerenderer: could not determine the item type of the bound node. Bind a non empty ARRAY/MAP or a node with a parent.", this);
      this._commit(undefined, undefined);
      return;
    }

    const registered = candidates.find(candidate => customElements.get(candidate.tag) !== undefined);
    if (registered !== undefined) {
      this._commit(node, registered);
      return;
    }

    void this._resolveLater(token, node, candidates);
  }

  /**
   * Waits for one of the candidates to be registered, bounded by `rendererTimeout`, then picks
   * the highest priority one that made it.
   *
   * @private
   */
  private async _resolveLater(token: number, node: FieldNode, candidates: Candidate[]): Promise<void> {
    await Promise.race([
      Promise.any(candidates.map(candidate => customElements.whenDefined(candidate.tag))).catch(() => undefined),
      new Promise<void>(resolve => {
        setTimeout(resolve, this.rendererTimeout);
      }),
    ]);

    // a newer bind or context change happened while we were waiting
    if (token !== this._resolveToken) {
      return;
    }

    const registered = candidates.find(candidate => customElements.get(candidate.tag) !== undefined);
    if (registered === undefined) {
      this._reportMissing(node, candidates);
      return;
    }
    this._commit(node, registered);
  }

  /**
   * @private
   */
  private _commit(node: FieldNode | undefined, candidate: Candidate | undefined): void {
    this.removeAttribute("renderer-missing");
    this._activeCandidate = candidate;

    if (node === undefined || candidate === undefined) {
      this._plan = undefined;
      return;
    }

    this._plan = FuroUi5Typerenderer._buildPlan(node, candidate);
    // only the fallback modes own the item list, a dedicated -array/-map renderer observes itself
    if (candidate.kind !== "single") {
      this._observedNode = node;
      this._attachListener();
    }
  }

  /**
   * @private
   */
  private static _buildPlan(node: FieldNode, candidate: Candidate): RenderPlan {
    if (candidate.kind === "array") {
      return { kind: "array", tag: candidate.tag, items: [...(node as ARRAY<FieldNode, unknown>).value] };
    }
    if (candidate.kind === "map") {
      const entries = [...(node as MAP<string, FieldNode, unknown>).value.entries()].map(([key, value]) => ({
        key,
        node: value,
      }));
      return { kind: "map", tag: candidate.tag, entries };
    }
    return { kind: "single", tag: candidate.tag, node };
  }

  /**
   * Builds the candidate list for a node, in descending priority.
   *
   * @private
   */
  private _candidates(node: FieldNode): Candidate[] | undefined {
    if (node instanceof ARRAY) {
      const itemType = FuroUi5Typerenderer._itemTypeName(node as ARRAY<FieldNode, unknown>);
      if (itemType === undefined) {
        return undefined;
      }
      const base = this._conventionalTag(itemType);
      return [
        { tag: this._applyOverrides(`${base}-array`), kind: "single" },
        { tag: this._applyOverrides(base), kind: "array" },
      ];
    }

    if (node instanceof MAP) {
      const valueType = FuroUi5Typerenderer._valueTypeName(node as MAP<string, FieldNode, unknown>);
      if (valueType === undefined) {
        return undefined;
      }
      const base = this._conventionalTag(valueType);
      return [
        { tag: this._applyOverrides(`${base}-map`), kind: "single" },
        { tag: this._applyOverrides(base), kind: "map" },
      ];
    }

    return [{ tag: this._applyOverrides(this._conventionalTag(node.__meta.typeName)), kind: "single" }];
  }

  /**
   * `context` + the slugified type name, e.g. `display-google-protobuf-timestamp`.
   *
   * @private
   */
  private _conventionalTag(typeName: string): string {
    const bare = typeName.startsWith(PRIMITIVE_PREFIX) ? typeName.slice(PRIMITIVE_PREFIX.length) : typeName;
    // the shipped renderer is named after the proto scalar `bool`, open-models calls it BOOLEAN
    const normalized = bare === "BOOLEAN" ? "bool" : bare;
    return `${this.context}-${normalized.replaceAll(".", "-").replaceAll("_", "-").toLowerCase()}`;
  }

  /**
   * @private
   */
  private _applyOverrides(conventionalTag: string): string {
    return (
      FuroUi5Typerenderer._lookup(this.rendererOverrides, conventionalTag) ??
      FuroUi5Typerenderer._lookup(FuroUi5Typerenderer.defaultOverrides, conventionalTag) ??
      conventionalTag
    );
  }

  /**
   * @private
   */
  private static _lookup(overrides: Record<string, string> | undefined, conventionalTag: string): string | undefined {
    if (overrides === undefined || !Object.hasOwn(overrides, conventionalTag)) {
      return undefined;
    }
    return overrides[conventionalTag];
  }

  /**
   * `ARRAY.__meta.typeName` is the constant `primitives.ARRAY<>` and carries no item type, so the
   * item type comes from the first item or, for an empty array, from the parent's field descriptor.
   *
   * @private
   */
  private static _itemTypeName(node: ARRAY<FieldNode, unknown>): string | undefined {
    const first = node.atT(0);
    if (first !== undefined) {
      return first.__meta.typeName;
    }
    // For an empty array, `ARRAY.__getConstructor()` resolves the item constructor from either
    // `ARRAY.Builder()` or the parent's field descriptor. It is private upstream — same access as
    // `FuroUi5SegmentedButton._detectModelItemType`. It throws on a parentless built-by-hand array.
    try {
      return FuroUi5Typerenderer._typeNameOfConstructor(
        (
          node as unknown as {
            __getConstructor?: () => unknown;
          }
        ).__getConstructor?.()
      );
    } catch {
      return undefined;
    }
  }

  /**
   * `MAP.__meta.typeName` is never assigned by open-models, so the value type comes from the first
   * entry or, for an empty map, from the parent descriptor's `ValueConstructor`.
   *
   * @private
   */
  private static _valueTypeName(node: MAP<string, FieldNode, unknown>): string | undefined {
    const first = node.__childNodes.at(0);
    if (first !== undefined) {
      return first.__meta.typeName;
    }
    return FuroUi5Typerenderer._typeNameOfConstructor(FuroUi5Typerenderer._descriptorOf(node)?.ValueConstructor);
  }

  /**
   * @private
   */
  private static _descriptorOf(node: FieldNode): NodeFieldDescriptor | undefined {
    const parent = node.__parentNode;
    if (parent === undefined) {
      return undefined;
    }
    return parent.__meta.nodeFields.find(field => field.fieldName === node.__meta.fieldName);
  }

  /**
   * Probes a field node constructor for the type name it declares.
   *
   * @private
   */
  private static _typeNameOfConstructor(constructor: unknown): string | undefined {
    if (typeof constructor !== "function") {
      return undefined;
    }
    try {
      return new (constructor as new () => FieldNode)().__meta.typeName;
    } catch {
      return undefined;
    }
  }

  /**
   * @private
   */
  private _reportMissing(node: FieldNode, candidates: Candidate[]): void {
    const tags = candidates.map(candidate => candidate.tag);
    const typeName = node.__meta.typeName;

    this._plan = undefined;
    this._activeCandidate = undefined;
    this.setAttribute("renderer-missing", tags.join(" "));

    console.error(
      `furo-ui5-typerenderer: no renderer registered for "${typeName}" in context "${this.context}". Tried ${tags.join(", ")}. Did you import it?`,
      this
    );

    this.dispatchEvent(
      new CustomEvent("renderer-missing", {
        bubbles: true,
        composed: true,
        detail: { tags, context: this.context, typeName },
      })
    );
  }

  /**
   * A document level sheet does not cross a shadow boundary, so a typerenderer used inside another
   * component's shadow root would lose `display: contents` and lay out as an inline box. Adopting
   * the same `CSSStyleSheet` instance into that root fixes it at no memory cost, and keeps the rule
   * in the cascade where an author can still override it.
   *
   * @private
   */
  private _adoptHostStyles(): void {
    const root = this.getRootNode();
    if (root instanceof ShadowRoot && !root.adoptedStyleSheets.includes(hostStyles)) {
      root.adoptedStyleSheets = [...root.adoptedStyleSheets, hostStyles];
    }
  }

  /**
   * @private
   */
  private _attachListener(): void {
    const node = this._observedNode;
    if (node === undefined || this._listening || this._activeCandidate === undefined) {
      return;
    }
    node.__addEventListener(this._activeCandidate.kind === "map" ? "this-map-changed" : "this-array-changed", this._rebuildItems);
    this._listening = true;
  }

  /**
   * @private
   */
  private _detachListener(): void {
    const node = this._observedNode;
    if (node === undefined || !this._listening) {
      return;
    }
    node.__removeEventListener("this-array-changed", this._rebuildItems);
    node.__removeEventListener("this-map-changed", this._rebuildItems);
    this._listening = false;
  }

  /**
   * @private
   */
  private _rebuildItems = (): void => {
    const node = this._model;
    const candidate = this._activeCandidate;
    if (node === undefined || candidate === undefined) {
      return;
    }
    this._plan = FuroUi5Typerenderer._buildPlan(node, candidate);
  };

  /**
   * Copies the host attributes onto the rendered renderer(s), so `value-state`, `label`, … reach
   * the renderer without the typerenderer having to know about them.
   *
   * @private
   */
  private _forwardAttributes(): void {
    const own = [...this.attributes].filter(attribute => !NOT_FORWARDED.has(attribute.name));
    if (own.length === 0) {
      return;
    }
    for (const child of this.children) {
      for (const attribute of own) {
        child.setAttribute(attribute.name, attribute.value);
      }
    }
  }
}
