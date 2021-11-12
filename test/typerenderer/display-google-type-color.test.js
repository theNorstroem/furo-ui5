import { fixture, html } from '@open-wc/testing';

import { assert } from '@esm-bundle/chai';
import '@furo/fbp/src/testhelper/test-bind.js'; // for testing with wires and hooks
// eslint-disable-next-line import/no-extraneous-dependencies
import '../initEnv.js';
import '../../src/typerenderer/display-google-type-color.js';

describe('display-google-type-color', () => {
  let host;
  let display;
  let dao;

  beforeEach(async () => {
    const testbind = await fixture(html`
      <test-bind>
        <template>
          <display-google-type-color></display-google-type-color>
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

  it('should be a display-google-type-color element', done => {
    // keep this test on top, so you can recognize a wrong assignment
    assert.equal(display.nodeName.toLowerCase(), 'display-google-type-color');
    done();
  });

  it('should only be bindable with google.type.Color', done => {
    if (!display.bindData(dao.data.display_name)) {
      done();
    }
  });
});
