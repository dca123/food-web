import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    isEmpty(objectData){
      return(Object.values(objectData).length == 0);
    }
  }
});
