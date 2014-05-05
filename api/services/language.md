---
layout: api
title: Language
section: api/services/language
---

{% for method in site.data.methods %}
{% if  method.Name == 'Languages' %}
### {{ method.Name }}  
Description: {{ method.Description }}
Method: {{ method.Method }}  
URL: [{{ method.URL }}]({{ method.URL }})  
Parameters: {{ method.Parameters }}  
Returns: 
  {% highlight javascript %}
    {{ method.Returns }} 
  {% endhighlight %}
{% endif %}
{% endfor %}