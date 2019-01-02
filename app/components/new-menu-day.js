import Component from '@ember/component';
import DS from 'ember-data';
import {
  computed
} from '@ember/object';
import {
  inject as service
} from '@ember/service';

export default Component.extend({
  router: service(),
  store: service(),
  meals: computed('mealArray', function() {
    return this.get('mealArray')
  }),
  selectedMenus: null,
  actions: {
    addMeal(selectedMeal) {
      let selectedMenus = this.get('selectedMenus');
      let meal_id = selectedMeal.id;

      this.get('store').findRecord('meal', meal_id).then((myMeal) => {
        if (this.get('weekModel')) {
          let newMeal = this.get('store').createRecord('menu', {
            week: this.get('weekModel'),
            day: this.get('dayOfWeek'),
            meal_time: this.get('mealTime'),
            meal: myMeal
          });
          newMeal.save().then((data) => {
            selectedMenus.pushObject(data);
          }, (data) => {
            this.toast.error('Cannot add duplicate meals !', '', {
              progressBar: false,
              closeButton: false,
            });
          });
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
          let newWeek = this.get('store').createRecord('week', {
            week_of: newWeekStart.getDate(),
            month: newWeekStart.getMonth() + 1,
            cost: 100,
            year: newWeekStart.getFullYear()
          });

          newWeek.save().then((data) => {
            this.set('weekModel', data);
            this.set('weekSaved', true); //Disables week selecter

            let newMeal = this.get('store').createRecord('menu', {
              week: data,
              day: this.get('dayOfWeek'),
              meal_time: this.get('mealTime'),
              meal: myMeal
            });

            newMeal.save().then((data) => {
              selectedMenus.pushObject(data);
            }, (data) => {
              this.toast.error('Cannot add duplicate meals !', '', {
                progressBar: false,
                closeButton: false,
              });
            });
          }, (data) => {
            let errors = data.errors;
            let errorMessage = [];
            errorMessage[0] = `${errors[0]['week_of']}`
            errorMessage[1] = errors[1]['week_id']
            this.sendAction('openDuplicateModel', errorMessage);
          });
        }
      });
    },
    removeMeal(menu_id, index) {
      let selectedMenus = this.get('selectedMenus');
      let menu = this.get('store').peekRecord('menu', menu_id);
      menu.destroyRecord().then((data) => {
        selectedMenus.removeAt(index);
      });
    }
  },
  init() {
    this._super(...arguments);
    this.set("selectedMenus", []);
  }
});
