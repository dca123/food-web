import Component from '@ember/component';

export default Component.extend({
  meals: ['Meal1', 'Meal2', 'Meal3', 'Meal4'],
  selectedMeals: null,

  actions: {
    addMeal(selectedMeal) {
      let selectedMeals = this.get('selectedMeals');
      selectedMeals.pushObject(selectedMeal);
      this.sendAction('createMeal');
    }
  },
  init() {
    this._super(...arguments);
    this.set("selectedMeals", []);
  }
});
