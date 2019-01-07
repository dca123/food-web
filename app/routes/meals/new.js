import Route from '@ember/routing/route';
import Service from '@ember/service';

export default Route.extend({
  model() {
    return this.store.createRecord('meal');
  },
  setupController(controller, model) {
    this._super(...arguments);
    controller.set('categories', ['NA', 'pork', 'chicken', 'fish', 'beef', 'Vegetables', 'dessert']);
    controller.set('isMealSaved', true);
  },
  deactivate() {
    this.controllerFor('meals.new').set('isMealSaved', false);
  }
});
