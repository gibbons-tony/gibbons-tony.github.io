---
layout: page
title: technical projects
permalink: /projects/
description: Selected projects across open source, academic research, and professional work.
nav: true
nav_order: 1
display_categories: [open-source, academic]
horizontal: false
---

<style>
  .category {
    color: #e0e0e0 !important;
    font-weight: 700 !important;
    font-size: 1.4rem !important;
    text-transform: capitalize;
    border-bottom: 2px solid rgba(255,255,255,0.15);
    padding-bottom: 8px;
    margin-bottom: 24px !important;
  }
</style>

<!-- pages/projects.md -->
<div class="projects">
{% assign all_projects = site.projects | sort: "importance" %}
  <div class="row row-cols-1 row-cols-md-3">
    {% for project in all_projects %}
      {% include projects.liquid %}
    {% endfor %}
  </div>
</div>
