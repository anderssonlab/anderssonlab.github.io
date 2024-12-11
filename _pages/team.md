---
title: "Andersson Lab - Team"
layout: gridlay
excerpt: "Andersson Lab: Team members"
sitemap: false
permalink: /team/
---

# Team Members

{% assign number_printed = 0 %}
{% for member in site.data.team_members %}

{% assign even_odd = number_printed | modulo: 2 %}
{% if member.group == 0 %}

{% if even_odd == 0 %}
<div class="row">
{% endif %}

<div class="col-sm-6 clearfix">
  <img src="{{ site.url }}{{ site.baseurl }}/images/teampic/{{ member.photo }}" class="img-responsive" width="25%" style="float: left" />
  <h4><a href="{{ member.url }}" class="off">{{ member.name }}</a></h4>
  <i>{{ member.info }}</i>
</div>

{% assign number_printed = number_printed | plus: 1 %}

{% if even_odd == 1 %}
</div>
{% endif %}

{% endif %}
{% endfor %}

{% assign even_odd = number_printed | modulo: 2 %}
{% if even_odd == 1 %}
</div>
{% endif %}

{% assign number_printed = 0 %}
{% for member in site.data.team_members %}

{% assign even_odd = number_printed | modulo: 2 %}
{% if member.group == 1 %}

{% if even_odd == 0 %}
<div class="row">
{% endif %}

<div class="col-sm-6 clearfix">
  <img src="{{ site.url }}{{ site.baseurl }}/images/teampic/{{ member.photo }}" class="img-responsive" width="25%" style="float: left" />
  <h4><a href="{{ member.url }}" class="off">{{ member.name }}</a></h4>
  <i>{{ member.info }}</i>
</div>

{% assign number_printed = number_printed | plus: 1 %}

{% if even_odd == 1 %}
</div>
{% endif %}

{% endif %}
{% endfor %}

{% assign even_odd = number_printed | modulo: 2 %}
{% if even_odd == 1 %}
</div>
{% endif %}

## Alumni

- Maria Dalby, PhD student 2015-2018. Head of Bioinformatics, Muna Therapeutics.
- Sarah Rennie, Postdoc 2015-2021. Assistant Professor at University of Copenhagen.
- Nicolas Alcaraz, Postdoc 2016-2020. Assistant Professor at University of Copenhagen.
- Stylianos Bakoulis, PhD student 2017-2022. Postdoc at University of Copenhagen.
- Lucas van Duin, PhD student 2018-2022. 
- Carlotta Porcelli, PhD student 2018-2023 (joint with Peter Brodersen). Novo Nordisk.
- Marco Salvatore, Postdoc 2019-2022. Head of Target & Biomarker Discovery, Abzu. 
- Renato Salazar, Postdoc 2022-2023. QIAGEN.