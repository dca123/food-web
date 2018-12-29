import Component from '@ember/component';
import DS from 'ember-data';

export default Component.extend({
  selectedMeals: null,
  actions: {
    addMeal(selectedMeal) {
      let selectedMeals = this.get('selectedMeals');
      selectedMeals.pushObject(selectedMeal.name);
      this.sendAction('createMeal', selectedMeal.id, this.get('mealTime'), this.get('dayOfWeek'));
    }
  },
  init() {
    this._super(...arguments);
    this.set("selectedMeals", []);
  }
});
