import Ember from 'ember';
import config from './config/environment';
import adminRouter from 'ember-admin/router';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('dailyschedule');
  this.route('invitation');
  adminRouter(this);
  this.route('book');
  this.route('author');
  this.route('library');
});

export default Router;
