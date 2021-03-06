import { fixture, html } from '@open-wc/testing';

import { assert } from '@esm-bundle/chai';
import '../src/furo-catalog.js';
import '@furo/fbp/src/flow-bind'; // for testing with wires and hooks
import '@ui5/webcomponents-icons/dist/AllIcons.js';

describe('furo-ui5-message-strip-display', () => {
  let element;
  let messageStripDisplay;
  let messageStrip;
  let host;

  beforeEach(async () => {
    const testbind = await fixture(html`
      <flow-bind>
        <template>
          <furo-ui5-message-strip-display></furo-ui5-message-strip-display>
          <furo-ui5-message-strip></furo-ui5-message-strip>
          <div></div>
        </template>
      </flow-bind>
    `);
    await testbind.updateComplete;
    host = testbind._host;
    [, messageStripDisplay, messageStrip, element] =
      testbind.parentNode.children;
    await host.updateComplete;
    await element.updateComplete;
    await messageStrip.updateComplete;
    await messageStripDisplay.updateComplete;
  });

  it('should be a furo-ui5-message-strip-display', done => {
    // keep this test on top, so you can recognize a wrong asignment
    assert.equal(
      messageStripDisplay.nodeName.toLowerCase(),
      'furo-ui5-message-strip-display'
    );
    done();
  });
});
