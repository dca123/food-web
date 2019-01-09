import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | receipts', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:receipts');
    assert.ok(route);
  });
});
