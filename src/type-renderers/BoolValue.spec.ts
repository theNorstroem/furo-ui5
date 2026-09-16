/**
 * Spec for the two read-only `google.protobuf.BoolValue` renderers.
 *
 * `BoolValue` is the one bool model that is genuinely tri-state: its `value` is `boolean | null`
 * and `null` means "not set", which is the whole point of the proto wrapper type. The renderers
 * therefore paint three distinct icons instead of the usual two. `primitives.BOOLEAN` coerces any
 * non-boolean to `false`, so `display-bool` / `cell-bool` have no third state and are not covered here.
 */
import "@/Assets";

import "./cell-google-protobuf-boolvalue/index";
import "./display-google-protobuf-boolvalue/index";

import { BoolValue } from "@furo/open-models";
import { fixture, fixtureCleanup } from "@open-wc/testing-helpers";
import { html, type LitElement } from "lit";
import { afterEach, describe, expect, it } from "vitest";

import { delay } from "@/util/test-helpers/delay";

interface BoolValueRenderer extends LitElement {
  model: BoolValue;
  bindData: (node: BoolValue | undefined) => void;
}

/** The single `furo-ui5-icon` a renderer paints, as `name design` (design omitted when absent). */
const icon = (el: LitElement): string => {
  const i = el.shadowRoot?.querySelector("furo-ui5-icon");
  if (!i) {
    return "<none>";
  }
  const name = i.getAttribute("name") ?? "<unnamed>";
  const design = i.getAttribute("design");
  return design === null ? name : `${name} ${design}`;
};

/** Runs the shared tri-state matrix against one renderer instance factory. */
const expectTriState = async (create: () => Promise<BoolValueRenderer>): Promise<void> => {
  const unset = await create();
  unset.bindData(new BoolValue());
  await unset.updateComplete;
  expect(icon(unset), "unset").to.equal("question-mark Information");

  const yes = await create();
  const yesModel = new BoolValue();
  yesModel.value = true;
  yes.bindData(yesModel);
  await yes.updateComplete;
  expect(icon(yes), "true").to.equal("accept Positive");

  const no = await create();
  const noModel = new BoolValue();
  noModel.value = false;
  no.bindData(noModel);
  await no.updateComplete;
  expect(icon(no), "false").to.equal("border");
};

describe("google.protobuf.BoolValue type-renderers", () => {
  afterEach(() => {
    fixtureCleanup();
  });

  it("display-google-protobuf-boolvalue paints three distinct icons", async () => {
    await expectTriState(async () => fixture<BoolValueRenderer>(html` <display-google-protobuf-boolvalue></display-google-protobuf-boolvalue> `));
  });

  it("cell-google-protobuf-boolvalue paints three distinct icons", async () => {
    await expectTriState(async () => fixture<BoolValueRenderer>(html` <cell-google-protobuf-boolvalue></cell-google-protobuf-boolvalue> `));
  });

  it("follows the model back to the unset state on __clear()", async () => {
    const el = await fixture<BoolValueRenderer>(html` <display-google-protobuf-boolvalue></display-google-protobuf-boolvalue> `);
    const model = new BoolValue();
    model.value = true;
    el.bindData(model);
    await el.updateComplete;
    expect(icon(el)).to.equal("accept Positive");

    model.__clear();
    await delay(0);
    await el.updateComplete;
    expect(icon(el)).to.equal("question-mark Information");
  });

  it("renders the unset icon before any model is bound", async () => {
    const el = await fixture<BoolValueRenderer>(html` <cell-google-protobuf-boolvalue></cell-google-protobuf-boolvalue> `);
    await el.updateComplete;
    expect(icon(el)).to.equal("question-mark Information");
  });
});
