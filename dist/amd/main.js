define(
  ["ember","./initializer"],
  function(__dependency1__, __dependency2__) {
    "use strict";
    var Ember = __dependency1__["default"] || __dependency1__;
    var initializer = __dependency2__["default"] || __dependency2__;

    Ember.onLoad('Ember.Application', function(Application) {
      Application.initializer(initializer);
    });

    if (Ember.libraries) {
      Ember.libraries.register('ember-foreigner', '0.0.2');
    }
  });