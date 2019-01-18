import Ember from 'ember';
import AjaxService from 'ember-ajax/services/ajax';
import ENV from 'food-web/config/environment';

export default AjaxService.extend({
  host: ENV.APP.API_HOST
});
