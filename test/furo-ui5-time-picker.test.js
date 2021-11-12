import { fixture, html } from '@open-wc/testing';
import { registerLocaleDataLoader } from '@ui5/webcomponents-base/dist/asset-registries/LocaleData.js';
import { setLanguage } from '@ui5/webcomponents-base/dist/config/Language.js';

import '@ui5/webcomponents-icons/dist/AllIcons.js';
import { assert } from '@esm-bundle/chai'; // eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/data/src/furo-data-object.js';
import '@furo/fbp/src/testhelper/test-bind.js'; // for testing with wires and hooks
// eslint-disable-next-line import/no-extraneous-dependencies

import './initEnv.js';

import '../src/furo-ui5-time-picker.js';
// eslint-disable-next-line import/no-unresolved, import/no-absolute-path
registerLocaleDataLoader('en', () =>
  import('/assets/cldr/en.js').then(cldr => cldr.default())
);

describe('furo-ui5-time-picker', () => {
  let host;
  let timepicker;
  let timepicker2;
  let dao;

  const testRecordMeta = {
    data: {
      furo_data_time_input: '16:23:45.628',
      google_timeofday: {
        hours: 16,
        minutes: 23,
        seconds: 45,
        nanos: 0,
      },
    },
    meta: {
      fields: {
        'data.google_timeofday': {
          meta: {
            label: 'google timeofday label via meta',
            readonly: false,
          },
          constraints: {
            max: { is: '23:00:00', message: 'MAX today 23:00:00' },
            min: { is: '08:00:00', message: 'MIN today 08:00:00' },
            pattern: {
              is: 'HH:mm:ss',
              message: 'Bitte ausfüllen!',
            },
          },
        },
      },
    },
  };
  beforeEach(async () => {
    await setLanguage('en');

    const testbind = await fixture(html`
      <test-bind>
        <template>
          <furo-ui5-time-picker
            ƒ-bind-data="--entity(*.data.google_timeofday)"
          ></furo-ui5-time-picker>
          <furo-ui5-time-picker
            ƒ-bind-data="--entity(*.data.furo_data_time_input)"
          ></furo-ui5-time-picker>
          <furo-data-object
            type="experiment.ExperimentEntity"
            @-object-ready="--entity"
          ></furo-data-object>
        </template>
      </test-bind>
    `);
    await testbind.updateComplete;
    host = testbind._host;
    [, timepicker, timepicker2, dao] = testbind.parentNode.children;
    await host.updateComplete;
    await timepicker.updateComplete;
    await timepicker2.updateComplete;
    await dao.updateComplete;
  });

  it('should be a furo-ui5-time-picker element', done => {
    // keep this test on top, so you can recognize a wrong assignment
    assert.equal(timepicker.nodeName.toLowerCase(), 'furo-ui5-time-picker');
    done();
  });

  // timepicker));

  it('should have the basic attributes of the fieldNode ', done => {
    setTimeout(() => {
      assert.equal(timepicker._state.disabled, false, 'check disabled');
      assert.equal(timepicker._state.readonly, false, 'check readonly');
      assert.equal(timepicker._state.formatPattern, '', 'check formatPattern');
      done();
    }, 0);
  });

  it('should display date according to the defined pattern (google.type.TimeOfToday)', done => {
    dao.injectRaw(testRecordMeta);
    setTimeout(() => {
      assert.equal(timepicker.formatPattern, 'HH:mm:ss', 'pattern applied');
      assert.equal(timepicker._state.value, '16:23:45', 'check value');
      done();
    }, 10);
  });

  it('should display date according to the defined pattern (string)', done => {
    dao.injectRaw(testRecordMeta);

    setTimeout(() => {
      assert.equal(timepicker2._state.value, '4:23:45 PM', 'check value');
      done();
    }, 16);
  });
});
