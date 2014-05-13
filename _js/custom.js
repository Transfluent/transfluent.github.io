var app = angular.module('transfluentAPI', []).config(function($interpolateProvider){
        $interpolateProvider.startSymbol('{[').endSymbol(']}');
    }
);
//
//
////var app = angular.module('transfluent-api', []);
//angular.module('transfluentApi', []).config(function($interpolateProvider){
//  $interpolateProvider.startSymbol('[[').endSymbol(']]');
//});



//app.controller('NavCtrl', $scope);
//
//var NavCtrl = function($scope) {
//  $scope.friends = [
//    {name: 'John', age: 25, gender: 'boy'},
//    {name: 'Jessie', age: 30, gender: 'girl'},
//    {name: 'Johanna', age: 28, gender: 'girl'},
//    {name: 'Joy', age: 15, gender: 'girl'},
//    {name: 'Mary', age: 28, gender: 'girl'},
//    {name: 'Peter', age: 95, gender: 'boy'},
//    {name: 'Sebastian', age: 50, gender: 'boy'},
//    {name: 'Erika', age: 27, gender: 'girl'},
//    {name: 'Patrick', age: 40, gender: 'boy'},
//    {name: 'Samantha', age: 60, gender: 'girl'}
//  ];
//};

//var transfluentApi = angular.module('transfluentApi', []).config(function($interpolateProvider) {
//  $interpolateProvider.startSymbol('{[{').endSymbol('}]}');
//}
//);

//
//transfluentApi.controller('NavCtrl', ['$scope', function ($scope) {
//var NavCtrl = function($scope) {
//  $scope.friends = [
//    {name: 'John', age: 25, gender: 'boy'},
//    {name: 'Jessie', age: 30, gender: 'girl'},
//    {name: 'Johanna', age: 28, gender: 'girl'},
//    {name: 'Joy', age: 15, gender: 'girl'},
//    {name: 'Mary', age: 28, gender: 'girl'},
//    {name: 'Peter', age: 95, gender: 'boy'},
//    {name: 'Sebastian', age: 50, gender: 'boy'},
//    {name: 'Erika', age: 27, gender: 'girl'},
//    {name: 'Patrick', age: 40, gender: 'boy'},
//    {name: 'Samantha', age: 60, gender: 'girl'}
//  ];
//};

//var JekyllApp = angular.module('JekyllApp', [], function ($routeProvider, $locationProvider) {
//    $locationProvider.html5Mode(false);
//});
// 
//JekyllApp.filter('highlight', function () {
//    return function (text, filter) {
//        if (filter === '') {
//            return text;
//        }
//        else {
//            return text.replace(new RegExp(filter, 'gi'), '<span class="match">$&</span>');
//        }
//    };
//});


//var customInterpolationApp = angular.module('customInterpolationApp', []);
//
//customInterpolationApp.config(function($interpolateProvider) {
//  $interpolateProvider.startSymbol('{[{');
//  $interpolateProvider.endSymbol('}]}');
//});


//angular.module('transfluent', []).config(function($interpolateProvider){
//        $interpolateProvider.startSymbol('{({').endSymbol('})}');
//    }
//);