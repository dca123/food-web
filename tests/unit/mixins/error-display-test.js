import EmberObject from '@ember/object';
import ErrorDisplayMixin from 'food-web/mixins/error-display';
import { module, test } from 'qunit';

module('Unit | Mixin | errorDisplay', function() {
  // Replace this with your real tests.
  test('it works', function (assert) {
    let ErrorDisplayObject = EmberObject.extend(ErrorDisplayMixin);
    let subject = ErrorDisplayObject.create();
    assert.ok(subject);
  });
});
