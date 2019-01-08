import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  location: DS.attr('string'),
  category: DS.attr('string'),
  meals: DS.hasMany('meal'),
  recipes: DS.hasMany('recipe'),
});
