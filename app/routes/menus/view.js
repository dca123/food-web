import Route from '@ember/routing/route';

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
    model.objectAt(1).get('week').then((data) => {
      controller.set('title', `${data.get('week_of')}/${data.get('month')}`)
      controller.set('weekModel', data);
    });
  }
});
