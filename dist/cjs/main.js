"use strict";
var Ember = require("ember")["default"] || require("ember");
var initializer = require("./initializer")["default"] || require("./initializer");

Ember.onLoad('Ember.Application', function(Application) {
  Application.initializer(initializer);
});

if (Ember.libraries) {
  Ember.libraries.register('ember-foreigner', '0.0.2');
}