<h1 id="publications"></h1>

<h2 style="margin: 60px 0px 30px;">Publications <span style="font-size:15px;">[</span><a href="https://scholar.google.com/citations?user=3vvc7RAAAAAJ" target="_blank" style="font-size:15px;">Google Scholar</a><span style="font-size:15px;">]</span></h2>

<div class="publications">
<ol class="bibliography">

{% for link in site.data.publications.main %}

<li style="margin-bottom: 40px;">

<div class="pub-row" style="display: flex; flex-wrap: nowrap; align-items: flex-start; gap: 30px;">
  
  <div class="abbr" style="flex: 0 0 250px; position: relative;">
    <img src="{{ link.image }}" class="teaser img-fluid z-depth-1" style="width: 100%; height: auto; border-radius: 4px; box-shadow: 0 2px 5px rgba(0,0,0,0.15);">
    <abbr class="badge">{{ link.conference_short }}</abbr>
  </div>
  
  <div style="flex: 1;">
      
      <div class="title">
        {% if link.scholar_url and link.scholar_url != "" %}
          <a href="{{ link.scholar_url }}" target="_blank" style="color: inherit; text-decoration: none;">{{ link.title }}</a>
        {% else %}
          {{ link.title }}
        {% endif %}
      </div>
      
      <div class="author" style="margin-top: 5px; margin-bottom: 5px;">{{ link.authors }}</div>
      <div class="periodical"><em>{{ link.conference }}</em></div>
      
    <div class="links">
      {% if link.notes and link.notes != "" %} 
      <strong> <i style="color:#e74d3c; font-weight:600">{{ link.notes }}</i></strong>
      {% endif %}
    </div>
    
  </div>

</div>
</li>

{% endfor %}

</ol>
</div>