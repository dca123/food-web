import Route from '@ember/routing/route';

export default Route.extend({
  // model() {
  //   return this.store.createRecord('week');
  // },
  setupController(controller, model){
    this._super(controller, model);
    controller.set('daysOfWeek', ['monday', 'tuesday', 'wednesday', 'thursday', 'friday'])
    controller.set('meal_times', ['lunch', 'dinner'])
  },
  actions: {
    createMenu(newMenu) {
      console.log(newMenu);
    }
  }
});
