{% highlight php %}
<?php
require "BackendClient.php";

use Transfluent\BackendClient as Transfluent;

$client = new Transfluent('example@example.org', 'my-password');

try {
    $response = $client->SaveIosStringsFile('my-project/Localizable.strings', 1, '/home/john/work/my-project/resources/Localizable.strings');
    echo "The file contains {$response->word_count} words.";
}
catch (Exception $e) {
    error_log($e->getMessage());
    exit;
}
{% endhighlight %}