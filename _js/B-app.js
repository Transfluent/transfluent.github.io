'use strict';

angular.module('transfluentAPI', [
    'transfluentAPI.controllers',
    'transfluentAPI.filters',
    'pascalprecht.translate',
    'ngCookies'
])
.config(function($interpolateProvider, $translateProvider) {
    $interpolateProvider.startSymbol('{[').endSymbol(']}');

    $translateProvider.translations('en', {
        "Japanese": "Japanese",
        "English": "English",
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
        "Callbacks": "Callbacks",
        "home-main-copy": "Transfluent is the only translation provider to scale from 1 word into millions of words, yet providing excellent quality and having ability to translate into numerous of languages with very little effort from the customer.",
        "home-main-beef": "The key to fulfill this promise is our innovative use of technology in the translation process. Our API is in the core enabling all this. In this documentation you will find detailed information of our API and description how to the translation process works.",
        "home-main-get-started": "All of our implementations are built on our API. The translation process over our API is straight forward and simple: authenticate, submit content, place the order and receive the translation (via an API call or by receiving a callback).",
        "home-main-user-accounts-title": "User accounts",
        "home-main-user-accounts-body": "To get going, you will need a Transfluent user account. Either <a href=\"https://www.transfluent.com/en/sign-up/\" target=\"_blank\">create a new user account</a> by yourself or ask your company's account owner to create one for you."
    });
    $translateProvider.translations('ja', {
        "Japanese": "Japanese",
        "English": "English",
        "Search the documentation": "ドキュメンテーションを検索",
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
        "Callbacks": "コールバック",
        "home-main-copy": "Transfluentは、1単語から数百万単語まで、お客様にほとんど負担をかけずに優れた品質と数多くの言語への翻訳を可能にする唯一の翻訳業者です。",
        "home-main-beef": "これを実現するキーポイントは、翻訳過程における当社の革新的な技術の利用方法です。これはAPIを核とすることで実現しています。この資料は、当社のAPIおよび翻訳過程がどう行われるかに関する詳細な情報 をお届けします。",
        "home-main-get-started": "当社の実装は全て当社API上に構築されています。当社APIにおける翻訳過程は分かりやすくシンプルです―認証、翻訳内容を送信、発注、翻訳結果の受け取り（APIコールあるいはコールバックの受け取りによる）、これだけです。",
        "home-main-user-accounts-title": "ユーザーアカウント",
        "home-main-user-accounts-body": "利用には、Transfluentのユーザーアカウントが必要になります。新しいユーザーアカウントをご自身で作成するか、御社のアカウント所有者に作成を依頼してください。"
    });
    $translateProvider.preferredLanguage('en');
    $translateProvider.useCookieStorage();
})
.controller('LanguageSelector', function ($scope, $translate) {
    $scope.ChangeLanguage = function (key) {
        $translate.use(key);
    };
});
