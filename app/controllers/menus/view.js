import Controller from '@ember/controller';
import {
  computed
} from '@ember/object';
import {
  inject as service
} from '@ember/service';

export default Controller.extend({
  queryParams: ['isEditing'],
  isEditing: false,
  editText: 'Edit Mode',
  mealList: service(),
  shoppingList: null,
  meals: computed('mealList.meals', function() {
    return this.get('mealList.meals');
  })
});
