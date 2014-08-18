"use strict";
var Ember = require("ember")["default"] || require("ember");

var translationMissing = function(keyPath) {
  return 'translation missing: ' + foreigner.locale + '.' + keyPath;
};

exports["default"] = function(undef, options) {
  var key = options.data.properties[0];
  var attrs = options.hash;
  return new Ember.Handlebars.SafeString(foreigner.t(key, attrs) || translationMissing(key));
}