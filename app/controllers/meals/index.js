import Controller from '@ember/controller';
import Ember from 'ember';
import paginationArray from '../../mixins/pagination-array';
import {
  inject as service
} from '@ember/service';
import {
  computed
} from '@ember/object';

export default Controller.extend(paginationArray, {
  queryParams: ['page', 'size', 'category'],
  page: 1,
  size: 8,
  category: null,
  mealCategoryList: service(),
  categories: computed('mealCategoryList.categories', function() {
    return this.get('mealCategoryList.categories');
  }),
  count: computed('model.meta.pagination.last.number', 'model.meta.pagination.self.number', function() {
    return this.paginateArray(this.get('model.meta.pagination.last.number'), this.get('model.meta.pagination.self.number'))
  }),
  actions: {
    changeCategory(cat) {
      this.set('category', cat);
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
