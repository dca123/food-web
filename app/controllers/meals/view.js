import newController from './new'
//Extending the new controller
import {
  inject as service
} from '@ember/service';
export default newController.extend({
  queryParams: ['isEditing'],
  mealList: service(),
  isEditing: false,
  actions: {
    deleteMeal(){
      this.set('isDeleting', true);
      let meal = this.get('model');
      meal.destroyRecord().then((data) => {
        this.set('isDeleting', false);
        this.get('mealList');
        this.transitionToRoute('meals.index')
      })
    }
  }
});
