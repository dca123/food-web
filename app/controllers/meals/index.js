import Controller from '@ember/controller';
import Ember from 'ember';
export default Controller.extend({
  queryParams: ['page', 'size'],
  page: 1,
  size: 8,
  count: Ember.computed('model.meta.pagination.last.number', 'model.meta.pagination.self.number', function() {
    const total = this.get('model.meta.pagination.last.number') || this.get('model.meta.pagination.self.number');
    if (!total) return [];
    return new Array(total).fill().map((item, index) => index + 1);
  })
});
