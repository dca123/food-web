import Controller from '@ember/controller';
import {
  computed
} from '@ember/object';
import {
  inject as service
} from '@ember/service';
import errorDisplay from '../../mixins/error-display';

export default Controller.extend(errorDisplay,{
  locations: ['walmart', 'aldi', 'other'],
  modalsManager: service(),
  actions: {
    addReceipt(){
      let newReceipt = this.store.createRecord('receipt', {
        location: this.get('selectedLocation'),
        cost: Math.round(this.get('cost') * 100)/100,
        notes: this.get('notes'),
        week: this.get('model')
      });
      newReceipt.save().then((data) => {
        this.successToast("Added Receipt");
      }, (error) => {
        newReceipt.deleteRecord();
        console.log(error);
        this.errorToast(error);
      })
    },
    deleteReceipt(id){
      let receipt = this.store.peekRecord('receipt', id);
      this.modalsManager.confirm({title:'Delete Receipt', body: 'Are you sure you want to delete this receipt ?'}).then(() => {
        receipt.destroyRecord().then(() => {
          this.successToast('Deleted Receipt !');
        })
      })
    }
  }
});
