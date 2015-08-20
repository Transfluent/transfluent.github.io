'use strict';

angular.module('transfluentAPI', [
    'transfluentAPI.controllers',
    'transfluentAPI.filters',
    'pascalprecht.translate'
])
.config(function($interpolateProvider, $translateProvider) {
    $interpolateProvider.startSymbol('{[').endSymbol(']}');

    $translateProvider.translations('en', {
        "Search the documentation": "Search the documentation",
        "Get started": 'Get started',
        "Authentication": "Authentication",
        "Retrieve a token": "Retrieve a token",
        "Languages": "Languages",
        "List languages&pairs": "List languages&pairs",
        "Text&HTML": "Text&HTML",
        "Text": "Text",
        "TextStatus": "TextStatus",
        "Texts": "Texts",
        "TextsTranslate": "TextsTranslate",
        "Resource files": "Resource files",
        "FileRead": "FileRead",
        "FileSave": "FileSave",
        "FileStatus": "FileStatus",
        "FileTranslate": "FileTranslate",
        "Development": "Development",
        "Testing": "Testing",
        "Callbacks": "Callbacks"
    });
    $translateProvider.translations('ja', {
        "Search the documentation": "Search the documentation",
        "Get started": 'はじめに',
        "Authentication": "認証",
        "Retrieve a token": "トークンの取得",
        "Languages": "言語",
        "List languages&pairs": "言語＆組み合わせのリスト",
        "Text&HTML": "テキスト＆HTML",
        "Text": "テキスト",
        "TextStatus": "テキストステータス",
        "Texts": "テキスト",
        "TextsTranslate": "テキスト翻訳",
        "Resource files": "リソースファイル",
        "FileRead": "ファイル読み込み",
        "FileSave": "ファイル保存",
        "FileStatus": "ファイルステータス",
        "FileTranslate": "ファイル翻訳",
        "Development": "開発",
        "Testing": "テスト",
        "Callbacks": "コールバック"
    });
    $translateProvider.preferredLanguage('en');
})
.controller('LanguageSelector', function ($scope, $translate) {
    $scope.ChangeLanguage = function (key) {
        $translate.use(key);
    };
});
