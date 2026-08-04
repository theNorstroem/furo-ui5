import "@/Assets";
import "./index";

import { fixture, fixtureCleanup } from "@open-wc/testing-helpers";
import { chaiA11yAxe } from "chai-a11y-axe";
import { html } from "lit";
import { afterAll, assert, beforeAll, chai, describe, it, test } from "vitest";

import type { FuroUi5Dialog } from "./FuroUi5Dialog";

chai.use(chaiA11yAxe);

describe("Dialog Component", async () => {
  let el: FuroUi5Dialog;

  beforeAll(async () => {
    el = await fixture(html`
      <furo-ui5-dialog header-text="Dialog title" data-testid="test">
        <p>Body content</p>
        <div slot="footer">FOOTER</div>
      </furo-ui5-dialog>
    `);
  });

  afterAll(() => {
    fixtureCleanup();
  });

  it("should be a furo-ui5-dialog element", () => {
    // keep this test on top, so you can recognize a wrong assignment
    assert.equal(el.nodeName.toLowerCase(), "furo-ui5-dialog");
  });

  it("should be ok", () => {
    assert.isOk(el);
  });

  test("a11y", async () => {
    await assert.isAccessible(el);
  });

  it("should not be open by default", () => {
    assert.equal(el.open, false, "open property starts false");
    assert.equal(el.checkVisibility(), false, "not visible");
  });

  it("should expose headerText from the fixture", () => {
    assert.equal(el.headerText, "Dialog title");
  });

  it("should expose default-slot and footer-slot content", () => {
    assert.include(el.textContent, "Body content");
    const footer = el.querySelector('[slot="footer"]');
    assert.isNotNull(footer);
    assert.equal(footer.textContent, "FOOTER");
  });

  it("show() should set open=true; close() should reset it", () => {
    el.show();
    assert.equal(el.open, true, "open after show()");
    el.close();
    assert.equal(el.open, false, "open after close()");
  });

  it("showAt() should set open=true synchronously", () => {
    el.showAt();
    assert.equal(el.open, true, "open after showAt()");
    el.close();
    assert.equal(el.open, false);
  });
});
