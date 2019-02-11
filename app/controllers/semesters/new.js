import Controller from '@ember/controller';
import {
  inject as service
} from '@ember/service';
import errorDisplay from '../../mixins/error-display';

export default Controller.extend(errorDisplay, {
  modalsManager: service(),
  model: {},
  actions: {
    addDateRange(dates) {
      if (dates[1] != null) {
        this.set('model.start', dates[0].toDate());
        this.set('model.end', dates[1].toDate());
      }
    },
    createSemester(){
      let newSemester = this.store.createRecord('semester',{
        name: this.get('model.name'),
        budget: this.get('model.budget'),
        spring: this.get('model.spring'),
        start: this.get('model.start'),
        end: this.get('model.end')
      });
      newSemester.save().then(() => {
        this.successToast('Semester has been Created !' );
        this.transitionToRoute('semesters.index');
      }, (errorData) => {
        let errors = errorData.errors;
        let currentSemester = errors[0]
        let message = errors[1]
        this.get('modalsManager').alert({title: 'Duplicate Week', body: message}).then(() => {
          newSemester.deleteRecord();
          this.transitionToRoute('semesters.edit', currentSemester);
        })
      });
    }
  }
});
