import DS from 'ember-data';
import {
  memberAction
} from 'ember-api-actions';
export default DS.Model.extend({
  week_of: DS.attr('number'),
  month: DS.attr('number'),
  year: DS.attr('number'),
  cost: DS.attr('number'),
  menus: DS.hasMany('menu'),
  receipts: DS.hasMany('receipt', {async: true}),
  shoppingList: memberAction({
    path: 'shopping_list',
    type: 'get'
  })
});
