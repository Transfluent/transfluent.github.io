'use strict';

/* Filters */

angular.module('transfluentAPI.filters', [])
  .filter('linebreak', function() {
    return function(text) {
        return text.replace(/\n/g, '<br/>');
    }
});

//angular.module('myApp.filters', []).
//  filter('interpolate', ['version', function(version) {
//    return function(text) {
//      return String(text).replace(/\%VERSION\%/mg, version);
//    };
//  }]);