# ember-foreigner

[![Bower version](https://badge.fury.io/bo/ember-foreigner.svg)](http://badge.fury.io/bo/ember-foreigner)
[![Code Climate](http://img.shields.io/codeclimate/github/mirego/ember-foreigner.svg)](https://codeclimate.com/github/mirego/ember-foreigner)

`ember-foreigner` is a set of helpers and mixins to interface with the [foreigner.js](https://github.com/mirego/foreigner.js) library in Ember.

## Setup

### With ember-cli

1. Import foreigner and ember-foreigner in your build:

```js
// Brocfile.js
app.import('vendor/foreigner.js/dist/foreigner.js');

app.import('vendor/ember-foreigner/dist/named-amd/main.js', {
  exports: {
    'ember-foreigner': ['default'],
    'ember-foreigner/mixins/translateable-attributes': ['default']
  }
});
```

2. Import the initializer to register ember-foreigner with Ember:

```js
// app.js
import 'ember-foreigner';
```

3. Write a translation file

```js
foreigner.translations.en = {
  hello_world: 'Hello, World'
};
```

4. Set the current locale and include your translation file in your `index.html`

```html
<script>
  window.foreigner.locale = 'en';

  // (Optional) If you’re using Ember-Validations you can alias
  // Ember.i18n to foreigner to have default error messages
  Ember.I18n = foreigner;
</script>

<script src="locales/en.js"></script>
```

## Usage

### Translating text content

```hbs
{{!-- simple translation --}}
<h1>{{t 'hello_world'}}</h1>

{{!-- Bound interpolated values --}}
<p>{{t 'you_have_x_message' messageCountBinding='messages.length'}}</p>
```

### Translating attributes in a view

Say you want to translate the `placeholder` attribute on the `input` helper.

First, you have to include the `translateable-attributes` mixin on the `Ember.TextField` class:

```js
import TranslateableAttributes from 'ember-foreigner/mixins/translateable-attributes';

Ember.TextField.reopen(TranslateableAttributes);
```

And then you can define your placeholder like this:

```hbs
{{input placeholderTranslation='form.input_placeholder'}}
```

### Translate attributes on a plain tag

<a {{translateAttr title='link_title'}}>Link</a>

## Building the library

- Run `npm install -g broccoli-cli` to install Broccoli
- Run `npm install` to install build dependencies
- Run `broccoli build dist`

## License

`ember-foreigner` is © 2014 [Mirego](http://www.mirego.com) and may be freely distributed under the [New BSD license](http://opensource.org/licenses/BSD-3-Clause).
See the [`LICENSE.md`](https://github.com/mirego/ember-foreigner/blob/master/LICENSE.md) file.

## About Mirego

[Mirego](http://mirego.com) is a team of passionate people who believe that work is a place where you can innovate and have fun. We're a team of [talented people](http://life.mirego.com) who imagine and build beautiful Web and mobile applications. We come together to share ideas and [change the world](http://mirego.org).

We also [love open-source software](http://open.mirego.com) and we try to give back to the community as much as we can.
