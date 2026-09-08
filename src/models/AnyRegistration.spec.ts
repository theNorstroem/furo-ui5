/**
 * Guards the contract documented in `src/stories-shared/ANY.mdx`.
 *
 * `google.protobuf.Any` resolves its payload by type-name string through the
 * `@furo/open-models` Registry, and a type only lands there when the module that
 * defines it is *evaluated*. Element modules name their model types in type
 * annotations only, so importing an element must not be what registers them —
 * that was an accidental side effect of the old value imports.
 */
import { Registry } from "@furo/open-models";
import { describe, expect, it } from "vitest";

// The public barrel. A bare import: we want the module evaluated for its
// `Registry.register(...)` side effects, not for any binding.
import "@/models";

/** Exactly what `@furo/ui5/models` is expected to register. */
const BARREL_TYPES = [
  "furo.fat.Any",
  "furo.fat.Bool",
  "furo.fat.Bytes",
  "furo.fat.Double",
  "furo.fat.Empty",
  "furo.fat.Float",
  "furo.fat.Int32",
  "furo.fat.Int64",
  "furo.fat.String",
  "furo.fat.Uint32",
  "furo.fat.Uint64",
  "tree.NavigationNode",
  "tree.RootNode",
];

describe("Any type registration", () => {
  describe("@furo/ui5/models barrel", () => {
    it.each(BARREL_TYPES)("registers %s", type => {
      expect(Registry.isRegistered(type)).toBe(true);
    });

    it("makes those types constructible by name, which is what ANY does", () => {
      const node = Registry.createInstanceByTypeName("furo.fat.String");
      expect(node).toBeDefined();
      expect(node.__meta.typeName).toBe("furo.fat.String");
    });
  });

  describe("unregistered types", () => {
    it("throws a named error, rather than failing silently", () => {
      expect(() => Registry.createInstanceByTypeName("not.a.Real.Type")).toThrow(/Cannot find type not\.a\.Real\.Type/);
    });
  });
});
