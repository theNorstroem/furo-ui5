import "@/Assets";
import "./index";

import { fixture, fixtureCleanup } from "@open-wc/testing-helpers";
import { chaiA11yAxe } from "chai-a11y-axe";
import { html } from "lit";
import { afterAll, assert, beforeAll, chai, describe, it, test } from "vitest";

import type { FuroUi5Toast } from "./FuroUi5Toast";

import { delay } from "@/util/test-helpers/delay";

chai.use(chaiA11yAxe);

describe("Toast Component", async () => {
  let el: FuroUi5Toast;

  beforeAll(async () => {
    el = await fixture(html` <furo-ui5-toast data-testid="test" duration="500" placement="MiddleCenter">Toast content</furo-ui5-toast> `);
  });

  afterAll(() => {
    fixtureCleanup();
  });

  it("should be a furo-ui5-toast element", () => {
    // keep this test on top, so you can recognize a wrong assignment
    assert.equal(el.nodeName.toLowerCase(), "furo-ui5-toast");
  });

  it("should be ok", () => {
    assert.isOk(el);
  });

  test("a11y", async () => {
    await assert.isAccessible(el);
  });

  it("should not be open by default", () => {
    assert.equal(el.open, false, "open property starts false");
  });

  it("should expose slotted default content", () => {
    // default-slot content is light-dom — readable without opening
    assert.include(el.textContent, "Toast content");
  });

  it("should reflect the placement attribute to the property", () => {
    assert.equal(el.placement, "MiddleCenter");
  });

  it("should reflect the duration attribute to the property", () => {
    assert.equal(el.duration, 500);
  });

  it("show() should set open to true", () => {
    el.show();
    assert.equal(el.open, true, "open is true after show()");
  });

  it("should auto-close after the configured duration", async () => {
    el.show();
    assert.equal(el.open, true, "open is true immediately after show()");
    // UI5 Toast enforces a 500 ms minimum effective duration; wait for it plus a small buffer.
    await delay(el.duration + 50);
    assert.equal(el.open, false, "open is false after the duration elapses");
  });
});
