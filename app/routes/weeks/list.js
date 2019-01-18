import Route from '@ember/routing/route';

export default Route.extend({
  model(params) {
    return this.store.findRecord('week', params.week_id)
  },
  setupController(controller, model) {
    this._super(...arguments);
    let servingSize = this.controllerFor('weeks.list').get('servingSize');
    if (servingSize < 1) {
      servingSize = 30;
      this.controllerFor('weeks.list').set('servingSize', 30);
    }
    model.shoppingList({
      servingSize: servingSize
    }).then((data) => {
      this.controllerFor('weeks.list').set('shoppingList', data);
    })
  },
  deactivate() {
    this.controllerFor('weeks.list').set('servingSizeSelected', 30);
    this.controllerFor('weeks.list').set('servingSize', 30);
  }
});
