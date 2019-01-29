import Component from '@ember/component';
import {
  computed,
  observer
} from '@ember/object';
import {
  inject as service
} from '@ember/service';
export default Component.extend({
  locations: ['walmart', 'aldi', 'other'],
  ingredientCategoryList: service(),
  ingredientCategories: computed('ingredientCategoryList.categories', function(){
    return this.get('ingredientCategoryList.categories')
  }),
  isDisabled: true,
  nameChanged: observer('ingredientModel.name', function(){
    this.set('isDisabled', false);
  }),
  actions: {
    createIngredient() {
      let ingredientModel = this.get('ingredientModel');
      if (ingredientModel) {
        this.sendAction("updateIngredient");
      } else {
        this.sendAction("createIngredient", this.get('selectedLocation'), this.get('selectedCategory'));
      }
      this.set('selectedCategory', null);
      this.set('selectedLocation', null);
    },
    selectIngredient(location) {
      if (this.get('ingredientModel')) {
        this.set('ingredientModel.location', location)
      } else {
        this.set('selectedLocation', location);
      }
      this.set('isDisabled', false);
    },
    selectedCategory(category) {
      if (this.get('ingredientModel')) {
        this.set('ingredientModel.category', category)
      } else {
        this.set('selectedCategory', category);
      }
      this.set('isDisabled', false);
    },
    deleteIngredient() {
      this.sendAction('deleteIngredient');
    }
  }
});
