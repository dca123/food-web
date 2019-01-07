import newController from './new'
//Extending the new controller
export default newController.extend({
  queryParams: ['isEditing'],
  isEditing: false,
  actions: {
    deleteMeal(){
      this.set('isDeleting', true);
      let meal = this.get('model');
      meal.destroyRecord().then((data) => {
        this.set('isDeleting', false);
        this.transitionToRoute('meals.index')
      })
    }
  }
});
