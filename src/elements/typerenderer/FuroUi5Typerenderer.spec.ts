/**
 * Spec for `FuroUi5Typerenderer`.
 *
 * The universal `[TEMPLATE]` blocks from `FuroUi5TextInput.spec.ts` mostly do not apply here —
 * the typerenderer has no value, no FAT attributes and no UI → model direction. What it does have
 * is tag resolution, so that is what this spec covers.
 *
 * Tests that must control which renderers exist use a **private context** (`tstfb`, `tstar`, …)
 * instead of `display`/`cell`, because `customElements.define` is global and permanent: a stub
 * registered for one test can never be un-registered for the next one.
 */
import "@/Assets";
import "@/type-renderers/cell-int64";
import "@/type-renderers/cell-string";
import "@/type-renderers/display-bool";
import "@/type-renderers/display-furo-fat-string";
import "@/type-renderers/display-string";
import "./index";

import { ARRAY, BOOLEAN, type FieldNode, INT64, STRING } from "@furo/open-models";
import { fixture, fixtureCleanup } from "@open-wc/testing-helpers";
import { chaiA11yAxe } from "chai-a11y-axe";
import { html } from "lit";
import { afterAll, afterEach, assert, beforeAll, beforeEach, chai, describe, expect, it, test } from "vitest";

import { FuroUi5Typerenderer } from "./FuroUi5Typerenderer";

import { CubeDefinition } from "@/models/furoui5test/cube/CubeDefinition";
import { createFatString } from "@/util/test-helpers/createFatString";
import { delay } from "@/util/test-helpers/delay";

chai.use(chaiA11yAxe);

/**
 * Minimal stand-in for a type renderer: implements the only API the typerenderer relies on.
 */
class StubRenderer extends HTMLElement {
  public bound: FieldNode | undefined = undefined;

  public bindData(node: FieldNode | undefined): void {
    this.bound = node;
  }

  public get model(): FieldNode | undefined {
    return this.bound;
  }

  public set model(value: FieldNode | undefined) {
    this.bindData(value);
  }
}

const defineStub = (tag: string): void => {
  if (customElements.get(tag) === undefined) {
    customElements.define(tag, class extends StubRenderer {});
  }
};

const children = (el: FuroUi5Typerenderer): Element[] => [...el.children];
const tags = (el: FuroUi5Typerenderer): string[] => children(el).map(child => child.nodeName.toLowerCase());
const boundModel = (child: Element): FieldNode | undefined => (child as StubRenderer).model;

const stringArray = (items: string[]): ARRAY<STRING, string> => ARRAY.Builder(STRING, items);

