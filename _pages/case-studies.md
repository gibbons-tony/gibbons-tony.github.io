---
layout: page
permalink: /case-studies/
title: case studies
description: Real-world impact through technical innovation and strategic thinking
nav: true
nav_order: 2
display_categories: [Professional, Academic]
horizontal: false
---

<!-- _pages/case-studies.md -->
<div class="projects">
{% if site.enable_project_categories and page.display_categories %}
  <!-- Display categorized case studies -->
  {% for category in page.display_categories %}
  <a id="{{ category }}" href=".#{{ category }}">
    <h2 class="category">{{ category }}</h2>
  </a>
  {% assign categorized_casestudies = site.casestudies | where: "category", category %}
  {% assign sorted_casestudies = categorized_casestudies | sort: "importance" %}
  <!-- Generate cards for each case study -->
  {% if page.horizontal %}
  <div class="container">
    <div class="row row-cols-1 row-cols-md-2">
    {% for project in sorted_casestudies %}
      {% include projects_horizontal.liquid %}
    {% endfor %}
    </div>
  </div>
  {% else %}
  <div class="row row-cols-1 row-cols-md-3">
    {% for project in sorted_casestudies %}
      {% include projects.liquid %}
    {% endfor %}
  </div>
  {% endif %}
  {% endfor %}

{% else %}

<!-- Display case studies without categories -->

{% assign sorted_casestudies = site.casestudies | sort: "importance" %}

  <!-- Generate cards for each case study -->

{% if page.horizontal %}

  <div class="container">
    <div class="row row-cols-1 row-cols-md-2">
    {% for project in sorted_casestudies %}
      {% include projects_horizontal.liquid %}
    {% endfor %}
    </div>
  </div>
  {% else %}
  <div class="row row-cols-1 row-cols-md-3">
    {% for project in sorted_casestudies %}
      {% include projects.liquid %}
    {% endfor %}
  </div>
  {% endif %}
{% endif %}
</div>