import Controller from '@ember/controller';

export default Controller.extend({
  queryParams: ['page', 'size', {
    monthDestination: 'month'
  }],
  page: 1,
  size: 10,
  monthDestination: null,
  months: ['All','1','2', '3', '4', '5', '6','7','8','9','10'],
  count: Ember.computed('model.meta.pagination.last.number', 'model.meta.pagination.self.number', function() {
    const total = this.get('model.meta.pagination.last.number') || this.get('model.meta.pagination.self.number');
    if (!total) return [];
    return new Array(total).fill().map((item, index) => index + 1);
  }),
  actions: {
    changeMonth(month_num) {
      month_num = month_num.toLowerCase();
      if (month_num == 'all') {
        this.set('monthDestination', null);
      }else{
        this.set('monthDestination', month_num);
      }
      this.set('page', 1)
      this.transitionToRoute({
        queryParams: {
          monthDestination: month_num,
          page: this.get('page')
        }
      })
    }
  }
});
