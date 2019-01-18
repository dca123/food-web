import Controller from '@ember/controller';
import errorDisplay from '../../mixins/error-display';

export default Controller.extend(errorDisplay, {
  queryParams: ['servingSize'],
  servingSize: 30,
  actions: {
    isEmpty(objectData){
      return(Object.values(objectData).length == 0);
    },
    changeServingSize(size){
      if (size < 1) {
        this.errorToastDefault('Enter a value greater than 1');
        return;
      }
      this.get('model').shoppingList({servingSize: size}).then((data) => {
        this.set('shoppingList', data);
        this.set('servingSize', size)
      })
    }
  }
});
