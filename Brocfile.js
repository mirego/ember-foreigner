// jshint node:true

var moduleFilter = require('broccoli-dist-es6-module');

var modules = moduleFilter('lib', {
  global: 'EmberForeigner',
  packageName: 'ember-foreigner',
  main: 'main',
  shim: {
    'ember': 'Ember'
  }
});

module.exports = modules;
