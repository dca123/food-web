import Component from '@ember/component';
import Ember from 'ember';
import {
  computed
} from '@ember/object';

export default Component.extend({
  store: Ember.inject.service(),
  filteredResults: Ember.computed.filter('entries', function(entry) {
    return (entry.get('day') == this.get('day')) && (entry.get('meal_time') == this.get('meal_time'))
  }),
  meals: computed('mealArray', function() {
    return this.get('mealArray')
  }),
  actions: {
    addMeal(selectedMeal) {
      let selectedMeals = this.get('filteredResults');
      let meal_id = selectedMeal.id;
      this.get('store').findRecord('meal', meal_id).then((myMeal) => {
        if (this.get('weekModel')) {
          let newMeal = this.get('store').createRecord('menu', {
            week: this.get('weekModel'),
            day: this.get('day'),
            meal_time: this.get('meal_time'),
            meal: myMeal
          });
          newMeal.save().then((data) => {
            selectedMeals.pushObject(data);
          });
        }
      });
    },
    removeMeal(menu_id, index) {
      let selectedMeals = this.get('filteredResults');
      let menu = this.get('store').peekRecord('menu', menu_id);
      menu.destroyRecord().then((data) => {
        selectedMeals.removeAt(index);
      });
    }
  }
});
