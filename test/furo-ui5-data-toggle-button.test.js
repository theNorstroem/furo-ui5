import { fixture, html } from '@open-wc/testing';

import { assert } from '@esm-bundle/chai'; // eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/data/src/furo-data-object.js';
import '@furo/fbp/src/testhelper/test-bind.js'; // for testing with wires and hooks
// eslint-disable-next-line import/no-extraneous-dependencies
import './initEnv.js';

import '../src/furo-catalog.js';

describe('furo-ui5-data-toggle-button', () => {
  let host;
  let btn;
  let dao;

  beforeEach(async () => {
    const testbind = await fixture(html`
      <test-bind>
        <template>
          <furo-ui5-data-toggle-button
            ƒ-bind-data="--entity(*.data.furo_data_checkbox_input)"
          ></furo-ui5-data-toggle-button>
          <furo-data-object
            type="experiment.ExperimentEntity"
            @-object-ready="--entity"
          ></furo-data-object>
        </template>
      </test-bind>
    `);
    await testbind.updateComplete;
    host = testbind._host;
    [, btn, dao] = testbind.parentNode.children;
    await host.updateComplete;
    await btn.updateComplete;
    await dao.updateComplete;
  });

  it('should be a furo-ui5-data-toggle-button element', done => {
    // keep this test on top, so you can recognize a wrong assignment
    assert.equal(btn.nodeName.toLowerCase(), 'furo-ui5-data-toggle-button');
    done();
  });
});
