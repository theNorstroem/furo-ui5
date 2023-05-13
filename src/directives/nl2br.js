import { Directive, directive } from 'lit/directive.js';
import { map } from 'lit/directives/map.js';
import { html } from 'lit';

// Define directive
export class DirectiveNl2br extends Directive {
  render(str) {
    if (typeof str === 'string') {
      const lines = str.split('\n');
      if (lines.length > 1) {
        return html`${map(lines, line => html`${line}<br />`)}`;
      }
      return html`${str}`;
    }

    return html``;
  }
}

export const nl2br = directive(DirectiveNl2br);
