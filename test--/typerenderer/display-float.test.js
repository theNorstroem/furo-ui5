import { fixture, html } from '@open-wc/testing';

import { assert } from '@esm-bundle/chai';
import '@furo/fbp/src/testhelper/test-bind.js'; // for testing with wires and hooks
// eslint-disable-next-line import/no-extraneous-dependencies
import '../initEnv.js';
import '../../src/typerenderer/display-float.js';
import { Env } from '@furo/framework';

describe('display-float', () => {
  let host;
  let display;
  let dao;

  beforeEach(async () => {
    const testbind = await fixture(html`
      <test-bind>
        <template>
          <display-float
            ƒ-bind-data="--dao(*.furo_data_range_input)"
          ></display-float>
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

  it('should be a display-float element', done => {
    // keep this test on top, so you can recognize a wrong assignment
    assert.equal(display.nodeName.toLowerCase(), 'display-float');
    done();
  });

  it('should bind data', done => {
    setTimeout(() => {
      assert.equal(display._field._value, null);
      done();
    }, 0);
  });

  it('should show template according to the value of the data', done => {
    Env.locale = 'de';
    dao.injectRaw({ furo_data_range_input: 12.21111111 });

    setTimeout(() => {
      assert.equal(
        display._field._value,
        12.21111111,
        'check if the float value is assigned'
      );
      assert.equal(
        display._displayValue,
        '12,211',
        'check if the float value is formatted'
      );
      done();
    }, 0);
  });
});
