'use strict';

angular.module('transfluentAPI', [
  'transfluentAPI.controllers'
])
.config(function($interpolateProvider) {
  $interpolateProvider.startSymbol('{[').endSymbol(']}');
});