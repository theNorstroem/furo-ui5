import { FormFuroBigdecimal } from "./FormFuroBigdecimal";

FormFuroBigdecimal.define();

declare global {
  interface HTMLElementTagNameMap {
    "form-furo-bigdecimal": FormFuroBigdecimal;
  }
}
