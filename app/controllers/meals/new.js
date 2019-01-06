import Controller from '@ember/controller';
export default Controller.extend({

  actions: {
    addMeal(model){
      model.save().then((data) => {
        this.set('isMealSaved', true);
      })
    }
  }
});
