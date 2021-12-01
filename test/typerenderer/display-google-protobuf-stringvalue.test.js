import { fixture, html } from '@open-wc/testing';

import { assert } from '@esm-bundle/chai';
import '@furo/fbp/src/flow-bind.js'; // for testing with wires and hooks
// eslint-disable-next-line import/no-extraneous-dependencies
import '../initEnv.js';
import '../../src/typerenderer/display-google-protobuf-stringvalue.js';

describe('display-google-protobuf-stringvalue', () => {
  let host;
  let display;
  let dao;

  beforeEach(async () => {
    const testbind = await fixture(html`
      <flow-bind>
        <template>
          <display-google-protobuf-stringvalue
            ƒ-bind-data="--dao(*.single_type_property)"
          ></display-google-protobuf-stringvalue>
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

  it('should be a display-google-protobuf-stringvalue element', done => {
    // keep this test on top, so you can recognize a wrong assignment
    assert.equal(
      display.nodeName.toLowerCase(),
      'display-google-protobuf-stringvalue'
    );
    done();
  });
});
