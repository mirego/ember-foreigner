// jshint node:true

var version = require('./package.json').version;

var moduleFilter = require('broccoli-dist-es6-module');
var replace = require('broccoli-replace');

var version = replace('lib', {
  files: ['main.js'],
  patterns: [
    {match: 'VERSION', replacement: version}
  ]
});

var modules = moduleFilter(version, {
  global: 'EmberForeigner',
  packageName: 'ember-foreigner',
  main: 'main',
  shim: {
    'ember': 'Ember'
  }
});

module.exports = modules;
