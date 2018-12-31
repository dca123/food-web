import Controller from '@ember/controller';
import Ember from 'ember';
import paginationArray from '../../mixins/pagination-array';

export default Controller.extend(paginationArray,{
  queryParams: ['page', 'size', 'category'],
  page: 1,
  size: 8,
  category: null,
  names: ['All','Pork', 'Chicken', 'Fish', 'Beef', 'Vegetables'],
  count: Ember.computed('model.meta.pagination.last.number', 'model.meta.pagination.self.number', function() {
    return this.paginateArray(this.get('model.meta.pagination.last.number'), this.get('model.meta.pagination.self.number'))
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
