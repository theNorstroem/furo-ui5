import { fixture, html } from '@open-wc/testing';

import { assert } from '@esm-bundle/chai'; // eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/data/src/furo-data-object.js';
import '@furo/fbp/src/testhelper/test-bind.js'; // for testing with wires and hooks
// eslint-disable-next-line import/no-extraneous-dependencies
import './initEnv.js';

import '../src/furo-catalog.js';

describe('furo-ui5-select-labeled', () => {
  let host;
  let input;
  let dao;
  let daoCollection;

  beforeEach(async () => {
    const testbind = await fixture(html`
      <test-bind>
        <template>
          <furo-ui5-select-labeled
            ƒ-bind-data="--dao(*.data.description)"
            ƒ-bind-options="--collection(*.entities)"
          >
            <div slot="valueStateMessage">
              Information message. If you use ui5-option elements without
              data-id attribute, the selected value is the innerText of the
              option.
            </div>
          </furo-ui5-select-labeled>
          <furo-data-object
            type="experiment.ExperimentEntity"
            @-object-ready="--dao"
          ></furo-data-object>
          <furo-data-object
            type="person.PersonCollection"
            @-object-ready="--collection"
          ></furo-data-object>
        </template>
      </test-bind>
    `);
    await testbind.updateComplete;
    host = testbind._host;
    [, input, dao, daoCollection] = testbind.parentNode.children;
    await host.updateComplete;
    await input.updateComplete;
    await dao.updateComplete;
    await daoCollection.updateComplete;
  });

  it('should be a furo-ui5-select-labeled element', done => {
    // keep this test on top, so you can recognize a wrong assignment
    assert.equal(input.nodeName.toLowerCase(), 'furo-ui5-select-labeled');
    done();
  });

  it('should have a label', done => {
    setTimeout(() => {
      assert.equal(
        input.shadowRoot.querySelector('ui5-label').innerText,
        'Description**'
      );
      done();
    }, 0);
  });
});
