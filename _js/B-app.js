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
        "SDKs": "SDKs",
        "Support": "Support",
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
        "curl-example-check-text-status-title": "cURL Example to check status",
        "curl-example-retrieve-texts-title": "cURL Example to retrieve texts",
        "curl-example-save-texts-title": "cURL Example to save texts",
        "curl-example-save-texts-fail-title": "cURL Example (how not) to save texts",
        "curl-response-save-texts-fail-title": "Failed to save (HTTP400, <code>Content-Type: application/json</code>):",
        "api-TextsTranslate-desc": "By calling this method you can order translations for your text keys. Our system keeps version information about the keys, so only new keys and changed texts will be translated.",
        "curl-example-place-order-title": "cURL Example to place an order",
        "curl-response-place-order-ok-title": "Successfully placed an order (HTTP200, <code>Content-Type: application/json</code>):",
        "curl-response-place-order-failed-title": "Failed to place the order due payment issue (HTTP500, <code>Content-Type: application/json</code>):",
        "order-details-info": "You can check the order details in the <a href=\"https://www.transfluent.com/my-account/\" target=\"_blank\">My Account</a> page by order id (e.g. #332666).",
        "api-FileRead-desc": "Retrieve translated files by calling this method.",
        "api-FileSave-desc": "Save a file and later order translations for it.",
        "api-FileStatus-desc": "You can easily check what is the translation progress of your submitted file.",
        "api-FileTranslate-desc": "Order translations for your files. Please note that previously translated, unchanged items in the files will not be re-translated. All new and changed items will be translated.",
        "curl-example-file-get-title": "cURL Example to retrieve a file",
        "curl-response-file-get-ok-title": "Successfully retrieved file (HTTP200, <code>Content-Description: File Transfer; Content-Disposition: attachment; filename=\"test_en-gb.js\"</code>):",
        "file-get-response-type-notice": "Attention! When the request is successful, this method sends the file content, instead of returning a JSON response. The method will set <code>Content-Disposition: attachment; filename=..</code> HTTP header and suggest your client to initiate a file download.",
        "curl-response-file-get-fail-title": "Failed to retrieve the file (HTTP400, <code>Content-Type: application/json</code>):",
        "curl-example-file-save-title": "cURL Example to save a file",
        "curl-response-file-save-ok-title": "Successfully saved the file (HTTP200, <code>Content-Type: application/json</code>):",
        "curl-response-file-save-fail-title": "Failed to save the file (HTTP400, <code>Content-Type: application/json</code>):",
        "file-save-failure-explained": "This could happen e.g. if the JSON file is not valid JSON.",
        "curl-example-file-status-title": "cURL Example to check the file status",
        "curl-example-file-translate-quote-title": "cURL Example to get a quote",
        "curl-response-file-translate-quote-title": "Successfully requested a quote (HTTP200, <code>Content-Type: application/json</code>):",
        "curl-example-file-translate-order-title": "cURL Example to order translations for a file",
        "curl-response-file-translate-order-title": "Successfully ordered translations for the file (HTTP200, <code>Content-Type: application/json</code>):",
        "testing-information": "For development and testing your integration, we provide a <strong>Pseudo language</strong> translation. The language code for Pseudo language is <strong>xx-xx</strong>. Use English (<code>en</code>) as source language and Pseudo language as target language and the order will be processed for free. Instead of actual translation, you will get your source text reversed (e.g. &quot;Hello&quot; -&gt; &quot;olleH&quot;). Placing Pseudo language orders is useful for testing the whole process from end to end and, depending on your use case, possibly also for pinpointing any non-translated parts on your end.",
        "sdk-information": "Transfluent provides minimal SDKs for <a href=\"https://github.com/Transfluent/Transfluent-PHP-SDK\" target=\"_blank\">PHP</a> and <a href=\"https://github.com/Transfluent/Transfluent-Ruby\" target=\"_blank\">Ruby</a> which helps you to get started quickly. For Python, there is a third party <a href=\"https://github.com/jpvanhal/python-transfluent\" target=\"_blank\">client library</a> available - thanks to <a href=\"https://github.com/jpvanhal\">Janne Vanhala</a>.",
        "callback-information": "When placing your order, you may provide <code>callback_url</code> parameter. A HTTP POST request with JSON payload will be made to the callback URL once translation is completed.",
        "curl-example-callback-for-text-title": "Example callback for text orders:",
        "curl-example-callback-for-file-title": "Example callback for file orders:",
        "callback-security-title": "Security",
        "callback-security-body": "It is highly recommended to include a secret key to the callback URL. E.g. <code>https://example.org/my-app/transfluent-callback?auth-key=ABC123</code> where <code>auth-key</code> parameter contains your secret that must match before your application starts processing any callback. This provides security against third party providing unauthorized content to your system.",
        "support-title": "Need guidance? Got stuck? Have a question?",
        "support-body": "Drop us a line to <code>coders</code> (the domain is <code>transfluent.com</code>) and we will get back to you.",
        "back-link": "Back to our website",
        "made-with-love": "Made with <i class=\"fa fa-heart\"></i> by <a href=\"https://www.transfluent.com/about/our-company/\">Team Transfluent</a>."
    });
    $translateProvider.translations('ja', {
        "Japanese": "日本語",
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
        "SDKs": "SDKs",
        "Support": "サポート",
        "home-main-copy": "Transfluentは、1単語から数百万単語まで、お客様にほとんど負担をかけずに優れた品質と数多くの言語への翻訳を可能にする唯一の翻訳業者です。",
        "home-main-beef": "これを実現するキーポイントは、翻訳過程における当社の革新的な技術の利用方法です。これはAPIを核とすることで実現しています。この資料は、当社のAPIおよび翻訳過程がどう行われるかに関する詳細な情報 をお届けします。",
        "home-main-get-started": "当社の実装は全て当社API上に構築されています。当社APIにおける翻訳過程は分かりやすくシンプルです―認証、翻訳内容を送信、発注、翻訳結果の受け取り（APIコールあるいはコールバックの受け取りによる）、これだけです。",
        "home-main-user-accounts-title": "ユーザーアカウント",
        "home-main-user-accounts-body": "利用には、Transfluentのユーザーアカウントが必要になります。新しいユーザーアカウントをご自身で作成するか、御社のアカウント所有者に作成を依頼してください。",
        "home-main-development-title": "開発およびテスト",
        "home-main-development-body": "お客様側の統合を開発およびテストするために、当社では擬似言語翻訳を提供しております。擬似言語の言語コードは<strong>xx-xx</strong>です。ソース言語を英語（<code>en</code>）、ターゲット言語を擬似言語に設定すると、その注文は無料で処理されます。実際の翻訳の代わりに、元の文章は前後逆に変換されます。（例：&quot;Hello&quot; → &quot;olleH&quot;）　擬似言語翻訳は、利用方法によっては過程の全体を初めから終わりまでテストしたり、また場合によりお客様側の非翻訳部分を特定したりするために役立てることができます。",
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
        "api-Text-desc": "テキスト: 当システムに保存しようとしている、翻訳するソーステキストまたは以前に行った翻訳のいずれかには、HTMLが含まれている可能性があります。UTF-8をご使用ください。",
        "curl-example-get-text-title": "テキストをリトリーブするためのcURL例",
        "curl-successful-response": "応答がありました (HTTP200, <code>Content-Type: application/json</code>):",
        "curl-example-save-source-text": "ソーステキストを保存する際のcURL例",
        "curl-successfully-saved-text": "保存できました (HTTP200, <code>Content-Type: application/json</code>):",
        "curl-failed-to-save-text": "保存できませんでした (HTTP401, <code>Content-Type: application/json</code>):",
        "api-TextStatus-desc": "テキストが指定した言語に翻訳されているか確認します。",
        "curl-example-check-text-status-title": "ステータスチェックの際のcURL例",
        "curl-example-retrieve-texts-title": "テキストを取得する際のcURL例",
        "curl-example-save-texts-title": "cURLを使ってテキストを保存する例",
        "curl-example-save-texts-fail-title": "cURLを使ってテキストを保存「しない」例",
        "curl-response-save-texts-fail-title": "保存に失敗しました (HTTP400, <code>Content-Type: application/json</code>):",
        "api-TextsTranslate-desc": "このメソッドを呼び出すことにより、テキストキーの翻訳を発注することができます。当社システムがキーのバージョン情報を保存しているため、新しいキーと変更されたテキストのみが翻訳されます。",
        "curl-example-place-order-title": "発注時のcURL例",
        "curl-response-place-order-ok-title": "注文に成功しました (HTTP200, <code>Content-Type: application/json</code>):",
        "curl-response-place-order-failed-title": "決済で問題が発生したため、注文に失敗しました (HTTP500, <code>Content-Type: application/json</code>):",
        "order-details-info": "注文の詳細は<a href=\"https://www.transfluent.com/my-account/\" target=\"_blank\">マイアカウント</a>ページから注文番号を使って確認できます (#332666のような番号)。",
        "api-FileRead-desc": "このメソッドを呼び出すことにより、翻訳済みのファイルを取得することができます。",
        "api-FileSave-desc": "ファイルを保存し、後で翻訳を発注します。",
        "api-FileStatus-desc": "提出したファイルの翻訳状況を簡単にチェックすることができます。",
        "api-FileTranslate-desc": "ファイルの翻訳を発注します。ファイル内の翻訳済み、無変更部分は再翻訳されませんのでご注意ください。新しい、および変更があった部分は翻訳されます。",
        "curl-example-file-get-title": "ファイルを取得する際のcURL例",
        "curl-response-file-get-ok-title": "ファイルの取得に成功しました (HTTP200, <code>Content-Description: File Transfer; Content-Disposition: attachment; filename=\"test_en-gb.js\"</code>):",
        "file-get-response-type-notice": "注意! リクエストに成功した場合、このメソッドはJSONのレスポンスではなくファイルの内容を直接返します。このメソッドは <code>Content-Disposition: attachment; filename=..</code> HTTP ヘッダーをセットして、クライアントに、ファイルのダウンロードを開始するよう促します。",
        "curl-response-file-get-fail-title": "ファイルの取得に失敗しました (HTTP400, <code>Content-Type: application/json</code>):",
        "curl-example-file-save-title": "cURLを使ってファイルを保存する例",
        "curl-response-file-save-ok-title": "ファイルの保存に成功しました (HTTP200, <code>Content-Type: application/json</code>):",
        "curl-response-file-save-fail-title": "ファイルの保存に失敗しました (HTTP400, <code>Content-Type: application/json</code>):",
        "file-save-failure-explained": "JSONファイルが有効なJSONでない時などに起こる可能性があります。",
        "curl-example-file-status-title": "cURLを使ってファイルのステータスを確認する例",
        "curl-example-file-translate-quote-title": "見積りを得る際のcURL例",
        "curl-response-file-translate-quote-title": "見積の依頼に成功しました (HTTP200, <code>Content-Type: application/json</code>):",
        "curl-example-file-translate-order-title": "ファイルの翻訳を発注する際のcURL例",
        "curl-response-file-translate-order-title": "ファイルの翻訳の発注に成功しました (HTTP200, <code>Content-Type: application/json</code>):",
        "testing-information": "お客様側の統合を開発およびテストするために、当社では擬似言語翻訳を提供しております。擬似言語の言語コードは<strong>xx-xx</strong>です。ソース言語を英語（<code>en</code>）、ターゲット言語を擬似言語に設定すると、その注文は無料で処理されます。実際の翻訳の代わりに、元の文章は前後逆に変換されます。（例：&quot;Hello&quot; → &quot;olleH&quot;）擬似言語翻訳は、利用方法によっては過程の全体を初めから終わりまでテストしたり、また場合によりお客様側の非翻訳部分を特定したりするために役立てることができます。",
        "sdk-information": "Transfluentでは<a href=\"https://github.com/Transfluent/Transfluent-PHP-SDK\" target=\"_blank\">PHP</a>と<a href=\"https://github.com/Transfluent/Transfluent-Ruby\" target=\"_blank\">Ruby</a>用にSDKを用意しています。すぐに習得できるよう、必要最小限の機能に止めてあります。 Pythonについては、サードパーティ製の<a href=\"https://github.com/jpvanhal/python-transfluent\" target=\"_blank\">クライアントライブラリー</a>が利用可能です。提供して下さった<a href=\"https://github.com/jpvanhal\">Janne Vanhala</a>に感謝します。",
        "callback-information": "発注時に<code>callback_url</code>パラメータを提供することもできます。翻訳完了後に、コールバックURLに対しJSONペイロードへのHTTP POSTリクエストが実行されます。",
        "curl-example-callback-for-text-title": "テキスト発注の際のコールバック例：",
        "curl-example-callback-for-file-title": "ファイル発注の際のコールバック例：",
        "callback-security-title": "セキュリティ",
        "callback-security-body": "アプリケーションがコールバックの処理を行う前に照合する機密が認証キーに含まれるコールバックURLには、秘密鍵を含むことを強く推奨します。（例：<code>https://example.org/my-app/transfluent-callback?auth-key=ABC123</code> ）　これにより、未認証コンテンツをお客様のシステムに提供する第三者に対するセキュリティを実装します。",
        "support-title": "助けが必要ですか? どこかで引っかかっていますか? 質問がありますか?",
        "support-body": "<code>coders</code> (ドメイン名は<code>transfluent.com</code>です) 宛にご連絡ください。こちらから折り返しご返事します。",
        "back-link": "ウェブサイトへ戻る",
        "made-with-love": "<a href=\"https://www.transfluent.com/about/our-company/\">チームTransfluent</a>が<i class=\"fa fa-heart\"></i>を込めて作成"
    });
    $translateProvider.preferredLanguage('en');
    $translateProvider.useCookieStorage();
})
.controller('LanguageSelector', function ($scope, $translate) {
    $scope.ChangeLanguage = function (key) {
        $translate.use(key);
    };
});
