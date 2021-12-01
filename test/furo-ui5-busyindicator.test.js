import { fixture, html } from '@open-wc/testing';

import { assert } from '@esm-bundle/chai';
import '@furo/fbp/src/flow-bind.js'; // for testing with wires and hooks
// eslint-disable-next-line import/no-extraneous-dependencies
import './initEnv.js';

import '../src/furo-ui5-busy-indicator.js';

describe('furo-ui5-busy-indicator', () => {
  let host;
  let busy;

  beforeEach(async () => {
    const testbind = await fixture(html`
      <flow-bind>
        <template>
          <furo-ui5-busy-indicator size="Small"></furo-ui5-busy-indicator>
        </template>
      </flow-bind>
    `);
    await testbind.updateComplete;
    host = testbind._host;
    [, busy] = testbind.parentNode.children;
    await host.updateComplete;
    await busy.updateComplete;
  });

  it('should be a furo-ui5-busyindicator element', done => {
    // keep this test on top, so you can recognize a wrong assignment
    assert.equal(busy.nodeName.toLowerCase(), 'furo-ui5-busy-indicator');
    done();
  });

  it('should be activatable', done => {
    busy.activate();
    setTimeout(() => {
      assert.equal(busy.active, true);
      done();
    }, 16);
  });

  it('should be deactivatable', done => {
    busy.activate();
    busy.deactivate();
    setTimeout(() => {
      assert.equal(busy.active, false);
      done();
    }, 16);
  });

  // busy));
});
