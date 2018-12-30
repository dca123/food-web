import Service from '@ember/service';

export default Service.extend({
  ajax: Ember.inject.service(),
  meals: null,
  init() {
    this._super(...arguments);
    this.get('ajax').request('/meal_list').then((data) => {
      this.set('meals', data);
    });
  }
});
