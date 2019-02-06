import newController from './new';
import errorDisplay from '../../mixins/error-display';

export default newController.extend(errorDisplay,{
  actions: {
    createSemester(){
      this.get('model').save().then(() => {
        this.successToast('Semester has been Updated !');
      });
    }
  }
});
