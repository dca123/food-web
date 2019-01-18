import Route from '@ember/routing/route';

export default Route.extend({
  model(params) {
    return this.store.findRecord('week', params.week_id)
  },
  setupController(controller, model) {
    this._super(...arguments);
    let servingSize = this.controllerFor('weeks.list').get('servingSize')
    model.shoppingList({
      servingSize: servingSize
    }).then((data) => {
      this.controllerFor('weeks.list').set('shoppingList', data);
    })
  },
  deactivate() {
    this.controllerFor('weeks.list').set('servingSizeSelected', 30);
  }
});
