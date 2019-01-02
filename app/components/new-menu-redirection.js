import Component from '@ember/component';

export default Component.extend({
  actions: {
    viewTransition(id) {
      this.sendAction('viewTransition', id)
      this.set('duplicateModel', false);
    }
  }
});
