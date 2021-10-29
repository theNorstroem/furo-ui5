import { fixture, html } from '@open-wc/testing';

import { assert } from '@esm-bundle/chai'; // eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/data/src/furo-data-object.js';
import '@furo/fbp/src/testhelper/test-bind.js'; // for testing with wires and hooks
// eslint-disable-next-line import/no-extraneous-dependencies
import './initEnv.js';

import '../src/furo-catalog.js';

describe('furo-ui5-data-select', () => {
  let host;
  let input;
  let dao;
  let daoCollection;

  const options = {
    entities: [
      {
        data: {
          display_name: 'John Doe, +41783332244',
          first_name: 'John',
          id: '1',
          name: 'Doe',
          phone_nr: '+41783332244',
          skills: [],
        },
        links: [
          {
            href: '/mockdata/persons/1/get.json',
            method: 'GET',
            rel: 'self',
            type: 'person.Person',
            service: 'PersonService',
          },
        ],
      },
      {
        data: {
          display_name: 'Tari Sakota, +41791532244',
          first_name: 'Tari',
          id: '2',
          name: 'Sakota',
          phone_nr: '+41791532244',
          skills: [],
        },
        links: [
          {
            href: '/mockdata/persons/2/get.json',
            method: 'GET',
            rel: 'self',
            type: 'person.Person',
            service: 'PersonService',
          },
        ],
      },
      {
        data: {
          display_name: 'Yoko Tasimoto, +41781442244',
          first_name: 'Yoko',
          id: '3',
          name: 'Tasimoto',
          phone_nr: '+41781442244',
          skills: [],
        },
        links: [
          {
            href: '/mockdata/persons/3/get.json',
            method: 'GET',
            rel: 'self',
            type: 'person.Person',
            service: 'PersonService',
          },
        ],
      },
      {
        data: {
          display_name: 'Lola Tasimoto, +41781442244',
          first_name: 'Lola',
          id: '4',
          name: 'Tasimoto',
          phone_nr: '+41781442244',
          skills: [],
        },
        links: [
          {
            href: '/mockdata/persons/4/get.json',
            method: 'GET',
            rel: 'self',
            type: 'person.Person',
            service: 'PersonService',
          },
        ],
      },
    ],
    links: [
      {
        href: '/mockdata/persons/list.json',
        method: 'GET',
        rel: 'list',
        type: 'person.PersonCollection',
        service: 'PersonService',
      },
    ],
  };

  beforeEach(async () => {
    const testbind = await fixture(html`
      <test-bind>
        <template>
          <furo-ui5-data-select
            ƒ-bind-data="--dao(*.data.description)"
            ƒ-bind-options="--collection(*.entities)"
          >
            <ui5-option data-id="1">1</ui5-option>
            <ui5-option data-id="2">2</ui5-option>
            <ui5-option data-id="3">3</ui5-option>
            <ui5-option data-id="4">4</ui5-option>
            <div slot="valueStateMessage">
              Information message. If you use ui5-option elements without
              data-id attribute, the selected value is the innerText of the
              option.
            </div>
          </furo-ui5-data-select>
          <furo-data-object
            type="experiment.ExperimentEntity"
            @-object-ready="--dao"
          ></furo-data-object>
          <furo-data-object
            type="person.PersonCollection"
            @-object-ready="--collection"
          ></furo-data-object>
        </template>
      </test-bind>
    `);
    await testbind.updateComplete;
    host = testbind._host;
    [, input, dao, daoCollection] = testbind.parentNode.children;
    await host.updateComplete;
    await input.updateComplete;
    await dao.updateComplete;
    await daoCollection.updateComplete;
  });

  it('should be a furo-ui5-data-select element', done => {
    // keep this test on top, so you can recognize a wrong assignment
    assert.equal(input.nodeName.toLowerCase(), 'furo-ui5-data-select');
    done();
  });

  it('should bind a field node', done => {
    daoCollection.injectRaw(options);

    setTimeout(() => {
      assert.equal(input.activeFieldBinding, true);
      done();
    }, 0);
  });

  it('should detect a field value change event', done => {
    input._privilegedAttributes['id-field-path'] = 'data.id';
    input._privilegedAttributes['id-field-path'] = 'data.id';
    input._privilegedAttributes['display-field-path'] = 'data.display_name';

    daoCollection.addEventListener('data-injected', () => {
      setTimeout(() => {
        assert.equal(input.activeFieldBinding, true, 'field binding');
        dao.data.data.description._value = '3';
        setTimeout(() => {
          assert.equal(input.selectedOption.dataset.id, 3, 'selected element');
          done();
        }, 35);
      }, 50);
    });

    daoCollection.injectRaw(options);
  });
});
