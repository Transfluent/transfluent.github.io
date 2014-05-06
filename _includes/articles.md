{% for method in site.data.methods %}
{% if method.Name == page.title %}

{% if method.Description %} 
{{ method.Description }}  
{% endif %}

{% if method.Method %}
Method: {{ method.Method }}  
{% endif %}

{% if method.URL %}
URL: [{{ method.URL }}]({{ method.URL }})  
{% endif %}

{% if method.Parameters %}
Parameters: {{ method.Parameters }}  
{% endif %}

{% if method.Returns %}
Returns:   
{% if method.Returns.OK %}
Status OK:  
{% highlight javascript %}
{{ method.Returns.OK }} 
{% endhighlight %}
{% endif %}
{% if method.Returns.Error %}
Status Error:  
{% highlight javascript %}
{{ method.Returns.Error }} 
{% endhighlight %}
{% endif %}
{% if method.Returns.Other %}
> {{ method.Returns.Other }}  
{% endif %} 
{% endif %}

{% if method.CurlTest %}
Test with curl:  
{% highlight text only %}
{{ method.CurlTest }}  
{% endhighlight %}
{% endif %} 
{% endif %}
{% endfor %}