/**
 * Spec for the four `enum` renderers.
 *
 * Every proto enum resolves to the *same* four tags: `ENUM.__meta.typeName` is the constant
 * `primitives.ENUM` and the enum's own proto name is not recoverable at runtime (the
 * `FieldDescriptor` only stores `ENUM<Materials>`, a TS instantiation expression that erases).
 * So the renderers are generic and work off `node.enumArg` + `node.msg(key)`, exactly like
 * `furo-ui5-select-enum`.
 *
 * `display-enum` / `cell-enum` blank out `*_UNSPECIFIED` — the proto zero value — mirroring the
 * `data-unspecified` option that `furo-ui5-select-enum` hides unless `show-unspecified` is set.
 */
import "@/Assets";

import "./cell-enum/index";
import "./celledit-enum/index";
import "./display-enum/index";
import "./form-enum/index";

import { ENUM } from "@furo/open-models";
import { fixture, fixtureCleanup } from "@open-wc/testing-helpers";
import { html, type LitElement } from "lit";
import { afterEach, describe, expect, it } from "vitest";

import type { CelleditEnum } from "./celledit-enum/CelleditEnum";
import type { FormEnum } from "./form-enum/FormEnum";

import { Materials } from "@/models/furoui5test/cube/Materials";
import { delay } from "@/util/test-helpers/delay";

/** Fresh ENUM model bound to the `Materials` enum from the furoui5test contracts. */
const createEnum = (initial?: Materials): ENUM<Materials> => new ENUM<Materials>(initial, Materials, Materials.MATERIALS_UNSPECIFIED);

/** display-enum and cell-enum are byte-identical apart from names — drive both through one shape. */
interface ReadonlyEnumRenderer extends LitElement {
  model: ENUM<unknown>;
  bindData: (node: ENUM<unknown> | undefined) => void;
}

const text = (el: LitElement): string => (el.shadowRoot?.textContent ?? "").trim();

describe("enum type-renderers", () => {
  afterEach(() => {
    fixtureCleanup();
  });

  describe("registration", () => {
    it.each(["display-enum", "cell-enum", "celledit-enum", "form-enum"])("%s is defined", tag => {
      expect(customElements.get(tag)).toBeDefined();
    });
  });

  describe.each([{ tag: "display-enum" }, { tag: "cell-enum" }])("$tag", ({ tag }) => {
    const mount = async (): Promise<ReadonlyEnumRenderer> => {
      const el = await fixture<ReadonlyEnumRenderer>(`<${tag}></${tag}>`);
      await el.updateComplete;
      return el;
    };

    it("renders the label from msg() for a real value", async () => {
      const el = await mount();
      el.bindData(createEnum(Materials.MATERIALS_GLASS));
      await el.updateComplete;

      expect(text(el)).toBe(Materials.MATERIALS_GLASS);
    });

    it("renders nothing for the *_UNSPECIFIED zero value", async () => {
      const el = await mount();
      el.bindData(createEnum(Materials.MATERIALS_UNSPECIFIED));
      await el.updateComplete;

      expect(text(el)).toBe("");
    });

    it("updates when the model value changes", async () => {
      const el = await mount();
      const node = createEnum(Materials.MATERIALS_WOOD);
      el.bindData(node);
      await el.updateComplete;
      expect(text(el)).toBe(Materials.MATERIALS_WOOD);

      node.value = Materials.MATERIALS_METALS;
      await el.updateComplete;

      expect(text(el)).toBe(Materials.MATERIALS_METALS);
    });

    it("stops following the old node after a rebind", async () => {
      const el = await mount();
      const first = createEnum(Materials.MATERIALS_WOOD);
      const second = createEnum(Materials.MATERIALS_PAPER);
      el.bindData(first);
      await el.updateComplete;
      el.bindData(second);
      await el.updateComplete;
      expect(text(el)).toBe(Materials.MATERIALS_PAPER);

      first.value = Materials.MATERIALS_RUBBER;
      await el.updateComplete;

      expect(text(el)).toBe(Materials.MATERIALS_PAPER);
    });

    it("is a no-op for bindData(undefined)", async () => {
      const el = await mount();
      el.bindData(createEnum(Materials.MATERIALS_LEATHER));
      await el.updateComplete;
      el.bindData(undefined);
      await el.updateComplete;

      expect(text(el)).toBe(Materials.MATERIALS_LEATHER);
    });

    it("assigning .model binds the node", async () => {
      const el = await mount();
      const node = createEnum(Materials.MATERIALS_CERAMICS);
      el.model = node;
      await el.updateComplete;

      expect(el.model).toBe(node);
      expect(text(el)).toBe(Materials.MATERIALS_CERAMICS);
    });
  });

  describe("celledit-enum", () => {
    it("builds one option per enum key and preselects the bound value", async () => {
      const el = await fixture<CelleditEnum>(html`<celledit-enum></celledit-enum>`);
      el.bindData(createEnum(Materials.MATERIALS_TEXTILES));
      // UI5 fills the default slot from a MutationObserver on a microtask
      await delay(0);

      const options = el.querySelectorAll("furo-ui5-option");
      expect(options.length).toBe(Object.keys(Materials).length);
      expect([...options].map(o => o.id)).toEqual(Object.keys(Materials));
      expect(el.selectedOption?.id).toBe(Materials.MATERIALS_TEXTILES);
    });

    it("writes the selection back into the model", async () => {
      const el = await fixture<CelleditEnum>(html`<celledit-enum></celledit-enum>`);
      const node = createEnum(Materials.MATERIALS_TEXTILES);
      el.bindData(node);
      await delay(0);

      el.querySelectorAll("furo-ui5-option").forEach(opt => {
        (opt as HTMLElement & { selected: boolean }).selected = false;
      });
      const target = el.querySelector<HTMLElement & { selected: boolean }>(`furo-ui5-option#${Materials.MATERIALS_PLASTICS}`);
      expect(target).toBeTruthy();
      target!.selected = true;
      el.dispatchEvent(new Event("change", { bubbles: true, composed: true }));

      expect(node.value).toBe(Materials.MATERIALS_PLASTICS);
    });
  });

  describe("form-enum", () => {
    it("renders the label from the field node and forwards the model", async () => {
      const el = await fixture<FormEnum>(html`<form-enum></form-enum>`);
      const node = createEnum(Materials.MATERIALS_GLASS);
      el.bindData(node);
      await el.updateComplete;
      await delay(0);

      const label = el.shadowRoot?.querySelector("furo-ui5-label");
      expect(label?.textContent.trim()).toBe(node.__label);

      const select = el.shadowRoot?.querySelector("furo-ui5-select-enum");
      expect(select).toBeTruthy();
      expect(select!.model).toBe(node);
      expect(select!.querySelectorAll("furo-ui5-option").length).toBe(Object.keys(Materials).length);
    });

    it("forwards show-unspecified as an attribute", async () => {
      const el = await fixture<FormEnum>(html`<form-enum show-unspecified></form-enum>`);
      el.bindData(createEnum(Materials.MATERIALS_GLASS));
      await el.updateComplete;

      expect(el.showUnspecified).toBe(true);
      expect(el.shadowRoot?.querySelector("furo-ui5-select-enum")?.hasAttribute("show-unspecified")).toBe(true);
    });

    it("the label property overrides the model label", async () => {
      const el = await fixture<FormEnum>(html`<form-enum label="Material"></form-enum>`);
      el.bindData(createEnum(Materials.MATERIALS_GLASS));
      await el.updateComplete;

      expect(el.shadowRoot?.querySelector("furo-ui5-label")?.textContent.trim()).toBe("Material");
    });
  });
});
