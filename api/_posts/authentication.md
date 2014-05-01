---
layout: default
title: Authentication
category: api
section: api/authentication
tags: 
  - API
  - auth
  - authentication
---

<h3 class='api-title'> Authentication </h3>

<div class='api-body'> 
<p>Some methods are public and available without authentication. Some methods are available on Transfluent.com user session, e.g. CustomerEmail which is designed to serve the backend functionality via javascript to the customers. For developers, the most interesting methods are those which are available via token authentication. You can retrieve a token via Authenticate method.</p>
<p>Retrieve authentication token by calling this method. The token is valid until your password changes. If you save the token locally, please store it securely to keep it secret.</p>
>  Method: GET  
>  URL: https://transfluent.com/v2/authenticate/ ( HTTPS only)  
>  Parameters: email, password  
>  Returns:  
  {% highlight javascript linenos %}
  {"status":"OK","response":{"token":"ABABABABABABABABABABABABABABABABABABABABABABABABABABABABABABABABABA...", "expires":"On password change"}}
    {"status":"ERROR","error":{"type":"EBackendSecurityViolation","message":"Authentication failed!"},"response":"Login failed. Please try again."}  
  {% endhighlight %}
>  Test with curl:  
    {% highlight text only %}
#> curl -d 'email=user@example.org&password=your-password' https://transfluent.com/v2/authenticate/
    {% endhighlight %}
<div>
