import Ember from 'ember';
import JSONAPIAdapter from 'ember-data/adapters/json-api';

const {
  String: {
    pluralize,
    underscore
  }
} = Ember;

export default JSONAPIAdapter.extend({
  host: 'http://localhost:3000',
  pathForType(type) {
    return pluralize(underscore(type));
  },
});
