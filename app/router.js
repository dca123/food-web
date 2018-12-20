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
  });
  this.route('ingredients');
  this.route('menu', function() {
    this.route('new');
  });
});

export default Router;