describe("FuroUi5Typerenderer", () => {
  // ───────────────────────────────────────────────────────────────────────
  // Element identity & accessibility
  // ───────────────────────────────────────────────────────────────────────
  describe("element identity & a11y", () => {
    let el: FuroUi5Typerenderer;

    beforeAll(async () => {
      el = await fixture(html`<furo-ui5-typerenderer .model="${new STRING("hello")}"></furo-ui5-typerenderer>`);
      await el.updateComplete;
    });

    afterAll(() => {
      fixtureCleanup();
    });

    it("should be a furo-ui5-typerenderer element", () => {
      // keep this test on top, so you can recognize a wrong assignment
      assert.equal(el.nodeName.toLowerCase(), "furo-ui5-typerenderer");
    });

    it("should be ok", () => {
      assert.isOk(el);
    });

    it("renders into the light DOM", () => {
      assert.isNull(el.shadowRoot);
    });

    it("is display: contents so it does not disturb the surrounding layout", () => {
      assert.equal(getComputedStyle(el).display, "contents");
    });

    it("keeps display: contents inside a foreign shadow root", async () => {
      const host = document.createElement("div");
      document.body.appendChild(host);
      const shadow = host.attachShadow({ mode: "open" });

      const nested = document.createElement("furo-ui5-typerenderer");
      nested.model = new STRING("nested");
      shadow.appendChild(nested);
      await nested.updateComplete;

      // a document level sheet would not reach here — the element adopts it into the shadow root
      assert.equal(getComputedStyle(nested).display, "contents");
      assert.deepEqual(tags(nested), ["display-string"]);
      host.remove();
    });

    test("a11y", async () => {
      await delay(100);
      await assert.isAccessible(el);
    });
  });

  // ───────────────────────────────────────────────────────────────────────
  // Default state
  // ───────────────────────────────────────────────────────────────────────
  describe("default state", () => {
    let el: FuroUi5Typerenderer;

    beforeEach(async () => {
      el = await fixture(html`<furo-ui5-typerenderer></furo-ui5-typerenderer>`);
      await el.updateComplete;
    });

    afterEach(() => {
      fixtureCleanup();
    });

    it("has no model and renders nothing", () => {
      assert.isUndefined(el.model);
      assert.lengthOf(children(el), 0);
    });

    it("defaults to the display context", () => {
      assert.equal(el.context, "display");
    });

    it("bindData(undefined) is a no-op", () => {
      el.bindData(undefined);
      assert.isUndefined(el.model);
    });
  });

  // ───────────────────────────────────────────────────────────────────────
  // Scalar resolution — context + typeName => tag
  // ───────────────────────────────────────────────────────────────────────
  describe("scalar resolution", () => {
    afterEach(() => {
      fixtureCleanup();
    });

    it("resolves primitives.STRING to display-string", async () => {
      const node = new STRING("hello");
      const el: FuroUi5Typerenderer = await fixture(html`<furo-ui5-typerenderer .model="${node}"></furo-ui5-typerenderer>`);
      await el.updateComplete;

      assert.deepEqual(tags(el), ["display-string"]);
      assert.strictEqual(boundModel(children(el)[0]), node);
    });

    it("resolves primitives.INT64 in the cell context to cell-int64", async () => {
      const node = new INT64("42");
      const el: FuroUi5Typerenderer = await fixture(html`<furo-ui5-typerenderer context="cell" .model="${node}"></furo-ui5-typerenderer>`);
      await el.updateComplete;

      assert.deepEqual(tags(el), ["cell-int64"]);
      assert.strictEqual(boundModel(children(el)[0]), node);
    });

    it("maps primitives.BOOLEAN to the bool slug", async () => {
      const el: FuroUi5Typerenderer = await fixture(html`<furo-ui5-typerenderer .model="${new BOOLEAN(true)}"></furo-ui5-typerenderer>`);
      await el.updateComplete;

      assert.deepEqual(tags(el), ["display-bool"]);
    });

    it("slugifies a fully qualified type name", async () => {
      const el: FuroUi5Typerenderer = await fixture(html`<furo-ui5-typerenderer .model="${createFatString({ value: "x" })}"></furo-ui5-typerenderer>`);
      await el.updateComplete;

      assert.deepEqual(tags(el), ["display-furo-fat-string"]);
    });

    it("resolves synchronously — the first render already has the renderer", async () => {
      const el = document.createElement("furo-ui5-typerenderer");
      el.model = new STRING("hello");
      document.body.appendChild(el);
      await el.updateComplete;

      assert.deepEqual(tags(el), ["display-string"]);
      el.remove();
    });
  });

  // ───────────────────────────────────────────────────────────────────────
  // Renderer overrides
  // ───────────────────────────────────────────────────────────────────────
  describe("renderer overrides", () => {
    beforeAll(() => {
      defineStub("tstov-string");
      defineStub("tstov-from-global");
      defineStub("tstov-from-instance");
    });

    afterEach(() => {
      FuroUi5Typerenderer.defaultOverrides = {};
      fixtureCleanup();
    });

    it("uses the convention when nothing is overridden", async () => {
      const el: FuroUi5Typerenderer = await fixture(html`<furo-ui5-typerenderer context="tstov" .model="${new STRING("x")}"></furo-ui5-typerenderer>`);
      await el.updateComplete;

      assert.deepEqual(tags(el), ["tstov-string"]);
    });

    it("defaultOverrides win over the convention", async () => {
      FuroUi5Typerenderer.defaultOverrides = { "tstov-string": "tstov-from-global" };

      const el: FuroUi5Typerenderer = await fixture(html`<furo-ui5-typerenderer context="tstov" .model="${new STRING("x")}"></furo-ui5-typerenderer>`);
      await el.updateComplete;

      assert.deepEqual(tags(el), ["tstov-from-global"]);
    });

    it("instance overrides win over defaultOverrides", async () => {
      FuroUi5Typerenderer.defaultOverrides = { "tstov-string": "tstov-from-global" };

      const el: FuroUi5Typerenderer = await fixture(
        html`<furo-ui5-typerenderer
          context="tstov"
          .rendererOverrides="${{ "tstov-string": "tstov-from-instance" }}"
          .model="${new STRING("x")}"
        ></furo-ui5-typerenderer>`
      );
      await el.updateComplete;

      assert.deepEqual(tags(el), ["tstov-from-instance"]);
    });

    it("re-resolves when rendererOverrides change", async () => {
      const el: FuroUi5Typerenderer = await fixture(html`<furo-ui5-typerenderer context="tstov" .model="${new STRING("x")}"></furo-ui5-typerenderer>`);
      await el.updateComplete;
      assert.deepEqual(tags(el), ["tstov-string"]);

      el.rendererOverrides = { "tstov-string": "tstov-from-instance" };
      await el.updateComplete;

      assert.deepEqual(tags(el), ["tstov-from-instance"]);
    });
  });

  // ───────────────────────────────────────────────────────────────────────
  // Repeated fields
  // ───────────────────────────────────────────────────────────────────────
  describe("repeated fields", () => {
    beforeAll(() => {
      // context "tstar" has a dedicated array renderer, "tstfb" only has the item renderer
      defineStub("tstar-string");
      defineStub("tstar-string-array");
      defineStub("tstfb-string");
    });

    afterEach(() => {
      fixtureCleanup();
    });

    it("prefers the -array renderer and binds the whole ARRAY to it", async () => {
      const arr = stringArray(["a", "b"]);
      const el: FuroUi5Typerenderer = await fixture(html`<furo-ui5-typerenderer context="tstar" .model="${arr}"></furo-ui5-typerenderer>`);
      await el.updateComplete;

      assert.deepEqual(tags(el), ["tstar-string-array"]);
      assert.strictEqual(boundModel(children(el)[0]), arr);
    });

    it("falls back to one item renderer per item, bound to the item node", async () => {
      const arr = stringArray(["a", "b"]);
      const el: FuroUi5Typerenderer = await fixture(html`<furo-ui5-typerenderer context="tstfb" .model="${arr}"></furo-ui5-typerenderer>`);
      await el.updateComplete;

      assert.deepEqual(tags(el), ["tstfb-string", "tstfb-string"]);
      assert.strictEqual(boundModel(children(el)[0]), arr.atT(0));
      assert.strictEqual(boundModel(children(el)[1]), arr.atT(1));
    });

    it("follows additions and removals in fallback mode", async () => {
      const arr = stringArray(["a", "b"]);
      const el: FuroUi5Typerenderer = await fixture(html`<furo-ui5-typerenderer context="tstfb" .model="${arr}"></furo-ui5-typerenderer>`);
      await el.updateComplete;
      assert.lengthOf(children(el), 2);

      arr.push("c");
      await el.updateComplete;
      assert.lengthOf(children(el), 3);

      arr.delete(0);
      await el.updateComplete;
      assert.lengthOf(children(el), 2);
      assert.strictEqual(boundModel(children(el)[0]), arr.atT(0));
    });

    it("resolves the item type of an empty ARRAY from the parent field descriptor", async () => {
      const cube = new CubeDefinition();
      const arr = cube.multipleOptions;
      assert.equal(arr.length, 0);

      const el: FuroUi5Typerenderer = await fixture(html`<furo-ui5-typerenderer context="tstfb" .model="${arr}"></furo-ui5-typerenderer>`);
      await el.updateComplete;

      // nothing to show yet, but the renderer was resolved — pushing an item proves it
      assert.lengthOf(children(el), 0);
      assert.isFalse(el.hasAttribute("renderer-missing"));

      arr.push("a");
      await el.updateComplete;
      assert.deepEqual(tags(el), ["tstfb-string"]);
    });

    it("stops following the ARRAY while disconnected and catches up on reconnect", async () => {
      const arr = stringArray(["a", "b"]);
      const el = document.createElement("furo-ui5-typerenderer");
      el.context = "tstfb";
      el.model = arr;
      document.body.appendChild(el);
      await el.updateComplete;
      assert.lengthOf(children(el), 2);

      el.remove();
      arr.push("c");
      await delay(0);
      assert.lengthOf(children(el), 2);

      document.body.appendChild(el);
      await el.updateComplete;
      assert.lengthOf(children(el), 3);
      el.remove();
    });
  });

  // ───────────────────────────────────────────────────────────────────────
  // Map fields
  // ───────────────────────────────────────────────────────────────────────
  describe("map fields", () => {
    beforeAll(() => {
      defineStub("tstmp-string");
      defineStub("tstmp-string-map");
      defineStub("tstmf-string");
    });

    afterEach(() => {
      fixtureCleanup();
    });

    it("prefers the -map renderer and binds the whole MAP to it", async () => {
      const map = createFatString({ attributes: { de: "hallo", en: "hello" } }).attributes;
      const el: FuroUi5Typerenderer = await fixture(html`<furo-ui5-typerenderer context="tstmp" .model="${map}"></furo-ui5-typerenderer>`);
      await el.updateComplete;

      assert.deepEqual(tags(el), ["tstmp-string-map"]);
      assert.strictEqual(boundModel(children(el)[0]), map);
    });

    it("falls back to one value renderer per entry and exposes the key as map-key", async () => {
      const map = createFatString({ attributes: { de: "hallo", en: "hello" } }).attributes;
      const el: FuroUi5Typerenderer = await fixture(html`<furo-ui5-typerenderer context="tstmf" .model="${map}"></furo-ui5-typerenderer>`);
      await el.updateComplete;

      assert.deepEqual(tags(el), ["tstmf-string", "tstmf-string"]);
      assert.deepEqual(
        children(el).map(child => child.getAttribute("map-key")),
        ["de", "en"]
      );
      assert.strictEqual(boundModel(children(el)[0]), map.get("de"));
    });

    it("resolves the value type of an empty MAP from the parent field descriptor", async () => {
      const map = createFatString().attributes;
      assert.equal(map.size, 0);

      const el: FuroUi5Typerenderer = await fixture(html`<furo-ui5-typerenderer context="tstmf" .model="${map}"></furo-ui5-typerenderer>`);
      await el.updateComplete;

      assert.lengthOf(children(el), 0);
      assert.isFalse(el.hasAttribute("renderer-missing"));
    });
  });

  // ───────────────────────────────────────────────────────────────────────
  // Missing renderer
  // ───────────────────────────────────────────────────────────────────────
  describe("missing renderer", () => {
    afterEach(() => {
      fixtureCleanup();
    });

    it("reports the tags it tried and renders nothing", async () => {
      const el: FuroUi5Typerenderer = await fixture(
        html`<furo-ui5-typerenderer context="tstmissing" renderer-timeout="20" .model="${new STRING("x")}"></furo-ui5-typerenderer>`
      );

      const seen = new Promise<CustomEvent>(resolve => {
        el.addEventListener("renderer-missing", event => {
          resolve(event as CustomEvent);
        });
      });

      const event = await seen;
      await el.updateComplete;

      expect(event.detail).toMatchObject({ tags: ["tstmissing-string"], context: "tstmissing", typeName: "primitives.STRING" });
      assert.equal(el.getAttribute("renderer-missing"), "tstmissing-string");
      assert.lengthOf(children(el), 0);
    });

    it("lists both candidates for a repeated field", async () => {
      const el: FuroUi5Typerenderer = await fixture(
        html`<furo-ui5-typerenderer context="tstmissing" renderer-timeout="20" .model="${stringArray(["a"])}"></furo-ui5-typerenderer>`
      );
      await delay(80);

      assert.equal(el.getAttribute("renderer-missing"), "tstmissing-string-array tstmissing-string");
    });

    it("clears renderer-missing once a resolvable model is bound", async () => {
      const el: FuroUi5Typerenderer = await fixture(
        html`<furo-ui5-typerenderer context="tstmissing" renderer-timeout="20" .model="${new STRING("x")}"></furo-ui5-typerenderer>`
      );
      await delay(80);
      assert.isTrue(el.hasAttribute("renderer-missing"));

      el.context = "display";
      await el.updateComplete;

      assert.isFalse(el.hasAttribute("renderer-missing"));
      assert.deepEqual(tags(el), ["display-string"]);
    });
  });

  // ───────────────────────────────────────────────────────────────────────
  // Rebinding
  // ───────────────────────────────────────────────────────────────────────
  describe("rebinding", () => {
    afterEach(() => {
      fixtureCleanup();
    });

    it("swaps the renderer when the context changes", async () => {
      const node = new STRING("hello");
      const el: FuroUi5Typerenderer = await fixture(html`<furo-ui5-typerenderer .model="${node}"></furo-ui5-typerenderer>`);
      await el.updateComplete;
      assert.deepEqual(tags(el), ["display-string"]);

      el.context = "cell";
      await el.updateComplete;

      assert.deepEqual(tags(el), ["cell-string"]);
      assert.strictEqual(boundModel(children(el)[0]), node);
    });

    it("rebinds a new model of the same type without recreating the renderer", async () => {
      const first = new STRING("first");
      const el: FuroUi5Typerenderer = await fixture(html`<furo-ui5-typerenderer .model="${first}"></furo-ui5-typerenderer>`);
      await el.updateComplete;
      const rendered = children(el)[0];

      const second = new STRING("second");
      el.bindData(second);
      await el.updateComplete;

      assert.strictEqual(children(el)[0], rendered);
      assert.strictEqual(boundModel(children(el)[0]), second);
    });

    it("switches from a scalar to a repeated model", async () => {
      defineStub("tstfb-string");
      const el: FuroUi5Typerenderer = await fixture(html`<furo-ui5-typerenderer context="tstfb" .model="${new STRING("x")}"></furo-ui5-typerenderer>`);
      await el.updateComplete;
      assert.lengthOf(children(el), 1);

      el.bindData(stringArray(["a", "b", "c"]));
      await el.updateComplete;

      assert.deepEqual(tags(el), ["tstfb-string", "tstfb-string", "tstfb-string"]);
    });
  });

  // ───────────────────────────────────────────────────────────────────────
  // Attribute forwarding
  // ───────────────────────────────────────────────────────────────────────
  describe("attribute forwarding", () => {
    afterEach(() => {
      fixtureCleanup();
    });

    it("copies host attributes onto the renderer but keeps its own", async () => {
      const el: FuroUi5Typerenderer = await fixture(
        html`<furo-ui5-typerenderer context="cell" value-state="Error" id="host" .model="${new INT64("1")}"></furo-ui5-typerenderer>`
      );
      await el.updateComplete;

      const rendered = children(el)[0];
      assert.equal(rendered.getAttribute("value-state"), "Error");
      assert.isFalse(rendered.hasAttribute("context"));
      assert.isFalse(rendered.hasAttribute("id"));
    });
  });
});
