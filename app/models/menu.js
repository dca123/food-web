import DS from 'ember-data';

export default DS.Model.extend({
  week: DS.belongsTo('week'),
  day: DS.attr('string'),
  mealTime: DS.attr('string'),
  meal: DS.belongsTo('meal'),
});
