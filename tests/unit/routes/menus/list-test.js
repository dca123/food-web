import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | menus/list', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:menus/list');
    assert.ok(route);
  });
});
