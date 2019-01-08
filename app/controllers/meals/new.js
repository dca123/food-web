import Controller from '@ember/controller';
import errorDisplay from '../../mixins/error-display';

export default Controller.extend(errorDisplay, {
  actions: {
    addMeal(model) {
      model.save().then((data) => {
        this.set('isMealSaved', true);
      }, (error) => {
        this.errorToast(error, 8000);
      })
    },
    anotherMeal(){
      let newMeal = this.store.createRecord('meal');
      this.set('model', newMeal);
      this.set('isMealSaved', false);
    }
  }
});
