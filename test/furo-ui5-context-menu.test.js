import { fixture, html } from '@open-wc/testing';

import { assert } from '@esm-bundle/chai';
import '@furo/fbp/src/flow-bind.js'; // for testing with wires and hooks
import { Samplectxmenudata } from './samplectxmenudata.js';
// eslint-disable-next-line import/no-extraneous-dependencies
import './initEnv.js';
import '@furo/data/src/furo-data-object.js';
import '@furo/data/src/furo-entity-agent';
import '@furo/data/src/furo-deep-link';
import '../src/furo-ui5-context-menu.js';
import '../src/furo-ui5-context-menu-display.js';

import '@ui5/webcomponents-icons/dist/meal.js';
import '@ui5/webcomponents-icons/dist/chevron-phase.js';
import '@ui5/webcomponents-icons/dist/increase-line-height.js';

import '@furo/data';

describe('furo-ui5-context-menu', () => {
  let host;
  let menu;
  let dataobject;
  let trigger;
  let display;

  beforeEach(async () => {
    const testbind = await fixture(html`
      <flow-bind
        style="height: 800px;width: 800px; display: block; position: relative"
      >
        <template>
          <furo-ui5-context-menu
            condensed
            ƒ-trigger="--menuClkd"
            ƒ-bind-data="--menuDO"
            @-menu-item-selected="--menuItem"
          >
          </furo-ui5-context-menu>
          <furo-data-object
            type="menu.Menuitem"
            ƒ-inject-raw="--data"
            @-object-ready="--menuDO"
            @-data-injected="--menuDO"
          ></furo-data-object>
          <furo-icon-button icon="menu" @-click="--menuClkd"></furo-icon-button>
          <furo-ui5-context-menu-display></furo-ui5-context-menu-display>
        </template>
      </flow-bind>
    `);
    await testbind.updateComplete;
    host = testbind._host;
    [, menu, dataobject, trigger, display] = testbind.parentNode.children;
    await host.updateComplete;
    await menu.updateComplete;
    await dataobject.updateComplete;
    await trigger.updateComplete;
    await display.updateComplete;
  });

  it('objects should have the correct assignments', done => {
    // keep this test on top, so you can recognize a wrong asignment
    assert.equal(menu.nodeName.toLowerCase(), 'furo-ui5-context-menu');
    assert.equal(dataobject.nodeName.toLowerCase(), 'furo-data-object');
    assert.equal(trigger.nodeName.toLowerCase(), 'furo-icon-button');
    assert.equal(
      display.nodeName.toLowerCase(),
      'furo-ui5-context-menu-display'
    );
    done();
  });

  it('should fire open-furo-data-menu-requested when everything is ready', done => {
    const data = Samplectxmenudata.GetData();
    dataobject.injectRaw(data);

    trigger.click();

    menu.addEventListener('menu-item-selected', e => {
      assert.equal(e.detail.menuitem.display_name._value, 'Single');
      done();
    });

    setTimeout(() => {
      // should have a clickcatcher and menu
      assert.equal(display.shadowRoot.childElementCount, 2);

      display.triggerNavigation('ArrowDown');
      display.triggerNavigation('ArrowDown');
      display.triggerNavigation('ArrowUp');
      display.triggerNavigation('ArrowDown');
      display.triggerNavigation('ArrowDown');

      display.triggerNavigation('ArrowRight');

      setTimeout(() => {
        const submenu = display.shadowRoot.querySelector(
          'furo-ui5-context-submenu'
        );
        submenu.triggerNavigation('ArrowDown');
        submenu.triggerNavigation('ArrowDown');
        submenu.triggerNavigation('ArrowRight');
        submenu.triggerNavigation('ArrowUp');
        submenu.triggerNavigation('ArrowUp');
        submenu.triggerNavigation('Enter');
      }, 150);
    }, 150);
  });

  it('should open a sub sub menu', done => {
    const data = Samplectxmenudata.GetData();
    dataobject.injectRaw(data);

    trigger.click();

    setTimeout(() => {
      // should have a clickcatcher and menu
      assert.equal(display.shadowRoot.childElementCount, 2);

      display.triggerNavigation('ArrowDown');
      display.triggerNavigation('ArrowDown');
      display.triggerNavigation('ArrowUp');
      display.triggerNavigation('ArrowDown');
      display.triggerNavigation('ArrowDown');

      display.triggerNavigation('ArrowRight');

      setTimeout(() => {
        const submenu = display.shadowRoot.querySelector(
          'furo-ui5-context-submenu'
        );
        submenu.triggerNavigation('ArrowDown');
        submenu.triggerNavigation('ArrowRight');
        setTimeout(() => {
          assert.equal(display.shadowRoot.childElementCount, 4);
          done();
        }, 150);
      }, 150);
    }, 150);
  });
});
