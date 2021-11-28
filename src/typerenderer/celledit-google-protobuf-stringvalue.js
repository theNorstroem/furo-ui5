import { CelleditString } from './celledit-string.js';

class CelleditGoogleProtobufStringvalue extends CelleditString {
  /**
   * @private
   */
  static get metadata() {
    return { tag: 'celledit-google-protobuf-stringvalue' };
  }

  static get styles() {
    return super.styles;
  }
}

CelleditGoogleProtobufStringvalue.define();
