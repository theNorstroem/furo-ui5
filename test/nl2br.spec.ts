import { fixture, fixtureCleanup } from "@open-wc/testing-helpers";
import { html } from "lit";
import { afterAll, assert, beforeAll, describe, it } from "vitest";

import { NL2BRHelper } from "./nl2br-test-helper";
import { delay } from "./testutils/delay";

describe("Directive nl2br", async () => {
  let el: NL2BRHelper;

  beforeAll(async () => {
    el = await fixture(html`<nl2br-test-helper></nl2br-test-helper>`);
  });

  afterAll(() => {
    fixtureCleanup();
  });

  it("should be a nl2br-test-helper element", () => {
    // keep this test on top, so you can recognize a wrong assignment
    assert.equal(el.nodeName.toLowerCase(), "nl2br-test-helper");
  });

  it("should break newline chars to <br> tags", async () => {
    el.text = "a\nbdd";
    await delay(16);
    assert.equal(el.shadowRoot!.querySelector("span")!.innerText, "a\nbdd\n");
  });

  it("should be ok", () => {
    assert.isOk(el);
  });
});
