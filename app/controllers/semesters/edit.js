import newController from './new';
import errorDisplay from '../../mixins/error-display';
import {inject as service} from '@ember/service';

export default newController.extend(errorDisplay,{
  modalsManager: service(),
  actions: {
    createSemester(){
      this.get('model').save().then(() => {
        this.successToast('Semester has been Updated !');
      });
    },
    deleteSemester(){
      this.modalsManager.confirm({title: 'Delete Semester', body: 'Are you sure you want to delete this semster ?'}).then(() => {
        this.get('model').destroyRecord();
        this.successToast('Semester has been deleted !');
        this.transitionToRoute('semesters.index');
      })
    }
  }
});
