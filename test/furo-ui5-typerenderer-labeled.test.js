import { fixture, html } from '@open-wc/testing';

import { assert } from '@esm-bundle/chai'; // eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/data/src/furo-data-object.js';
import '@furo/fbp/src/flow-bind.js'; // for testing with wires and hooks
// eslint-disable-next-line import/no-extraneous-dependencies
import './initEnv.js';

import '../src/furo-ui5-typerenderer-labeled.js';

describe('furo-ui5-display', () => {
  let host;
  let display;
  let dao;

  beforeEach(async () => {
    const testbind = await fixture(html`
      <flow-bind>
        <template>
          <furo-ui5-typerenderer-labeled></furo-ui5-typerenderer-labeled>
          <furo-data-object></furo-data-object>
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

  it('should be a furo-ui5-display element', done => {
    // keep this test on top, so you can recognize a wrong assignment
    assert.equal(
      display.nodeName.toLowerCase(),
      'furo-ui5-typerenderer-labeled'
    );
    done();
  });

  it('should bind a field node', done => {
    dao.type = 'experiment.Experiment';
    display.bindData(dao.data.display_name);
    assert.equal(display.label, 'experiment');
    done();
  });
});
