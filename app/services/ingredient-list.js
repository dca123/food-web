import Service from '@ember/service';

export default Service.extend({
  ajax: Ember.inject.service(),
  ingredients: null,
  init() {
    this._super(...arguments);
    this.get('ajax').request('/ingredient_list').then((data) => {
      this.set('ingredients', data);
    });
  },
  refreshData(){
    this.get('ajax').request('/ingredient_list').then((data) => {
      this.set('ingredients', data);
    });
  }
});
