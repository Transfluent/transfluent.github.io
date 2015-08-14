{% highlight php %}
<?php
require "BackendClient.php";

use Transfluent\BackendClient as Transfluent;

$client = new Transfluent('example@example.org', 'my-password');
$languages = $client->Languages(); // This calls v2/languages method which has a bit different payload than the one described above
var_dump($languages);

// Sample Output
/*
array(112) {
    [0] =>
  array(1) {
        [1] =>
    array(4) {
            'name' =>
      string(23) "English (Great Britain)"
      'code' =>
      string(5) "en-gb"
      'id' =>
      int(1)
      'dir' =>
      string(3) "ltr" // Writing direction: LTR = Left to Right, RTL = Right to Left
    }
  }
  [1] =>
  array(1) {
        [2] =>
    array(4) {
            'name' =>
      string(15) "French (France)"
      'code' =>
      string(5) "fr-fr"
      'id' =>
      int(2)
      'dir' =>
      string(3) "ltr"
    }
  }
  ...
*/
 

{% endhighlight %}