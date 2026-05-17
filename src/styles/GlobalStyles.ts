import { getTheme } from "@ui5/webcomponents-base/dist/config/Theme.js";
import { attachThemeLoaded } from "@ui5/webcomponents-base/dist/theming/ThemeLoaded.js";

import MediaSizeIndentation from "./MediaSizeIndentation";
import { ScrollbarCSS } from "./scrollbar.css";
import { TableCss } from "./table.css";

const STYLE_ID = "FuroUi5GlobalStyles";

type IdentifiedSheet = CSSStyleSheet & { _StyleId?: string };

let _currentTheme: string | undefined;

const tableSheet: CSSStyleSheet = new CSSStyleSheet();
tableSheet.replaceSync(TableCss.cssText);

const scrollbarSheet: CSSStyleSheet = new CSSStyleSheet();
scrollbarSheet.replaceSync(ScrollbarCSS.cssText);

/**
 * GlobalStyles applies theme-driven global CSS (size/typography vars,
 * scrollbar, raw <table> styling) onto document.adoptedStyleSheets, and
 * exposes adoptable CSSStyleSheet getters for shadow-DOM consumers.
 */
// eslint-disable-next-line @typescript-eslint/no-extraneous-class
export default class GlobalStyles {
  static applyStylevars = (theme: string): void => {
    if (_currentTheme === theme) return;
    _currentTheme = theme;

    let sheet: IdentifiedSheet | undefined = document.adoptedStyleSheets.find((sh): sh is IdentifiedSheet => (sh as IdentifiedSheet)._StyleId === STYLE_ID);
    if (sheet === undefined) {
      sheet = new CSSStyleSheet();
      sheet._StyleId = STYLE_ID;
      document.adoptedStyleSheets = [...document.adoptedStyleSheets, sheet];
    }
    sheet.replaceSync(MediaSizeIndentation + ScrollbarCSS.cssText + TableCss.cssText);
  };

  public static get table(): CSSStyleSheet {
    return tableSheet;
  }

  public static get scrollbar(): CSSStyleSheet {
    return scrollbarSheet;
  }
}

attachThemeLoaded(GlobalStyles.applyStylevars);
GlobalStyles.applyStylevars(getTheme());
