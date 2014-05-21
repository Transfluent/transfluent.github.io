'use strict';

angular.module('transfluentAPI', [
  'transfluentAPI.controllers',
  'transfluentAPI.filters'
])
.config(function($interpolateProvider) {
  $interpolateProvider.startSymbol('{[').endSymbol(']}');
});