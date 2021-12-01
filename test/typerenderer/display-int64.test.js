import { fixture, html } from '@open-wc/testing';

import { assert } from '@esm-bundle/chai';
import '@furo/fbp/src/flow-bind.js'; // for testing with wires and hooks
// eslint-disable-next-line import/no-extraneous-dependencies
import '../initEnv.js';
import '../../src/typerenderer/display-int64.js';

describe('display-int64', () => {
  let host;
  let display;
  let dao;

  beforeEach(async () => {
    const testbind = await fixture(html`
      <flow-bind>
        <template>
          <display-int64 ƒ-bind-data="--dao(*.int64)"></display-int64>
          <furo-data-object
            type="experiment.Experiment"
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

  it('should be a display-int64 element', done => {
    // keep this test on top, so you can recognize a wrong assignment
    assert.equal(display.nodeName.toLowerCase(), 'display-int64');
    done();
  });

  it('should bind data', done => {
    setTimeout(() => {
      assert.equal(display._field._value, null);
      done();
    }, 0);
  });

  it('should show template according to the value of the data', done => {
    dao.injectRaw({ int64: 33 });

    setTimeout(() => {
      assert.equal(
        display._field._value,
        33,
        'check if the int32 value is assigned'
      );
      assert.equal(
        display._displayValue,
        '33',
        'check if the int32 value is formatted'
      );
      done();
    }, 0);
  });
});
