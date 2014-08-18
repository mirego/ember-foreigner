"use strict";
var Ember = require("ember")["default"] || require("ember");

exports["default"] = function(options) {
  var attrs;
  var result;
  attrs = options.hash;
  result = [];

  Ember.keys(attrs).forEach(function(property) {
    var translatedValue;
    translatedValue = foreigner.t(attrs[property]);
    return result.push('%@="%@"'.fmt(property, translatedValue));
  });

  return new Ember.Handlebars.SafeString(result.join(' '));
}