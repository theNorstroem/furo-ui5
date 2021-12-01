import { fixture, html } from '@open-wc/testing';

import { assert } from '@esm-bundle/chai'; // eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/data/src/furo-data-object.js';
import '@furo/fbp/src/flow-bind.js'; // for testing with wires and hooks
// eslint-disable-next-line import/no-extraneous-dependencies
import './initEnv.js';

import '../src/furo-ui5-reference-search-labeled.js';

describe('furo-ui5-reference-search-labeled-test', () => {
  let host;
  let input;
  let dao;

  beforeEach(async () => {
    const testbind = await fixture(html`
      <flow-bind>
        <template>
          <furo-ui5-reference-search-labeled
            ƒ-bind-data="--entity(*.owner)"
          ></furo-ui5-reference-search-labeled>
          <furo-data-object
            type="task.Task"
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

  it('should be a furo-ui5-reference-search-labeled element', done => {
    // keep this test on top, so you can recognize a wrong assignment
    assert.equal(
      input.nodeName.toLowerCase(),
      'furo-ui5-reference-search-labeled'
    );
    done();
  });

  it('should have a label component inside', done => {
    setTimeout(() => {
      const label = input.shadowRoot.querySelector('ui5-label');
      assert.equal(label.innerText, 'person.label', 'check label text');

      done();
    }, 16);
  });

  it('should support attribute disabled ', done => {
    input.setAttribute('disabled', '');
    setTimeout(() => {
      const component = input.shadowRoot.getElementById('Input');
      assert.equal(
        component.getAttribute('disabled'),
        '',
        'check attribute disabled '
      );
      done();
    }, 0);
  });

  /*  it('label text should be overrideable via meta ', done => {
    dao.injectRaw(testRecordMeta);

    setTimeout(() => {
      const label = input.shadowRoot.querySelector('ui5-label');
      assert.equal(label.innerText, 'owner label override via response meta', 'check label text ');

      done();
    }, 160);
  }); */
});
