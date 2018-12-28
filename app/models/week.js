import DS from 'ember-data';

export default DS.Model.extend({
  week_of: DS.attr('number'),
  month: DS.attr('number'),
  year: DS.attr('number'),
  cost: DS.attr('number'),
  menus: DS.hasMany('menu')
});
