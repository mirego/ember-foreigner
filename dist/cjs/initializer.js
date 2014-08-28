"use strict";
var Ember = require("ember")["default"] || require("ember");
var t = require("./helpers/t")["default"] || require("./helpers/t");
var translateAttr = require("./helpers/translate-attr")["default"] || require("./helpers/translate-attr");

exports["default"] = {
  name: 'ember-foreigner',
  initialize: function(container) {
    Ember.Handlebars.registerBoundHelper('t', t);
    Ember.Handlebars.registerHelper('translate-attr', translateAttr);
  }
};