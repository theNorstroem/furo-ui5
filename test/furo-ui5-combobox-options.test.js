import { fixture, html } from '@open-wc/testing';

import { assert } from '@esm-bundle/chai'; // eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/data/src/furo-data-object.js';
import '@furo/data/src/furo-deep-link.js';
import '@furo/data/src/furo-collection-agent.js';
import '@furo/route/src/furo-location.js';

import '@furo/fbp/src/flow-bind.js'; // for testing with wires and hooks
// eslint-disable-next-line import/no-extraneous-dependencies
import './initEnv.js';

import '../src/furo-ui5-combobox.js';

describe('furo-ui5-combobox', () => {
  let host;
  let input;
  let dao;
  beforeEach(async () => {
    const testbind = await fixture(html`
      <flow-bind>
        <template>
          <furo-ui5-combobox
            display-field-path="data.name"
            desc-field-path="data.display_name"
            ƒ-bind-data="--daoPerson(*.sex)"
            ƒ-bind-options="--collection(*.entities)"
            @-search-requested="--searchRequest"
          >
          </furo-ui5-combobox>
          <furo-data-object
            type="person.Person"
            @-object-ready="--daoPerson"
          ></furo-data-object>

          <furo-data-object
            type="person.PersonCollection"
            @-object-ready="--collection"
            ƒ-inject-raw="--response"
          ></furo-data-object>

          <furo-location @-location-changed="--locationChanged"></furo-location>
          <furo-deep-link
            service="PersonService"
            @-hts-out="--hts"
            ƒ-qp-in="--locationChanged(*.query)"
          ></furo-deep-link>

          <furo-collection-agent
            service="PersonService"
            ƒ-hts-in="--hts"
            ƒ-search="--searchRequest"
            @-response="--response"
          >
          </furo-collection-agent>
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

  it('should have options from the type spec', done => {
    setTimeout(() => {
      assert.equal(
        input.querySelectorAll('ui5-cb-item').length,
        3,
        'check options'
      );
      done();
    }, 16);
  });
});
