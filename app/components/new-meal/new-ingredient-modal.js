import Component from '@ember/component';

export default Component.extend({
  locations: ['walmart', 'aldi', 'other'],
  isDisabled: true,
  actions: {
    createIngredient(){
      this.sendAction("createIngredient", this.get('selectedLocation'));
    },
    selectIngredient(location){
      this.set('selectedLocation', location);
      this.set('isDisabled', false);
    }
  }
});
