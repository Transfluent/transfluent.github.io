{% for method in site.data.methods %}
  {% if method.Name == page.title %}
    
    {% if method.Description %} 
      Description: {{ method.Description }}  
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
          OK: 
          {% highlight javascript %}
            {{ method.Returns.OK }} 
          {% endhighlight %}
        {% endif %}
        {% if method.Returns.Error %}
          Error:
          {% highlight javascript %}
            {{ method.Returns.Error }} 
          {% endhighlight %}
        {% endif %}
    {% endif %}
  {% endif %}
{% endfor %}