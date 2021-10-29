import { fixture, html } from '@open-wc/testing';

import { assert } from '@esm-bundle/chai';
import '@furo/fbp/src/testhelper/test-bind.js'; // for testing with wires and hooks
// eslint-disable-next-line import/no-extraneous-dependencies
import '../initEnv.js';
import '../../src/typerenderer/display-furo-numberproperty.js';

describe('display-furo-numberproperty', () => {
  let host;
  let display;
  let dao;

  beforeEach(async () => {
    const testbind = await fixture(html`
      <test-bind>
        <template>
          <display-furo-numberproperty></display-furo-numberproperty>
          <furo-data-object
            type="experiment.Experiment"
            @-object-ready="--dao"
          ></furo-data-object>
        </template>
      </test-bind>
    `);
    await testbind.updateComplete;
    host = testbind._host;
    [, display, dao] = testbind.parentNode.children;
    await host.updateComplete;
    await display.updateComplete;
    await dao.updateComplete;
  });

  it('should be a display-furo-numberproperty element', done => {
    // keep this test on top, so you can recognize a wrong assignment
    assert.equal(display.nodeName.toLowerCase(), 'display-furo-numberproperty');
    done();
  });
});
