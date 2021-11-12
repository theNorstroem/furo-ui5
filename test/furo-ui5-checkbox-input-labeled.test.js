import { fixture, html } from '@open-wc/testing';
import { registerLocaleDataLoader } from '@ui5/webcomponents-base/dist/asset-registries/LocaleData.js';
import { setLanguage } from '@ui5/webcomponents-base/dist/config/Language.js';

import '@ui5/webcomponents-icons/dist/AllIcons.js';
import { assert } from '@esm-bundle/chai'; // eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/data/src/furo-data-object.js';
import '@furo/fbp/src/testhelper/test-bind.js'; // for testing with wires and hooks
// eslint-disable-next-line import/no-extraneous-dependencies
import './initEnv.js';

import '../src/furo-catalog.js';

registerLocaleDataLoader('en', () =>
  // eslint-disable-next-line import/no-unresolved, import/no-absolute-path
  import('/assets/cldr/en.js').then(cldr => cldr.default())
);

describe('furo-ui5-checkbox-input-labeled', () => {
  let host;
  let input;
  let dao;
  const testRecordMeta = {
    data: {
      furo_data_checkbox_input: true,
    },
    meta: {
      fields: {
        'data.furo_data_checkbox_input': {
          meta: {
            label: 'label override via response meta',
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
    await setLanguage('en');
    const testbind = await fixture(html`
      <test-bind>
        <template>
          <furo-ui5-checkbox-input-labeled
            ƒ-bind-data="--entity(*.data.furo_data_checkbox_input)"
          ></furo-ui5-checkbox-input-labeled>
          <furo-data-object
            type="experiment.ExperimentEntity"
            @-object-ready="--entity"
          ></furo-data-object>
        </template>
      </test-bind>
    `);
    await testbind.updateComplete;
    host = testbind._host;
    [, input, dao] = testbind.parentNode.children;
    await host.updateComplete;
    await input.updateComplete;
    await dao.updateComplete;
  });

  it('should be a furo-ui5-checkbox-input-labeled element', done => {
    // keep this test on top, so you can recognize a wrong assignment
    assert.equal(
      input.nodeName.toLowerCase(),
      'furo-ui5-checkbox-input-labeled'
    );
    done();
  });

  it('should have a label component inside', done => {
    setTimeout(() => {
      const label = input.shadowRoot.querySelector('ui5-label');
      assert.equal(label.innerText, 'checkbox_input', 'check label text');

      done();
    }, 16);
  });

  it('label text should be overrideable via meta ', done => {
    dao.injectRaw(testRecordMeta);

    setTimeout(() => {
      const label = input.shadowRoot.querySelector('ui5-label');
      assert.equal(
        label.innerText,
        'label override via response meta',
        'check label text '
      );

      done();
    }, 16);
  });

  it('should support attribute disabled ', done => {
    input.setAttribute('disabled', '');
    setTimeout(() => {
      const checkbox = input.shadowRoot.querySelector(
        'furo-ui5-checkbox-input'
      );
      assert.equal(checkbox.disabled, true, 'check attribute disabled ');
      done();
    }, 0);
  });
});
