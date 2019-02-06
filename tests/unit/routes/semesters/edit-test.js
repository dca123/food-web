import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | semesters/edit', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:semesters/edit');
    assert.ok(route);
  });
});
