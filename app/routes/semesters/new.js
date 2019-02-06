import Route from '@ember/routing/route';

export default Route.extend({
  setupController(controller, model){
    this._super(...arguments);
    controller.set('titleState', 'New');
    controller.set('buttonState', 'Create');
    let currentMonth = moment().month();
    let currentYear = new Date().getFullYear();
    controller.set('currentYear', moment().year());
    if (currentMonth>= 0 && currentMonth <= 4) {
      controller.set('minDate', moment(`01/01/${currentYear}`));
      controller.set('maxDate', moment(`05/31/${currentYear}`));
    }else if (currentMonth>= 7 && currentMonth <= 11) {
      controller.set('minDate', moment(`08/01/${currentYear}`));
      controller.set('maxDate', moment(`12/31/${currentYear}`));
    }
  }
});
