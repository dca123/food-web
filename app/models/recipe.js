import DS from 'ember-data';

export default DS.Model.extend({
  meal: DS.belongsTo('meal'),
  ingredient: DS.belongsTo('ingredient'),
  quantity: DS.attr('number'),
  measure: DS.attr('string')
});
