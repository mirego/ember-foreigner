import Ember from 'ember';
import t from './helpers/t';
import translateAttr from './helpers/translate-attr';

export default {
  name: 'ember-foreigner',
  initialize: function(container) {
    Ember.Handlebars.registerBoundHelper('t', t);
    Ember.Handlebars.registerHelper('translate-attr', translateAttr);
  }
};
