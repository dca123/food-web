import Route from '@ember/routing/route';

export default Route.extend({
  model(params) {
    return this.store.findRecord('meal', params.meal_id);
  },
  afterModel(model) {
    return model.get('recipes')
    // return Ember.RSVP.all(promises);
  }
});
