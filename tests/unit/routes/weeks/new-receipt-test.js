import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | weeks/newReceipt', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:weeks/new-receipt');
    assert.ok(route);
  });
});
