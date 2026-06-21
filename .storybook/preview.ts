import  { type Preview, setCustomElementsManifest } from '@storybook/web-components-vite'
import customElements from "../custom-elements.json";
import { setStorybookHelpersConfig, type StorybookHelpersOptions } from "@wc-toolkit/storybook-helpers";

const options: StorybookHelpersOptions = { renderDefaultValues: true };

setStorybookHelpersConfig(options);

// Clean up the manifest before Storybook derives its controls from it.
// - drop private members (not part of the public API)
// - drop UI5 internal plumbing that should never surface as a control:
//   `effective-dir` / `is-ui5-element` attributes (no backing member) and the
//   `accessibilityAttributes` member + its `accessibility-attributes` attribute.
// Doing it here strips them at the source, so neither Storybook's CEM docgen
// nor the `@wc-toolkit/storybook-helpers` argTypes pick them up.
const UNWANTED_ATTRIBUTES = new Set(["effective-dir", "is-ui5-element", "accessibility-attributes"]);
const UNWANTED_MEMBER_FIELDS = new Set(["effectiveDir", "isUI5Element", "accessibilityAttributes"]);

customElements.modules.forEach((module: any) => {
  module.declarations?.forEach((declaration: any) => {
    if (declaration.members) {
      declaration.members = declaration.members.filter(
        (member: any) => member.privacy !== "private" && !UNWANTED_MEMBER_FIELDS.has(member.name)
      );
    }
    if (declaration.attributes) {
      declaration.attributes = declaration.attributes.filter((attribute: any) => !UNWANTED_ATTRIBUTES.has(attribute.name));
    }
  });
});


setCustomElementsManifest(customElements);


const preview: Preview = {
  parameters: {
    docs: {
      // Disable Storybook's built-in custom-elements docgen. argTypes are
      // supplied per story via `@wc-toolkit/storybook-helpers` + the camelCase
      // `ArgTypesTransormer`; letting the native extractor also run merges in
      // duplicate dashed-attribute rows (e.g. `value-state` with a broken
      // `object` control alongside the correct `valueState` select).
      extractArgTypes: () => null,
    },
  },
};

export default preview;
