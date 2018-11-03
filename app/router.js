import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('menu');
  this.route('dashboard');
  this.route('reviews');
  this.route('staff');
  this.route('scheduling');
  this.route('profile');
});

export default Router;
