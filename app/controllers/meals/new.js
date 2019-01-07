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
    }
  }
});
