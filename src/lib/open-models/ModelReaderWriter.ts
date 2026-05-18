import { FieldNode } from "@furo/open-models";

export class ModelReaderWriter {
  /**
   * A collection of writer functions indexed by a string key.
   * Each writer is a callback that may receive an optional {@link Event} argument.
   *
   * @type {Map<string, ( ) => void>}
   */
  public writers = new Map<string, () => void>();

  /**
   * this method updates the model with the registered updater
   * @private
   */
  private readonly modelWriteFn: (() => void) | undefined;

  /**
   * A collection of event reader callbacks keyed by a unique identifier.
   *
   * Each entry associates a string key with a callback function that receives an
   * optional {@link Event} object and performs processing for that event. The
   * function does not return a value.
   *
   * @type {Map<string, ( ) => void>}
   */
  public readers = new Map<string, () => void>();

  private readonly modelReadFn: (() => void) | undefined;

  private readonly fieldNode: FieldNode;

  constructor(fieldNode: FieldNode, writers: Map<string, () => void>, readers: Map<string, () => void>) {
    this.fieldNode = fieldNode;
    this.writers = writers;
    this.readers = readers;
    this.modelWriteFn = this.writers.get(this.fieldNode.__meta.typeName);
    this.modelReadFn = this.readers.get(this.fieldNode.__meta.typeName);
  }

  public readModel() {
    if (this.modelReadFn === undefined) {
      console.error("No reader specified for field node type", this.fieldNode.__meta.typeName);
      return;
    }
    this.modelReadFn();
  }

  public writeModel() {
    // eslint-disable-next-line
    if (this.fieldNode === undefined) {
      console.error("No bindings for", this);
      return;
    }

    if (this.modelWriteFn === undefined) {
      console.error("No writer specified for field node type", this.fieldNode.__meta.typeName);
      return;
    }
    this.modelWriteFn();
  }
}
