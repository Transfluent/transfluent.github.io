---
layout: post
title:  "Transfluent API Documentation"
date:   2014-04-24 08:07:47
categories: jekyll update
tags:
  - API
---

You'll find this post in your `_posts` directory - edit this post and re-build (or run with the `-w` switch) to see your changes!
To add new posts, simply add a file in the `_posts` directory that follows the convention: YYYY-MM-DD-name-of-post.ext.

Code snippets:

{% highlight php %}
<?php
$message = 'Hello from Transfluent';

$hello = function() use ($message){
    return $message;
 };

$hello();

// Prints => Hello From Transfluent
{% endhighlight %}