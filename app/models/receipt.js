import DS from 'ember-data';

export default DS.Model.extend({
  location: DS.attr('string'),
  cost: DS.attr('number'),
  notes: DS.attr('string'),
  week: DS.belongsTo('week')
});
