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
Returns:  
{% for returnings in method.Returns %}

{% if returnings.OK %}

{% for okey in returnings.OK %}
with status OK:  
{% if okey.POST %}
POST  
{% highlight javascript %}
{{ okey.POST }}
{% endhighlight %}
{% endif %}

{% if okey.GET %}
GET  
{% highlight javascript %}
{{ okey.GET }}
{% endhighlight %}
{% endif %}

{% if okey.Default %}
{% highlight javascript %}
{{ okey.Default }}
{% endhighlight %}
{% endif %}
{% endfor %}



{% endif %} 

{% if returnings.Error %}
with status Error:  
{% highlight javascript %}
{{ returnings.Error }}
{% endhighlight %}
{% endif %} 

{% if returnings.Other %}
> {{ returnings.Other }}  
{% endif %} 

{% endfor %}
{% endif %}

{% if method.CurlTest %}
Test with curl:  
{% highlight text only %}
{{ method.CurlTest }}  
{% endhighlight %}
{% endif %} 

{% endif %}