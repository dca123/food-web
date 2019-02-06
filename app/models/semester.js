import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  budget: DS.attr('number'),
  total: DS.attr('number'),
  spring: DS.attr('boolean'),
  start: DS.attr('date'),
  end: DS.attr('date'),
  weeks: DS.hasMany('week')
});
