import { fixture, html } from '@open-wc/testing';

import { assert } from '@esm-bundle/chai'; // eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/data/src/furo-data-object.js';
import '@furo/fbp/src/flow-bind.js'; // for testing with wires and hooks
// eslint-disable-next-line import/no-extraneous-dependencies
import './initEnv.js';

import '../src/furo-catalog.js';

describe('furo-ui5-propertylist-display', () => {
  let host;
  let display;
  let dao;

  beforeEach(async () => {
    const testbind = await fixture(html`
      <flow-bind>
        <template>
          <furo-ui5-propertylist-display> </furo-ui5-propertylist-display>
          <furo-data-object
            type="experiment.ExperimentEntity"
            @-object-ready="--dao"
          ></furo-data-object>
        </template>
      </flow-bind>
    `);
    await testbind.updateComplete;
    host = testbind._host;
    [, display, dao] = testbind.parentNode.children;
    await host.updateComplete;
    await display.updateComplete;
    await dao.updateComplete;
  });

  it('should be a furo-ui5-propertylist-display element', done => {
    // keep this test on top, so you can recognize a wrong assignment
    setTimeout(() => {
      assert.equal(
        display.nodeName.toLowerCase(),
        'furo-ui5-propertylist-display'
      );
      done();
    }, 0);
  });
});
