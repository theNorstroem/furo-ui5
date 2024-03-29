import { LitElement, css } from 'lit';

/**
 * `cell-google-protobuf-any`
 * The cell-google-protobuf-any component is a wrapper displays of type `google.protobuf.Any` in read only mode.
 *
 * Every cell-xxx component should implement the following API:
 * - function: bindData(fieldNode){...}
 *
 * @summary cell display renderer for `google.protobuf.Any`
 * @element cell-google-protobuf-any
 */
export class CellGoolgeProtobufAny extends LitElement {
  constructor() {
    super();

    this._typeResolved = false;
  }

  /**
   * Component styles
   * @returns {*}
   */
  static get styles() {
    // language=CSS
    return css`
      :host {
        display: none;
      }
    `;
  }

  /**
   * Binds a field node to the component
   * the cell-google-protobuf-any is a simple proxy element to show
   * the initial state if no data is available.
   * @param {FieldNode} fieldNode
   */
  bindData(fieldNode) {
    this._field = fieldNode;
    this._typeResolved = false;

    /**
     * check if bound fieldNode is of type google.protobuf.Any
     * if the data is already available, create the renderName according the @type information.
     * If NOT, register event listener and create the component as soon as the @type information is available.
     */
    if (this._field._spec.type === 'google.protobuf.Any') {
      this._waitForType(this._field);
    }
  }

  /**
   * google.protobuf.Any wait for @type information
   * registers event listener and creates the component as soon as the @type information is available.
   * @param {FieldNode} field
   * @private
   */
  _waitForType(field) {
    const anyTypeHandler = () => {
      if (this.defaultElement) {
        this.defaultElement.remove();
        this.defaultElement = undefined;
      }

      if (
        field['@type'] &&
        field['@type']._value !== undefined &&
        this._typeResolved === false
      ) {
        this._typeResolved = true;
        this.renderName = `cell-${this._field['@type']._value
          .replace(/.*\//, '')
          .replaceAll('.', '-')
          .toLocaleLowerCase()}`;
        this.defaultElement = document.createElement(this.renderName);
        this._createContreteType();
      }
    };
    if (
      field['@type'] &&
      field['@type']._value !== undefined &&
      this._typeResolved === false
    ) {
      anyTypeHandler();
    } else {
      field.addEventListener('field-value-changed', anyTypeHandler);
    }
  }

  /**
   * Creates the concrete type specific renderer
   * @private
   */
  _createContreteType() {
    if (this.defaultElement.bindData) {
      const l = this.attributes.length;
      // eslint-disable-next-line no-plusplus
      for (let i = 0; i < l; ++i) {
        const { nodeName } = this.attributes.item(i);
        const { nodeValue } = this.attributes.item(i);
        // eslint-disable-next-line eqeqeq
        if (!nodeName.startsWith('@') && !nodeName.startsWith('ƒ')) {
          this.defaultElement.setAttribute(nodeName, nodeValue);
        }
      }
      this.defaultElement.bindData(this._field);
      this.parentNode.appendChild(this.defaultElement);
    } else {
      this._warning();
    }
  }

  /**
   * warns if diynamic component is not imported
   * @private
   */
  _warning() {
    // eslint-disable-next-line no-console
    console.warn(
      `No type specific renderer ${this.renderName} found. Check your imports.`,
      this._field._spec.type
    );
  }
}

window.customElements.define('cell-google-protobuf-any', CellGoolgeProtobufAny);
