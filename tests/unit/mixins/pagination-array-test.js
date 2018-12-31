import EmberObject from '@ember/object';
import PaginationArrayMixin from 'food-web/mixins/pagination-array';
import { module, test } from 'qunit';

module('Unit | Mixin | pagination-array', function() {
  // Replace this with your real tests.
  test('it works', function (assert) {
    let PaginationArrayObject = EmberObject.extend(PaginationArrayMixin);
    let subject = PaginationArrayObject.create();
    assert.ok(subject);
  });
});
