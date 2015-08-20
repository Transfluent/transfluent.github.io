'use strict';

angular.module('transfluentAPI', [
    'transfluentAPI.controllers',
    'transfluentAPI.filters',
    'pascalprecht.translate'
])
.config(function($interpolateProvider, $translateProvider) {
    $interpolateProvider.startSymbol('{[').endSymbol(']}');

    $translateProvider.translations('en', {
        "Get started": 'Get started'
    });
    $translateProvider.translations('ja', {
        "Get started": 'はじめに'
    });
    $translateProvider.preferredLanguage('en');
})
.controller('LanguageSelector', function ($scope, $translate) {
    $scope.ChangeLanguage = function (key) {
        $translate.use(key);
    };
});
