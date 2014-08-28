import Ember from 'ember';
import initializer from './initializer';

Ember.onLoad('Ember.Application', function(Application) {
  Application.initializer(initializer);
});

if (Ember.libraries) {
  Ember.libraries.register('ember-foreigner', '@@VERSION');
}
