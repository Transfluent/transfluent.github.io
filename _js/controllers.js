'use strict';

/* Controllers */

angular.module('transfluentAPI.controllers', [])
        .controller('servicesCtrl', ['$scope', '$sce', '$http', function($scope, $sce, $http) {
            $http.get('/json/services-methods.json').success(function(data) {
              $scope.navs = data;
            })

          }])
        .controller('securityCtrl', ['$scope', '$sce', '$http', function($scope, $sce, $http) {
            $http.get('/json/security-methods.json').success(function(data) {
              $scope.navs = data;
            })

          }])
        .controller('fileCtrl', ['$scope', '$sce', '$http', function($scope, $sce, $http) {
            $http.get('/json/file-methods.json').success(function(data) {
              $scope.navs = data;
            })

          }])
        .controller('languagesCtrl', ['$scope', '$sce', '$http', function($scope, $sce, $http) {
            $http.get('/json/languages-methods.json').success(function(data) {
              $scope.navs = data;
            })

          }])
        .controller('textCtrl', ['$scope', '$sce', '$http', function($scope, $sce, $http) {
            $http.get('/json/text-methods.json').success(function(data) {
              $scope.navs = data;
            })
          }]);