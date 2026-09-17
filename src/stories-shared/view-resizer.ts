/**
 * Documentation-only helper: a resizable viewport for stories and dev-playground pages.
 *
 * Wrap anything whose layout reacts to its own width — a `container-type: inline-size` component like
 * `furo-ui5-table-toolbar`, `furo-ui5-form-row` or `furo-ui5-form-group` — and drag the grabber in the
 * bottom right corner to walk it through its breakpoints. The dotted magenta edge marks it as a dev
 * affordance, not part of the component under test.
 *
 * ```html
 * <view-resizer show-width width="380">
 *   <furo-ui5-table-toolbar>…</furo-ui5-table-toolbar>
 * </view-resizer>
 * ```
 *
 * This is deliberately NOT a `furo-ui5-*` component: it lives in `src/stories-shared/`, which is outside
 * every CEM glob, outside `gen-exports`' `src/elements` scan and excluded from the published tarball by
 * the `!dist/stories-shared/**` negation in package.json. It is private to this repo.
 *
 * Attributes:
 * - `width`      initial width; a bare number is read as px (`width="380"` === `width="380px"`)
 * - `min-width`  lower bound for the drag, default `220px`
 * - `direction`  `horizontal` (default), `vertical` or `both`
 * - `show-width` render a live px readout in the bottom left corner
 *
 * CSS custom property `--view-resizer-accent` (default `magenta`) sets the edge and readout colour.
 */

const DIRECTIONS = new Set(["horizontal", "vertical", "both"]);

const STYLES = `
  :host {
    display: block;
    position: relative;
    box-sizing: border-box;
    resize: horizontal;
    overflow: auto;
    max-width: 100%;
    min-width: 220px;
    /* room for the browser's resize grabber */
    padding-block-end: 1rem;
    border-inline-end: 3px dotted var(--view-resizer-accent, magenta);
  }

  :host([hidden]) {
    display: none;
  }

  .readout {
    position: absolute;
    inset-block-end: 0;
    inset-inline-start: 0;
    font-family: var(--sapFontFamily, monospace);
    font-size: 0.6875rem;
    line-height: 1;
    color: var(--view-resizer-accent, magenta);
    pointer-events: none;
    user-select: none;
  }

  .readout[hidden] {
    display: none;
  }
`;

/**
 * Turns `380` into `380px` and leaves any other length (`24rem`, `50%`, …) alone.
 */
const toLength = (value: string): string => (/^\d+(\.\d+)?$/.test(value) ? `${value}px` : value);

class ViewResizer extends HTMLElement {
  static get observedAttributes(): string[] {
    return ["width", "min-width", "direction", "show-width"];
  }

  private readout: HTMLDivElement | null = null;

  private observer: ResizeObserver | null = null;

  connectedCallback(): void {
    if (!this.shadowRoot) {
      const root = this.attachShadow({ mode: "open" });

      const style = document.createElement("style");
      style.textContent = STYLES;

      this.readout = document.createElement("div");
      this.readout.className = "readout";
      // a dev affordance, never part of the accessibility tree of what is being demoed
      this.readout.setAttribute("aria-hidden", "true");

      root.append(style, document.createElement("slot"), this.readout);
    }

    this.applyDirection();
    this.applyMinWidth();
    this.applyWidth();

    // the readout has to follow the drag, which changes no attribute
    this.observer ??= new ResizeObserver(() => {
      this.updateReadout();
    });
    this.observer.observe(this);
  }

  disconnectedCallback(): void {
    this.observer?.disconnect();
  }

  attributeChangedCallback(name: string): void {
    // before connectedCallback there is nothing to sync yet
    if (!this.shadowRoot) return;

    if (name === "width") this.applyWidth();
    else if (name === "min-width") this.applyMinWidth();
    else if (name === "direction") this.applyDirection();
    else this.updateReadout();
  }

  /**
   * Dragging sets an inline width on the host but changes no attribute, so this only ever runs from
   * connect or from an actual `width` attribute change — it cannot clobber a drag.
   */
  private applyWidth(): void {
    const width = this.getAttribute("width");
    this.style.width = width === null ? "" : toLength(width);
  }

  private applyMinWidth(): void {
    const minWidth = this.getAttribute("min-width");
    this.style.minWidth = minWidth === null ? "" : toLength(minWidth);
  }

  private applyDirection(): void {
    const direction = this.getAttribute("direction");
    this.style.resize = direction !== null && DIRECTIONS.has(direction) ? direction : "";
  }

  private updateReadout(): void {
    if (!this.readout) return;

    const show = this.hasAttribute("show-width");
    this.readout.hidden = !show;

    if (show) {
      this.readout.textContent = `${String(Math.round(this.getBoundingClientRect().width))}px`;
    }
  }
}

// a string literal, not a const: the CEM analyzer records the tag name verbatim from this call
if (!customElements.get("view-resizer")) {
  customElements.define("view-resizer", ViewResizer);
}

export { ViewResizer };
