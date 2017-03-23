var angular = require('angular');
var modulee = require('./module');

var moduleModule = 'moduleModule';

module.exports = moduleModule;

angular
  .module(moduleModule, [])
  .component('modulee', modulee);
