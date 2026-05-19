import "@/Assets";
import "./index";

import { fixture, fixtureCleanup } from "@open-wc/testing-helpers";
import { chaiA11yAxe } from "chai-a11y-axe";
import { html } from "lit";
import { afterEach, assert, chai, describe, it, test } from "vitest";

import { FuroUi5ZGrid } from "./FuroUi5ZGrid";

import { delay } from "@/util/test-helpers/delay";

chai.use(chaiA11yAxe);

// The ResizeObserver in FuroUi5ZGrid is wired up inside updateComplete.then(...) and
// dispatches through requestAnimationFrame. Empirically 50 ms is too tight in headless
// Chromium under slowMo: 100 — using 120 ms here gives the observer two animation frames
// plus comfortable headroom without slowing the suite materially.
const RESIZE_TICK_MS = 120;

describe("FuroUi5ZGrid Component", () => {
  afterEach(() => {
    fixtureCleanup();
  });

  describe("smoke", () => {
    it("should be a furo-ui5-z-grid element", async () => {
      // keep this test on top, so you can recognize a wrong assignment
      const el: FuroUi5ZGrid = await fixture(html`<furo-ui5-z-grid></furo-ui5-z-grid>`);
      assert.equal(el.nodeName.toLowerCase(), "furo-ui5-z-grid");
    });

    it("should be ok", async () => {
      const el: FuroUi5ZGrid = await fixture(html`<furo-ui5-z-grid></furo-ui5-z-grid>`);
      assert.isOk(el);
    });

    test("a11y", async () => {
      const el: FuroUi5ZGrid = await fixture(html`<furo-ui5-z-grid></furo-ui5-z-grid>`);
      await assert.isAccessible(el);
    });
  });

  describe("layout", () => {
    it("should render an internal .grid container that uses display: grid", async () => {
      const el: FuroUi5ZGrid = await fixture(html`<furo-ui5-z-grid></furo-ui5-z-grid>`);
      await el.updateComplete;
      const gridDiv = el.shadowRoot!.querySelector(".grid");
      assert.isOk(gridDiv, ".grid container must exist in the shadow root");
      const styles = window.getComputedStyle(gridDiv);
      assert.equal(styles.display, "grid");
    });

    it("should expose a slot inside the .grid container", async () => {
      const el: FuroUi5ZGrid = await fixture(html`
        <furo-ui5-z-grid>
          <span data-testid="child-a">A</span>
          <span data-testid="child-b">B</span>
        </furo-ui5-z-grid>
      `);
      await el.updateComplete;
      const slot = el.shadowRoot!.querySelector("slot");
      assert.isOk(slot);
      const assigned = slot.assignedElements();
      assert.equal(assigned.length, 2);
      assert.equal(assigned[0].getAttribute("data-testid"), "child-a");
      assert.equal(assigned[1].getAttribute("data-testid"), "child-b");
    });

    it("should compute grid-template-columns as a repeated track list on the .grid container", async () => {
      // Force a size larger than size-s so the auto-fill repeats into multiple tracks.
      const parent: HTMLDivElement = await fixture(html`
        <div style="width: 1200px; height: 200px;">
          <furo-ui5-z-grid></furo-ui5-z-grid>
        </div>
      `);
      const el = parent.querySelector("furo-ui5-z-grid");
      assert.isOk(el);
      await el.updateComplete;
      await delay(RESIZE_TICK_MS);
      const gridDiv = el.shadowRoot!.querySelector(".grid");
      assert.isOk(gridDiv);
      const styles = window.getComputedStyle(gridDiv);
      // grid-template-columns resolves to an explicit list of px tracks. We expect more
      // than one track because auto-fill on a 1200px container with ~6-8rem minimums
      // will always produce several columns.
      const tracks = styles.gridTemplateColumns.split(/\s+/).filter((t) => /\dpx$/.test(t));
      assert.isAbove(
        tracks.length,
        1,
        `expected multiple grid columns at width 1200, got ${String(tracks.length)} (${styles.gridTemplateColumns})`,
      );
    });
  });

  describe("ResizeObserver-driven size attribute", () => {
    it("should set size=size-s on a narrow (400px) container", async () => {
      const parent: HTMLDivElement = await fixture(html`
        <div style="width: 400px; height: 200px;">
          <furo-ui5-z-grid></furo-ui5-z-grid>
        </div>
      `);
      const el = parent.querySelector("furo-ui5-z-grid");
      assert.isOk(el);
      await el.updateComplete;
      await delay(RESIZE_TICK_MS);
      assert.equal(el.getAttribute("size"), "size-s");
    });

    it("should switch size attribute when the parent width changes", async () => {
      const parent: HTMLDivElement = await fixture(html`
        <div style="width: 400px; height: 200px;">
          <furo-ui5-z-grid></furo-ui5-z-grid>
        </div>
      `);
      const el = parent.querySelector("furo-ui5-z-grid");
      assert.isOk(el);
      await el.updateComplete;
      await delay(RESIZE_TICK_MS);
      assert.equal(el.getAttribute("size"), "size-s", "initial size should be size-s at 400px");

      parent.style.width = "1500px";
      await delay(RESIZE_TICK_MS);
      assert.equal(el.getAttribute("size"), "size-xl", "size should grow to size-xl above 1439px");

      parent.style.width = "800px";
      await delay(RESIZE_TICK_MS);
      assert.equal(el.getAttribute("size"), "size-m", "size should shrink to size-m between 600 and 1023");

      parent.style.width = "1200px";
      await delay(RESIZE_TICK_MS);
      assert.equal(el.getAttribute("size"), "size-l", "size should be size-l between 1023 and 1439");
    });
  });

  describe("child span attributes", () => {
    it("should apply grid-column: span 3 to a child with hspan=3 at size-l", async () => {
      // size-l requires container width between 1024 and 1439 px.
      const parent: HTMLDivElement = await fixture(html`
        <div style="width: 1200px; height: 200px;">
          <furo-ui5-z-grid>
            <div data-testid="child" hspan="3" style="background: red;">hspan-3</div>
          </furo-ui5-z-grid>
        </div>
      `);
      const el = parent.querySelector("furo-ui5-z-grid");
      assert.isOk(el);
      await el.updateComplete;
      await delay(RESIZE_TICK_MS);
      assert.equal(el.getAttribute("size"), "size-l");

      const child = parent.querySelector('[data-testid="child"]');
      assert.isOk(child);
      const styles = window.getComputedStyle(child);
      // The CSS rule is `grid-column: auto / span 3` which resolves to gridColumnEnd "span 3".
      assert.equal(styles.gridColumnEnd, "span 3", `gridColumnEnd was '${styles.gridColumnEnd}'`);
    });

    it("should apply grid-column: span 4 to a child with vspan=2 producing grid-row span 8", async () => {
      const parent: HTMLDivElement = await fixture(html`
        <div style="width: 1200px; height: 400px;">
          <furo-ui5-z-grid>
            <div data-testid="child" vspan="2" style="background: red;">vspan-2</div>
          </furo-ui5-z-grid>
        </div>
      `);
      const el = parent.querySelector("furo-ui5-z-grid");
      assert.isOk(el);
      await el.updateComplete;
      await delay(RESIZE_TICK_MS);

      const child = parent.querySelector('[data-testid="child"]');
      assert.isOk(child);
      const styles = window.getComputedStyle(child);
      // CSS: `grid-row: auto / span 8`
      assert.equal(styles.gridRowEnd, "span 8", `gridRowEnd was '${styles.gridRowEnd}'`);
    });
  });

  describe("responsive visibility", () => {
    it("should hide a child with hide-on-size-small when host has size-s", async () => {
      const parent: HTMLDivElement = await fixture(html`
        <div style="width: 400px; height: 200px;">
          <furo-ui5-z-grid>
            <div data-testid="hidden-child" hide-on-size-small style="background: red;">hide</div>
          </furo-ui5-z-grid>
        </div>
      `);
      const el = parent.querySelector("furo-ui5-z-grid");
      assert.isOk(el);
      await el.updateComplete;
      await delay(RESIZE_TICK_MS);
      assert.equal(el.getAttribute("size"), "size-s");

      const child = parent.querySelector('[data-testid="hidden-child"]');
      assert.isOk(child);
      const styles = window.getComputedStyle(child);
      assert.equal(styles.display, "none", "child should be display:none on size-s");
    });

    it("should hide a show-on-size-xlarge child while host is on size-s", async () => {
      const parent: HTMLDivElement = await fixture(html`
        <div style="width: 400px; height: 200px;">
          <furo-ui5-z-grid>
            <div data-testid="xl-only" show-on-size-xlarge style="background: red;">xl-only</div>
          </furo-ui5-z-grid>
        </div>
      `);
      const el = parent.querySelector("furo-ui5-z-grid");
      assert.isOk(el);
      await el.updateComplete;
      await delay(RESIZE_TICK_MS);
      assert.equal(el.getAttribute("size"), "size-s");

      const child = parent.querySelector('[data-testid="xl-only"]');
      assert.isOk(child);
      const styles = window.getComputedStyle(child);
      assert.equal(styles.display, "none", "show-on-size-xlarge child should be hidden on size-s");
    });

    it("should reveal a show-on-size-xlarge child once host reaches size-xl", async () => {
      const parent: HTMLDivElement = await fixture(html`
        <div style="width: 1500px; height: 200px;">
          <furo-ui5-z-grid>
            <div data-testid="xl-only" show-on-size-xlarge style="background: red;">xl-only</div>
          </furo-ui5-z-grid>
        </div>
      `);
      const el = parent.querySelector("furo-ui5-z-grid");
      assert.isOk(el);
      await el.updateComplete;
      await delay(RESIZE_TICK_MS);
      assert.equal(el.getAttribute("size"), "size-xl");

      const child = parent.querySelector('[data-testid="xl-only"]');
      assert.isOk(child);
      const styles = window.getComputedStyle(child);
      assert.notEqual(styles.display, "none", "show-on-size-xlarge child must be visible on size-xl");
    });
  });

  describe("size-s collapses every child to full width", () => {
    it("should override hspan and make all children span the full row on size-s", async () => {
      const parent: HTMLDivElement = await fixture(html`
        <div style="width: 400px; height: 200px;">
          <furo-ui5-z-grid>
            <div data-testid="child" hspan="3" style="background: red;">child</div>
          </furo-ui5-z-grid>
        </div>
      `);
      const el = parent.querySelector("furo-ui5-z-grid");
      assert.isOk(el);
      await el.updateComplete;
      await delay(RESIZE_TICK_MS);
      assert.equal(el.getAttribute("size"), "size-s");

      const child = parent.querySelector('[data-testid="child"]');
      assert.isOk(child);
      const styles = window.getComputedStyle(child);
      // `:host([size="size-s"]) ::slotted(*)` sets grid-column-start: 1; grid-column-end: last-col;
      assert.equal(styles.gridColumnStart, "1");
      // gridColumnEnd resolves to "last-col" (a named line) when applied via ::slotted on size-s.
      assert.match(
        styles.gridColumnEnd,
        /last-col/,
        `expected gridColumnEnd to reference 'last-col' on size-s, got '${styles.gridColumnEnd}'`,
      );
    });
  });
});
