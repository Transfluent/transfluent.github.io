{% highlight php %}
<?php
require "BackendClient.php";

use Transfluent\BackendClient\BackendClient as Transfluent;

$client = new Transfluent('example@example.org', 'my-password');
$languages = $client->Languages();
print_r($languages);

// Sample Output


   [70] => Array
        (
            [137] => Array
                (
                    [name] => Uzbek
                    [code] => uz-uz
                    [id] => 137
                )

        )

    [71] => Array
        (
            [138] => Array
                (
                    [name] => Mongolian
                    [code] => mn-mn
                    [id] => 138
                )

        )

    [72] => Array
        (
            [139] => Array
                (
                    [name] => Nepali
                    [code] => ne-np
                    [id] => 139
                )

        )
 

{% endhighlight %}