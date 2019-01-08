import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  location: DS.attr('string'),
  notes: DS.attr('string'),
  meals: DS.hasMany('meal'),
  recipes: DS.hasMany('recipe'),
});
