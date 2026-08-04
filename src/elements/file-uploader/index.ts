import { FuroUi5FileUploader } from "./FuroUi5FileUploader";

export * from "./FuroUi5FileUploader";

FuroUi5FileUploader.define();

declare global {
  interface HTMLElementTagNameMap {
    "furo-ui5-file-uploader": FuroUi5FileUploader;
  }
}
