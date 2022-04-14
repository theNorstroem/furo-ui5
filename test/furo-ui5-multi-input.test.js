import { fixture, html } from '@open-wc/testing';

import { assert } from '@esm-bundle/chai'; // eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/data/src/furo-data-object.js';
import '@furo/fbp/src/flow-bind.js'; // for testing with wires and hooks
// eslint-disable-next-line import/no-extraneous-dependencies
import './initEnv.js';

import '../src/furo-catalog.js';

describe('furo-ui5-multi-input', () => {
  let host;
  let input;
  let dao;

  const testRecordMeta = {
    data: {
      description: 'Description from record',
      display_name: 'display_name',
      id: '1',
      furo_data_checkbox_input: true,
      furo_data_text_input:
        'hallo test with loads of text to show the overflow. hallo test with loads of text to show the overflow.',
      furo_data_number_input: 12.55,
      furo_data_time_input: '17:34',
      furo_data_color_input: '#e318ed',
      furo_data_multi_input: 'hallo , this is multi input',
      furo_data_date_input: '2019-02-22',
      furo_data_date_input_google: {
        day: 31,
        display_name: '31.12.2020',
        month: 12,
        year: 2020,
      },
      furo_data_range_input: 31,
      furo_data_bool_icon: false,
      type_property: [
        {
          code: 'c0a7f550-0fbe-4046-8fa9-60c86327b6b1',
          data: {
            '@type': 'type.googleapis.com/furo.StringProperty',
            data: '01032020',
          },
          flags: ['is-overwritable', 'my-prop'],
          display_name: 'Vertragsbeginn',
          id: '246d79a0-0a15-43c5-b18f-ac8a4a449df1',
          meta: {
            fields: {
              data: {
                constraints: {
                  required: {
                    is: 'true',
                    message: 'Bitte ausfüllen!',
                  },
                },
                meta: {
                  label: 'Vertragsbeginn custom label',
                  readonly: true,
                },
              },
            },
          },
        },
      ],
      repstring: ['AAA', 'BBBB', 'CCCC'],
      furo_data_money_input: {
        currency_code: 'CHF',
        units: 3333,
        nanos: 75100000,
      },
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
          <furo-ui5-multi-input
            ƒ-bind-data="--entity(*.data.repstring)"
          ></furo-ui5-multi-input>
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

  it('should be a furo-ui5-multi-input element', done => {
    // keep this test on top, so you can recognize a wrong assignment
    assert.equal(input.nodeName.toLowerCase(), 'furo-ui5-multi-input');
    done();
  });

  it('should update value after inject response', done => {
    if (dao.injectRaw(testRecordMeta)) {
      setTimeout(() => {
        assert.equal(
          input.querySelectorAll('ui5-token').length,
          3,
          'check items'
        );
        done();
      }, 16);
    }
  });
});
