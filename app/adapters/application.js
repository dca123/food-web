import Ember from 'ember';
import JSONAPIAdapter from 'ember-data/adapters/json-api';
import ENV from 'food-web/config/environment';

const {
  String: {
    pluralize,
    underscore
  }
} = Ember;

export default JSONAPIAdapter.extend({
 //  host: ENV.APP.API_HOST,
 // headers: {
 //   'X-SOME-HEADER': ENV.APP.SOME_HEADER
 // },
  pathForType(type) {
    return pluralize(underscore(type));
  },
});
