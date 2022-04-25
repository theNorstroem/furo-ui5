import { fixture, html } from '@open-wc/testing';

import { assert } from '@esm-bundle/chai'; // eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/data/src/furo-data-object.js';
import '@furo/fbp/src/flow-bind.js'; // for testing with wires and hooks
// eslint-disable-next-line import/no-extraneous-dependencies
import './initEnv.js';

import '../src/furo-ui5-combobox.js';

describe('furo-ui5-combobox', () => {
  let host;
  let input;
  let dao;

  const testRecordMeta = {
    data: {
      description: 'Description from record',
    },
    links: [
      {
        href: '/mockdata/experiments/1/get-less-props.json',
        method: 'GET',
        rel: 'self',
        type: 'experiment.ExperimentEntity',
        service: 'experimentservice.ExperimentService',
      },
    ],
    meta: {
      fields: {
        'data.description': {
          meta: {
            label: 'My description',
            readonly: false,
            hint: 'Please enter a description',
          },
          constraints: {
            required: {
              is: 'true',
              message: 'Please fill in!',
            },
          },
        },
      },
    },
  };

  beforeEach(async () => {
    const testbind = await fixture(html`
      <flow-bind>
        <template>
          <furo-ui5-combobox
            ƒ-bind-data="--entity(*.data.description)"
          ></furo-ui5-combobox>
          <furo-data-object
            type="experiment.ExperimentEntity"
            @-object-ready="--entity"
          ></furo-data-object>
        </template>
      </flow-bind>
    `);
    await testbind.updateComplete;
    host = testbind._host;
    [, input, dao] = testbind.parentNode.children;
    await host.updateComplete;
    await input.updateComplete;
    await dao.updateComplete;
  });

  it('should be a furo-ui5-combobox element', done => {
    // keep this test on top, so you can recognize a wrong assignment
    assert.equal(input.nodeName.toLowerCase(), 'furo-ui5-combobox');
    done();
  });

  it('should have the basic attributes of the fieldNode set', done => {
    setTimeout(() => {
      assert.equal(input._state.disabled, false, 'check disabled');
      assert.equal(input._state.highlight, undefined, 'check highlight');
      assert.equal(input._state.placeholder, '', 'check placeholder');
      assert.equal(input._state.readonly, false, 'check readonly');
      assert.equal(input._state.required, false, 'check required');
      assert.equal(input._state.value, '', 'check value');
      assert.equal(input._state.valueState, 'None', 'check valueState');
      done();
    }, 16);
  });

  it('an update of a scalar value on the data object should be synchronized with the input field', done => {
    dao.data.data.description._value = 'Set data in the inner input element';
    setTimeout(() => {
      assert.equal(input.value, 'Set data in the inner input element');
      done();
    }, 64);
  });

  it('should show the value in the input field and apply meta and constraints after data injected', done => {
    dao.addEventListener('data-injected', () => {
      setTimeout(() => {
        assert.equal(input._state.disabled, false, 'check disabled');
        assert.equal(input._state.highlight, undefined, 'check highlight');
        assert.equal(input._state.placeholder, '', 'check placeholder');
        assert.equal(input._state.readonly, false, 'check readonly');
        assert.equal(input._state.required, true, 'check required');
        assert.equal(
          input._state.value,
          'Description from record',
          'check value'
        );
        assert.equal(input._state.valueState, 'None', 'check valueState');
        assert.equal(input.isFat(), false, 'check fieldFormat');

        assert.equal(
          input.shadowRoot.querySelector('input').value,
          'Description from record',
          'check input value'
        );
        done();
      }, 100);
    });
    dao.injectRaw(testRecordMeta);
  });
});
