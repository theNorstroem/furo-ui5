import "@/Assets";
import "@/elements/text-input";
import "./index";

import { fixture, fixtureCleanup } from "@open-wc/testing-helpers";
import { chaiA11yAxe } from "chai-a11y-axe";
import { html } from "lit";
import { afterAll, assert, beforeAll, chai, describe, it, test } from "vitest";

import { FuroUi5Label } from "./FuroUi5Label";

import { delay } from "@/util/test-helpers/delay";

chai.use(chaiA11yAxe);

describe("Label Component", async () => {
  let el: FuroUi5Label;

  beforeAll(async () => {
    const container = await fixture(html`
      <div>
        <furo-ui5-label for="input1" required show-colon>Username</furo-ui5-label>
        <furo-ui5-text-input id="input1"></furo-ui5-text-input>
      </div>
    `);
    el =container.querySelector("furo-ui5-label")!;
    await delay(16);
  });

  afterAll(() => {
    fixtureCleanup();
  });

  it("should be a furo-ui5-label element", () => {
    // keep this test on top, so you can recognize a wrong assignment
    assert.equal(el.nodeName.toLowerCase(), "furo-ui5-label");
  });

  it("should be ok", () => {
    assert.isOk(el);
  });

  test("a11y", async () => {
    await assert.isAccessible(el);
  });

  it("should set the ui5-label attribute on connect", () => {
    assert.equal(el.hasAttribute("ui5-label"), true);
  });

  it("should render the default-slot light-dom text", () => {
    assert.include(el.textContent, "Username");
  });

  it("should expose the for attribute as a property", () => {
    assert.equal(el.for, "input1");
  });

  it("should expose required and showColon as properties", () => {
    assert.equal(el.required, true);
    assert.equal(el.showColon, true);
  });

  it("should pass through for attribute changes at runtime", async () => {
    el.setAttribute("for", "other");
    await delay(16);
    assert.equal(el.for, "other");
    el.setAttribute("for", "input1");
    await delay(16);
  });
});
