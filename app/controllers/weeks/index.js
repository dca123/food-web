import Controller from '@ember/controller';
import {
  inject as service
} from '@ember/service';
import {
  computed
} from '@ember/object';
import paginationArray from '../../mixins/pagination-array';


export default Controller.extend(paginationArray, {
  yearList: service(),
  queryParams: ['page', 'size', {
    monthDestination: 'month'
  }, {
    yearDestination: 'year'
  }],
  page: 1,
  size: 10,
  years: computed('yearList.years', function() {
    return this.get('yearList.years');
  }),
  monthDestination: null,
  yearDestination: null,
  months: ['All', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
  count: Ember.computed('model.meta.pagination.last.number', 'model.meta.pagination.self.number', function() {
    return this.paginateArray(this.get('model.meta.pagination.last.number'), this.get('model.meta.pagination.self.number'))
  }),
  actions: {
    changeMonth(month_num) {
      month_num = month_num.toLowerCase();
      if (month_num == 'all') {
        this.set('monthDestination', null);
      } else {
        this.set('monthDestination', month_num);
      }
      this.set('page', 1)
      this.transitionToRoute({
        queryParams: {
          monthDestination: month_num,
          page: this.get('page')
        }
      })
    },
    changeYear(year_num) {
      year_num = year_num.toLowerCase();
      if (year_num == 'all') {
        this.set('yearDestination', null);
      } else {
        this.set('yearDestination', year_num);
      }
      this.set('page', 1)
      this.transitionToRoute({
        queryParams: {
          yearDestination: year_num,
          page: this.get('page')
        }
      })
    }
  }
});
