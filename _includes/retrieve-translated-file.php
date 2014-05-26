{% highlight php %}
<?php
require "BackendClient.php";

use Transfluent\BackendClient as Transfluent;

$client = new Transfluent('example@example.org', 'my-password');

try {
    $file_content = $client->FileRead('my-project/Localizable.strings', 11);
    // $file_content contains translated Localizable.strings, e.g. you can save it:
    file_put_contents('/home/john/work/my-project/resources/Localizable-Finnish.strings', $file_content);
}
catch (Exception $e) {
    error_log($e->getMessage());
    exit;
}
{% endhighlight %}