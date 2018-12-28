import Component from '@ember/component';
import  Ember from 'ember';

export default Component.extend({
  filteredResults: Ember.computed.filter('entries', function(entry){
    return (entry.get('day') == this.get('day')) && (entry.get('meal_time') == this.get('meal_time'))
  })
});
