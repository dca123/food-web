import Route from '@ember/routing/route';
import {
  hash
} from 'rsvp';

export default Route.extend({
  model(params) {
    return this.store.query('menu', {
      week: params.week_id
    });
  },
  setupController(controller, model){
    this._super(controller, model);
    controller.set('daysOfWeek', ['monday', 'tuesday', 'wednesday', 'thursday', 'friday'])
    controller.set('meal_times', ['lunch', 'dinner'])
  }
});
