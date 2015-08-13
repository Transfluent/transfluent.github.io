{% highlight php %}
<?php
require "BackendClient.php";

use Transfluent\BackendClient as Transfluent;

$client = new Transfluent('example@example.org', 'my-password');
try {
    $token = $client->GetToken();
    // Safely store $token
} catch (Exception $e) {
    // Handle failures..
}
// Ready to make some API calls!



// Next time initiating the client, you can avoid additional authentication calls by setting the token using SetToken()
$client = new Transfluent();
$client->SetToken($token);
// Ready to make some API calls!

{% endhighlight %}