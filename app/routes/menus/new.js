import Route from '@ember/routing/route';

export default Route.extend({
  ajax: Ember.inject.service(),
  setupController(controller, model) {
    this._super(controller, model);
    controller.set('daysOfWeek', ['monday', 'tuesday', 'wednesday', 'thursday', 'friday'])
    controller.set('meal_times', ['lunch', 'dinner'])
    this.get('ajax').request('/meal_list').then((data) => {
      controller.set('mealList', data);
    })
    let current = new Date();
    let weekstart = current.getDate() - current.getDay() + 1;
    let nextWeekstart = current.getDate() - current.getDay() + 8;

    let thisMonday = new Date(current.setDate(weekstart));
    let nextMonday = new Date(current.setDate(nextWeekstart));

    let mondayString = `${thisMonday.getMonth() + 1}/${thisMonday.getDate()}`
    let nextMondayString = `${nextMonday.getMonth() + 1}/${nextMonday.getDate()}`

    controller.set('weeks', [{id:0, value:`This Week - ${mondayString}` },{id:1, value:`Next Week - ${nextMondayString}` }])
  },
  deactivate(){
    this.controllerFor('menus.new').set('weekDestination', null);
  }
});
