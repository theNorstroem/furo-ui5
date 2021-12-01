import { fixture, html } from '@open-wc/testing';
import { assert } from '@esm-bundle/chai';

import '@furo/fbp/src/flow-bind.js'; // for testing with wires and hooks
// eslint-disable-next-line import/no-extraneous-dependencies
import './initEnv.js';
import '@furo/data/src/furo-data-object.js';
import '@furo/data/src/furo-entity-agent';
import '@furo/data/src/furo-deep-link';
import '../src/furo-ui5-bool-icon.js';

describe('furo-data-bool-icon', () => {
  let host;
  let dataBoolIcon;
  let entityObject;
  let deeplink;

  beforeEach(async () => {
    const testbind = await fixture(html`
      <flow-bind>
        <template>
          <furo-ui5-bool-icon
            ƒ-bind-data="--entity(*.data.furo_data_bool_icon)"
          ></furo-ui5-bool-icon>

          <furo-data-object
            type="experiment.ExperimentEntity"
            @-object-ready="--entity"
            ƒ-inject-raw="--response"
          ></furo-data-object>
          <furo-deep-link
            service="ExperimentService"
            @-hts-out="--hts"
          ></furo-deep-link>
          <furo-entity-agent
            service="ExperimentService"
            ƒ-hts-in="--hts"
            ƒ-load="--hts"
            ƒ-bind-request-data="--entity"
            @-response="--response"
          >
          </furo-entity-agent>
        </template>
      </flow-bind>
    `);
    await testbind.updateComplete;
    host = testbind._host;
    [, dataBoolIcon, entityObject, deeplink] = testbind.parentNode.children;
    await host.updateComplete;
    await dataBoolIcon.updateComplete;
    await deeplink.updateComplete;
    await entityObject.updateComplete;
  });

  it('should be a furo-data-bool-icon', done => {
    // keep this test on top, so you can recognize a wrong asignment
    assert.equal(dataBoolIcon.nodeName.toLowerCase(), 'furo-ui5-bool-icon');
    assert.equal(entityObject.nodeName.toLowerCase(), 'furo-data-object');
    assert.equal(deeplink.nodeName.toLowerCase(), 'furo-deep-link');
    done();
  });

  it('should receive value with bind', done => {
    host._FBPAddWireHook('--hts', () => {
      entityObject.addEventListener(
        'data-changed',
        () => {
          assert.equal(dataBoolIcon._ocSymbol, 'navigation-right-arrow');
          done();
        },
        { once: true }
      );
    });
    deeplink.qpIn({ exp: 1 });
  });

  it('should display the true symbol', done => {
    entityObject.data.data.furo_data_bool_icon._value = true;
    setTimeout(() => {
      assert.equal(dataBoolIcon._ocSymbol, 'navigation-down-arrow');

      done();
    }, 16);
  });
});
