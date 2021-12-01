import { fixture, html } from '@open-wc/testing';

import { assert } from '@esm-bundle/chai';
import '../src/furo-ui5-reference-search.js';

import '@furo/fbp/src/flow-bind.js'; // for testing with wires and hooks
// eslint-disable-next-line import/no-extraneous-dependencies
import './initEnv.js';

describe('furo-ui5-reference-search', () => {
  let host;
  let referenceSearch;
  let entityObject;

  beforeEach(async () => {
    const testbind = await fixture(html`
      <flow-bind>
        <template>
          <furo-ui5-reference-search
            ƒ-bind-data="--entityReady(*.owner)"
            placeholder="this is a placeholder"
          >
          </furo-ui5-reference-search>

          <furo-data-object type="task.Task" @-object-ready="--entityReady">
          </furo-data-object>
        </template>
      </flow-bind>
    `);
    await testbind.updateComplete;
    host = testbind._host;
    [, referenceSearch, entityObject] = testbind.parentNode.children;
    await host.updateComplete;
    await referenceSearch.updateComplete;
    await entityObject.updateComplete;
  });

  it('should be a furo-ui5-reference-search', done => {
    // keep this test on top, so you can recognize a wrong asignment
    assert.equal(
      referenceSearch.nodeName.toLowerCase(),
      'furo-ui5-reference-search'
    );
    assert.equal(entityObject.nodeName.toLowerCase(), 'furo-data-object');

    done();
  });

  // referenceSearch));

  it('should set placeholder  ', done => {
    setTimeout(() => {
      const i = referenceSearch.shadowRoot.getElementById('input');
      assert.equal(
        i.getAttribute('placeholder'),
        'this is a placeholder',
        'placeholder check'
      );
      done();
    }, 0);
  });

  it('should bind data', done => {
    setTimeout(() => {
      assert.equal(
        referenceSearch.__fieldNode._meta.label,
        'person.label',
        'binding check'
      );
      done();
    }, 15);
  });
});
