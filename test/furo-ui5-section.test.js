import { fixture, html } from '@open-wc/testing';

import { assert } from '@esm-bundle/chai'; // eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/data/src/furo-data-object.js';
import '@furo/fbp/src/flow-bind.js'; // for testing with wires and hooks
// eslint-disable-next-line import/no-extraneous-dependencies
import './initEnv.js';

import '../src/furo-ui5-section.js';

describe('furo-ui5-section', () => {
  let host;
  let section;
  let dao;

  beforeEach(async () => {
    const testbind = await fixture(html`
      <flow-bind>
        <template>
          <furo-ui5-section
            ƒ-bind-data="--entity(*.data.description)"
          ></furo-ui5-section>
          <furo-data-object
            type="experiment.ExperimentEntity"
            @-object-ready="--entity"
          ></furo-data-object>
        </template>
      </flow-bind>
    `);
    await testbind.updateComplete;
    host = testbind._host;
    [, section, dao] = testbind.parentNode.children;
    await host.updateComplete;
    await section.updateComplete;
    await dao.updateComplete;
  });

  it('should be a furo-ui5-section element', done => {
    // keep this test on top, so you can recognize a wrong assignment
    assert.equal(section.nodeName.toLowerCase(), 'furo-ui5-section');
    done();
  });
});
