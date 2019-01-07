import Component from '@ember/component';
import {
  observer
} from '@ember/object';
//Ingredient model implies saving
export default Component.extend({
  init() {
    this._super(...arguments);
  },
  locations: ['walmart', 'aldi', 'other'],
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
        this.sendAction("createIngredient", this.get('selectedLocation'));
      }
    },
    selectIngredient(location) {
      if (this.get('ingredientModel')) {
        this.set('ingredientModel.location', location)
      } else {
        this.set('selectedLocation', location);
      }
      this.set('isDisabled', false);
    },
    deleteIngredient() {
      this.sendAction('deleteIngredient');
    }
  }
});
