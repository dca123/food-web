import Route from '@ember/routing/route';

export default Route.extend({
  model(params){
    return this.store.findRecord('semester', params.semester_id)
  },
  templateName: 'semesters/new',
  setupController(controller, model){
    this._super(...arguments);
    controller.set('defaultDateRange', [moment(model.start), moment(model.end)])
    controller.set('titleState', 'Edit');
    controller.set('buttonState', 'Update');
  }
});
