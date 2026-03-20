---
layout: page
title: Publications
permalink: /publications/
---

<h2 style="margin: 60px 0px 30px;">Publications <span style="font-size:15px;">[</span><a href="https://scholar.google.com/citations?user=3vvc7RAAAAAJ" target="_blank" style="font-size:15px;">Google Scholar</a><span style="font-size:15px;">]</span></h2>

<div class="publications">
  <ol class="bibliography">

    {% for link in site.data.publications.main %}
    
    <li style="margin-bottom: 40px;">
      
      <div class="pub-row row"> 
        
        <div class="col-sm-3 abbr" style="position: relative; padding-right: 15px; padding-left: 15px;">
          <img src="{{ link.image }}" class="teaser img-fluid z-depth-1" style="width: 100%; height: auto; border-radius: 4px; box-shadow: 0 2px 5px rgba(0,0,0,0.15);">
          <abbr class="badge">{{ link.conference_short }}</abbr>
        </div>
        
        <div class="col-sm-9" style="position: relative; padding-right: 15px; padding-left: 20px;">
          
          <div class="title">
            {% if link.scholar_url != nil and link.scholar_url != "" %}
              <a href="{{ link.scholar_url }}" target="_blank" style="color: inherit; text-decoration: none;">{{ link.title }}</a>
            {% else %}
              {{ link.title }}
            {% endif %}
          </div>
          
          <div class="author">{{ link.authors }}</div>
          <div class="periodical"><em>{{ link.conference }}</em></div>
          
          <div class="links">
            {% if link.pdf != nil and link.pdf != "" %} 
            <a href="{{ link.pdf }}" class="btn btn-sm z-depth-0" role="button" target="_blank" style="font-size:12px;">PDF</a>
            {% endif %}
            
            {% if link.code != nil and link.code != "" %} 
            <a href="{{ link.code }}" class="btn btn-sm z-depth-0" role="button" target="_blank" style="font-size:12px;">Code</a>
            {% endif %}
            
            {% if link.page != nil and link.page != "" %} 
            <a href="{{ link.page }}" class="btn btn-sm z-depth-0" role="button" target="_blank" style="font-size:12px;">Project Page</a>
            {% endif %}
            
            {% if link.data != nil and link.data != "" %} 
            <a href="{{ link.data }}" class="btn btn-sm z-depth-0" role="button" target="_blank" style="font-size:12px;">Dataset</a>
            {% endif %}
            
            {% if link.bibtex != nil and link.bibtex != "" %} 
            <a href="{{ link.bibtex }}" class="btn btn-sm z-depth-0" role="button" target="_blank" style="font-size:12px;">BibTex</a>
            {% endif %}
            
            {% if link.notes != nil and link.notes != "" %} 
            <strong> <i style="color:#e74d3c; font-weight:600">{{ link.notes }}</i></strong>
            {% endif %}
            
            {% if link.others != nil and link.others != "" %} 
            {{ link.others }}
            {% endif %}
          </div>

        </div> </div> </li>
    
    {% endfor %}

  </ol>
</div>