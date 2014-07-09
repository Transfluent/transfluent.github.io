{% highlight php %}
<?php
require "BackendClient.php";

use Transfluent\BackendClient\BackendClient as Transfluent;

$client = new Transfluent('example@example.org', 'my-password');
$languages = $client->Languages();
print_r($languages);

// Sample Output

{% endhighlight %}