{% highlight php %}
<?php
require "BackendClient.php";

use Transfluent\BackendClient as Transfluent;

$client = new Transfluent('example@example.org', 'my-password');

try {
    $languages = $client->Languages();
}
catch (Exception $e) {
    error_log($e->getMessage());
    exit;
}
/**
 * $languages = array("1" => array("name" => "English","code" => "en-gb","id" => 1), .....
 * */
echo "Language id #1 is " . $languages[0][1]['name'] . PHP_EOL;

{% endhighlight %}