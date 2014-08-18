define(
  ["ember","./helpers/t","./helpers/translate-attr"],
  function(__dependency1__, __dependency2__, __dependency3__) {
    "use strict";
    var Ember = __dependency1__["default"] || __dependency1__;
    var t = __dependency2__["default"] || __dependency2__;
    var translateAttr = __dependency3__["default"] || __dependency3__;

    Ember.Application.initializer({
      name: 'ember-foreigner',
      initialize: function(container) {
        Ember.Handlebars.registerBoundHelper('t', t);
        Ember.Handlebars.registerHelper('translate-attr', translateAttr);
      }
    });
  });