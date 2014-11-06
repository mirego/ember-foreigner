"use strict";
var Ember = require("ember")["default"] || require("ember");

var translationMissing = function(keyPath) {
  return 'translation missing: ' + foreigner.locale + '.' + keyPath;
};

exports["default"] = function(key, options) {
  var attrs = options.hash;
  return new Ember.Handlebars.SafeString(foreigner.t(key, attrs) || translationMissing(key));
}