import { fixture, html } from '@open-wc/testing';

import { assert } from '@esm-bundle/chai';
import '@furo/fbp/src/flow-bind.js'; // for testing with wires and hooks
// eslint-disable-next-line import/no-extraneous-dependencies
import '../initEnv.js';
import '../../src/typerenderer/display-furo-reference.js';

describe('display-furo-reference', () => {
  let host;
  let display;
  let dao;

  beforeEach(async () => {
    const testbind = await fixture(html`
      <flow-bind>
        <template>
          <display-furo-reference
            ƒ-bind-data="--dao(*.owner)"
          ></display-furo-reference>
          <furo-data-object
            type="task.Task"
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

  it('should be a display-furo-reference element', done => {
    // keep this test on top, so you can recognize a wrong assignment
    assert.equal(display.nodeName.toLowerCase(), 'display-furo-reference');
    done();
  });

  it('should bind data', done => {
    setTimeout(() => {
      assert.equal(display._field.display_name._value, '');
      done();
    }, 0);
  });

  it('should show template according to the value of the data', done => {
    setTimeout(() => {
      assert.equal(display._field.display_name._value, '');
      assert.equal(display._displayValue, '');
      done();
    }, 100);
  });
});
