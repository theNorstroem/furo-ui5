import { fixture, html } from '@open-wc/testing';

// eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/data/src/furo-data-object.js';
import '@furo/fbp/src/flow-bind.js'; // for testing with wires and hooks
// eslint-disable-next-line import/no-extraneous-dependencies
import './initEnv.js';
import { assert } from '@esm-bundle/chai';
import '../src/furo-catalog.js';

describe('furo-ui5-radiogroup', () => {
  let host;
  let radiogroup;
  let dao;

  beforeEach(async () => {
    const testbind = await fixture(html`
      <flow-bind>
        <template>
          <div>
            <furo-ui5-radio-button
              name="Group1"
              ƒ-bind-data="--data(*.furo_data_checkbox_input)"
            ></furo-ui5-radio-button>
            <furo-ui5-radio-button
              name="Group1"
              ƒ-bind-data="--data(*.furo_data_bool_icon)"
            ></furo-ui5-radio-button>
          </div>
          <furo-data-object
            type="experiment.Experiment"
            @-object-ready="--data"
          ></furo-data-object>
        </template>
      </flow-bind>
    `);
    await testbind.updateComplete;
    host = testbind._host;
    [, radiogroup, dao] = testbind.parentNode.children;
    await host.updateComplete;
    await radiogroup.updateComplete;
    await dao.updateComplete;
  });

  it('should allow only one truly value', done => {
    radiogroup.children[0].checked = true;
    setTimeout(() => {
      assert.equal(radiogroup.children[1].checked, false);
      done();
    }, 24);
  });

  it('should toggle the elements', done => {
    radiogroup.children[1].checked = true;
    setTimeout(() => {
      assert.equal(radiogroup.children[0].checked, false);
      done();
    }, 24);
  });
});
