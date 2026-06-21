import FileUploader from "@ui5/webcomponents/dist/FileUploader.js";

/**
 * The 'furo-ui5-file-uploader' is a thin wrapper around the
 * [SAP ui5 FileUploader element](https://sap.github.io/ui5-webcomponents/playground/components/FileUploader/).
 *
 * It exposes the full UI5 FileUploader API unchanged. There is intentionally **no data binding** —
 * read the selected files from the inherited `files` / `value` API and the `change` event.
 *
 * @summary File selection control (no data binding).
 * @keywords file, upload, uploader, attachment, input
 * @category Form
 * @usecase Use to let users pick one or more files; handle the `change` event yourself.
 * @related furo-ui5-text-input
 * @tagname furo-ui5-file-uploader
 */
export class FuroUi5FileUploader extends FileUploader {
  /**
   * @private
   */
  static override get metadata() {
    const md = super.metadata;
    md.tag = "furo-ui5-file-uploader";
    return md;
  }
}
