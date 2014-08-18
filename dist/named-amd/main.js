define("ember-foreigner/helpers/t",
  ["ember","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var Ember = __dependency1__["default"] || __dependency1__;

    var translationMissing = function(keyPath) {
      return 'translation missing: ' + foreigner.locale + '.' + keyPath;
    };

    __exports__["default"] = function(undef, options) {
      var key = options.data.properties[0];
      var attrs = options.hash;
      return new Ember.Handlebars.SafeString(foreigner.t(key, attrs) || translationMissing(key));
    }
  });
define("ember-foreigner/helpers/translate-attr",
  ["ember","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var Ember = __dependency1__["default"] || __dependency1__;

    __exports__["default"] = function(options) {
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
  });
define("ember-foreigner",
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
define("ember-foreigner/mixins/translateable-attributes",
  ["ember","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var Ember = __dependency1__["default"] || __dependency1__;

    function eachTranslatedAttribute(object, fn) {
      var isTranslatedAttribute = /(.+)Translation$/;
      var isTranslatedAttributeMatch;

      for (var key in object) {
        isTranslatedAttributeMatch = key.match(isTranslatedAttribute);
        if (isTranslatedAttributeMatch) {
          fn.call(object, isTranslatedAttributeMatch[1], foreigner.t(object[key]));
        }
      }
    }

    __exports__["default"] = Ember.Mixin.create({
      didInsertElement: function() {
        var result = this._super.apply(this, arguments);
        eachTranslatedAttribute(this, function(attribute, translation) {
          this.set(attribute, translation);
          this.$().attr(attribute, translation);
        });
        return result;
      }
    });
  });