import Route from '@ember/routing/route';
import Service from '@ember/service';

export default Route.extend({
  model() {
    return this.store.createRecord('meal');
  },
  deactivate() {
    this.controllerFor('meals.new').set('isMealSaved', false);
  }
});
