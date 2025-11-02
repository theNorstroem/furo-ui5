// eslint-disable-next-line import/no-extraneous-dependencies
import { FuroUi5TimePicker } from '@/impl/impl/furo-ui5-time-picker';

/**
 * `celledit-google-type-timeofday` is a `celledit` context renderer.
 *
 * It uses furo-ui5-time-picker as the renderer
 *
 * @summary celledit renderer for `google.type.TimeOfDay`
 * @element celledit-google-type-timeofday
 */
export class CelleditGoogleTypeTimeofday extends FuroUi5TimePicker {
  /**
   * @private
   */
  static get metadata() {
    return { tag: 'celledit-google-type-timeofday' };
  }

  static get styles() {
    return super.styles;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "CelleditGoogleTypeTimeofday": CelleditGoogleTypeTimeofday;
  }
}

import CelleditGoogleTypeTimeofday from "@/typerenderer/impl/CelleditGoogleTypeTimeofday
CelleditGoogleTypeTimeofday.define()
