import Controller from '@ember/controller';
import errorDisplay from '../../mixins/error-display';
import {
  inject as service
} from '@ember/service';
import {
  computed
} from '@ember/object';

export default Controller.extend(errorDisplay, {
  mealCategoryList: service(),
  mealList: service(),
  categories: computed('mealCategoryList.categories', function() {
    return this.get('mealCategoryList.categories');
  }),
  actions: {
    addMeal(model) {
      model.save().then((data) => {
        this.set('isMealSaved', true);
        this.get('mealList');
      }, (error) => {
        this.errorToast(error, 8000);
      })
    },
    anotherMeal() {
      let newMeal = this.store.createRecord('meal');
      this.set('model', newMeal);
      this.set('isMealSaved', false);
    }
  }
});
