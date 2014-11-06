define(
  ["ember","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var Ember = __dependency1__["default"] || __dependency1__;

    var translationMissing = function(keyPath) {
      return 'translation missing: ' + foreigner.locale + '.' + keyPath;
    };

    __exports__["default"] = function(key, options) {
      var attrs = options.hash;
      return new Ember.Handlebars.SafeString(foreigner.t(key, attrs) || translationMissing(key));
    }
  });