import Component from '@ember/component';

export default Component.extend({
  actions: {
    addMeal(model){
      this.sendAction("addMeal", model);
    }
  }
});
