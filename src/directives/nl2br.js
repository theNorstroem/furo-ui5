import { Directive, directive } from 'lit/directive.js';
import { map } from 'lit/directives/map.js';
import { html } from 'lit';

// Define directive
class DirectiveNl2br extends Directive {
  render(str) {
    const lines = str.split('\n');
    return html`${map(lines, line => html`${line}<br />`)}`;
  }
}

export const nl2br = directive(DirectiveNl2br);
