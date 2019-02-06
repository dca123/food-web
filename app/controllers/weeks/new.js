import  Ember from 'ember';
import Controller from '@ember/controller';
import { empty, filter } from '@ember/object/computed';
import {
  inject as service
} from '@ember/service';
import {
  computed
} from '@ember/object';


export default Controller.extend({
  store: service(),
  weekSaved: false,
  weekModel: null,
  weekDestination: null,
  mealList: service(),
  modalsManager: service(),
  meals: computed('mealList.meals', function() {
    return this.get('mealList.meals');
  }),
  disableMealSelector: empty('weekDestination'),
  actions: {
    changeWeek(newWeek) {
      this.set('weekDestination', newWeek.id);
    },
    openDuplicateModel(message, id){
      this.get('modalsManager').alert({title: 'Duplicate Week', body: message}).then(() => {
        this.transitionToRoute('weeks.view', id, {
          queryParams: {
            isEditing: true
          }
        });
      })
    },
    createSemester(message){
      this.get('modalsManager').alert({title: 'Semester Missing', body: message}).then(() => {
        this.transitionToRoute('semesters.new',);
      })
    }
  }
});
