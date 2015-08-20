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
        "home-main-user-accounts-body": "To get going, you will need a Transfluent user account. Either <a href=\"https://www.transfluent.com/en/sign-up/\" target=\"_blank\">create a new user account</a> by yourself or ask your company's account owner to create one for you.",
        "home-main-development-title": "Development and testing",
        "home-main-development-body": "For development and testing your integration, we provide a <strong>Pseudo language</strong> translation. The language code for Pseudo language is <strong>xx-xx</strong>. Use English (<code>en</code>) as source language and Pseudo language as target language and the order will be processed for free. Instead of actual translation, you will get your source text reversed (e.g. &quot;Hello&quot; -&gt; &quot;olleH&quot;). Placing Pseudo language orders is useful for testing the whole process from end to end and, depending on your use case, possibly also for pinpointing any non-translated parts on your end.",
        "home-main-supported-languages-title": "Supported languages",
        "home-main-supported-languages-body": "<a href=\"https://www.transfluent.com/en/pricing/#supported-language-pairs\">Check supported language pairs</a> from our website or call our API's <strong>languages</strong> method to list languages names and language pairs. The API methods can be called using ready-made clients or command line tools, for example call using <strong>curl</strong>: <code>curl https://transfluent.com/languages/</code> or you can even do it with your browser: <a href=\"https://transfluent.com/languages/\" rel=\"nofollow\" target=\"_blank\">HTTP GET https://transfluent.com/languages/</a>. The output is always <a href=\"https://en.wikipedia.org/wiki/JSON\" target=\"_blank\" rel=\"nofollow\">JSON</a>. As you can see, it is easy to get started with the API.",
        "home-main-payments-title": "Payments",
        "home-main-payments-body": "The easiest way to pay is by credit card. You or your company's account owner can setup a credit card in the <a href=\"https://www.transfluent.com/my-account/#/creditcard\" target=\"_blank\">My Account</a> page. It is recommended to add a backup card so there will not be any interruption in the service if the primary card fails.",
        "home-main-use-cases-title": "Use cases",
        "home-main-use-cases-first": "Plain text and HTML content. Content is stored by key (and group). Our backend keeps track of versions, so unchanged texts will not be re-translated.",
        "home-main-use-cases-second": "Resource files. Usually integrated to the application build process. Our backend keeps track of file versions, so unchanged parts will not be re-translated.",
        "home-main-use-cases-third": "<strong>Translation <a href=\"https://www.transfluent.com/translate/\" target=\"_blank\">Widget</a>:</strong> ad-hoc translation needs, delivery by email. Text or files. <a href=\"https://transfluent.partners/integrate/\" target=\"_blank\">Embedded version</a> available for intranet."
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
        "home-main-user-accounts-body": "利用には、Transfluentのユーザーアカウントが必要になります。新しいユーザーアカウントをご自身で作成するか、御社のアカウント所有者に作成を依頼してください。",
        "home-main-development-title": "開発およびテスト",
        "home-main-development-body": "お客様側の統合を開発およびテストするために、当社では擬似言語翻訳を提供しております。擬似言語の言語コードは<strong>xx-xx</strong>です。ソース言語を英語（<code>en</code>）、ターゲット言語を擬似言語に設定すると、その注文は無料で処理されます。実際の翻訳の代わりに、元の文章は前後逆に変換されます。（例：\"Hello\" → \"olleH\"）　擬似言語翻訳は、利用方法によっては過程の全体を初めから終わりまでテストしたり、また場合によりお客様側の非翻訳部分を特定したりするために役立てることができます。",
        "home-main-supported-languages-title": "対応言語",
        "home-main-supported-languages-body": "対応言語については当社ウェブサイトから確認するか、当社APIの言語メソッドを呼び出して、言語名と言語の組み合わせをリストアップしてください。APIメソッドは、既存のクライアントあるいはコマンドラインツールを使って呼び出せます。例えばcURLを用いるか（<code>curl https://transfluent.com/languages/</code>）、あるいはお客様のブラウザを使うこともできます。（<a href=\"https://transfluent.com/languages/\" rel=\"nofollow\" target=\"_blank\">HTTP GET https://transfluent.com/languages/</a>） 出力は常にJSONとなります。この通り、APIの使用は簡単に始めることができます。",
        "home-main-payments-title": "お支払い",
        "home-main-payments-body": "最も簡単なお支払い方法はクレジットカードです。クレジットカードの登録は、お客様個人あるいは会社のアカウント所有者のマイアカウントページにて行うことができます。もし初めに登録したカードが使えなかった場合にもサービスが中断されないように、予備のカードを追加することをおすすめします。",
        "home-main-use-cases-title": "使用事例",
        "home-main-use-cases-first": "プレーンテキストとHTMLコンテンツ。コンテンツはキー（およびグループ）により保存されます。バージョンの記録は当社バックエンドにより保持されているため、変更のないテキストは再翻訳されません。",
        "home-main-use-cases-second": "リソースファイル。通常はアプリケーションビルドプロセスに統合されています。バージョンの記録は当社バックエンドにより保持されているため、変更のないテキストは再翻訳されません。",
        "home-main-use-cases-third": "<strong><a href=\"https://www.transfluent.com/translate/\" target=\"_blank\">翻訳ウィジェット：</a></strong>その時々の翻訳ニーズに合わせ、Eメールにて納品いたします。テキストあるいはファイルを選べます。イントラネット用に埋め込みバージョンも利用可能です。"
    });
    $translateProvider.preferredLanguage('en');
    $translateProvider.useCookieStorage();
})
.controller('LanguageSelector', function ($scope, $translate) {
    $scope.ChangeLanguage = function (key) {
        $translate.use(key);
    };
});
