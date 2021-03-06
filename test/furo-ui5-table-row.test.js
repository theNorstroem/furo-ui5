import { fixture, html } from '@open-wc/testing';

import '@furo/fbp/src/flow-bind.js'; // for testing with wires and hooks
// eslint-disable-next-line import/no-extraneous-dependencies
import './initEnv.js';
import '@furo/data/src/furo-data-object.js';
import '../src/furo-catalog.js';
import { assert } from '@esm-bundle/chai';

describe('furo-ui5-table', () => {
  let host;
  let tablerow;

  beforeEach(async () => {
    const testbind = await fixture(html`
      <flow-bind>
        <template>
          <furo-ui5-table-row></furo-ui5-table-row>
        </template>
      </flow-bind>
    `);
    await testbind.updateComplete;
    host = testbind._host;
    [, tablerow] = testbind.parentNode.children;
    await host.updateComplete;
    await tablerow.updateComplete;
  });

  it('should be a furo-ui5-table-row element', done => {
    // keep this test on top, so you can recognize a wrong assignment
    assert.equal(tablerow.nodeName.toLowerCase(), 'furo-ui5-table-row');
    done();
  });
});
