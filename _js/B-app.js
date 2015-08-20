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
        "home-main-use-cases-third": "<strong>Translation <a href=\"https://www.transfluent.com/translate/\" target=\"_blank\">Widget</a>:</strong> ad-hoc translation needs, delivery by email. Text or files. <a href=\"https://transfluent.partners/integrate/\" target=\"_blank\">Embedded version</a> available for intranet.",
        "home-main-process-title": "Translation process example",
        "home-main-process-phase-1-title": "Setting up phase",
        "home-main-process-phase-2-title": "Continuous translation phase",
        "home-main-process-phase-1-step-1": "<strong>Authenticate:</strong> Retrieve a token from the API and store it locally",
        "home-main-process-phase-1-step-2": "<strong>Retrieve list of languages:</strong> Retrieve list of language names&codes and supported pairs from the API. It is recommended to refresh the listing every now and then as our list of languages and supported pairs increases often.",
        "home-main-process-phase-2-step-1": "<strong>Save</strong> new content to the API by calling /v2/text/ or /v2/file/save/",
        "home-main-process-phase-2-step-2": "<strong>Order</strong> translations by calling /v2/texts/translate/ or /v2/file/translate/",
        "home-main-process-phase-2-step-3": "<strong>Receive a callback</strong> and handle completed translations on your end. Alternatively you can poll /v2/text/status/ or /v2/file/status/ to see if the translations have been completed.",
        "home-main-process-phase-2-step-4": "If you did not process the callback, you can <strong>retrieve the translations</strong> by calling /v2/text/ or /v2/file/read/.",
        "home-main-process-phase-2-step-5": "<strong>Now you are done.</strong> To translate more, go to first step of this phase.",
        "home-main-tips-title": "Please note",
        "home-main-tips-body": "We would like to remind you of few important points that might cause issues later on if not addressed early on.",
        "home-main-tips-1": "<strong>Charset encoding.</strong> We always provide UTF-8 or UTF-16 encoded content. We highly recommend to use UTF-8.",
        "home-main-tips-2": "<strong>Writing direction.</strong> Some languages are written from right to left, e.g. Arabic.",
        "home-main-tips-3": "<strong>Plurals.</strong> Some languages have more plural forms than two.",
        "home-main-tips-4": "<strong>Space.</strong> Some languages need more space in length on a screen and also in bytes on a storage device. This is utmost important if your translation has either limited storage length or if the text must fit on screen. We provide <a href=\"https://www.transfluent.com/en/appstore-description-estimator/\" target=\"_blank\">a tool</a> to estimate translation size for AppStore descriptions, it can be used for other estimation purposes as well.",
        "home-main-tips-5": "<strong>Tags/placeholders.</strong> Instead of combining strings (e.g. &quot;Hello &quot; + name), prefer using tags and placeholders (e.g. &quot; Hello [name]&quot;). That is because some language have different order of words and therefore combining strings might be problematic. Our translation system supports and our translators are familiar with the most common tags for each resource type but if you are translating plain text, it might be worthwhile to mention about your tags/placeholders in the translator instructions.",
        "home-main-tips-6": "<strong>Tone&amp;context.</strong> Please provide as accurate instructions and supporting context as you can, it will help the translators to do a better job.",
        "home-main-tips-7": "<strong>Hardcoded content.</strong> To fully localize a website or a game, you might encounter issues with some content being &quot;hardcoded&quot; in the source language. This is usually the case with images and strings that are not passed through the localization system. To identify these, you can use our Pseudo language as target language and then see if all content gets reversed or not.",
        "authentication-json-note": "Please note that you need to pass parameters as a JSON object to the API. Check the cURL example below for clarification.",
        "curl-example-title": "cURL Example",
        "php-example-title": "PHP Example",
        "api-Authenticate-desc": "To call any methods requiring authentication, you need to retrieve an authentication token first. The token is valid until your password changes. <strong>If you store the token between sessions, please store it securely and keep it secret!</strong>",
        "api-method": "Method",
        "api-url": "URL",
        "api-parameters": "Parameters",
        "authentication-curl-ok-example": "Example of a successful authentication response (HTTP200, <code>Content-Type: application/json</code>):",
        "authentication-curl-fail-example": "Example of a failed authentication response (HTTP500, <code>Content-Type: application/json</code>):",
        "api-Languages-desc": "Retrieve list of language names and supported language pairs on each translator level.",
        "languages-curl-response-example": "Example of a response (HTTP200, <code>Content-Type: application/json</code>):",
        "api-Text-desc": "Text: either source text to translate or previously made translation you want to save into our system. May contain HTML. Please use UTF-8.",
        "curl-example-get-text-title": "cURL Example to retrieve a text",
        "curl-successful-response": "Successful response (HTTP200, <code>Content-Type: application/json</code>):",
        "curl-example-save-source-text": "cURL Example to save a source text",
        "curl-successfully-saved-text": "Successfully saved (HTTP200, <code>Content-Type: application/json</code>):",
        "curl-failed-to-save-text": "Failed to save (HTTP401, <code>Content-Type: application/json</code>):",
        "api-TextStatus-desc": "Check if text has been translated to specified language.",
        "curl-example-check-text-status-title": "cURL Example to check status"
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
        "home-main-use-cases-third": "<strong><a href=\"https://www.transfluent.com/translate/\" target=\"_blank\">翻訳ウィジェット：</a></strong>その時々の翻訳ニーズに合わせ、Eメールにて納品いたします。テキストあるいはファイルを選べます。イントラネット用に埋め込みバージョンも利用可能です。",
        "home-main-process-title": "翻訳過程の例",
        "home-main-process-phase-1-title": "フェーズの設定",
        "home-main-process-phase-2-title": "翻訳の流れ",
        "home-main-process-phase-1-step-1": "<strong>認証する：</strong>APIからトークンを取得し、ローカル保存します。",
        "home-main-process-phase-1-step-2": "<strong>言語のリストを取得する：</strong>APIから言語名とコード、対応している組み合わせのリストを取得します。当社で対応している言語のリストは頻繁に増えますので、時々リストを更新することをおすすめします。",
        "home-main-process-phase-2-step-1": "▪ /v2/text/あるいは/v2/file/save/を呼び出してAPIに新しいコンテンツを保存します。",
        "home-main-process-phase-2-step-2": "▪ /v2/texts/translate/あるいは/v2/file/translate/を呼び出して翻訳を発注します。",
        "home-main-process-phase-2-step-3": "▪ コールバックを受け取った後、完成した翻訳をお客様側で処理できます。もう一つの方法としては、/v2/text/status/ あるいは/v2/file/status/を呼び出して、翻訳が完了されたかどうかを確認することもできます。",
        "home-main-process-phase-2-step-4": "▪ コールバックの処理を行わなかった場合は、/v2/text/あるいは/v2/file/read/を呼び出して翻訳を受け取ることができます。",
        "home-main-process-phase-2-step-5": "▪ これで完了です。さらに翻訳を行う場合は、この流れの一番初めの段階に戻ってください。",
        "home-main-tips-title": "注意",
        "home-main-tips-body": "早い段階で処理しておかなければ後になって問題となるかも知れない、いくつかの重要なポイントについて触れておきたいと思います。",
        "home-main-tips-1": "<strong>Charsetエンコーディング：</strong>当社では常にUTF-8あるいはUTF-16にエンコードされたコンテンツを提供しています。UTF-8を使用することを強く推奨します。",
        "home-main-tips-2": "<strong>記述方向：</strong>アラブ語など、一部の言語は右から左に記述されます。",
        "home-main-tips-3": "<strong>複数形：</strong>一部の言語は、2つ以上の複数形を有しています。",
        "home-main-tips-4": "<strong>スペース：</strong>言語によっては、スクリーン上でのスペースや保存デバイス上でのバイト数を、他の言語よりも要するものがあります。これは翻訳の保存容量が限られている場合、あるいは文章をスクリーン上に収めなければならない場合などに非常に重要になります。当社ではAppStoreの説明用に翻訳サイズを推定するツールを提供しており、他のサイズ推定にも利用することができます。",
        "home-main-tips-5": "<strong>タグ/プレースホルダー：</strong>&quot;Hello &quot; + 名前のように文字列を繋げるのではなく、&quot; Hello [名前]&quot;のようにタグとプレースホルダーを使用することが推奨されます。一部の言語は語順が違うため、文字列を繋げることは問題になりかねません。当社の翻訳システムは各リソースタイプの一般的なタグのほとんどに対応しており、翻訳者もそういったタグについては熟知していますが、プレーンテキストを翻訳する場合は、翻訳者への指示内でタグ/プレースホルダーに関して触れておいた方がいいでしょう",
        "home-main-tips-6": "<strong>トーンとコンテキスト：</strong>翻訳者がよりよい結果を出せるよう、可能な限り細かな指示と参考となるコンテキストを提供してください。",
        "home-main-tips-7": "<strong>ハードコードされたコンテンツ：</strong>ウェブサイトやゲームを完全にローカライズする際に、一部のコンテンツがソース言語においてハードコードされているという問題に直面することがあります。これは多くの場合ローカライゼーションのシステムを通していない画像や文字列が原因です。こういった問題を特定するためには、当社の擬似言語をターゲット言語に設定し、全てのコンテンツが前後逆になっているかどうか確認します。",
        "authentication-json-note": "APIに対しパラメータをJSONオブジェクトとして渡す必要があることにご留意ください。詳しくは下記のcURL例をご参照ください。",
        "curl-example-title": "cURL例",
        "php-example-title": "PHP例",
        "api-Authenticate-desc": "認証が必要になるメソッドを呼び出すにはまず認証トークンを取得する必要があります。トークンはパスワードを変更するまで有効です。<strong>セッションの間にトークンを保存する場合は　安全な場所に保存し、誰にも言わないでください。</strong>",
        "api-method": "メソッド",
        "api-url": "URL",
        "api-parameters": "パラメータ",
        "authentication-curl-ok-example": "認証応答の成功例（ HTTP200, <code>Content-Type: application/json</code>）：",
        "authentication-curl-fail-example": "認証応答の失敗例（HTTP500, <code>Content-Type: application/json</code>）：",
        "api-Languages-desc": "各翻訳者ごとの言語名および対応できる言語組み合わせのリストを取得します。",
        "languages-curl-response-example": "応答例（ HTTP200, <code>Content-Type: application/json</code>）：",
        "api-Text-desc": "Text: either source text to translate or previously made translation you want to save into our system. May contain HTML. Please use UTF-8.",
        "curl-example-get-text-title": "cURL Example to retrieve a text",
        "curl-successful-response": "Successful response (HTTP200, <code>Content-Type: application/json</code>):",
        "curl-example-save-source-text": "ソーステキストを保存する際のcURL例",
        "curl-successfully-saved-text": "Successfully saved (HTTP200, <code>Content-Type: application/json</code>):",
        "curl-failed-to-save-text": "Failed to save (HTTP401, <code>Content-Type: application/json</code>):",
        "api-TextStatus-desc": "テキストが指定した言語に翻訳されているか確認します。",
        "curl-example-check-text-status-title": "ステータスチェックの際のcURL例"
    });
    $translateProvider.preferredLanguage('en');
    $translateProvider.useCookieStorage();
})
.controller('LanguageSelector', function ($scope, $translate) {
    $scope.ChangeLanguage = function (key) {
        $translate.use(key);
    };
});
