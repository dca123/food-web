import Route from '@ember/routing/route';

export default Route.extend({
  model(params) {
    return this.store.findRecord('meal', params.meal_id);
  },
  setupController(controller, model) {
    this._super(...arguments);
    controller.set('categories', ['NA', 'pork', 'chicken', 'fish', 'beef', 'Vegetables', 'dessert', 'sides']);
  },
  deactivate() {
    this.controllerFor('meals.view').set('isMealSaved', false);
  }
});
