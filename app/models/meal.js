import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  notes: DS.attr('string'),
  serves: DS.attr('number'),
  category: DS.attr('string'),
  ingredients: DS.hasMany('ingredient'),
  recipes: DS.hasMany('recipe', {async: true, inverse: 'meal'})
});
