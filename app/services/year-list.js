import Service from '@ember/service';

export default Service.extend({
  ajax: Ember.inject.service(),
  years: null,
  init() {
    this._super(...arguments);
    this.get('ajax').request('/year_list').then((data) => {
      this.set('years', data);
    });
  }
});
