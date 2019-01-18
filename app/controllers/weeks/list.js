import Controller from '@ember/controller';

export default Controller.extend({
  queryParams: ['servingSize'],
  servingSize: 30,
  actions: {
    isEmpty(objectData){
      return(Object.values(objectData).length == 0);
    },
    changeServingSize(size){
      this.get('model').shoppingList({servingSize: size}).then((data) => {
        this.set('shoppingList', data);
        this.set('servingSize', size)
      })
    }
  }
});
