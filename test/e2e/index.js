/* eslint-disable no-undef */
import nightmare from 'nightmare';
import assert from 'assert';

describe('react-hex', () => {
  let page;
  beforeEach(() => {
    page = nightmare({
      show: process.env.HEADLESS_E2E !== 'true',
      webPreferences: {
        // clear localStorage every test
        partition: 'nopersist',
      },
    });
  });

  it('react-hex Component', () => page
    .goto('http://localhost:9999')
    .wait('[data-reactroot]')
    .evaluate(() => $('h1').text())
    .end()
    .then(text => assert.strictEqual(text, 'hello react-hex')));
});
