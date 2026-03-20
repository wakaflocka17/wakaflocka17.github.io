---
layout: default
title: Publications
permalink: /publications/
---

<h2 style="margin: 60px 0px -15px;">Publications 
  <span style="font-size:15px;">[</span><a href="https://scholar.google.com/citations?user=3vvc7RAAAAAJ" target="_blank" style="font-size:15px;">Google Scholar</a><span style="font-size:15px;">]</span>
</h2>

<div class="publications">
<ol class="bibliography">

{% for pub in site.data.google_scholar.publications %}
<li>
  <div class="pub-row">
    <div class="col-sm-3 abbr" style="position: relative;padding-right: 15px;padding-left: 15px;">
      <img src="../assets/img/paper_teaser.png" class="teaser img-fluid z-depth-1" style="width:100px;">
      <abbr class="badge">{{ pub.year }}</abbr>
    </div>
    <div class="col-sm-9" style="position: relative;padding-right: 15px;padding-left: 20px;">
      <div class="title"><a href="{{ pub.url_scholar }}">{{ pub.title }}</a></div>
      <div class="author">{{ pub.authors }}</div>
      <div class="periodical"><em>{{ pub.venue }}</em></div>
      <div class="links">
        <a href="{{ pub.url_scholar }}" class="btn btn-sm z-depth-0" role="button" target="_blank" style="font-size:12px;">Scholar</a>
        <span class='show_paper_citations' data='{{ pub.id }}'></span>
      </div>
    </div>
  </div>
</li>
<br />
{% endfor %}

</ol>
</div>