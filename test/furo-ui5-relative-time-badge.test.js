import { fixture, html } from '@open-wc/testing';
import { registerLocaleDataLoader } from '@ui5/webcomponents-base/dist/asset-registries/LocaleData.js';
import { setLanguage } from '@ui5/webcomponents-base/dist/config/Language.js';

import '@ui5/webcomponents-icons/dist/AllIcons.js';
import { assert } from '@esm-bundle/chai'; // eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/data/src/furo-data-object.js';
import '@furo/fbp/src/flow-bind.js'; // for testing with wires and hooks
// eslint-disable-next-line import/no-extraneous-dependencies

import './initEnv.js';

import '../src/furo-ui5-relative-time-badge.js';

registerLocaleDataLoader('en', () =>
  // eslint-disable-next-line import/no-unresolved, import/no-absolute-path
  import('/assets/cldr/en.js').then(cldr => cldr.default())
);

describe('furo-ui5-relative-time-badge', () => {
  let host;
  let badge;
  let dao;

  const testRecordMeta = {
    data: {
      furo_data_date_input: '2022-03-29T10:05:45-06:00',
      google_timestamp: '2022-04-08T09:05:33.000Z',
    },
  };
  beforeEach(async () => {
    await setLanguage('en');

    const testbind = await fixture(html`
      <flow-bind>
        <template>
          <furo-ui5-relative-time-badge
            ƒ-bind-data="--entity(*.data.furo_data_time_input)"
          ></furo-ui5-relative-time-badge>
          <furo-data-object
            type="experiment.ExperimentEntity"
            @-object-ready="--entity"
          ></furo-data-object>
        </template>
      </flow-bind>
    `);
    await testbind.updateComplete;
    host = testbind._host;
    [, badge, dao] = testbind.parentNode.children;
    await host.updateComplete;
    await badge.updateComplete;
    await dao.updateComplete;
  });

  it('should be a furo-ui5-relative-time-badge element', done => {
    // keep this test on top, so you can recognize a wrong assignment
    assert.equal(badge.nodeName.toLowerCase(), 'furo-ui5-relative-time-badge');
    done();
  });

  it('should display date according to the defined pattern (ISO Date, today)', done => {
    testRecordMeta.data.furo_data_time_input = new Date().toISOString();
    dao.injectRaw(testRecordMeta);
    setTimeout(() => {
      assert.equal(
        badge.shadowRoot.querySelector('ui5-badge')._state.colorScheme,
        '2',
        'check color'
      );
      assert.equal(
        badge.shadowRoot.querySelector('ui5-badge')._state.default[2].data,
        'today',
        'check text'
      );
      done();
    }, 10);
  });

  it('should display date according to the defined pattern (ISO Date, tomorrow)', done => {
    const tomorrow = new Date().getTime() + 86400000;
    testRecordMeta.data.furo_data_time_input = new Date(tomorrow).toISOString();
    dao.injectRaw(testRecordMeta);
    setTimeout(() => {
      assert.equal(
        badge.shadowRoot.querySelector('ui5-badge')._state.colorScheme,
        '1',
        'check color'
      );
      assert.equal(
        badge.shadowRoot.querySelector('ui5-badge')._state.default[2].data,
        'tomorrow',
        'check text'
      );
      done();
    }, 10);
  });

  it('should display date according to the defined pattern (ISO Date, yesterday)', done => {
    const yesterday = new Date().getTime() - 86400000;
    testRecordMeta.data.furo_data_time_input = new Date(
      yesterday
    ).toISOString();
    dao.injectRaw(testRecordMeta);
    setTimeout(() => {
      assert.equal(
        badge.shadowRoot.querySelector('ui5-badge')._state.colorScheme,
        '2',
        'check color'
      );
      assert.equal(
        badge.shadowRoot.querySelector('ui5-badge')._state.default[2].data,
        'yesterday',
        'check text'
      );
      done();
    }, 10);
  });
});
