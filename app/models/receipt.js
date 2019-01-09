import DS from 'ember-data';

export default DS.Model.extend({
  week: DS.belongsTo('week'),
  location: DS.attr('string'),
  cost: DS.attr('number'),
  notes: DS.attr('string')
});
