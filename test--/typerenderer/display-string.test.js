import { fixture, html } from '@open-wc/testing';

import { assert } from '@esm-bundle/chai';

import '@furo/fbp/src/testhelper/test-bind.js'; // for testing with wires and hooks
// eslint-disable-next-line import/no-extraneous-dependencies
import '../initEnv.js';
import '../../src/typerenderer/display-string.js';
import '@furo/data/src/furo-data-object.js';

describe('display-string', () => {
  let host;
  let display;
  let dao;

  beforeEach(async () => {
    const testbind = await fixture(html`
      <test-bind>
        <template>
          <display-string
            ƒ-bind-data="--dao(*.furo_data_text_input)"
          ></display-string>
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

  it('should be a display-string element', done => {
    // keep this test on top, so you can recognize a wrong assignment
    assert.equal(display.nodeName.toLowerCase(), 'display-string');
    done();
  });

  it('should update on changed field', done => {
    dao.data.furo_data_text_input._value = 'before';
    dao.data.furo_data_text_input._value = 'xxx';

    setTimeout(() => {
      assert.equal(display._text, 'xxx');
      done();
    }, 16);
  });
});
