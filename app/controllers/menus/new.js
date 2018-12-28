import Controller from '@ember/controller';

export default Controller.extend({
  weekID: null,
  actions: {
    createMeal() {
      let weekID = this.get('weekID');
      let meal_rec = this.store.findRecord('meal', 1).then((myMeal) => {
        if (weekID) {
          let newWeek = this.store.peekRecord('week', weekID);
          let newMeal = this.store.createRecord('menu', {
            week: newWeek,
            day: 'monday',
            meal_time: 'lunch',
            meal: myMeal
          });
          newMeal.save().then(data => {
            console.log(data.get('id'));
          })

        } else {
          let newWeek = this.store.createRecord('week', {
            week_of: 104,
            month: 10,
            cost: 100,
            year: 2018
          });
          newWeek.save().then(data => {
            this.set('weekID', data.get('id'));
            console.log(this.get('weekID'));
            let newMeal = this.store.createRecord('menu', {
              week: newWeek,
              day: 'monday',
              meal_time: 'lunch',
              meal: myMeal
            });
            newMeal.save().then(data => {
              console.log(data.get('id'));
            })
          })
        }
      });
      console.log(weekID);
    }
  }
});
