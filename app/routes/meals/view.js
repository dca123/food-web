import Route from '@ember/routing/route';

export default Route.extend({
  model(params) {
    return this.store.findRecord('meal', params.meal_id);
  },
  deactivate() {
    this.controllerFor('meals.view').set('isMealSaved', false);
  }
});
