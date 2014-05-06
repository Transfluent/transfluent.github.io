---
layout: api
title: Authenticate
section: api/security/authenticate
---

Retrieve authentication token by calling this method. The token is valid until your password changes. If you save the token locally, please store it securely to keep it secret.

Method: GET  
URL: https://transfluent.com/v2/authenticate/ ( HTTPS only)  
Parameters: email, password  
Returns:  

{% highlight javascript %}

  {"status":"OK","response":{"token":"ABABABABABABABABABABABABABABABABABABABABABABABABABABABABABABABABABA...", "expires":"On password change"}}  
  {"status":"ERROR","error":{"type":"EBackendSecurityViolation","message":"Authentication failed!"},"response":"Login failed. Please try again."} 
 
{% endhighlight %}

Test with curl: 
 
{% highlight text only %}
  #> curl -d 'email=user@example.org&password=your-password' https://transfluent.com/v2/authenticate/  
{% endhighlight %}