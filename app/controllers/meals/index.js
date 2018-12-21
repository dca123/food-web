import Controller from '@ember/controller';
import Ember from 'ember';
export default Controller.extend({
  queryParams: ['page', 'size', 'category'],
  page: 1,
  size: 8,
  category: null,
  names: ['All','Pork', 'Chicken', 'Fish', 'Beef', 'Vegetables'],
  count: Ember.computed('model.meta.pagination.last.number', 'model.meta.pagination.self.number', function() {
    const total = this.get('model.meta.pagination.last.number') || this.get('model.meta.pagination.self.number');
    if (!total) return [];
    return new Array(total).fill().map((item, index) => index + 1);
  }),
  actions: {
    changeCategory(cat) {
      cat = cat.toLowerCase();
      if (cat == 'all') {
        this.set('category', null);
      }else{
        this.set('category', cat);
      }
      this.set('page', 1)
      this.transitionToRoute({
        queryParams: {
          category: cat,
          page: this.get('page')
        }
      })
    }
  }
});
