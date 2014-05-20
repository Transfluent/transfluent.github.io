<?php

$client = new Transfluent\BackendClient('example@example.org', 'my-password');

try {
    $is_translated = $client->IsFileComplete('my-project/Localizable.strings', 11);
    if ($is_translated) {
        echo "File is translated completely." . PHP_EOL;
    }
    else {
        echo "File is not translated (completely). Please call FileStatus to check precise translation progress." . PHP_EOL;
    }
}
catch (Exception $e) {
    error_log($e->getMessage());
    exit;
}