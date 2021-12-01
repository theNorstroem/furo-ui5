import { fixture, html } from '@open-wc/testing';

import { assert } from '@esm-bundle/chai';
import '@furo/fbp/src/flow-bind.js'; // for testing with wires and hooks
// eslint-disable-next-line import/no-extraneous-dependencies
import '../initEnv.js';
import '../../src/typerenderer/display-furo-fat-float.js';
import { Env } from '@furo/framework';

describe('display-furo-fat-float', () => {
  let host;
  let display;
  let dao;

  beforeEach(async () => {
    const testbind = await fixture(html`
      <flow-bind>
        <template>
          <display-furo-fat-float
            ƒ-bind-data="--dao(*.fat_float)"
          ></display-furo-fat-float>
          <furo-data-object
            type="universaltest.Universaltest"
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

  it('should be a display-furo-fat-float element', done => {
    // keep this test on top, so you can recognize a wrong assignment
    assert.equal(display.nodeName.toLowerCase(), 'display-furo-fat-float');
    done();
  });

  it('should bind data', done => {
    setTimeout(() => {
      assert.equal(display._field.value._value, null);
      done();
    }, 0);
  });

  it('should show template according to the value of the data', done => {
    Env.locale = 'de';
    dao.injectRaw({
      fat_float: { value: 12.21111111, labels: [], attributes: [] },
    });

    setTimeout(() => {
      assert.equal(
        display._field.value._value,
        12.21111111,
        'check if the fat.float value is assigned'
      );
      assert.equal(
        display._displayValue,
        '12,211',
        'check if the fat.float value is formatted'
      );
      done();
    }, 10);
  });
});
