import { html } from "lit";
import { Directive, directive } from "lit/directive.js";
import { map } from "lit/directives/map.js";

/**
 * DirectiveNl2br is a Lit directive that replaces newline characters
 * in a string with <br> tags for rendering in the DOM.
 *
 * ### Usage
 * ```js
 * import { nl2br } from "@furo/ui5/directives/nl2br";
 * ```
 * then use it in your template: `${nl2br("-a\n-b\n-c")}`
 */
class DirectiveNl2br extends Directive {
  render(str: string) {
    const lines = str.split("\n");
    if (lines.length > 1) {
      return html`${map(lines, line => html`${line}<br />`)}`;
    }
    return html`${str}`;
  }
}

export const nl2br = directive(DirectiveNl2br);
