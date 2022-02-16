import { fixture, html } from '@open-wc/testing';

import { assert } from '@esm-bundle/chai';
import '../src/furo-catalog.js';
import '@furo/fbp/src/flow-bind.js'; // for testing with wires and hooks
// eslint-disable-next-line import/no-extraneous-dependencies
import './initEnv.js';

describe('furo-ui5-rating-indicator', () => {
  let riSclar;
  let riWrapper;
  let riFat;
  let input;
  let host;
  let dataObject;

  const dataScalar = { scalar_int32: 4 };
  const dataWrapper = { wrapper_int32: 3 };
  const dataFat = {
    fat_int32: {
      value: 5,
      labels: {
        disabled: true,
      },
      attributes: {
        max: '16',
      },
    },
  };

  beforeEach(async () => {
    const testbind = await fixture(html`
      <flow-bind>
        <template>
          <furo-ui5-rating-indicator
            ƒ-bind-data="--dao(*.scalar_int32)"
          ></furo-ui5-rating-indicator>
          <furo-ui5-rating-indicator
            ƒ-bind-data="--dao(*.wrapper_int32)"
          ></furo-ui5-rating-indicator>
          <furo-ui5-rating-indicator
            ƒ-bind-data="--dao(*.fat_int32)"
          ></furo-ui5-rating-indicator>

          <furo-ui5-number-input
            ƒ-bind-data="--dao(*.scalar_int32)"
          ></furo-ui5-number-input>

          <furo-data-object
            type="universaltest.Universaltest"
            @-object-ready="--dao"
          ></furo-data-object>
        </template>
      </flow-bind>
    `);
    await testbind.updateComplete;
    host = testbind._host;
    [, riSclar, riWrapper, riFat, input, dataObject] =
      testbind.parentNode.children;
    await host.updateComplete;
    await riSclar.updateComplete;
    await riWrapper.updateComplete;
    await riFat.updateComplete;
    await input.updateComplete;
    await dataObject.updateComplete;
  });

  it('should be a furo-ui5-rating-indicator', done => {
    // keep this test on top, so you can recognize a wrong assignment
    assert.equal(riSclar.nodeName.toLowerCase(), 'furo-ui5-rating-indicator');
    done();
  });

  it('should bind a scalar number type', done => {
    dataObject.addEventListener('data-injected', () => {
      setTimeout(() => {
        assert.equal(riSclar.value, 4);
        done();
      }, 10);
    });
    dataObject.injectRaw(dataScalar);
  });

  it('should bind a wrapper number type', done => {
    dataObject.addEventListener('data-injected', () => {
      setTimeout(() => {
        assert.equal(riWrapper.value, 3);
        done();
      }, 10);
    });
    dataObject.injectRaw(dataWrapper);
  });

  it('should bind a fat number type', done => {
    dataObject.addEventListener('data-injected', () => {
      setTimeout(() => {
        assert.equal(riFat.value, 5);
        assert.equal(riFat.disabled, true);
        done();
      }, 10);
    });
    dataObject.injectRaw(dataFat);
  });
});
