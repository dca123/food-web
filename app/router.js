import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('recipes');
  this.route('meals', function(){
    this.route('view', { path: '/:meal_id/view'});
    this.route('new');
  });
  this.route('ingredients');
  this.route('weeks', function() {
    this.route('new');
    this.route('view', { path: '/:week_id/view'});
    this.route('list', { path: '/:week_id/list'});
  });
});

export default Router;
