import { FuroUi5BarcodeScannerDialog } from "./FuroUi5BarcodeScannerDialog";

FuroUi5BarcodeScannerDialog.define();

declare global {
  interface HTMLElementTagNameMap {
    "furo-ui5-barcode-scanner-dialog": FuroUi5BarcodeScannerDialog;
  }
}
