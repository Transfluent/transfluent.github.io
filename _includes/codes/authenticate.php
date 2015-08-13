{% highlight php %}
<?php
require "BackendClient.php";

use Transfluent\BackendClient\BackendClient as Transfluent;

$client = new Transfluent('example@example.org', 'my-password');
// Now once you call some method, the TF client will automatically authenticate

{% endhighlight %}