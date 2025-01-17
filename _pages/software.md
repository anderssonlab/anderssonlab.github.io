---
layout: page
title: Software
description: Highlighted GitHub repositories
permalink: /software/
nav: true
nav_order: 7
horizontal: false
---

<div class="repositories d-flex flex-wrap flex-md-row flex-column justify-content-between align-items-center">
  {% for repo in site.data.repositories.github_repos %}
    {% include repository/repo.liquid repository=repo %}
  {% endfor %}
</div>
