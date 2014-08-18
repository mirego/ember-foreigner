!function(e){if("object"==typeof exports)module.exports=e();else if("function"==typeof define&&define.amd)define(e);else{var f;"undefined"!=typeof window?f=window:"undefined"!=typeof global?f=global:"undefined"!=typeof self&&(f=self),f.EmberForeigner=e()}}(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(_dereq_,module,exports){
"use strict";
var Ember = window.Ember["default"] || window.Ember;

var translationMissing = function(keyPath) {
  return 'translation missing: ' + foreigner.locale + '.' + keyPath;
};

exports["default"] = function(undef, options) {
  var key = options.data.properties[0];
  var attrs = options.hash;
  return new Ember.Handlebars.SafeString(foreigner.t(key, attrs) || translationMissing(key));
}
},{}],2:[function(_dereq_,module,exports){
"use strict";
var Ember = window.Ember["default"] || window.Ember;

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
},{}],3:[function(_dereq_,module,exports){
"use strict";
var Ember = window.Ember["default"] || window.Ember;
var t = _dereq_("./helpers/t")["default"] || _dereq_("./helpers/t");
var translateAttr = _dereq_("./helpers/translate-attr")["default"] || _dereq_("./helpers/translate-attr");

Ember.Application.initializer({
  name: 'ember-foreigner',
  initialize: function(container) {
    Ember.Handlebars.registerBoundHelper('t', t);
    Ember.Handlebars.registerHelper('translate-attr', translateAttr);
  }
});
},{"./helpers/t":1,"./helpers/translate-attr":2}]},{},[3])
(3)
});