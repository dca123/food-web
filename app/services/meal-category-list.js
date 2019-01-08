import Service from '@ember/service';

export default Service.extend({
  ajax: Ember.inject.service(),
  categories: null,
  init() {
    this._super(...arguments);
    this.get('ajax').request('/meal_category_list').then((data) => {
      this.set('categories', data);
    });
  }
});
