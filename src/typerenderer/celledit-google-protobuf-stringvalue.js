import { CelleditString } from './celledit-string.js';

class CelleditGoogleProtobufStringvalue extends CelleditString {
  /**
   * @private
   */
  static get metadata() {
    const md = super.metadata;
    md.tag = 'celledit-google-protobuf-stringvalue';
    return md;
  }

  static get styles() {
    return super.styles;
  }
}

CelleditGoogleProtobufStringvalue.define();
