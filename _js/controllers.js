'use strict';

/* Controllers */

angular.module('transfluentAPI.controllers', [])
        .controller('servicesCtrl', ['$scope', '$http', function($scope, $http) {
            $http.get('/json/services-methods.json').success(function(data) {
              $scope.navs = data;
            })

          }])
        .controller('securityCtrl', ['$scope', '$http', function($scope, $http) {
            $http.get('/json/security-methods.json').success(function(data) {
              $scope.navs = data;
            })

          }])
        .controller('fileCtrl', ['$scope', '$http', function($scope, $http) {
            $http.get('/json/file-methods.json').success(function(data) {
              $scope.navs = data;
            })

          }])
        .controller('languagesCtrl', ['$scope', '$http', function($scope, $http) {
            $http.get('/json/languages-methods.json').success(function(data) {
              $scope.navs = data;
            })

          }])
        .controller('textCtrl', ['$scope', '$http', function($scope, $http) {
            $http.get('/json/text-methods.json').success(function(data) {
              $scope.navs = data;
            })
          }])
        .controller('teamCtrl', ['$scope', '$http', function($scope, $http) {
            $http.get('/json/team.json').success(function(data) {
              $scope.team = data;
            })
          }]);