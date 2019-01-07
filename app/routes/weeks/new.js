import Route from '@ember/routing/route';

export default Route.extend({
  setupController(controller, model) {
    this._super(controller, model);
    controller.set('daysOfWeek', ['monday', 'tuesday', 'wednesday', 'thursday', 'friday'])
    controller.set('meal_times', ['lunch', 'dinner'])

    const current = new Date();
    const current2 = new Date();
    let weekstart = current.getDate() - current.getDay() + 1;
    let nextWeekstart = current2.getDate() - current2.getDay() + 8;

    let thisMonday = new Date(current.setDate(weekstart));
    let nextMonday = new Date(current2.setDate(nextWeekstart));

    let thisMonth = thisMonday.getMonth() + 1
    let nextMonth = nextMonday.getMonth() + 1

    let mondayString = `${thisMonth}/${thisMonday.getDate()}`
    let nextMondayString = `${nextMonth}/${nextMonday.getDate()}`

    controller.set('weeks', [{id:0, value:`This Week - ${mondayString}` },{id:1, value:`Next Week - ${nextMondayString}` }])
  },
  deactivate(){
  },
  actions: {
    willTransition(transition){
      this.controllerFor('weeks.new').set('weekDestination', null);
      this.controllerFor('weeks.new').set('weekSaved', false);
    }
  }
});
