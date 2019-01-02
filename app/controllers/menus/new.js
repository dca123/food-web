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
  meals: computed('mealList.meals', function() {
    return this.get('mealList.meals');
  }),
  disableMealSelector: empty('weekDestination'),
  actions: {
    changeWeek(newWeek) {
      this.set('weekDestination', newWeek.id);
    },
    viewTransition(id){
      this.transitionToRoute('menus.view', id, {
        queryParams: {
          isEditing: true
        }
      });
    },
    openDuplicateModel(data){
      this.set('errorMessage', data);
      this.set('duplicateModel', true)
    }
  }
});
