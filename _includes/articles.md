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
Parameters: 
{% for param_names in method.Parameters %}
[{{ param_names }}]()
{% endfor %} 
{% endif %}

{% if method.Returns %}
{% highlight javascript %}
{% cycle 'methods_group': method.Returns.OK, method.Returns.Error, method.Returns.Other %} 
{% endhighlight %}
{% endif %}

{% if method.CurlTest %}
Test with curl:  
{% highlight text only %}
{{ method.CurlTest }}  
{% endhighlight %}
{% endif %} 

{% endif %}

{% endfor %}

