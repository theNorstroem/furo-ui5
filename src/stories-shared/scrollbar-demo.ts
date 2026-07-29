import GlobalStyles from "@/styles/GlobalStyles";

/**
 * Documentation-only helper for the "Styling scrollbars" how-to page.
 *
 * Renders a fixed-height scroll container inside a shadow root. With the
 * `adopt` attribute it adopts `GlobalStyles.scrollbar` into that shadow root,
 * without it the scrollbar stays at the browser default — which is exactly the
 * point the page makes: a document-level sheet does not cross a shadow boundary.
 */
class FuroScrollbarDemo extends HTMLElement {
  connectedCallback(): void {
    if (this.shadowRoot) return;

    const root = this.attachShadow({ mode: "open" });

    if (this.hasAttribute("adopt")) {
      root.adoptedStyleSheets = [...root.adoptedStyleSheets, GlobalStyles.scrollbar];
    }

    const style = document.createElement("style");
    style.textContent = `
      :host {
        display: block;
      }

      .box {
        height: 8rem;
        overflow: auto;
        border: 1px solid var(--sapList_BorderColor, #d9d9d9);
        background: var(--sapList_Background, #fff);
        color: var(--sapTextColor, #000);
        font-family: var(--sapFontFamily);
        font-size: var(--sapFontSize);
        padding: 0.5rem;
      }

      p {
        margin: 0 0 0.5rem;
      }
    `;

    const box = document.createElement("div");
    box.className = "box";
    // a scrollable region must be reachable by keyboard (WCAG / axe
    // scrollable-region-focusable)
    box.tabIndex = 0;
    box.setAttribute("aria-label", this.hasAttribute("adopt") ? "Themed scrollbar example" : "Default scrollbar example");
    for (let i = 1; i <= 12; i += 1) {
      const p = document.createElement("p");
      p.textContent = `Line ${String(i)} — scroll me.`;
      box.appendChild(p);
    }

    root.append(style, box);
  }
}

if (!customElements.get("furo-scrollbar-demo")) {
  customElements.define("furo-scrollbar-demo", FuroScrollbarDemo);
}

export { FuroScrollbarDemo };
