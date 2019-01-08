import DS from 'ember-data';

export default DS.Model.extend({
  meal: DS.belongsTo('meal', {inverse: 'recipes'}),
  ingredient: DS.belongsTo('ingredient', {inverse: 'recipes'}),
  quantity: DS.attr('number'),
  measure: DS.attr('string'),
  notes: DS.attr('string'),
});
