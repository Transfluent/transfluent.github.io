{% highlight php %}
<?php
require "BackendClient.php";

use Transfluent\BackendClient\BackendClient as Transfluent;

$client = new Transfluent('example@example.org', 'my-password');
try {
    $response = $client->SaveAndroidArraysFile('my-project/Localizable.strings', 1, '/home/john/work/my-project/resources/Localizable.strings');
    echo "The file contains {$response->word_count} words." . PHP_EOL;
    $response = $client->FileTranslate('my-project/Localizable.strings', 1, array(11), 'This is description of My-project etc.', 'http://www.example.org/callback-me.php', BackendClient::LEVEL_PRO_PROOF_READ);
    echo "{$response->word_count} words (for all target languages) were ordered." . PHP_EOL;
}
catch (Exception $e) {
    error_log($e->getMessage());
    exit;
}
{% endhighlight %}