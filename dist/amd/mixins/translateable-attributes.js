define(
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