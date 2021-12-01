import { fixture, html } from '@open-wc/testing';

import { assert } from '@esm-bundle/chai';
import '@furo/fbp/src/flow-bind.js'; // for testing with wires and hooks
// eslint-disable-next-line import/no-extraneous-dependencies
import './initEnv.js';

import '../src/furo-catalog.js';

describe('furo-ui5-button', () => {
  let host;
  let btn;

  beforeEach(async () => {
    const testbind = await fixture(html`
      <flow-bind>
        <template>
          <furo-ui5-button></furo-ui5-button>
        </template>
      </flow-bind>
    `);
    await testbind.updateComplete;
    host = testbind._host;
    [, btn] = testbind.parentNode.children;
    await host.updateComplete;
    await btn.updateComplete;
  });

  it('should be a furo-ui5-button element', done => {
    // keep this test on top, so you can recognize a wrong assignment
    assert.equal(btn.nodeName.toLowerCase(), 'furo-ui5-button');
    done();
  });

  it('should have different designs', done => {
    btn.setAttribute('design', 'Negative');
    setTimeout(() => {
      assert.equal(btn.design, 'Negative');
      done();
    }, 16);
  });

  it('should be clickable', done => {
    btn.addEventListener('click', () => {
      done();
    });
    btn.click();
  });

  it('should have enable function', done => {
    btn.disable();
    btn.addEventListener('click', () => {
      done();
    });
    btn.enable();
    btn.click();
  });

  // btn));
});
