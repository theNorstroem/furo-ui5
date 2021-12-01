import { fixture, html } from '@open-wc/testing';
import { assert } from '@esm-bundle/chai';

import '@furo/fbp/src/flow-bind.js'; // for testing with wires and hooks
// eslint-disable-next-line import/no-extraneous-dependencies
import './initEnv.js';
import '../src/furo-ui5-sign-pad.js';

describe('furo-data-sign-pad', () => {
  let element;
  let host;
  let dataObject;

  beforeEach(async () => {
    const testbind = await fixture(html`
      <flow-bind>
        <template>
          <furo-ui5-sign-pad ƒ-bind-data="--entity(*.id)"></furo-ui5-sign-pad>
          <furo-data-object
            type="experiment.Experiment"
            @-object-ready="--entity"
          ></furo-data-object>
        </template>
      </flow-bind>
    `);
    await testbind.updateComplete;
    host = testbind._host;
    [, element, dataObject] = testbind.parentNode.children;
    await host.updateComplete;
    await element.updateComplete;
    await dataObject.updateComplete;
  });

  it('should be a furo-data-sign-pad', done => {
    // keep this test on top, so you can recognize a wrong asignment
    assert.equal(element.nodeName.toLowerCase(), 'furo-ui5-sign-pad');
    assert.equal(dataObject.nodeName.toLowerCase(), 'furo-data-object');
    done();
  });

  it('should draw a image if set on value', done => {
    setTimeout(() => {
      element._field.addEventListener('this-field-value-changed', () => {
        // empty image
        assert.equal(
          element._field._value,
          'data:image/gif;base64,R0lGODdhEAAQAMwAAPj7+FmhUYjNfGuxYYDJdYTIeanOpT+DOTuANXi/bGOrWj6CONzv2sPjv2CmV1unU4zPgI/Sg6DJnJ3ImTh8Mtbs00aNP1CZSGy0YqLEn47RgXW8amasW7XWsmmvX2iuXiwAAAAAEAAQAAAFVyAgjmRpnihqGCkpDQPbGkNUOFk6DZqgHCNGg2T4QAQBoIiRSAwBE4VA4FACKgkB5NGReASFZEmxsQ0whPDi9BiACYQAInXhwOUtgCUQoORFCGt/g4QAIQA7'
        );
        done();
      });

      dataObject.data.id._value =
        'data:image/gif;base64,R0lGODdhEAAQAMwAAPj7+FmhUYjNfGuxYYDJdYTIeanOpT+DOTuANXi/bGOrWj6CONzv2sPjv2CmV1unU4zPgI/Sg6DJnJ3ImTh8Mtbs00aNP1CZSGy0YqLEn47RgXW8amasW7XWsmmvX2iuXiwAAAAAEAAQAAAFVyAgjmRpnihqGCkpDQPbGkNUOFk6DZqgHCNGg2T4QAQBoIiRSAwBE4VA4FACKgkB5NGReASFZEmxsQ0whPDi9BiACYQAInXhwOUtgCUQoORFCGt/g4QAIQA7';
    });
  }, 32);
});
