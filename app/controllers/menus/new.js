import Controller from '@ember/controller';
import { empty } from '@ember/object/computed';
import {
  inject as service
} from '@ember/service';
import {
  computed
} from '@ember/object';


export default Controller.extend({
  weekID: null,
  weekDestination: null,
  mealList: service(),
  meals: computed('mealList.meals', function() {
    return this.get('mealList.meals');
  }),
  disableMealSelector: empty('weekDestination'),
  actions: {
    changeWeek(newWeek) {
      this.set('weekDestination', newWeek.id);
    },
    createMeal(meal_id, mealTime, dayOfWeek) {
      let weekID = this.get('weekID');
      this.store.findRecord('meal', meal_id).then((myMeal) => {
        if (weekID) {
          let newWeek = this.store.peekRecord('week', weekID);
          let newMeal = this.store.createRecord('menu', {
            week: newWeek,
            day: dayOfWeek,
            meal_time: mealTime,
            meal: myMeal
          });
          newMeal.save();
        } else {
          let current = new Date();
          let newWeekStart = null;
          if (this.get('weekDestination')) {
            let nextWeekstart = current.getDate() - current.getDay() + 8;
            newWeekStart = new Date(current.setDate(nextWeekstart));
          } else {
            let weekstart = current.getDate() - current.getDay() + 1;
            newWeekStart = new Date(current.setDate(weekstart));
          }
          let newWeek = this.store.createRecord('week', {
            week_of: newWeekStart.getDate(),
            month: newWeekStart.getMonth() + 1,
            cost: 100,
            year: newWeekStart.getFullYear()
          });
          newWeek.save().then(data => {
            this.set('weekID', data.get('id'));
            this.set('weekSaved', true); //Disables week selecter
            let newMeal = this.store.createRecord('menu', {
              week: newWeek,
              day: dayOfWeek,
              meal_time: mealTime,
              meal: myMeal
            });
            newMeal.save();
          })
        }
      });
    }
  }
});
