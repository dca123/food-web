import Component from '@ember/component';
import DS from 'ember-data';
import {
  computed
} from '@ember/object';

export default Component.extend({
  meals: computed('mealArray', function() {
    return this.get('mealArray')
  }),
  selectedMeals: null,
  actions: {
    addMeal(selectedMeal) {
      let selectedMeals = this.get('selectedMeals');
      selectedMeals.pushObject({name: selectedMeal.name, id: selectedMeal.id});
      this.sendAction('createMeal', selectedMeal.id, this.get('mealTime'), this.get('dayOfWeek'));
    },
    removeMeal(meal_id, index, mealTime, dayOfWeek){
      let selectedMeals = this.get('selectedMeals');
      selectedMeals.removeAt(index);
      this.sendAction('removeMeal', meal_id, mealTime, dayOfWeek);
    }
  },
  init() {
    this._super(...arguments);
    this.set("selectedMeals", []);
  }
});
