import "@/Assets";
import "./index";

import { fixture, fixtureCleanup } from "@open-wc/testing-helpers";
import { chaiA11yAxe } from "chai-a11y-axe";
import { html } from "lit";
import { afterAll, assert, beforeAll, chai, describe, it, test } from "vitest";

import { FuroUi5FormGroup } from "./FuroUi5FormGroup";

import { delay } from "@/util/test-helpers/delay";

chai.use(chaiA11yAxe);

describe("FormGroup Component", async () => {
  let el: FuroUi5FormGroup;

  beforeAll(async () => {
    el = await fixture(html`
      <furo-ui5-form-group label="Group Title">
        <div data-testid="row-1">ROW-1</div>
        <div data-testid="row-2">ROW-2</div>
      </furo-ui5-form-group>
    `);
    await el.updateComplete;
    await delay(16);
  });

  afterAll(() => {
    fixtureCleanup();
  });

  it("should be a furo-ui5-form-group element", () => {
    // keep this test on top, so you can recognize a wrong assignment
    assert.equal(el.nodeName.toLowerCase(), "furo-ui5-form-group");
  });

  it("should be ok", () => {
    assert.isOk(el);
  });

  test("a11y", async () => {
    await assert.isAccessible(el);
  });

  it("should expose the label property from the fixture", () => {
    assert.equal(el.label, "Group Title");
  });

  it("should render the label inside the fieldset legend", () => {
    const legend = el.shadowRoot!.querySelector("legend");
    assert.isNotNull(legend);
    assert.equal(legend.textContent.trim(), "Group Title");
  });

  it("should wrap the slot in a fieldset element", () => {
    const fieldset = el.shadowRoot!.querySelector("fieldset");
    assert.isNotNull(fieldset);
    const slot = fieldset.querySelector("slot");
    assert.isNotNull(slot, "default slot lives inside the fieldset");
  });

  it("should expose default-slot content", () => {
    const row1 = el.querySelector('[data-testid="row-1"]');
    const row2 = el.querySelector('[data-testid="row-2"]');
    assert.isNotNull(row1);
    assert.isNotNull(row2);
    assert.equal(row1.textContent, "ROW-1");
    assert.equal(row2.textContent, "ROW-2");

    const slot = el.shadowRoot!.querySelector("slot");
    assert.isNotNull(slot);
    const assigned = slot.assignedElements();
    assert.equal(assigned.length, 2, "both children are assigned to the default slot");
  });

  it("should update the legend text when the label property changes", async () => {
    el.label = "Updated Label";
    await el.updateComplete;
    const legend = el.shadowRoot!.querySelector("legend");
    assert.isNotNull(legend);
    assert.equal(legend.textContent.trim(), "Updated Label");
    // restore for any subsequent assertions
    el.label = "Group Title";
    await el.updateComplete;
  });

  it("should resolve display:block on the host", () => {
    const styles = window.getComputedStyle(el);
    assert.equal(styles.display, "block");
  });

  it("should resolve a CSS grid fieldset", () => {
    const fieldset = el.shadowRoot!.querySelector("fieldset")!;
    const styles = window.getComputedStyle(fieldset);
    assert.equal(styles.display, "grid");
  });

  describe("responsive grid columns (container query driven)", () => {
    /**
     * Browsers may report `grid-template-columns` either as the resolved
     * explicit tracks (e.g. `"400px"`, `"650px 650px"`) or as the unresolved
     * `repeat(N, 1fr)` form when the fieldset has no laid-out children with
     * intrinsic widths. Handle both shapes.
     */
    const countColumns = (gridTemplateColumns: string): number => {
      const repeatMatch = /repeat\((\d+)\s*,/.exec(gridTemplateColumns);
      if (repeatMatch) {
        return parseInt(repeatMatch[1], 10);
      }
      return gridTemplateColumns
        .trim()
        .split(/\s+/)
        .filter(s => s.length > 0).length;
    };

    it("should render 1 column below 501px host width", async () => {
      const narrow: FuroUi5FormGroup = await fixture(html`
        <furo-ui5-form-group label="Narrow" style="width: 400px;">
          <div data-testid="a">A</div>
        </furo-ui5-form-group>
      `);
      await narrow.updateComplete;
      await delay(50);
      const fieldset = narrow.shadowRoot!.querySelector("fieldset")!;
      const styles = window.getComputedStyle(fieldset);
      assert.equal(countColumns(styles.gridTemplateColumns), 1, `expected 1 column for narrow host, got: "${styles.gridTemplateColumns}"`);
    });

    it("should render 2 columns at 1300px host width", async () => {
      const mid: FuroUi5FormGroup = await fixture(html`
        <furo-ui5-form-group label="Mid" style="width: 1300px;">
          <div data-testid="a">A</div>
          <div data-testid="b">B</div>
        </furo-ui5-form-group>
      `);
      await mid.updateComplete;
      await delay(50);
      const fieldset = mid.shadowRoot!.querySelector("fieldset")!;
      const styles = window.getComputedStyle(fieldset);
      assert.equal(countColumns(styles.gridTemplateColumns), 2, `expected 2 columns at 1300px host, got: "${styles.gridTemplateColumns}"`);
    });

    it("should render 3 columns at 1900px host width", async () => {
      const wide: FuroUi5FormGroup = await fixture(html`
        <furo-ui5-form-group label="Wide" style="width: 1900px;">
          <div data-testid="a">A</div>
          <div data-testid="b">B</div>
          <div data-testid="c">C</div>
        </furo-ui5-form-group>
      `);
      await wide.updateComplete;
      await delay(50);
      const fieldset = wide.shadowRoot!.querySelector("fieldset")!;
      const styles = window.getComputedStyle(fieldset);
      assert.equal(countColumns(styles.gridTemplateColumns), 3, `expected 3 columns at 1900px host, got: "${styles.gridTemplateColumns}"`);
    });
  });
});
