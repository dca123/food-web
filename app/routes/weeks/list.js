import Route from '@ember/routing/route';

export default Route.extend({
  model(params){
    return this.store.findRecord('week', params.week_id)
  },
  afterModel(model){
    model.shoppingList().then((data) => {
      this.controllerFor('weeks.list').set('shoppingList', data);
    })
  }
});
