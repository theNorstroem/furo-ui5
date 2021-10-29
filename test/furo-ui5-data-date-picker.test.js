import { fixture, html } from '@open-wc/testing';

import { assert } from '@esm-bundle/chai'; // eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/data/src/furo-data-object.js';
import '@furo/fbp/src/testhelper/test-bind.js'; // for testing with wires and hooks
// eslint-disable-next-line import/no-extraneous-dependencies
import './initEnv.js';

import '../src/furo-catalog.js';

describe('furo-ui5-data-date-picker', () => {
  let host;
  let datepicker;
  let datepicker2;
  let dao;

  beforeEach(async () => {
    const testbind = await fixture(html`
      <test-bind>
        <template>
          <furo-ui5-data-date-picker
            ƒ-bind-data="--entity(*.data.furo_data_date_input_google)"
          ></furo-ui5-data-date-picker>
          <furo-ui5-data-date-picker
            ƒ-bind-data="--entity(*.data.furo_data_date_input)"
          ></furo-ui5-data-date-picker>
          <furo-data-object
            type="experiment.ExperimentEntity"
            @-object-ready="--entity"
          ></furo-data-object>
        </template>
      </test-bind>
    `);
    await testbind.updateComplete;
    host = testbind._host;
    [, datepicker, datepicker2, dao] = testbind.parentNode.children;
    await host.updateComplete;
    await datepicker.updateComplete;
    await datepicker2.updateComplete;
    await dao.updateComplete;
  });

  it('should be a furo-ui5-data-date-picker element', done => {
    // keep this test on top, so you can recognize a wrong assignment
    assert.equal(
      datepicker.nodeName.toLowerCase(),
      'furo-ui5-data-date-picker'
    );
    done();
  });

  // datepicker));

  it('should set min- and max-date via spec', done => {
    setTimeout(() => {
      assert.equal(
        datepicker._state.minDate,
        datepicker.formatValue(new Date(1800, 0, 1)),
        "check if set minDate from spec '1800-01-01'"
      );
      assert.equal(
        datepicker._state.maxDate,
        datepicker.formatValue(new Date(2099, 11, 31)),
        '2099-12-31',
        'check if set maxDate from spec'
      );
      done();
    }, 10);
  });

  it('should have the basic attributes of the fieldNode set (google.type.Date)', done => {
    setTimeout(() => {
      assert.equal(datepicker._state.disabled, false, 'check disabled');
      assert.equal(
        datepicker._state.placeholder,
        undefined,
        'check placeholder'
      );
      assert.equal(datepicker._state.readonly, false, 'check readonly');
      assert.equal(
        datepicker._state.hideWeekNumbers,
        false,
        'check hideWeekNumbers'
      );
      assert.equal(datepicker._state.formatPattern, '', 'check formatPattern');
      done();
    }, 0);
  });

  it('should have the basic attributes of the fieldNode set (Scalar type string)', done => {
    setTimeout(() => {
      assert.equal(datepicker2._state.disabled, false, 'check disabled');
      assert.equal(
        datepicker2._state.placeholder,
        undefined,
        'check placeholder'
      );
      assert.equal(datepicker2._state.readonly, false, 'check readonly');
      assert.equal(
        datepicker2._state.hideWeekNumbers,
        false,
        'check hideWeekNumbers'
      );
      assert.equal(datepicker2._state.formatPattern, '', 'check formatPattern');
      done();
    }, 0);
  });
});
