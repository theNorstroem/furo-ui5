import { fixture, html } from '@open-wc/testing';

import { assert } from '@esm-bundle/chai'; // eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/data/src/furo-data-object.js';
import '@furo/fbp/src/flow-bind.js'; // for testing with wires and hooks
// eslint-disable-next-line import/no-extraneous-dependencies
import './initEnv.js';

import '../src/furo-ui5-barcode-scanner-dialog.js';

describe('furo-ui5-barcode-scanner-dialog', () => {
  let host;
  let input;
  let dao;

  beforeEach(async () => {
    const testbind = await fixture(html`
      <flow-bind>
        <template>
          <furo-ui5-barcode-scanner-dialog
            ƒ-bind-data="--entity(*.data.description)"
          ></furo-ui5-barcode-scanner-dialog>
          <furo-data-object
            type="experiment.ExperimentEntity"
            @-object-ready="--entity"
          ></furo-data-object>
        </template>
      </flow-bind>
    `);
    await testbind.updateComplete;
    host = testbind._host;
    [, input, dao] = testbind.parentNode.children;
    await host.updateComplete;
    await input.updateComplete;
    await dao.updateComplete;
  });

  it('should be a furo-ui5-barcode-scanner-dialog element', done => {
    // keep this test on top, so you can recognize a wrong assignment
    assert.equal(
      input.nodeName.toLowerCase(),
      'furo-ui5-barcode-scanner-dialog'
    );
    done();
  });

  it('scanner should open', done => {
    input.show();
    setTimeout(() => {
      assert.equal(input._isOpen, true);
      done();
    }, 1500);
  });
});
