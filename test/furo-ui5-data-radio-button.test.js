import { fixture, html } from '@open-wc/testing';

import { assert } from '@esm-bundle/chai'; // eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/data/src/furo-data-object.js';
import '@furo/fbp/src/testhelper/test-bind.js'; // for testing with wires and hooks
// eslint-disable-next-line import/no-extraneous-dependencies
import './initEnv.js';

import '../src/furo-catalog.js';

describe('furo-ui5-data-radio-button', () => {
  let host;
  let radio;
  let dao;

  beforeEach(async () => {
    const testbind = await fixture(html`
      <test-bind>
        <template>
          <furo-ui5-data-radio-button
            ƒ-bind-data="--data(*.furo_data_checkbox_input)"
          ></furo-ui5-data-radio-button>
          <furo-data-object
            type="experiment.Experiment"
            @-object-ready="--data"
          ></furo-data-object>
        </template>
      </test-bind>
    `);
    await testbind.updateComplete;
    host = testbind._host;
    [, radio, dao] = testbind.parentNode.children;
    await host.updateComplete;
    await radio.updateComplete;
    await dao.updateComplete;
  });

  it('should be a furo-ui5-data-radio-button element', done => {
    // keep this test on top, so you can recognize a wrong assignment
    assert.equal(radio.nodeName.toLowerCase(), 'furo-ui5-data-radio-button');
    done();
  });
});
